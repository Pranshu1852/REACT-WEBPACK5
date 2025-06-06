import { useState } from 'react';
import webpackImg from './assets/image.png'
import Button from './components/Button';

function App() {
    const [count, setCount]=useState(0);

    function handleClick() {
        setCount((prevCount)=>{
            return prevCount+1;
        })
    }

    return (
        <div className='maincontainer'>
            <h1>React WebPack 5</h1>
            <img className='webpackImage' src={webpackImg} alt="webpack image" />
            <h2 className='counter'>Count: {count}</h2>
            <Button className='btn' onClickHandler={handleClick}/>
        </div>
    );
}

export default App; 