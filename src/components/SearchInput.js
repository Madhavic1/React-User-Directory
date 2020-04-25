import React from 'react'

function SearchInput(props) {
    return (
        <div className="form-group">
        <input
            className="form-control mr-sm-2 ml-5"
            type="text"
            placeholder={props.placeholder}
            aria-label="Search"
            onChange={(e) => props.handleSearchInput(e.target.value) } />
    </div>
    )
}

export default SearchInput
