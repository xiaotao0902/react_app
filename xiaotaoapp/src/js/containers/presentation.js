import React from 'react';
import axios from 'axios';
import PresentationShow from '../components/presentation/presentationShow';
import Spinner from "../components/Spinner";

export default class Presentation extends React.Component {

    constructor() {
        super();
        this.state = {
            load:false,
            presentation:[]
            }
    }

    componentDidMount() {
        const _this = this;
        axios.post('https://2xhclrt4yl.execute-api.us-east-1.amazonaws.com/stage/getpresentationall')
        .then(function (response) {
            _this.setState({
            load:true,
            presentation: response.data
            });
        }).catch(function (error) {
            console.log(error);
            _this.setState({
            error: error
            })
        })
    }

    render() {
        var load = this.state.load;
        if(load){
        return (
            <div className="main">
            <div className="main-container">
                <PresentationShow presentation={this.state.presentation}/>
            </div>
            </div>
        );
        }else{
        return (
            <div className="main">
            <div className="main-container-spinner">
                <Spinner />
                </div>
            </div>
        )
        }
    }
     
}
