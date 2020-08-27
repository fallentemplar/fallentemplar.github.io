import React from "react";
import illustration from "../imgs/undraw_feeling_proud_qne1.svg"
import Form from "./contact.form"

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-purple-700 font-bold text-6xl">¡Saludos, viajero, soy Alexis!</h1>
                    <p className="font-light text-xl">Me encantan programar, el power metal, la ciencia ficción y los videojuegos</p>
                </div>
                <img src={illustration} alt="logo" style={{ height: "300px" }} className="visible"></img>
            </div>
        </div>
    </header>
)