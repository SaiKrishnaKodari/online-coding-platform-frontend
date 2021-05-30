import React, { Component } from 'react'
import "./Navbar.css"
import logo from './logo.svg'
export default function NavBar() {
    
    return (

        <header class="header-container">
            <div class="header-content">
                <div class="header-brand">
                    <div class="hamburger-btn"></div>
                        <a href="https://localhost:3000"><img src={logo} draggable="false" class="brand"/></a>
                    </div>
                <div class="header-main">
                    <div class="header-main-actions-container">
                            <div class="header-main-actions-list-content">
                                <div class="actions-list-container">
                                    <h3 class="actions-heading">COMPILER</h3>
                                    <ul class="actions-list">
                                        <li><a href="#">Python Compiler</a></li>
                                        <li><a href="#">Java Compiler</a></li>
                                        <li><a href="#">C++ Compiler</a></li>
                                    </ul>
                                </div>
                                <div class="actions-list-container">
                                    <h3 class="actions-heading">LEADERBOARD</h3>
                                    <ul class="actions-list">
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">Buy New Connection</a></li>
                                        <li><a href="#">Port to Airtel</a></li>
                                    </ul>
                                </div>
                                <div class="actions-list-container">
                                    <h3 class="actions-heading" >SUBMISSIONS</h3>
                                    <ul class="actions-list">
                                        <li><a href="#">Pay Bill</a></li>
                                        <li><a href="#">Buy New Connection</a></li>
                                        <li><a href="#">View Plans</a></li>
                                    </ul>
                                </div>
                                <div class="actions-list-container">
                                    <h3 class="actions-heading">CHALLENGES</h3>
                                    <ul class="actions-list">
                                        <li><a href="#">Recharge</a></li>
                                        <li><a href="#">Buy New DTH Connection</a></li>
                                        <li><a href="#">View Plans</a></li>
                                        <li><a href="#">Upgrade Box</a></li>
                                    </ul>
                                </div>
                                <div class="actions-list-container">
                                    <h3 class="actions-heading">ABOUT</h3>
                                    <ul class="actions-list">
                                        <li><a href="#">View Account</a></li>
                                        <li><a href="#">Get New Account</a></li>
                                        <li><a href="#">Add Money</a></li>
                                        <li><a href="#">Know More</a></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div class="get-app-container">
                                
                            </div>
                    </div>
                    <div class="business-quick-actions">
                        <div class="other-services">
                            <a href="#" target="_blank">Contact</a>
                            <a href="#" target="_blank">Register</a> 
                            <a href="#" target="_blank">Logout</a>
                        </div>
                        <span class="divider"></span>
                        {/* <a class="active">Personal</a>
                        <a href="#" target="_blank">Career</a>
                        <a href="#" target="_blank">Business</a>
                        <a href="#" target="_blank">Investor</a> */}
                    </div>
                </div>
                <div class="header-right">
                    <a class="actions-heading" href="#"><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/get-app.svg?v=1613632483347" alt="get app" />contact</a>
                    <a class="actions-heading" href="#"><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/airtel-store.svg?v=1613632483347" alt="airtel store" /> Logout</a>
                    <a class="actions-heading" href="#"><img draggable="false" src="https://assets.airtel.in/static-assets/new-home/img/login-user.svg?v=1613632483347" alt="login" /> Account</a>
                </div>
            </div>
        </header>
    )
}