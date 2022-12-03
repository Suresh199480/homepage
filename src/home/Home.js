import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

const Home = () => {
    return ( <
        >
        <
        div className = 'home-container' >
        <
        div className = 'left-home' >
        <
        span className = 'property' > property < /span> <
        div className = 'heading' > find the place to live your < br / > < span > dreams easily here < /span></div >
        <
        p className = 'text' > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Eulsmod aliquam < br / > tempor elit tristique at volupt in ut. < /p> <
        div className = 'buttons' >
        <
        button className = ' btn home-btn' > < i className = 'fa fa-home' > < /i>Home</button >
        <
        button className = 'btn villa-btn' > < i className = 'fa fa-home' > < /i>Villa</button >
        <
        button className = 'btn apartment-btn' > < i className = 'fa fa-home' > < /i>Apartment</button >
        <
        /div>  <
        div className = 'search' >
        <
        input type = "search"
        name = 'search'
        placeholder = 'Search for the location you want!' / >
        <
        span > < i className = 'fa fa-map-marker' > < /i></span >
        <
        Link to = "#"
        className = 'search-link' > Search < span > > < /span></Link >
        <
        /div>

        <
        /div> <
        /div> <
        />
    )
}

export default Home