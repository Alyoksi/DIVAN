import React from 'react';
import './Titlepage.scss'; // Импортируйте файл стилей
import Logo from '../Logo'

const TitlePage = () => {
    return (
        <div className="container">
            <div className="rectangle">
                <Logo fontsz='140px' />
                <p className="subtitle">ТВОЙ ПЛАНИРОВЩИК ЗАДАЧ</p>
            </div>
        </div>
    );
};

export default TitlePage;