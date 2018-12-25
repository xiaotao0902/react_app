import React from 'react'
import { List,Avatar  } from 'antd';
import '../../../css/presentation/presentation.css';

export default class PresentationShow extends React.Component {
  render() {
    return (
      <div className="presentation-list">
         <div className="presentation-list-area">
          <div className="presentation-itemlist">
            <List
              itemLayout="horizontal"
              dataSource={eval(this.props.presentation)}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://s3.us-east-2.amazonaws.com/demos319840902/presentation/pdf.png" />}
                    title={<a href={item.url}>{item.name}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
