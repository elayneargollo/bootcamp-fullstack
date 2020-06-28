import React, { Component } from 'react';
import css from './country.module.css'

export default class Countrry extends Component {

    render (){

        const {country} = this.props;

        return (
            
            <div className={css.flexRow}>
            <img className={css.bandeira} src={country.flag} alt={country.name}/>
            <span>{country.name}</span>
               
            </div>

        )
    }
}