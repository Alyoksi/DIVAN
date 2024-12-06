import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ fontsz }) => {
  return (
    <Link to="/" className="logo" style={{ fontSize: fontsz, fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
      D&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;N
    </Link>
  );
};

export default Logo;