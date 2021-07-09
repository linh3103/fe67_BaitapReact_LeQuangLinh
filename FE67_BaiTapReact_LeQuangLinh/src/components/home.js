import React, { Component } from 'react';
import Header from './header';
import Carousel from './carousel';
import PhoneList from './phoneList';
import LaptopList from './laptopList';
import Promotion from './promotion';
class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <PhoneList/>
                <LaptopList/>
                <Promotion/>
            </div>
        );
    }
}

export default Home;