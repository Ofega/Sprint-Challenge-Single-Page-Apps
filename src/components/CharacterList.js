import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./styles";
import { useLocalStorage } from './CustomHooks';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [ characters, setCharacters ] = useLocalStorage('characters', []);
  const [ keyword, setKeyword ] = useState('');
  const [ canSearch, setCanSearch ] = useState(true);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  }

  const onSearch = (e, keyword) => {
    e.preventDefault();
    
    if(keyword) {
      setCanSearch(true);

      const filteredCharacters = characters.filter(item => item.name === keyword);
      setCharacters(filteredCharacters);
    }
  }

  useEffect(() => {
    const params = keyword ? `?name=${keyword}` : '';
    setKeyword('');

    if(canSearch) {
      axios.get(`https://rickandmortyapi.com/api/character/${params}`)
      .then(response => {
        const newCharacters = response.data.results.map(item => {
          return {
            id: item.id,
            name: item.name,
            image: item.image,
            status: item.status,
            species: item.species,
            origin: item.origin.name,
            location: item.location.name,
            episodes: item.episode.length
          }
        })

        setCharacters(newCharacters);
        setCanSearch(false);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }, [canSearch]);

  
  return (
    <>
      <SearchForm keyword={keyword} onSearch={onSearch} handleInputChange={handleInputChange} />
      <section className="character-list grid-view">
        { 
          characters
            .map(({ id, image, name, status, species, origin, location, episodes }) => {
              return (
                <Card key={id}>
                  <div className="image-container">
                    <img src={image} alt={name} />
                  </div>
                  <div className="content-container">
                    <h2>{name}</h2>
                    <p className="meta-data">{species} {status}</p>
                    <div className="description">
                      <p>Location: {location}</p>
                      <p>Origin: {origin}</p>
                    </div>
                  </div>
                  <div className="content-container extra">
                    <a href="#">
                      {episodes} Episodes
                    </a>
                  </div>
                </Card>
              )
            }) 
        }
      </section>
    </>
  );
}
