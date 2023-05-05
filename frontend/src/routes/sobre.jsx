import React from 'react';
import { useState, useEffect } from 'react';

export default function Sobre(){

    const [api, setApi] = useState()

    const getApi = async () => {
        const response = await fetch(
            "http://localhost:5000/"
          ).then((response) => response.json());
          setApi(response);
    };

      useEffect(() => {
        getApi();
      }, []);



    return(
        <div>
			<div style={{fontSize: '64px', textTransform: 'capitalize', display: 'flex', justifyContent: 'center'}}>sobre nos</div>
			<div style={{display: 'flex', justifyContent: 'center', paddingTop: '3rem'}}>Pagina de infos da empresa</div>
            <p>Server</p>
            <div>
                {api && true ?
                <div>
                    {api.message}
                </div>
				: <div></div>
                }
            </div>
        </div>
    );
}