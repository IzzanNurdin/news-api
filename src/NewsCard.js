import React, { Component } from 'react';

class NewsCard extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            article: this.props.article
        }
    }
    render() {
        return (
            <div>
                {this.state.article.author}<br/>
            </div>
        )
    }
}

export default NewsCard;