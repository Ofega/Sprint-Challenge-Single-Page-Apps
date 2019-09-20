import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocalStorage } from './CustomHooks';

const Card = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: 4px;
  margin: 1.25rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  transition: box-shadow .1s ease,transform .1s ease;

  .image-container {
    position: relative;
    display: block;
    flex: 0 0 auto;
    padding: 0;
    background: rgba(0,0,0,.05);

    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: inherit;
    }
  }

  .content-container {
    flex-grow: 1;
    border: none;
    border-top: 1px solid rgba(34,36,38,.1);
    background: 0 0;
    margin: 0;
    padding: 1em 1em;
    box-shadow: none;
    font-size: 1em;
    border-radius: 0;

    &.extra {
      max-width: 100%;
      min-height: 0!important;
      flex-grow: 0;
      border-top: 1px solid rgba(0,0,0,.05);
      width: auto;
      padding: .75em 1em;
    
      a {
        font-size: .9rem;
        color: rgba(0,0,0,.4);
        transition: color .1s ease;
        text-decoration: none;
      }
    }

    h2 {
      display: block;
      color: rgba(0,0,0,.85);
      margin: 0;
      font-size: 1.3rem;
    }

    .meta-data {
      font-size: .9rem;
      color: rgba(0,0,0,.4);
      margin: .25rem 0 0 0;
    }

    .description {
      color: rgba(0,0,0,.68);
      margin-top: 1em;

      p {
        margin: 0;
        font-size: .9rem;

        &:last-of-type {
          margin-top: .5rem;
        }
      }
    }
  }
`

export default function CharacterList() {
  const [ characters, setCharacters ] = useLocalStorage('characters', []);

  useEffect(() => {
    
    axios.get('https://rickandmortyapi.com/api/character')
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
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <section className="character-list grid-view">
      { 
        characters.map(({ id, image, name, status, species, origin, location, episodes }) => {
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
                  {/* <Icon name='user' /> */}
                  {episodes} Episodes
                </a>
              </div>
            </Card>
          )
        }) 
      }
    </section>
  );
}
