import { useEffect } from "react";


export const Square = () => {

    useEffect( ()=>{
        console.log('RODOU O EFFECT: <Conectado>');

        window.addEventListener('scroll', ()=>{});

        return () => { // essa função vai executar quando o componente 'sumir do mapa'
            console.log('RODOU O CleanUp: <Desconectado>');
            window.removeEventListener('scroll', ()=>{});
        }
    } );

    return(
        <div className="w-40 h-40 bg-red-400"></div>
    );
}