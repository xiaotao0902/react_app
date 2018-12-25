import React from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import ArticleArea from './articlearea';
import RightSider from './rightsider';
import Spinner from "../Spinner";


class BlogIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      loadArticle: false,
      loadCategory: false,
      categoryList: [],
      articlescategory:[]
    }
  }

  componentDidMount() {
    const _this = this;
    axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticleall')
      .then(function (response) {
        _this.setState({
          loadArticle:true,
          articlescategory: response.data
        });
      }).catch(function (error) {
        console.log(error);
        _this.setState({
          error: error
        })
      })

      axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticlecategory')
      .then(function (response) {
        _this.setState({
          loadCategory:true,
          categoryList: response.data
        });
      }).catch(function (error) {
        console.log(error);
        _this.setState({
          error: error
        })
      })

  }

  setCategory = (category) => {
    const _this = this;

    if(category===''){
      axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticleall')
      .then(function (response) {
        _this.setState({
          articlescategory: response.data
        });
      }).catch(function (error) {
        console.log(error);
      })
    }
    else{
        const submitData = {
          category: category
        }
        axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticlebycategory',submitData)
        .then(function (response) {
            _this.setState({
              articlescategory: response.data
            });
          }).catch(function (error) {
            console.log(error);
          })
    }
  }

  render() {
    var loadArticle = this.state.loadArticle;
    var loadCategory = this.state.categoryList;
    if(loadArticle && loadCategory){
      return (
        <div className="main">
          <div className="main-container">
            <Row>
                <Col xs={24} sm={24} md={18}>
                  <ArticleArea articlescategory={this.state.articlescategory}/>
                </Col>
                <Col xs={0} sm={0} md={6}>
                  <RightSider categoryList={this.state.categoryList} setCategory={this.setCategory}/>
                </Col>
            </Row>
          </div>
        </div>
      );
    }else{
      return (
        <div className="main">
          <div className="main-container-spinner">
            <Spinner />
            </div>
        </div>
      )
    }
  }
}

export default BlogIndex;
