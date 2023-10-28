import './App.css'
import MovieCard from './components/MovieCard'
import { useState } from 'react'
import { Auth } from './components/auth'

const API_URL = 'http://www.omdbapi.com?apikey=86adffd2'
const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    try{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search)
    }catch(err){
      console.error();
    }

}
  return (
    <>
      <div className='flex flex-col flex-shrink'>
        <nav className="fixed top-0 h-20 w-screen m-0
                        flex flex-row flex-auto first:bg-slate-950 
                        text-gray-400 list-none justify-center
                        items-center gap-48 font-bold
                        font-mono">
            <h1 className="text-white text-4xl margin-0">Lynchboxd</h1>
            <div className="flex flex-row gap-20 justify-center items-center">
                <li className="hover:text-white"><a href="">Profile</a></li>
                <li className="hover:text-white"><a href="">Lists</a></li>
                <li className="hover:text-white"><a href="">Members</a></li>
                <li className="w-56 h-8 flex  m-auto p-auto 
                                rounded-full bg-gray-200 ">
                        <input
                            name="search"
                            id="search"
                            placeholder="search a movie"
                            className="w-full rounded-l-full bg-transparent
                                       text-gray-900 outline-none pl-4
                                       appearance-none text-sm font-mono"
                            value={searchTerm}
                            onChange={(e)=> setSearchTerm(e.target.value)}
                        />
                        <button className='rounded-r-full text-gray-200 w-28
                                           bg-gray-700
                                           text-sm font-mono'
                                onClick={()=> searchMovies(searchTerm)}>
                          search
                        </button>
                    
                  </li>
                  <Auth/>
            </div>
        </nav>
       <div className="flex flex-col justify-start items-start h-screen w-screen
                                m-0 bg-gradient-to-t from-slate-950 to-gray-700
                                text-white pt-0 ">
                                    
                    <div className='pt-20 w-full h-full '>
                      {movies?.length > 0 ? 
                        <div className='flex flex-row flex-wrap
                                         m-auto'>
                            {movies.map((movie)=>
                            <MovieCard movie = {movie}/>)}
                        </div>
                      : 
                      <p></p>
                      }     
                  </div>   
        </div>
      </div>
    </>
  )
}

export default App;
