import React, { useEffect } from "react";
import axios from "axios";
import { Card } from "./styles";
import { useLocalStorage } from './CustomHooks';


export default function LocationsList() {
    const [ locations, setLocations ] = useLocalStorage('locations', []);

    useEffect(() => {
        
        axios.get('https://rickandmortyapi.com/api/location')
        .then(response => {
            const newLocations = response.data.results.map(item => {
            return {
                id: item.id,
                name: item.name,
                type: item.type,
                dimension: item.dimension,
                residents: item.residents.length
            }
            })
            setLocations(newLocations);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <section className="character-list grid-view">
            { 
                locations.map(({ id, name, type, dimension, residents }) => {
                return (
                    <Card key={id}>
                        <div className="content-container">
                            <h2>{name}</h2>
                            <p className="meta-data">{residents} residents</p>
                            <div className="description">
                                <p>{type} - {dimension}</p>
                            </div>
                        </div>
                    </Card>
                )
                }) 
            }
        </section>
    );
}
