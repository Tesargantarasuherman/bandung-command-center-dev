import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ComponentCommanderProfile } from '..';

export default class ComponentCardCommander extends Component {
    render() {
        return (
            <div className="shadow-lg lg:mx-24 my-8 py-4 rounded-lg dark:bg-gray-900">
                <p className="text-center my-4 font-bold text-2xl text-gray-900 text-opacity-75 dark:text-white">Meet The Commanders</p>
                <div className="carousel-wrap">
                    <OwlCarousel className="owl-theme mt-2" loop items={4} autoplay={true} margin={10}
                    >
                       <ComponentCommanderProfile nameCommander={'Commander 1'} positionCommander={'Operator'}/> 
                       <ComponentCommanderProfile nameCommander={'Commander 2'} positionCommander={'IT Support'}/> 
                       <ComponentCommanderProfile nameCommander={'Commander 3'} positionCommander={'Call Taker'}/> 
                       <ComponentCommanderProfile nameCommander={'Commander 4'} positionCommander={'SPV'}/> 
                       <ComponentCommanderProfile nameCommander={'Commander 5'} positionCommander={'Operator'}/> 
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}
