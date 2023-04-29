import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loding, setLoding] = useState(false);

    useEffect(() => {
        if (!login) return;
        setLoding(true);
        fetch(`https://api.github.com/users/${login}`)
          .then(data => data.json())
          .then(setData)
          .then(() => setLoding(false))
          .catch(setError);
      }, [login]);

    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (loding) return <h1>loding...</h1>
    if (!data) return null

    console.log(data);

    return (
        <div className="githubuser">
            <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}

export default function App() {
    return <GitHubUser login="14-shump" />
}