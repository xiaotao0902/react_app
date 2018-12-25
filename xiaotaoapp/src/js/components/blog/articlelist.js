import React from 'react'
import CategoryItem from './categoryitem';

export default class ArticleList extends React.Component {
  render() {
    var list = [];
    const articlescategory = this.props.articlescategory;
    if(articlescategory!=='null'){
        list = eval(articlescategory).map(item => <CategoryItem key={item.name} name={item.name} title={item.title} time={item.time} />);
    }
  
    return (
      <div className="archive-list">
        {list}
      </div>
    );
  }
}
