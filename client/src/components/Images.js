import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Images extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=599a090fac7d4698901471c3edff281c')
            .then(res => {
                this.setState({ articles: res.data.articles });
                console.log(this.state)
            })

    }

    render() {
        return (
            <div className="container">
                {this.state.articles.map(article => {
                    return <div>{article.description}
                    <img src={article.urlToImage}></img>
                    
                    </div>
                })}
            </div>

        );
    }
}

export default Images;