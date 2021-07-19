import React, { useState, useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Film } from './components/Film';
import { Detail } from './components/Detail';
import './App.css';

const sectionNames = ["tv shows", "movies"];
const sectionUrl = ["tv", "movie"];
const apiUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'a562a9a87fddcafca2a9c4dd28aaea99';

const sectionConverter = (section: string) => sectionUrl[sectionNames.indexOf(section)]

function App() {
  const [section, setSection] = useState('tv shows');

  const handleChange = (event: any) => {
    const updatedValue = event.target.getAttribute('value');

    setSection(updatedValue);
  }

  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}${sectionConverter(section)}/popular?api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => {
      console.log(response.results)
      setFilms(response.results)
    })
  }, [section])
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tv/:id">
            <Detail />
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
          <header>
            {sectionNames.map(name => (
            <div className='menu-section' key={name}>
              <input type="radio" className="menu-section__input" name="section" value={name} id={name}
                onChange={handleChange} />
              <label htmlFor={name} className="menu-section__button">
                {name}
              </label>
            </div>
            ))}
            <h2 className="menu-section__title">{section}</h2>
          </header>
          <main>
            <section className="section">
              {films.length > 0 && films.map((film) =>
              <Film key={film.id} {...film} />)}
            </section>
          </main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
