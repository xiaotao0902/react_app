import React from 'react';
import { Link } from 'react-router-dom';

export default class HomeCard extends React.Component {
  render() {
    const contentList = this.props.cardContent.map(item => <li key={item.id}><Link to={item.url}>{item.title}</Link></li>);
    return (
      <div className="home-card">
        <div className="home-card-name">
          <Link to={this.props.cardUrl}>{this.props.cardName}</Link>
        </div>
        <div className="home-card-content">
          <ul>
            {contentList}
          </ul>
        </div>
      </div>
    );
  }
}