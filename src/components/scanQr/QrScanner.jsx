import React, {useState} from 'react'
import Scanner from "react-webcam-qr-scanner";
import "./QrScanner.css";

const QrScanner = (props) => {

  const [closeQr, setQrClose] = useState('');

  const handleDecode = (result) => {
    console.log(result.data);
    setQrClose(result.data)
    
    /* Eviar valores a los campos input */
    document.getElementById("input-nombre").value = result.data;
    
    props.closeScanner(false);
  } 

  const handleScannerLoad = (mode) => {
    console.log(mode);
  }



  return (
      <>
      {
          closeQr==='' 
          ? 
            <Scanner 
                className = "qr-scanner"
                onDecode  = {handleDecode}
                onScannerLoad ={handleScannerLoad}
                constraints = {{ 
                audio: false, 
                video: { facingMode: "environment" }
                }}
                captureSize={{ width: 500, height: 500 }}
            /> 
         : null //Close Qr scanner
      }
     
      </>

  );
}

export default QrScanner;