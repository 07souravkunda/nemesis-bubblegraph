import React, { Component } from 'react';
import Chart from "chart.js";
import './bubbleChart.css';

export default class bubbleChart extends Component{

    chartRef = React.createRef();

    componentDidUpdate(prevProps, prevState){
        if ((this.props !== prevProps) || (this.state !== prevState)) {
            const myChartRef = this.chartRef.current.getContext("2d");
        
            new Chart(myChartRef, {
                type: "bubble",
                data: {
                    //Bring in data
                    datasets: this.props.data
                }
            });
        }
    }
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bubble",
            data: {
                //Bring in data
                datasets: this.props.data
            }
        });
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="graphContainer">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}