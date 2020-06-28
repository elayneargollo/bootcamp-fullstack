import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: ''
    }
  }

  async componentDidMount(){

    const res = await fetch (
      'https://restcountries.eu/rest/v2/all'
    );

    const json = await res.json();

    const allCountries = json.map(({name, numericCode, flag, population}) => {
        return {
          id: numericCode,
          name,
          filterName : name.toLowerCase(),
          flag,
          population,
        };
    });

    const filteredPopulation = this.calculateTotalPopulationFrom (allCountries);

    this.setState ({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });

  }

  calculateTotalPopulationFrom = (countreis) => {
    const totalPopulation = countreis.reduce((accumulator, current) => {
      return accumulator + current.population;
    },0);

    return totalPopulation;
  }

  handleChangeFilter = (newFilter) =>{

    this.setState({
      filter: newFilter,
    });

    const filterLowerCase = newFilter.toLowerCase();

    const filteredCountries= this.state.allCountries.filter(country => {
      return country.filterName.includes(filterLowerCase);
    });

    const filteredPopulation = this.calculateTotalPopulationFrom (filteredCountries);

    this.setState ({
      filteredCountries,
      filteredPopulation,
    })

  }
  
  render() {

    const {filteredCountries, filter, filteredPopulation} = this.state;

    return (
      
    <div className='container'>
      <h1>React Countries</h1>
        <Header filter={filter} totalPopulation={filteredPopulation} countryCount={filteredCountries.length} onChangeFilter={this.handleChangeFilter}/>
        <Countries countries={filteredCountries}/>
     </div>

    )
  }
}
