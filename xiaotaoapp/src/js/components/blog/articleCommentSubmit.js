import React from 'react';
import { Input,Button,Form,message,Modal } from 'antd';
import { createHashHistory  } from 'history'
import { Link } from 'react-router-dom';
import axios from 'axios';

const { TextArea } = Input;
const FormItem = Form.Item;
const history = createHashHistory();
const _success = () => {
    message.success('New comment successfully submit');
  };
  const _error = () => {
    message.error('New comment failed');
  };

export default class ArticleCommentSubmit extends React.Component {

    constructor() {
        super();
        this.state = {
          sign:''
        }
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
        this.setState({sign: e.target.value})
    }

    afterClose = () => {
        this.props.form.validateFields((err, values) => {
            var name = this.props.name;
            if (!err) {
                const submitData = {
                name: this.props.name,
                comment: values.comment,
                sign: this.state.sign
                }
                console.log(submitData);
                axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/addarticlecomment',submitData)
                .then(function () {
                    _success();
                    history.push('/blog');
                }).catch(function (error) {
                    console.log(error);
                    _error()
                })
                }
            })
      }

    handleSubmit = () => {
        this.showModal();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
            return (
                <div className="article-comment-box">
                <Modal
                    title="Please sign"
                    centered
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    afterClose={this.afterClose}
                    >
                <Input placeholder="Please sign" vaule={this.state.sign} onChange={(e)=>this.changeEvent(e)}/>
              </Modal>
                <Form onSubmit={this.handleSubmit}>
                   <div className="article-comment-box-coment">
                        <FormItem> {getFieldDecorator('comment', {
                            rules: [{ required: true, message: 'Please input comments!' }],
                        })(
                            <TextArea placeholder="comments"  style={{ width: '80%','textAlign': 'center' }}
                             autosize={{ minRows: 2, maxRows: 6 }} />
                        )}
                        </FormItem>
                     </div>
                     
                     <div  className="article-comment-box-button">
                     <Button type="primary" htmlType="submit" >submit</Button>&nbsp;&nbsp;&nbsp;
                    <Link to="/blog"><Button>cancel</Button></Link></div>
                </Form>
                </div>
            );
        }
}
ArticleCommentSubmit = Form.create()(ArticleCommentSubmit);
