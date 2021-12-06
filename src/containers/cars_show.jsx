import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { showCar } from '../actions/index';

class CarsShow extends Component{
    componentDidMount() {

       if(!this.props.car) {
          this.props.showCar(this.props.match.params.id);
       }
    }

    render() {
        return (
            <div className="car-show">
                {/* {this.props.car.brand} */}
                <h3>{this.props.car.brand} - {this.props.car.model}</h3>
                <p>Owner: {this.props.car.owner}</p>
                <p>{this.props.car.plate}</p>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const idUrl = parseInt(ownProps.match.params.id); // From URL 
    const car = state.cars.find(car => car.id === idUrl)
    console.log(car)
    return {
        car
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ showCar }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);