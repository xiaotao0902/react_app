import React from 'react';
import axios from 'axios';
import CommentListItem from './articleCommentListItem';
  
export default class ArticleCommentList extends React.Component {
    constructor() {
        super();
        this.state = {
            comments:[]
        }
      }

    componentDidMount() {
        const _this = this;
        const submitData = {
            name: this.props.name
          }
        axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticlecomment',submitData)
          .then(function (response) {
            _this.setState({
              comments: response.data
            });
          }).catch(function (error) {
            console.log(error);
          })
      }

      render() {
        var list = [];
        const comments = this.state.comments;
        if(comments!=null){
          list = eval(comments).map(item => <CommentListItem key={item.name} author={item.sign} content={item.comment} time={item.time}/>);
        }
       
        return (
          <div className="archive-list-comment">
            {list}
          </div>
        );
      }
  }