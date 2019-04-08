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
      this.fetchData(this.state.searchVal)
    }

    fetchData(category) {
      fetch("https://newsapi.org/v2/top-headlines?apiKey=d52eed8c1d1d4e89be6e66196a6dea8f&category=" + category + "&country=" + this.state.country)
      .then(res => res.json())
      .then(
        result => {
          this.setState({articles: result.articles});
        },
      )
    }

    handleChange(e) {
      this.setState({searchVal: e.target.value})
      this.fetchData(e.target.value)
    }

    render() {
        return (
        <div>
            <div className="row mt-sm-3">
                <div className="col-sm-6">
                    <h1>HEADLINE NEWS</h1>
                    <p className="text-muted">Powered by <a href="https://newsapi.org">newsapi.org</a></p>
                </div>
                <div className="col-sm-6 select">
                    <select className="form-control" value={this.state.searchVal} onChange={e => this.handleChange(e)}>
                        {this.state.categories.map((value, i) => 
                            <option key={i} value={value}>{value}</option>
                        )}
                    </select>
                    <p className="text-muted text-right mt-2">News in US Country</p>
                </div>
            </div>
            <hr className="mt-0"></hr>
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

