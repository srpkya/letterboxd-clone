const MovieCard = ({movie}) => {
    return(
        <div className="w-40 h-64">
            <div className="h-48 w-40 pl-2 pr-2 m-auto pt-4">
                <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://placehold.co/400x600'} alt={movie.Title}
                className="rounded-t-lg rounded-b-lg hover:scale-90 
                            h-48 w-40 max-h-48"
                />
            </div>
            <div className="pt-3 w-40">
                <p className=" w-40 h-auto p-2 text-center text-sm text-gray-200 font-mono">{movie.Title}({movie.Year})</p>
            </div>
        </div> 
    )
}

export default MovieCard;