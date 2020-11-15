import React from 'react';

import './styles.css';


function PageHeader(props) {
  return (
    <div className="form-container">
      <header>
        <img src={logoImg} alt="MularioFor"/>
        <span>{props.name}</span>
        <Link className="back-link" to="/home">
            <FiHome size={40} color="#795EFF"/>
        </Link>
      </header>
    </div>
  );
}

export default PageHeader;