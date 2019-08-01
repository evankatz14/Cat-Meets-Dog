import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { getCats } from './api'
import { getDogs } from './api'
import { createCat } from './api'
import { createDog } from './api'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Dogs from './pages/Dogs'
import NewDog from './pages/NewDog'
import Header from './components/Header'
import Home from './pages/Home'

import Scooby from './scoobs.jpeg'
import Buddy from './buddy.png'
import Lassie from './lassie.jpg'
import Brian from './brian.jpeg'
import Lady from './lady.jpeg'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            cats:[],
            dogs:[],
            success: false,
        }
    }

    componentDidMount() {
        getCats()
            .then(APIcats => {
                this.setState({
                    cats: APIcats
                })
            })
        getDogs()
            .then(APIdogs => {
                this.setState({
                    dogs: APIdogs
                })
            })
    }

    handleNewCat = (cat) => {
        let success = this.state.success
        createCat(cat)
        .then(successCat => {
            console.log("Success! New cat: ", successCat);
            if(typeof successCat.id === 'number'){
                success = true
            }
            this.setState({success})
            window.location.reload()
        })
    }

    handleNewDog = (dog) => {
        let success = this.state.success
        createDog(dog)
        .then(successDog => {
            console.log("Success! New dog: ", successDog);
            if(typeof successDog.id === 'number'){
                success = true
            }
            this.setState({success})
            window.location.reload()
        })
    }

    render() {
        console.log(this.state.success)
        return (
            <div className="App">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" exact component={Home} />
                        <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/> } />
                        <Route exact path="/newcat" component={(props) => <NewCat
                            handleNewCat={this.handleNewCat}
                            success = {this.state.success}
                        /> } />
                        <Route exact path="/dogs" render={(props) => <Dogs dogs={this.state.dogs}/> } />
                        <Route exact path="/newdog" component={(props) => <NewDog
                            handleNewDog={this.handleNewDog}
                            success = {this.state.success}
                        /> } />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
