import React from 'react'

export default function SearchForm() {
    return (
        <form className="form-inline">
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">DOB</span>
                    </div>
                    <input type="date" className="form-control" name="from-date"/>
                    <input type="date" className="form-control" name="to-date"/>
                </div>
            </div>

            <div className="form-group">
            <input className="form-control mr-sm-2 ml-5" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </div>
            
        </form>
    );
}
