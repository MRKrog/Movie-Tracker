import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


export class GenreBox extends Component {
    constructor() {
        super();
        this.state = {
            genre: ["Action", "Horror", "Comedy"]
        }
    }

    render = () => {
        const genreDisplay = this.props.genres.map((genre, index) => {
            let backgroundImage = {backgroundImage: `url( http://image.tmdb.org/t/p/original${genre.results[0].backdrop_path})`}
            return(
                   <Link key={index} to={`/Movies/${this.state.genre[index]}/${index}`} style={backgroundImage} className="genre-box"><h3>{this.state.genre[index]}</h3></Link>
                 )
        })
        return(
            <div className="Genre-Display">
                {genreDisplay}
            </div>)
    }
}

GenreBox.propTypes = {
  	genres: PropTypes.array.isRequired
}


export const mapStateToProps = (state) => ({
    genres: state.genres
})

export default connect(mapStateToProps)(GenreBox)
