import React, { Component } from 'react';

class Movie extends Component {
    
    renderGenres = () => this.props.movie.genres.map(genre => <li>{genre}</li>)
    
    render() {
        return (
            <div>
                <p>Title: {this.props.movie.title}</p>
                <p>Run Time: {this.props.movie.time}</p>
                <ul>Genres: 
                    {this.renderGenres()}
                </ul>
            </div>
        );
    }
}

export default Movie;
