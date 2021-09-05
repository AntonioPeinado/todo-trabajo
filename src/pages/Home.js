import React from 'react'
import Formulario from '../components/Formulario'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Home = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Formulario/>
            <h1>Home</h1>
        </div>
    )
}

export default Home
