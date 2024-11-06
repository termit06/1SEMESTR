import React from 'react';
//@ts-ignore
import Plotly from 'react-plotly.js';

const Plotly3d = () => {
    var intensity = [0, 0.14285714285714285, 0.2857142857142857, 0.42857142857142855, 0.5714285714285714, 0.7142857142857143, 0.8571428571428571, 1];
    var data: Plotly.Data[] = [
        {
            type: "mesh3d",
            x: [0, 0, 1, 1, 0, 0, 1, 1],
            y: [0, 1, 1, 0, 0, 1, 1, 0],
            z: [0, 0, 0, 0, 1, 1, 1, 1],
            //@ts-ignore
            i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
            //@ts-ignore
            j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
            //@ts-ignore
            k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],

            intensity: intensity,
            colorscale: [
                [0, 'rgb(145, 198, 235)'],
                [0.5, 'rgb(87, 255, 600)'],
                [1, 'rgb(4, 76, 25)']
            ]
            
        },
        
    ];
    return(
        <div>
            <Plotly data={data} layout={{ width: 800, height: 800, title: 'Северный воднный КУБ в 3Д' }} />
        </div>
    )
};
export default Plotly3d;