import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import bbva2018 from "../imgs/bbva2018.jpg"
import feriaAditiva from "../imgs/feriaAditiva.jpg"
import desafioemprendedor from "../imgs/desafioemprendedor.jpg"
import encuentroAltoDesempeno from "../imgs/encuentroAltoDesempeno.jpg"



export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            accessibility: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToScroll: 1
        };
        return (
            < div className="max-w-4xl mx-auto mt-12" >
                <div className="content-center">
                    <header className="text-center pb-8">
                        <h2 className="text-3xl font-bold">Actividades destacadas</h2>
                    </header>
                    <Slider {...settings}>
                        <div className="pl-2 flex-1 font-bold">
                            <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${feriaAditiva})` }}></header>
                            <h3 className="text-center">Mención especial en Feria CONMAD de Manufactura Aditiva (2019)</h3>
                        </div>
                        <div className="pl-2 flex-1 font-bold">
                            <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${encuentroAltoDesempeno})` }}></header>
                            <h3 className="text-center">Conferencia en <span>2º Encuentro Regional de Equipos de Alto desempeño(2018)</span></h3>
                        </div>
                        <div className="pl-2 flex-1 font-bold">
                            <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${bbva2018})` }}></header>
                            <h3 className="text-center">2º lugar en Hackathon BBVA 2018</h3>
                        </div>
                        <div className="pl-2 flex-1 font-bold">
                            <header className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${desafioemprendedor})` }}></header>
                            <h3 className="text-center">2º lugar Desafío Emprendedor 4.0</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}