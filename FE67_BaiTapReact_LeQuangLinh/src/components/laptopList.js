import React, { Component } from 'react';
import mac from '../images/lt_macbook.png';
import asus from '../images/lt_rog.png';
import hp from '../images/lt_hp.png';
import lenovo from '../images/lt_lenovo.png';
import './product.css'
class LaptopList extends Component {
    render() {
        return (
              <div id="smartphone" className="container-fluid pt-5 pb-5 bg-light">
                    <h1 className="text-center">BEST LAPTOP</h1>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card" style={{width: 330}}>
                            <img className="card-img-top" src={mac} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">MACBOOK</h4>
                              <p className="card-text">The MacBook is a brand of notebook computers manufactured by Apple Inc</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card" style={{width: 330}}>
                            <img className="card-img-top" src={asus} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">ASUS ROG</h4>
                              <p className="card-text">The Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card" style={{width: 330}}>
                            <img className="card-img-top" src={hp} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">HP OMEN</h4>
                              <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card" style={{width: 330}}>
                            <img className="card-img-top" src={lenovo} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">LENOVO THINKPAD</h4>
                              <p className="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
        );
    }
}

export default LaptopList;