import React from 'react'

class SearchForm extends React.Component {
    state = {
        search: "",
        filterState: "",
        serchOn: false
    }

    handleFilterChange = (event) => {
        event.preventDefault();
        this.setState({
            filterState: event.target.value
        });
        // this.displaySelectedFilterForm(this.state.filterState);
    }

    handleSearch = (event) => {
        event.preventDefault();
        let searchVal = this.state.search.trim().toLowerCase();
        console.log(searchVal)
        this.setState({ serchOn: true, search: "" });
        this.props.handleSearchEvent(this.state.filterState,searchVal);
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
                    <div className="form-group">
                        <div className="input-group">
                            <label className="ml-3"> Filter By:</label>
                            <select className="ml-2" value={this.state.filterState} onChange={this.handleFilterChange} >
                                <option>Select</option>
                                <option value="name">Name</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                    </div>
                    {this.state.filterState === "email" &&
                        <div className="form-group">
                            <input
                                className="form-control mr-sm-2 ml-5"
                                type="text"
                                placeholder="Employee email"
                                aria-label="Search"
                                value={this.state.search}
                                onChange={(e) => this.setState({ search: e.target.value })} />
                        </div>
                    }
                    {this.state.filterState === "name" &&
                        <div className="form-group">
                            <input
                                className="form-control mr-sm-2 ml-5"
                                type="text"
                                placeholder="Employee Name"
                                aria-label="Search"
                                value={this.state.search}
                                onChange={(e) => this.setState({ search: e.target.value })} />
                        </div>}
                    {this.state.filterState !== "" &&
                        <button
                            className="btn btn-outline-primary ml-2 my-sm-0"
                            type="submit"
                            onClick={this.handleSearch}>
                            Search
                        </button>}
                    {this.state.serchOn &&
                        <button
                            className="btn btn-outline-primary ml-2 my-sm-0"
                            type="submit"
                            onClick={this.showAll}>
                            Show All
                    </button>}
                </form>
            </div>
        );
    }
}
export default SearchForm;