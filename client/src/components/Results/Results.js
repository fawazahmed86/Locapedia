import React from "react";
import { AppRegistry, View, Image } from 'react-native';
import "./Results.css";

const Results = () => (
<div>
      <div className="card">
      <Image source={require('SF.png')} />
      
        <h4><b>San Fransisco</b></h4> 
        <p>Golden Gate bridge</p> 
    </div>
    
</div>
);

export default Results;
