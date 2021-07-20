import React, { useState } from 'react';
import { Error } from './Error';

export const Form = ({ search,setSearch,setConsult }) => {

    //State del error
    const [error, setError] = useState(false);
    
    const { city, country } = search;

    const handleInputChange = ({target}) => {
        
        setSearch({
            ...search,
            [ target.name ]: target.value
        });
    };

    //Submit del form
    const handleSubmit = e => {
        e.preventDefault();

        //Validar
        if( !city.trim() || !country.trim() ){
            setError(true);
            return;
        }
        setError(false);
        //Pasarlo al componente principal
        setSearch({
            city,
            country
        })
        setConsult( true );
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            { error && <Error message="Todos los campos son obligatorios"/> }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="city"
                    id="city"
                    value={ city }
                    onChange={ handleInputChange }
                />
                <label htmlFor="city">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="country"
                    id="country"
                    value={ country }
                    onChange={ handleInputChange }
                />
                <label htmlFor="country">Pais:</label>
            </div>
            
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}
