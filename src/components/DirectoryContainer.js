import React, { Component } from 'react';
import Header from "./Header";
import SearchForm from "./SearchForm";

export class DirectoryContainer extends Component {
    state= {
        search : "",
        results:[]
    }
    render() {
        return (
            <div>
                <Header />
                <SearchForm />
            </div>
        )
    }
}

export default DirectoryContainer;
