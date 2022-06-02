import React from 'react';
import "./home.scss";
import Navbar from "../../components/navbar/navbar";
import Card from '../../components/card/card';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Card/>
        </div>
    );
};

export default Home;