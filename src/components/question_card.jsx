import React, { Component } from 'react';
import Slider from './quiz_slider';
import FlexView from 'react-flexview/lib';

class QuestionCard extends Component {
	state = {};
	Slider1 = (
		<Slider
			negativeValue={true}
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID='Slider1'
		/>
	);
	render() {
		return (
			<FlexView column hAlignContent='center'>
				<p>{this.props.question}</p>
				{this.props.slider}
			</FlexView>
		);
	}
}

export default QuestionCard;
