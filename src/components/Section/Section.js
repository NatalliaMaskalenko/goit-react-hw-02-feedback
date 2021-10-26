import { Component } from 'react';

class Section extends Component{
    state = {}

     handleIncrement= (e) =>{
         console.log('hi');
         console.log(this);
    }
    
    render() {
        return (
        <div>
            <section>
                <h1>Please leave feedback</h1>
                <div>
                    <button type="button" onClick = {this.handleIncrement}>Good</button>
                    <button type="button" onClick = {this.handleIncrement}>Neutral</button>
                    <button type="button" onClick = {this.handleIncrement}>Bad</button>
                </div>
            </section>
            <section>    
                <div>
                    <h2>Statistics</h2>
                    <p>Good:0</p>
                    <p>Neutral:0</p>
                    <p>Bad:0</p>
                    <p>Total:0</p>
                    <p>Positiv feedback:0</p>
                    <h3>No feedback given</h3>
                </div>
            </section>
            </div>
        );
    }
}

export default Section;