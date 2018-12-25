import React from 'react';
import '../../../css/blog/tagcard.css';

export default class ArchiveCard extends React.Component {
    onCategory = (category) =>{
        this.props.setCategory(category);
      } 

    render() {
        return (
            <div className="blog-rightsider-archive">
            <a href="javascript:void(0)" onClick={() => this.onCategory('')}>所有文章</a>
          </div>
        );
      }
}