import React from 'react'
import SearchFilter from './SearchFilter';
import SearchInput from './SearchInput';
import SearchPageButtons from './SearchPageButtons';

class SearchForm extends React.Component {
    state = {
        search: "",
        filterState: "",
        serchOn: false
    }

    handleFilterChange = (filterValue) => {
        this.setState({
            filterState: filterValue
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        let searchVal = this.state.search.trim().toLowerCase();
        console.log(searchVal)
        this.setState({ serchOn: true, search: "" });
        this.props.handleSearchEvent(this.state.filterState,searchVal);
    }
    handleSearchInput = (searchInput) => {
        this.setState({ search: searchInput});
    }

    showAll = (event) => {
        event.preventDefault();
        this.setState({ filterState: "", serchOn:false });
        this.props.handleShowAll();
    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <SearchFilter handleFilterChange={this.handleFilterChange}/>

                    {this.state.filterState === "email" &&
                        <SearchInput placeholder="Employee Email" handleSearchInput={this.handleSearchInput}/> }

                    {this.state.filterState === "name" &&
                        <SearchInput placeholder="Employee Name" handleSearchInput={this.handleSearchInput}/> }

                    {(this.state.filterState !== "") &&
                        <SearchPageButtons onClick={this.handleSearch} label="Search"/> }

                    {this.state.serchOn &&
                    <SearchPageButtons onClick={this.showAll} label="Show All"/> }

                </form>
            </div>
        );
    }
}
export default SearchForm;