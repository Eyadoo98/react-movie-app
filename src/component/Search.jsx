import React from 'react'

const Search = (props) => {
    return (
       <div className="search">
            <div>
                <img src="../../public/images/search.svg" alt="Search"/>
                <input type="text"
                       placeholder="Search through thousand of movies"
                       value={props.search}
                       onChange={(e) => props.setSearchTerm(e.target.value)}
                />
            </div>
       </div>

    )
}
export default Search
