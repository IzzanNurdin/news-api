import React, { Component } from 'react';
import './NewsCard.css';
import moment from 'moment';
import {Modal, Button} from 'react-bootstrap';

class NewsCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            article: this.props.article,
            isOpen: false,
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ isOpen: false });
    }

    handleShow() {
        this.setState({ isOpen: true });
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
            <>
                <div className="card">
                    <div onClick={this.handleShow}><img src={this.state.article.urlToImage} className="card-img-top" alt="display image" /></div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.article.title}</h5>
                        <p className="card-text">
                            {this.state.article.description} <a href={this.state.article.url} target="_blank">(See More...)</a>
                        </p>
                        <div className="card-footer text-right">
                            {author} <i>{momentDate}</i>
                        </div>
                    </div>
                </div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.isOpen}
                    onHide={this.handleClose}
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                    <img src={this.state.article.urlToImage} className="card-img-top" alt="display image" />
                    <h4 className="mt-3">{this.state.article.title}</h4>
                    <p className="text-muted">{author} {momentDate}</p>
                    <p>
                        {this.state.article.content} <a href={this.state.article.url} target="_blank">(See More...)</a>
                    </p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default NewsCard;