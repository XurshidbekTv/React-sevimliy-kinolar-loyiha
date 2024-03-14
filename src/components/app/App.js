import './App.css';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import MovieList from '../movie-list/movie-list';
import { MoviesAddForm } from '../movies-add-form/movies-add-form';

function App() {
  const data=[
    {name:'Gulverining sayohatlari', viewers:201, favourite:false},
    {name:'Uzoqqa sakrash boyicha musobaqa', viewers:5054, favourite:false},
    {name:'Yshail sayora ', viewers:777707, favourite:true},
  ]
  return (
    <div className='app font-monospace'>
      <div className="content">
        <AppInfo/>
        <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
        </div>
        <MovieList data={data}/>
        <MoviesAddForm/>
      </div>
    </div>
  );
}

export default App;
