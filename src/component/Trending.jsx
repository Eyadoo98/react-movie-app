import React from 'react'

const Trending = ({ movie, index }) => {
    // console.log(props)
    return (
        <section className="trending">
            <ul>
                <li key={movie.$id}>
                    <p>{index+1}</p>
                    <img src={movie.poster_url} alt={movie.title}/>
                </li>
            </ul>
        </section>
    )
}
export default Trending
