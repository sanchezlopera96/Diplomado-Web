import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3Cwebsocket} from 'websocket';
import { AUTOR, TITLE, URL_WS, YEAR } from '../config';
import Footer from './Footer';
import Grafico from './Grafico';
import Header from './Header';
 
 
const ws = new W3Cwebsocket(URL_WS);
 
export default function Main() {
 
  const [currency, setCurrency] = useState([]);
 
  useEffect(() => {
    setTimeout(() => {
        suscribir();  
    }, 100)
  }, []);
 
  const suscribir = () => {
    ws.onopen = () => {
        console.log('Cliente websocket connectado!');
        ws.send(
            JSON.stringify({
                "event": "bts:subscribe",
                "data": {
                    "channel": "live_trades_btcusd"
                }
            })
        );
    };
 
    ws.onmessage = (message) => {
        const data = JSON.parse(message.data);
        if(data){
            const info = data.data;
            info.timestamp = dayjs(info.timestamp*1000).format('YYYY-MM-DDTHH:mm:ss');
            setCurrency(c => {
                if(c.length >= 100){
                    c = c.slice(-99);
                }
                return [...c, info]
            });
        }
        console.log(data)
    };
 
    ws.on('error', console.log);
  }
 
  return (
    <div className='container my-2'>
        <Header title={TITLE}/>
        <Grafico currency={currency}/>
        <Footer autor={AUTOR} year={YEAR}/>
    </div>
  )
}
