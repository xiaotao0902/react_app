import React from 'react';
import axios from 'axios';
import HomeCard from './homecard';
import '../../../css/home/homecard.css';

export default class HomeCardArea extends React.Component {
  constructor() {
    super();
    this.state = {
      articleList: [],
      demoList: [],
      presentationList: [],
    };
  }

  componentDidMount() {
    const _this = this;

    const demoList = [{
      id: 1,
      title: 'BILLIARD BALL',
      url: '/demo'
      }
    ];

    _this.setState({demoList:demoList});

    axios.post('https://z0h6x1r9y5.execute-api.us-east-1.amazonaws.com/stage/getarticleall',)
    .then((response) => {
      const data = eval(response.data);
      const articleList = [];
      for (let item in data){
        if(item > 5){
          break;
        }
        const articleTemp = {};
        articleTemp.title = data[item].title;
        articleTemp.id = data[item].name;
        articleTemp.url = `/blog/articleDetail/${data[item].name}`;
        articleList.push(articleTemp);
      }
      _this.setState({articleList:articleList});
    }).catch(e => console.log(e));


    axios.post('https://2xhclrt4yl.execute-api.us-east-1.amazonaws.com/stage/getpresentationall',)
      .then((response) => {
        const data = eval(response.data);
        const presentationList = [];
        for (let item in data){
          if(item > 5){
            break;
          }
          const presentationTemp = {};
          presentationTemp.title = data[item].name;
          presentationTemp.id = data[item].name;
          presentationTemp.url = "/presentation";
          presentationList.push(presentationTemp);
        }
      _this.setState({presentationList:presentationList});

      }).catch(e => console.log(e));
  }

  render() {
    return (
      <div className="home-card-area">
        <HomeCard key={1} cardId={1} cardUrl="/blog" cardName="Blog" cardContent={this.state.articleList} />
        <HomeCard key={2} cardId={2} cardUrl="/demo" cardName="Demo" cardContent={this.state.demoList} />
        <HomeCard key={3} cardId={3} cardUrl="/presentation" cardName="Presentation" cardContent={this.state.presentationList} />
      </div>
    );
  }
}
