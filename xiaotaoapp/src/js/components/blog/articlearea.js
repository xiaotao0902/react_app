import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import ArticleList from './articlelist';
import '../../../css/blog/articlearea.css';

const ArticleBanner = () => (
  <div className="blog-article-banner">
    <Link to="/blog/articlePost"><Icon type="edit" 
    style={{ fontSize: '25px', width:'50px'}} /></Link>
  </div>
);

export default class ArticleArea extends React.Component {
  render() {
    return (
      <div className="archive-list-area">
        <ArticleBanner setCategory={this.setCategory}/>
        <ArticleList articlescategory={this.props.articlescategory}/>
      </div>
    );
  }
}
