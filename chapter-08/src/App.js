import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
    const [data, setData] = useState();

    useEffect(() => {
        if (!login) return;
        fetch(`http://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .catch(console.error);
    }, [login]);

    if (data)
        return <pre>{JSON.stringify(data, null, 4)}</pre>

    return null;
}

export default function App() {
    return <GitHubUser login="14-shump" />
}