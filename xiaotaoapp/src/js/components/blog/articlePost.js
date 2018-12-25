import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createHashHistory  } from 'history'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { Form,Button,Input,Icon,Divider,Select,message,Modal } from 'antd';
import axios from 'axios';
import '../../../css/blog/articlepost.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const FormItem = Form.Item;
const Option = Select.Option;
const history = createHashHistory();
const _success = () => {
  message.success('New article successfully created');
};
const _error = () => {
  message.error('New article failed');
};

class ArticlePost extends Component {

    constructor() {
      super();
      this.state = {
        editorState: EditorState.createEmpty(),
        categoryList:[],
        category:'',
        defaultCategory:'other',
        visible: false,
        token:''
      }
    }
    handleCategoryChange = (value) => {
      this.setState({
        category: this.state.categoryList[value]
      });
    }

    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
            const submitData = {
              title: values.title,
              category: values.category,
              content:  draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            }
            
            axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/addarticle',submitData)
            .then(function (response) {
                _success();
                history.push('/blog');
              }).catch(function (error) {
                console.log(error);
                _error();
              })
            }
      })
  }

  componentDidMount() {
      const _this = this;
      axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticlecategory')
      .then(function (response) {
        _this.setState({
          categoryList: response.data
        });
      }).catch(function (error) {
        console.log(error);
        _this.setState({
          error: error
        })
      })
      this.showModal();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }

  changeEvent = (e) =>{
     this.setState({token: e.target.value})
  }

  afterClose = () => {
    const _this = this;
      axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/gettoken')
      .then(function (response) {
        if(_this.state.token !== response.data.body){
          history.push('/blog');
        }
      }).catch(function (error) {
        history.push('/blog');
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { editorState } = this.state;
    return (
      <div className="main">
        <div className="main-container-post">
          <div className="archive-list-area">
            <div className="archive-post">
            <Modal
                title="Need Your Token"
                centered
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                afterClose={this.afterClose}
              >
                <Input placeholder="Token" vaule={this.state.token} onChange={(e)=>this.changeEvent(e)}/>
              </Modal>
              <Form onSubmit={this.handleSubmit} layout="inline">
                  <Divider>Title</Divider>
                  <FormItem>
                    {getFieldDecorator('title', {
                      rules: [{ required: true, message: 'Please input title!' }],
                    })(
                      <Input prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                      placeholder="Titile"
                      style={{ width: 500 }} />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('category', {
                                  initialValue:'other'})(
                        <Select
                          style={{ width: 120 }}
                          onChange={this.handleCategoryChange}>
                          {eval(this.state.categoryList).map(item => <Option key={item.name}>{item.name}</Option>)}
                        </Select>
                      )}
                  </FormItem>
                  <Divider>Contnent</Divider>
                  <FormItem>
                    {getFieldDecorator('content', {
                      rules: [{ required: true, message: 'Please input content!' }],
                    })(
                      <Editor
                          editorState={editorState}
                          wrapperClassName="wrapper-class"
                          editorClassName="editor-class"
                          onEditorStateChange={this.onEditorStateChange}
                          />
                      )}
                  </FormItem>
                  <FormItem>
                  <div className="archive-button">
                    <Button type="primary" htmlType="submit" >submit</Button>&nbsp;&nbsp;&nbsp;
                    <Link to="/blog"><Button>cancel</Button></Link>
                  </div>
                  </FormItem>
              </Form> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ArticlePost = Form.create()(ArticlePost);

export default ArticlePost;