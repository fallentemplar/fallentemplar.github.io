import React, { useState, useEffect } from 'react';
import Posts from "./posts"
import Post from "./post"

export default () => {

    const posts = [
        {
            "title": "UANL: Vehículos submarinos no tripulados: aliados estratégicos de la industria marina",
            "description": "",
            "link": "http://cienciauanl.uanl.mx/?p=9164",
            "thumbnail": "http://cienciauanl.uanl.mx/wp-content/uploads/2019/08/b0qadrn8l8lcwrss84gi.jpg"
        }
    ]

    return (
        <div className="max-w-4xl mx-auto overflow-x-scroll content-right">
            <Posts
                data={posts}
                card={Post}
                title="Mis publicaciones científicas" />
        </div>

    );
}