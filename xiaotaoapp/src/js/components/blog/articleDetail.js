import React from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import ArticleCommentSubmit from './articleCommentSubmit';
import ArticleCommentList from './articleCommentList';
import Spinner from "../Spinner";
import '../../../css/blog/articleDetail.css';
import * as formatContent from '../../util/formatWbsContent.js';

const getWbContent = (content) => {
    return <div className="blog-article-item-desc" dangerouslySetInnerHTML={formatContent.createMarkup(content)}/>;
  }

export default class ArticleDetail extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isLoad:false,
            articles:{}
        }
      }

    componentDidMount() {
        const _this = this;
        const submitData = {
            name: this.props.match.params.name
          }
        axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticlebyname',submitData)
          .then(function (response) {
            _this.setState({
              articles: response.data,
              isLoad: true
            });
          }).catch(function (error) {
            console.log(error);
            _this.setState({
              error: error
            })
          })
      }

    render() {
        let isLoad = this.state.isLoad;
        if(isLoad){
            return (
            <div className="main">
                <div className="main-container-post">
                <div className="archive-list-area">
                    <div className="archive-post">
                        <div className="blog-article-item">
                            <div className="blog-articleDetail-item-title">{eval(this.state.articles)[0].title}</div>
                            <div className="blog-articleDetail-item-time"><Icon type="calendar" /> 
                                {eval(this.state.articles)[0].time}
                            </div>
                                {getWbContent(eval(this.state.articles)[0].content)}
                        </div>
                        <ArticleCommentList name={eval(this.state.articles)[0].name}> </ArticleCommentList>
                        <ArticleCommentSubmit name={eval(this.state.articles)[0].name}></ArticleCommentSubmit>
                    </div>
                </div>
                </div>
            </div>
            );
        }
    
        else{
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

