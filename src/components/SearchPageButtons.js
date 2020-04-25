import React from 'react'

function SearchPageButtons(props) {
    return (
        <button
            className="btn btn-outline-primary ml-2 my-sm-0"
            type="submit"
            onClick={props.onClick}>
            {props.label}
        </button>
    )
}

export default SearchPageButtons
