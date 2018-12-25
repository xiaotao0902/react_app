import React from 'react';
import '../../../css/home/homebanner.css';

export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-me">
          <div className="home-banner-photo">
            <img src={require('../../../img/main.jpg')} alt="***" />
          </div>
          <div className="home-banner-desc">
            <h3>After climbing a hill, one only finds that there are many more hills to climb.</h3>
            <div className="home-banner-link">
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/xiaotao0902">Github</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" 
                href="https://s3.us-east-2.amazonaws.com/demos319840902/resume/resume_en_zhangtongqian.pdf">Resume(EN)</a>
              </div>
              <div className="link">
                <a target="_blank" rel="noopener noreferrer" 
                href="https://s3.us-east-2.amazonaws.com/demos319840902/resume/resume_cn_zhangtongqian.pdf">Resume(CN)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
