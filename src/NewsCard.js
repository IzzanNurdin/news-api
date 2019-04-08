import React, { Component } from 'react';
import './NewsCard.css';
import moment from 'moment';

class NewsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            article: this.props.article
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.article !== this.state.article) {
            this.setState({article: nextProps.article})
        }
    }

    render() {
        let author = ''
        let date = Date.parse(this.state.article.publishedAt)
        let momentDate = moment(date).format('D MMMM YYYY, hh:mm')
        if(this.state.article.author !== null) {
            author = <span>By <i>{this.state.article.author}, </i></span>;
        }
        return (
            <div className="card">
                <a href={this.state.article.url}><img src={this.state.article.urlToImage} className="card-img-top" alt="display image" /></a>
                <div className="card-body">
                    <h6 className="card-title">{this.state.article.title}</h6>
                    <p className="card-text">
                        {this.state.article.description} <a href={this.state.article.url}>(See More...)</a>
                    </p>
                    <div className="card-footer text-right">
                        {author} <i>{momentDate}</i>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard;