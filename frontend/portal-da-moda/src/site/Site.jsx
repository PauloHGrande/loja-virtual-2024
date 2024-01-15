import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Testemunho from './Components/Testemunho';
import Precos from './Components/Precos';
import Footer from './Components/Footer';

function Site() {
    return (
        <div>
            <Header />
            <Banner />
            <Features />
            <Testemunho />
            <Precos />
            <Footer />
        </div>
    );
}

export default Site;
