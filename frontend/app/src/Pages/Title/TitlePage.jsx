import React from 'react';
import './TitlePage.scss'; // Импортируйте файл стилей
import Logo from '../../components/Logo'
import TitleHeader from '../../components/Headers/TitleHeader/TitleHeader';

const TitlePage = () => {
    return (
      <div className='title'>
        <TitleHeader />
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