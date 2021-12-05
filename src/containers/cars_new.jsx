import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions'



class CarsNew extends Component{

    renderField(field) {
        return (
            <div className="form-group"> 
                <label>{field.label}</label> 
                <input className="form-control" type={field.type} {...field.input}
                /> 
            </div>
        );
    }
    
    onSubmit = (values) => { 
        // console.log(this.props.garage)
        this.props.createCar(values, this.props.garage, (car) => {
            this.props.history.push('/cars'); // Navigate after submit 
                return car;
            }
        ); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                    <Field
                        label="Brand"
                        name="brand"
                        type="text" 
                        component={this.renderField}
                    />
                    <Field
                        label="Model" 
                        name="model" 
                        type="text" 
                        component={this.renderField}
                    />
                    <Field
                        className="form-control" 
                        label="Owner" 
                        name="owner" 
                        type="text" 
                        component={this.renderField}
                    />
                    <Field
                        className="form-control" 
                        label="Plate" 
                        name="plate" 
                        type="text" 
                        component={this.renderField}
                    />
                    <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Create Car
                    </button>
                </form>
            </div>
        ); 
    }
}

function mapStateToProps(state){
    return{
        garage: state.garage
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ createCar }, dispatch);
//   }
  

export default reduxForm({ form: 'newCarForm' })( connect(mapStateToProps, { createCar })(CarsNew));

// export default CarsNew;