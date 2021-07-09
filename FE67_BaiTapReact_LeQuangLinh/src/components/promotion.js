import React, { Component } from 'react';
import pro1 from '../images/promotion_1.png';
import pro2 from '../images/promotion_2.png';
import pro3 from '../images/promotion_3.jpg';
class Promotion extends Component {
    render() {
        return (
            <section id="promotion" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-center text-white">PROMOTION</h1>
                <div className="container bg-light pt-5 pb-5">
                    <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="container">
                        <img src={pro1} alt style={{maxWidth: '100%'}} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="container">
                        <img src={pro2} alt style={{maxWidth: '100%'}} />
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                        <div className="container">
                        <img src={pro3} alt style={{maxWidth: '100%'}} />
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Promotion;