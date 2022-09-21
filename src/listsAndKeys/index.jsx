// https://pt-br.reactjs.org/docs/lists-and-keys.html

// const numbers = [1,2,3,4,5];
// doubled = numbers.map((number) => number * 2);
// console.log(doubled); -> [2,4,6,8,10]

import React from 'react';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default NumberList;
