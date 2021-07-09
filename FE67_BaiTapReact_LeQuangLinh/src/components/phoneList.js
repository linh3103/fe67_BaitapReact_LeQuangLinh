import React, { Component } from 'react';
import iphoneX from '../images/sp_iphoneX.png';
import note7 from '../images/sp_note7.png';
import vivo from '../images/sp_vivo850.png';
import blackberry from '../images/sp_blackberry.png';
import './product.css'
class PhoneList extends Component {
    render() {
        return (
            <div>
                <div id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card bg-light" style={{width: 330}}>
                            <img className="card-img-top" src={iphoneX} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">iPhone X</h4>
                              <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card bg-light" style={{width: 330}}>
                            <img className="card-img-top" src={note7} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">Galaxy Note7</h4>
                              <p className="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card bg-light" style={{width: 330}}>
                            <img className="card-img-top" src={vivo} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">Vivo</h4>
                              <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                          <div className="card bg-light" style={{width: 330}}>
                            <img className="card-img-top" src={blackberry} alt="Card image" style={{maxWidth: '100%', height: 280}} />
                            <div className="card-body text-center">
                              <h4 className="card-title text-center">Blackberry</h4>
                              <p className="card-text">BlackBerry is a line of smartphones, tablets, and services originally designed</p>
                              <a href="#" className="btn btn-primary" style={{fontSize: 18}}>Detail</a>
                              <a href="#" className="btn btn-danger" style={{fontSize: 18}}>Cart</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneList;