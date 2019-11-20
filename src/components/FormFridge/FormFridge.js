import React, { Component } from 'react';

class FormFridge extends Component {

    render() {



        return (
            // <Search array=[2, 3,4]/>
            <div>
                <form style={{ margin: 20 }}>
                    <div class="form-group">
                        <label for="food">Food Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Food Name"/>
                    </div> 
                        <button type="submit" class="btn btn-primary">Add to Fridge</button>
                </form>
            </div>
                )
            }

}

export default FormFridge;