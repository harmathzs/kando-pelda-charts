import React from "react";
// TODO import c3
// TODO import c3 styles
export default class C3LineChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        // TODO - generate line chart from props and state
    }

    render() {
        return <div>
            <h2>C3 Line chart</h2>
            {/* chart container div */}
            <div>TODO - set ref</div>
        </div>
    }
}