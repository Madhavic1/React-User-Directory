import React from 'react'

function SearchFilter(props) {
    return (
        <div className="form-group">
        <div className="input-group">
            <label className="ml-3"> Filter By:</label>
            <select className="ml-2" value="" onChange={(e) => props.handleFilterChange(e.target.value)} >
                <option>Select</option>
                <option value="name">Name</option>
                <option value="email">Email</option>
            </select>
        </div>
    </div> 
    )
}

export default SearchFilter
