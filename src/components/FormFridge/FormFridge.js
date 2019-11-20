import React, { Component } from 'react';

class FormFridge extends Component {

    render() {

        return (
            <div>
                <form onSubmit={this.props.handleFormSubmit} style={{ margin: 20 }}>
                    <div className="form-group">
                        <label htmlFor="food">Food Name</label>
                        <input 
                               type="text" 
                               className="form-control" 
                               id="food" 
                               aria-describedby="foodHelp" 
                               placeholder="Enter Food Name"
                               onChange={this.props.handleInputChange}/>
                    </div> 
                        <button type="submit" value="Submit" className="btn btn-primary">Add to Fridge</button>
                </form>
            </div>
                )
            }
}

export default FormFridge;