import React from 'react';
import {Comment, Tooltip, Avatar} from 'antd';

export default class ArticleCommentListItem extends React.Component {
  render() {
    return (
        <Comment
          author={<p>{this.props.author}</p>}
          avatar={(
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt={this.props.author}
            />
          )}
          content={(
            <p>{this.props.content}</p>
          )}
          datetime={(
            <Tooltip>
              <span>{this.props.time}</span>
            </Tooltip>
          )}
        />
      );
  }
}

