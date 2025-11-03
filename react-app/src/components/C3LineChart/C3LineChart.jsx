import React from "react";
import c3 from 'c3';               // Import C3.js
import 'c3/c3.css';               // Import C3 styles
export default class C3LineChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        this.setState({chart: c3.generate({
            bindto: this.state.chartRef.current,
            data: {
                columns: [
                    ['data1', 1, 3, 2, 4],
                ]
            },
            type: 'line'
        })})
    }

    render() {
        return <div>
            <h2>C3 Line chart</h2>
            {/* chart container div */}
            <div ref={this.state.chartRef}></div>
        </div>
    }
}