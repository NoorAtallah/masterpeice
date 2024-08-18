// src/components/CatInfo.js
import React, { useEffect, useState } from 'react';
import {fetchCatBreeds, fetchDogBreeds} from './catInfoService';
import './CatInfo.css';
import image from '../images/hero/4.png'

const PetInfo = () => {
    const [catBreeds, setCatBreeds] = useState([]);
    const [dogBreeds, setDogBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [animalType, setAnimalType] = useState('cat');
  
    useEffect(() => {
      const getCatBreeds = async () => {
        const breeds = await fetchCatBreeds();
        console.log("Fetched cat breeds:", breeds);
        setCatBreeds(breeds);
      };
  
      const getDogBreeds = async () => {
        const breeds = await fetchDogBreeds();
        console.log("Fetched dog breeds:", breeds);
        setDogBreeds(breeds);
      };
  
      getCatBreeds();
      getDogBreeds();
    }, []);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleAnimalTypeChange = (event) => {
      setAnimalType(event.target.value);
    };
  
    const filteredBreeds = (animalType === 'cat' ? catBreeds : dogBreeds).filter(breed =>
      breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        
        <div className="pet-info-container">
        <div className="hero-image"
        //  style={{ backgroundImage: 'url({image})' }}
        >
          <img src={image} alt="Hero" />
          <h1 className='font-bold text-2xl text-brown mb-16 mt-20'>{animalType === 'cat' ? 'Cats' : 'Dogs'} Breed Boutique</h1>
        </div>
        <div className="controls mb-20">
          <input
            type="text"
            placeholder="Search for a breed..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar "
          />
          <select value={animalType} onChange={handleAnimalTypeChange} className="animal-type-selector">
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
          </select>
        </div>
        <div className="pet-info-cards mt-20">
          {filteredBreeds.map((breed, index) => (
            <div key={index} className="pet-info-card">
              <h2>{breed.name}</h2>
              <img src={breed.image?.url} alt={breed.name} />
              <p><strong>Origin:</strong> {breed.origin}</p>
              <p><strong>Temperament:</strong> {breed.temperament}</p>
              <p>{breed.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PetInfo;
  