import React from "react"; 
import { useNavigate } from "react-router-dom"; 
//@ts-ignore
import Plotly from "react-plotly.js" 
 
const Click = () => { 
    const navigate = useNavigate(); 
    return ( 
 
        <div>  
            <button style={{
                background: 'blue', fontSize: 150 }} onClick={() => navigate("/plotly2d")}>2D</button> 
            <button style={{background: 'gold', fontSize: 150 }} onClick={() => navigate("/plotly3d")}>3D</button> 
        </div> 
    ) 
} 
 
export default Click