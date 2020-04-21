import React, { Component } from 'react';
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import RenderResults from "./RenderResults";

export class DirectoryContainer extends Component {
    state= {
        search : "",
        results:[]
    }
    componentDidMount(){
        this.searchAPI();
    }
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handleFormSubmit method");
    }
    handleInputChange = event => {
        event.preventDefault();
        console.log("handleInputChange method");
    }
    searchAPI = query => {
        API.search()
        .then( res =>
            { 
                 console.log(res.data.results);
                 return this.setState( { results: res.data.results} );
            })
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Header />
                <SearchForm 
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <br />
                <RenderResults results={this.state.results} />
            </div>
        )
    }
}

export default DirectoryContainer;
