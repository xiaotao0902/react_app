import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/blog/archive.css';

export default class CategoryItem extends React.Component {
  render() {
    return (
        <div className="archive-itemlist"><ul><li>
          {this.props.time}<Link to={`/blog/articleDetail/${this.props.name}`}>{this.props.title}</Link> </li></ul>
        </div>
    );
  }
}

