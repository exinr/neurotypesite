import React, { Component } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import FlexView from 'react-flexview';

class Slider extends Component {
	state = { value: 0, realValue: 0 };
	test = () => {};

	componentDidMount() {
		window.addEventListener('updateslider', this.test);
	}
	componentDidUpdate() {
		window.addEventListener('updateslider', this.test);
	}

	componentWillUnmount() {
		window.removeEventListener('updateslider', this.test);
	}

	handleNegativity = (changeEvent) => {
		if (this.props.negativeValue === true) {
			this.setState({
				value: changeEvent.target.value,
				realValue: -changeEvent.target.value,
			});
			this.props.UpdateSliderVal(
				this.props.SliderID,
				-changeEvent.target.value
			);
		} else {
			this.setState({
				value: changeEvent.target.value,
				realValue: changeEvent.target.value,
			});
			this.props.UpdateSliderVal(this.props.SliderID, changeEvent.target.value);
		}
	};

	getRealValue() {
		return parseInt(this.state.realValue);
	}

	render() {
		return (
			<FlexView width={'100%'}>
				{/*<p>Agree</p>*/}
				<FlexView column width='100%'>
					<FlexView>
						<FlexView marginRight='auto' basis={100}>
							<p>Strongly Agree</p>
						</FlexView>
						<FlexView basis={1200}>
							<RangeSlider
								value={this.state.value}
								onChange={(changeEvent) => {
									this.handleNegativity(changeEvent);
								}}
								min={-50}
								max={50}
								step={0.01}
								tooltip='off'
							/>
						</FlexView>
						<FlexView marginLeft='auto' basis={100}>
							<p>Strongly Disagree</p>
						</FlexView>
					</FlexView>

					<button onClick={() => this.setState({ value: 0, realValue: 0 })}>
						Reset
					</button>
				</FlexView>
				{/*<p>Disagree</p>*/}
			</FlexView>
		);
	}
}

export default Slider;
