import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import SecondPage from './SecondPage'

export default class NavBar extends Component {

    render() {
        return (
            
<>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <p>Prueba</p>
                        </Link>
                        
                      
                    </div>
         
                    <ul className="nav-links show-nav">
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/SecondPage">SecondPage</Link>
                        </li>
                    </ul>   
                </div>

                
            </nav>


</>



        )
    }
}
