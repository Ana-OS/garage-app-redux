import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { fetchCars } from '../actions';


class CarsIndex extends Component{
    
    componentDidMount() {

        // if(!this.props.cars){
            this.props.fetchCars(this.props.garage); 
        // }
    }

    renderCars(){
        return this.props.cars.map((car) => {
            return (
                <div key={car.id}>
                    <Link to={`/cars/${car.id}`}  key={car.id}>
                        <div className="post-item"> 
                            <h3>{car.brand} - {car.model} </h3>    
                            <p>{car.owner}</p>
                        </div>
                    </Link>
                </div>        
            ); 
        })
    }

    render(){
        return(
            <div className="cars-index">
               {this.renderCars()}
               <Link className="btn btn-primary btn-cta" to="/cars/new">
                    Let's create a car! 
                </Link>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        cars: state.cars,
        garage: state.garage
    }
  
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCars }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex)