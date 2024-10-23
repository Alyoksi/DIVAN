import React from 'react';
import './TitlePage.scss'; // Импортируйте файл стилей
import Logo from '../../components/Logo'
import Header from '../../components/Header/Header';

const TitlePage = () => {
    return (
      <div className='title'>
        <Header />
        <div className="container">
            <div className="rectangle">
                <Logo fontsz='140px' />
                <p className="subtitle">ТВОЙ ПЛАНИРОВЩИК ЗАДАЧ</p>
            </div>
        </div>
      </div>
    );
};

export default TitlePage;