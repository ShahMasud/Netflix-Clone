import React from 'react';
import Card from './cards';
import Sdata from './Sdata';

function App() {   
    return(
    <>
    <h1>*** Top Netflix series 2021 ***</h1>
    {Sdata.map( (val) =>{
        return(
            <Card
            sname={val.sname}
            imgsrc={val.imgsrc} 
            title={val.title}
            link={val.link}
            />
        )}
    )}

    </>
    )
    }
export default App;
