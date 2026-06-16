export default function MovieCard({movie}){
let movieWatched ="Watched"
let movieNotWatched="Not watched yet"
    if(movie.watched === true){
        return( 
        <p> {movieWatched} -{movie.title} {movie.genre} {movie.year}</p>
        )
    }else{
        return(
        <p>{movieNotWatched} -{movie.title} {movie.genre} {movie.year}</p>
    )

 
}
} 
