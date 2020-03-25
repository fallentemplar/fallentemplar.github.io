import React from "react";
import illustration from "../imgs/undraw_feeling_proud_qne1.svg"
import Form from "./contact.form"

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-light text-purple-700 font-bold text-6xl">¡Hola, soy Alexis!</h1>
                    <p className="text-xl">Creo aplicaciones web y trabajo en Harman International</p>
                </div>
                <img src={illustration} alt="logo" style={{ height: "300px" }}></img>
            </div>

            <div>
                <Form />
            </div>
        </div>
    </header>
)