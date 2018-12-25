import React from 'react';
import { Route } from 'react-router-dom';
import BlogIndex from '../components/blog/blogIndex';
import ArticlePost from '../components/blog/articlePost';
import ArticleDetail from '../components/blog/articleDetail';

export default class Blog extends React.Component {

  render() {
    return (
      <div >
        <Route exact path={`${this.props.match.url}/`} component={BlogIndex} />
        <Route exact path={`${this.props.match.url}/category/:category`} component={BlogIndex} />
        <Route path={`${this.props.match.url}/articlePost`} component={ArticlePost} />
        <Route path={`${this.props.match.url}/articleDetail/:name`} component={ArticleDetail} />
      </div>
    );
  }
}
