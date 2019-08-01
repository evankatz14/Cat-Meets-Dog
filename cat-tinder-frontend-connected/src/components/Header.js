import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap'


class Header extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <a className="navbar-brand" href="#"><img src="https://img.icons8.com/cotton/64/000000/cat--v1.png"/><img src="https://img.icons8.com/cotton/64/000000/dog-heart--v1.png"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="navbar-collapse collapse show" id="navbarColor01" >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:3001/">Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3001/cats">Cats</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3001/newcat">New Cat</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3001/dogs">Dogs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3001/newdog">New Dog</a>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>

                <div className="jumbotron">
                  <h1 className="display-3">Cat meets Dog</h1>
                  <p className="lead">For the unconventional pet</p>
                  <hr className="my-4"></hr>
                  <p>A safe space for interspecies mingling</p>
                  <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>
                </div>
            </div>
        )
    }
}

export default Header
