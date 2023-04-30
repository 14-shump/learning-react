import React, { useState } from "react";
import SearchForm from "./SearchForm";
import GitHubUser from "./GitHubUser";

export default function App() {
    const [login, setLogin] = useState("14-shump");
    return (
        <>
            <SearchForm value={login} onSearch={setLogin} />
            <GitHubUser login={login} />
        </>
    );
}