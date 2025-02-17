import React from "react";
import { Movies } from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {



    state = {
        movies: [],
        movieName : "",
        loading: true,
    }

    getMovies = (name, type = 'all') => {
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}${type !== 'all' ? `&type=${type}` : ''}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ movies: data.Search, loading: false })
            })
            .catch( ( err) => {
                console.error(err);
                this.setState({  loading: false })

            } );
    }

    componentDidMount() {
        this.getMovies('matrix');
    }

    searchMovies = (name, type = 'all') => {
        if(name.length) this.getMovies(name, type);
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="container content">
                <Search searchMovies ={this.searchMovies} />
                {
                    loading ? <Preloader /> : (<Movies movies={movies} />)                         
                }

            </main>
        );
    }
}

export { Main };