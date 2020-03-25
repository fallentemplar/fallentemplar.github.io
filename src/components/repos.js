import React from "react";
import Repos from "../data/repos";
import Repo from "./repo";


export default () => (
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
            <p>Colaboración y contribución de código</p>
        </header>
        <ul className="repos-list">
            {
                Repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
    </div>
);