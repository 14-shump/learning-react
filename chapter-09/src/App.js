import React, { useState, lazy } from "react";
import Agreement from "./Agreement";

const Main = lazy(() => import("./Main"));

export default function App() {
    const [agree, setAgree] = useState(false);

    if (!agree)
        return <Agreement onAgree={() => setAgree(true)} />;

    return <Main />;
}