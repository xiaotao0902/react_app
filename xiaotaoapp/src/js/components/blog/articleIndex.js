import React from 'react';
import ArticleArea from './articlearea';

export default class ArticleIndex extends React.Component {

  render() {
    if(this.props.type ==='article'){
      return (
          <ArticleArea articles={this.props.articles} />
      )
    }
    else{
      <ArticleArea articles={this.props.articlescategory} />
    }
  }
}