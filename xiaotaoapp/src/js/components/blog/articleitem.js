import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import * as formatContent from '../../util/formatWbsContent.js';


const getWbContent = (content) => {
  return <div className="blog-article-item-desc" dangerouslySetInnerHTML={formatContent.createMarkup(content)}/>;
}

export default class ArticleItem extends React.Component {
  render() {
    return (
      <div className="blog-article-item">
            <div className="blog-article-item-title">
            <Link to={`/blog/articleDetail/${this.props.name}`}>{this.props.title}</Link>
            </div>
            <div className="blog-article-item-time"><Icon type="calendar" /> {this.props.time}</div>
            {getWbContent(this.props.content)}
      </div>
    );
  }
}

