import { useState, useEffect } from "react";

export default function GitHubUser({ login }) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]);

    if (loading) return <h1>loading...</h1>;
    if (error) {
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    }
    if (!data) return null;

    return (
        <div>
            <img
                src={data.avatar_url}
                alt={data.login}

            />
            <div>
                <h2>{data.login}</h2>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}