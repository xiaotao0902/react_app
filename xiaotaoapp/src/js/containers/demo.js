import React from 'react';
import DemoCard from '../components/demo/democard';
import '../../css/demo/demo.css';

export default class Blog extends React.Component {

  render() {
    return (
      <div className="main"  >
        <div className="main-container demo-container">
          <DemoCard name="中八台球平台" demo="https://s3.us-east-2.amazonaws.com/demos319840902/BILLIARD+BALL/billiard+ball.mp4" 
          src="https://github.com/xiaotao0902/" 
          video="https://s3.us-east-2.amazonaws.com/demos319840902/BILLIARD+BALL/billiard+ball.mp4" />
        </div>
      </div>
    );
  }
}
