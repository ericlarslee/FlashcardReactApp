import React, { useState } from 'react';

function PrintHello() {
    const [greeting, setGreeting] = useState('hello');

    return (
        <p>{greeting}</p>
    );
}

export default PrintHello;