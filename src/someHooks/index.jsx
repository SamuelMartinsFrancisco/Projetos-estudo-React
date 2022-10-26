import React, { useState, useEffect } from 'react';

function Counter() {
    // useState
    const [count, setCount] = useState(0); 
    
    // useEffect
    useEffect(() => {
        document.title = `Você clicou ${count} ${count === 1 ? 'vez' : 'vezes'}`;
    });

    return (
        <div>
            <h1> useState, useEffect </h1>
            <p> Você clicou {count} {count === 1 ? 'vez' : 'vezes'} </p>
            <button onClick={() => setCount(count + 1)}> 
                Clique aqui
            </button>
        </div>
    )
}

function AllHooksRender() {
    return (
        <> 
            {Counter()}
            <hr />
        </>    
    );
}

export default AllHooksRender;