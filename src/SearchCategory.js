import React, { Component } from 'react';
import './SearchCategory.css';
import NewsCard from './NewsCard';

class SearchCategory extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                'Business', 
                'Entertainment', 
                'General',
                'Health', 
                'Science', 
                'Sports', 
                'Technology'
            ],
            searchVal: 'Business',
            country: 'us',
            articles: []
        };
    }

    componentDidMount() {
      this.fetchData()
    }

    fetchData() {
      fetch("https://newsapi.org/v2/top-headlines?apiKey=d52eed8c1d1d4e89be6e66196a6dea8f&category=" + this.state.searchVal + "&country=" + this.state.country)
      .then(res => res.json())
      .then(
        result => {
          this.setState({articles: result.articles});
        },
      )
    }

    componentDidUpdate() {
      this.fetchData();
    }

    handleChange(e) {
      this.setState({searchVal: e.target.value})
    }

    render() {
        return (
        <div>
            <div className="row mt-sm-3">
                <div className="col-sm-6">
                    <h1>NEWS API</h1>
                    <hr></hr>
                </div>
                <div className="col-sm-6 select">
                    <select className="form-control" value={this.state.searchVal} onChange={e => this.handleChange(e)}>
                        {this.state.categories.map((value, i) => 
                            <option key={i} value={value}>{value}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="row mt-sm-3">
              {this.state.articles.map((val, i) =>
                  <NewsCard key={i} article={val}/>
                )}          
            </div>
        </div>
        )   
    }
}

export default SearchCategory;

