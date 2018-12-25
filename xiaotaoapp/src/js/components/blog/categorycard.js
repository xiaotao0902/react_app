import React from 'react';
import { Icon } from 'antd';

export default class CategoryCard extends React.Component {

  onCategory = (category) =>{
    this.props.setCategory(category);
  } 

  render() {
    var categoryLinkList = [];
    if(this.props.categoryList.length!==0){
        categoryLinkList = eval(this.props.categoryList).map(
        item => <a key={item.name} href="javascript:void(0)" onClick ={()=>this.onCategory(item.name)}>
        <li key={item.name}>{item.name}</li></a>);
    }
    return (
      <div className="rightsider-card">
        <div className="rightsider-card-title"><Icon type="bars" /> 分类</div>
        <div className="rightsider-card-content">
          <ul>
            {categoryLinkList}
          </ul>
        </div>
      </div>
    );
  }
}