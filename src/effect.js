import React, { use, useEffect } from 'react';

function Effect(){
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Kantinan');

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count])

    return(
        <center>
            <h1>{count}</h1>
            <h3>{name}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setName('Kantinan Khongnuam')}>Change Name</button>
        </center>
    )
}
export default Effect;