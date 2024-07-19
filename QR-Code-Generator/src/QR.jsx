import './QR.css'
import { useState } from 'react';
import QRCode from 'qrcode.react';

const QR =()=>{
   const[state, setState] = useState(' ');
   const generateQR =(event)=>{
       setState(event.target.value)
   }

  return( <div className="container">
    <div className="card">
        <h1>QRCode Generator.</h1>
        <input  onChange={generateQR} value={state} type="text" placeholder='Paste Link or  Enter Text' />
        <div className='QR'>{state && <QRCode  value={state} size={256}  />}</div>
    </div>
  </div> )
}
export default QR;