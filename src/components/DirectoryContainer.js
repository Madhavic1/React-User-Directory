import React, { Component } from 'react';
import Header from "./Header";
import SearchForm from "./SearchForm";
import API from "./utils/API";
import RenderResults from "./RenderResults";
import Container from './Container';
import Row from './Row';
import Col from './Col';

export class DirectoryContainer extends Component {
    state = {
        searchValue: "",
        results: [],
        filteredResults: [],
        noResults: false
    }
    componentDidMount() {
        this.searchAPI();
    }

    handleSearchEvent = (selectedFilter, searchValue) => {
        console.log("Selected filter is " + selectedFilter + " and searchValue is " + searchValue);
        this.setState({ searchValue: searchValue });
        var filteredData = (selectedFilter === "name") ?
            this.state.results.filter((result) => (result.name.first.toLowerCase() === searchValue || result.name.last.toLowerCase() === searchValue || (`${result.name.first.toLowerCase()} ${result.name.last.toLowerCase()}`) === searchValue)) :
            this.state.results.filter((result) => result.email.toLowerCase() === searchValue);
        if (filteredData.length === 0) {
            this.setState({ noResults: !this.state.noResults });
        }
        this.setState({ filteredResults: filteredData });
    }

    handleInputChange = event => {
        event.preventDefault();
        console.log("handleInputChange method");
    }
    handleShowAll = () => {
        this.setState({ noResults: false, filteredResults: this.state.results });
    }
    searchAPI = query => {
        API.search()
            .then(res => {
                this.setState({ results: res.data.results });
                return this.setState({ filteredResults: res.data.results });
            })
            .catch(err => console.log(err));
    }
    sortByName = () => {
        var apiResult = this.state.results;
        apiResult.sort(API.compareByName);
        return this.setState({ results: apiResult });
    }
    sortByDOB = () => {
        var apiResult = this.state.results;
        apiResult.sort(API.compareByDOB);
        return this.setState({ results: apiResult });
    }
    render() {
        return (
            <Container fluid="-fluid">
                <Row>
                    <Col size="sm-12">
                <div>
                    <Header />
                    <SearchForm
                        handleSearchEvent={this.handleSearchEvent}
                        handleInputChange={this.handleInputChange}
                        handleShowAll={this.handleShowAll}
                    />
                    <br />
                    {(!this.state.noResults) ? (
                        <RenderResults results={this.state.filteredResults} sortByName={this.sortByName} sortByDOB={this.sortByDOB} />
                    ) : (<h3>No Results Found</h3>)}
                </div>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default DirectoryContainer;
