import React from 'react';
import CategoryCard from './categorycard';
import ArchiveCard from './archiveCard';

export default class RightSider extends React.Component {
  render() {
    return (
      <div className="rightsider">
        <ArchiveCard setCategory={this.props.setCategory}/>
        <CategoryCard categoryList={this.props.categoryList} setCategory={this.props.setCategory}/>
      </div>
    );
  }
}

