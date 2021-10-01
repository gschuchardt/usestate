import React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button'


const CounterComponent = () => {

    const [count, setCount] = useState(1)

    const upDaCount = () => {
        setCount(count + 1)
    }

    const downDaCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <Button variant='contained' onClick={downDaCount}>Decrease Count</Button>
            <Button variant='contained' onClick={upDaCount}>Increase Count</Button>
        </div>
    );
}

export default CounterComponent;
