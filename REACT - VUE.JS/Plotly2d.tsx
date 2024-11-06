import React from 'react';
import Plotly from 'react-plotly.js';

const Plotly2d = () => {
    var data: Plotly.Data[] = [
        {
            x: [0, 1, 2],
            y: [9, 4, 7],
            error_y: {
                type: 'data',
                array: [1, 2, 3],
                visible: true
            },
            type: 'scatter'
        }
    ];
    return (
        <div>
            <Plotly data={data} layout={{ width: 800, height: 800, title: 'Таблица по 2Д' }} />
        </div>
    )
}


export default Plotly2d;