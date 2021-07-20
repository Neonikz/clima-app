import React, { useEffect, useState } from 'react';
import { Error } from './components/Error';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Weather } from './components/Weather';

export const WeatherApp = () => {

    //State de la busqueda
    const [ search, setSearch ] = useState({
        city:'',
        country:'',
    });
    const { city, country } = search;

    //State por si no encuentra la ciudad
    const [error, setError] = useState(false);

    //State de la consulta
    const [consult, setConsult] = useState(false);

    //State del resultado
    const [result, setResult] = useState({});



    //Effect de la busqueda
    useEffect(() => {

        //Funcion de consulta a la api
        const APIConsult = async() => {

            if( consult ){
                const appId = '9aeb1e01102b565ac1e9e727f7615a32';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`; 
        
                const resp = await fetch(url);
                const result = await resp.json();
                setResult(result);
                setConsult( false );

                // Detecta si hay errores en la consulta
                if( result.cod === '404' ){
                    setError(true);
                }else{
                    setError(false);
                }
            }

        }

        APIConsult();
    }, [consult]);

    let component;
    if( error ){
        component = <Error message="No hay resultados" />
    }else{
        component = <Weather 
                        result={ result }
                    />
    }

    return (
        <>
            <Header
                tittle="Clima App"
            />

            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form
                                search={ search }
                                setSearch={ setSearch }
                                setConsult={ setConsult }
                            />
                        </div>
                        <div className="col m6 s12">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
