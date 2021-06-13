import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, capital } = props.countryInfo;
    return (
        <div className="country-div">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <h5>{capital}</h5>
        </div>
    );
};

export default Country;