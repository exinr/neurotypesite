import React, { Component } from 'react';
import './App.css';
import Slider from './components/quiz_slider';
import FlexView from 'react-flexview/lib';
import QuestionCard from './components/question_card';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
	useHistory,
} from 'react-router-dom';
class App extends Component {
	state = { calculated: false };
	UpdateSliderVal = (slider, val) => {
		if (slider >= 13) {
			console.log(val);
			this.LexicalSliderValues[slider] = val;
		} else {
			this.LinearSliderValues[slider] = val;
		}
	};
	Slider1 = (
		<Slider negativeValue UpdateSliderVal={this.UpdateSliderVal} SliderID={1} />
	);
	Slider2 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={2} />);

	Slider3 = (
		<Slider negativeValue UpdateSliderVal={this.UpdateSliderVal} SliderID={3} />
	);

	Slider4 = (
		<Slider negativeValue UpdateSliderVal={this.UpdateSliderVal} SliderID={4} />
	);

	Slider5 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={5} />);
	Slider6 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={6} />);
	Slider7 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={7} />);
	Slider8 = (
		<Slider negativeValue UpdateSliderVal={this.UpdateSliderVal} SliderID={8} />
	);
	Slider9 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={9} />);
	Slider10 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={10}
		/>
	);

	Slider11 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={11} />);
	Slider12 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={12} />);
	Slider13 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={13}
		/>
	);
	Slider14 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={14} />);
	Slider15 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={15}
		/>
	);
	Slider16 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={16} />);
	Slider17 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={17}
		/>
	);
	Slider18 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={18}
		/>
	);
	Slider19 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={19} />);
	Slider20 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={20}
		/>
	);
	Slider21 = (
		<Slider
			negativeValue
			UpdateSliderVal={this.UpdateSliderVal}
			SliderID={21}
		/>
	);
	Slider22 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={22} />);
	Slider23 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={23} />);
	Slider24 = (<Slider UpdateSliderVal={this.UpdateSliderVal} SliderID={24} />);
	LinearSliderValues = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
		6: 0,
		7: 0,
		8: 0,
		9: 0,
		10: 0,
		11: 0,
		12: 0,
	};

	LexicalSliderValues = {
		11: 0,
		12: 0,
		13: 0,
		14: 0,
		15: 0,
		16: 0,
		17: 0,
		18: 0,
		19: 0,
		20: 0,
		21: 0,
		22: 0,
		23: 0,
		24: 0,
	};

	questions = [
		<QuestionCard
			question='Whenever I encounter a problem, I like to first analyse what I already have and move on systematically from there'
			slider={this.Slider1}
			key={this.Slider1}
		/>,
		<QuestionCard
			question='My ideas often seem disconnected to the matter at hand to others'
			slider={this.Slider2}
			key={this.Slider2}
		/>,
		<QuestionCard
			question='I often tend to think of solutions and answers as being either ‘right’ or ‘wrong’'
			slider={this.Slider3}
			key={this.Slider3}
		/>,
		<QuestionCard
			question='When I have to think about and consider multiple things at once, I quickly feel overwhelmed'
			slider={this.Slider4}
			key={this.Slider4}
		/>,
		<QuestionCard
			question='Whenever I encounter a problem, I like to immediately start thinking about as many possibilities as possible and my ideas often arise spontaneously'
			slider={this.Slider5}
			key={this.Slider5}
		/>,
		<QuestionCard
			question='Others often find the connections I draw between ideas strange or unexpected'
			slider={this.Slider6}
			key={this.Slider6}
		/>,
		<QuestionCard
			question="Whenever it comes to planning it's best to err on the side of being flexible at the risk of a major step being overlooked"
			slider={this.Slider7}
			key={this.Slider7}
		/>,
		<QuestionCard
			question='When brainstorming, my ideas are often logical and build further upon what we already have'
			slider={this.Slider8}
			key={this.Slider8}
		/>,
		<QuestionCard
			question='When brainstorming, I am the one to come up with surprising and innovative ideas'
			slider={this.Slider9}
			key={this.Slider9}
		/>,
		<QuestionCard
			question='My thoughts are usually focused on the matter at hand'
			slider={this.Slider10}
			key={this.Slider10}
		/>,
		<QuestionCard
			question='I function best in an environment where I am given freedom in what I have to do and to do so in my own way'
			slider={this.Slider11}
			key={this.Slider11}
		/>,
		<QuestionCard
			question='I would rather improvise than spend time coming up with a detailed plan'
			slider={this.Slider12}
			key={this.Slider12}
		/>,
		<QuestionCard
			question='When I am explaining a problem, I make sure I word my explanations as literal and clear as possible'
			slider={this.Slider13}
			key={this.Slider13}
		/>,
		<QuestionCard
			question='I can simply ‘understand’ things without necessarily being able to verbalise it'
			slider={this.Slider14}
			key={this.Slider14}
		/>,
		<QuestionCard
			question='To understand something, I must first be able to understand and comprehend the concept linguistically'
			slider={this.Slider15}
			key={this.Slider15}
		/>,
		<QuestionCard
			question='When I am explaining something, I use abstract metaphors and analogies'
			slider={this.Slider16}
			key={this.Slider16}
		/>,
		<QuestionCard
			question='I prefer thinking linguistically rather than in abstract concepts'
			slider={this.Slider17}
			key={this.Slider17}
		/>,
		<QuestionCard
			question='I believe it is important to focus on even the small details too'
			slider={this.Slider18}
			key={this.Slider18}
		/>,
		<QuestionCard
			question='I see language more as a tool to express myself, and as such my words may carry more meaning than when they are literally interpreted'
			slider={this.Slider19}
			key={this.Slider19}
		/>,
		<QuestionCard
			question="Whenever I am confronted by a new concept, I first seek to 'parse' it by verbalising and categorising it"
			slider={this.Slider20}
			key={this.Slider20}
		/>,
		<QuestionCard
			question='I seek to understand things with reason, logic, and precise terms'
			slider={this.Slider21}
			key={this.Slider21}
		/>,
		<QuestionCard
			question='I prefer looking at the whole picture'
			slider={this.Slider22}
			key={this.Slider22}
		/>,
		<QuestionCard
			question='I can have a firm understanding of a concept but not be able to explain it well to others'
			slider={this.Slider23}
			key={this.Slider23}
		/>,
		<QuestionCard
			question='I often use neologisms to describe my message rather than more strictly applying conventional language'
			slider={this.Slider24}
			key={this.Slider24}
		/>,
	];

	shuffleArray = (array) => {
		let i = array.length - 1;
		for (; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	button = () => {
		var lintotal = 0;
		for (var slider in this.LinearSliderValues) {
			lintotal += parseFloat(this.LinearSliderValues[slider]);
		}
		console.log(lintotal);
		var lextotal = 0;
		for (var slider in this.LexicalSliderValues) {
			lextotal += parseFloat(this.LexicalSliderValues[slider]);
		}
		console.log(lextotal);
		this.setState({
			linear: Math.round((lintotal / 12) * 100) / 100,
			lexical: Math.round((lextotal / 12) * 100) / 100,
			calculated: true,
		});
		console.log(
			`Linear: ${Math.round((lintotal / 12) * 100) / 100}, Lexical: ${
				Math.round((lextotal / 12) * 100) / 100
			}`
		);
	};

	render() {
		if (this.state.calculated) {
			var xquad = 0;
			var yquad = 0;
			var result;
			if (this.state.linear >= 25) {
				xquad = 1;
			} else if (this.state.linear > 0 && this.state.linear < 25) {
				xquad = 2;
			} else if (this.state.linear < 0 && this.state.linear > -25) {
				xquad = 3;
			} else if (this.state.linear <= -25) {
				xquad = 4;
			}
			if (this.state.lexical >= 25) {
				yquad = 1;
			} else if (this.state.lexical > 0 && this.state.lexical < 25) {
				yquad = 2;
			} else if (this.state.lexical < 0 && this.state.lexical > -25) {
				yquad = 3;
			} else if (this.state.lexical <= -25) {
				yquad = 4;
			}
			console.log(xquad, yquad);
			if (xquad === 1 && yquad === 1) {
				result = 'Book Keeper';
			} else if (xquad === 1 && yquad === 2) {
				result = 'Contemplative';
			} else if (xquad === 1 && yquad === 3) {
				result = 'Technician';
			} else if (xquad === 1 && yquad === 4) {
				result = 'Human Calculator';
			} else if (xquad === 2 && yquad === 1) {
				result = 'Level-Headed';
			} else if (xquad === 2 && yquad === 2) {
				result = 'Understanding';
			} else if (xquad === 2 && yquad === 3) {
				result = 'Quick-Witted';
			} else if (xquad === 2 && yquad === 4) {
				result = 'Analyst';
			} else if (xquad === 3 && yquad === 1) {
				result = 'Clearsighted';
			} else if (xquad === 3 && yquad === 2) {
				result = 'Externalist';
			} else if (xquad === 3 && yquad === 3) {
				result = 'Overseer';
			} else if (xquad === 3 && yquad === 4) {
				result = 'Fascinator';
			} else if (xquad === 4 && yquad === 1) {
				result = 'Pure Instinct';
			} else if (xquad === 4 && yquad === 2) {
				result = 'Sensate/Impressionist';
			} else if (xquad === 4 && yquad === 3) {
				result = 'Aesthetician';
			} else if (xquad === 4 && yquad === 4) {
				result = 'Newtype';
			} else {
				result = 'Try again, you probably got 0 in a category somehow.';
			}
			return (
				<div className='App'>
					<FlexView column hAlignContent='center'>
						<p>{`You got... Linear: ${this.state.linear}, and Lexical: ${this.state.lexical}`}</p>
						<h2>You got:</h2>
						<h3>{result}</h3>
					</FlexView>
				</div>
			);
		} else {
			return (
				<div className='App'>
					<FlexView hAlignContent='center' column>
						<FlexView column width={1500}>
							{this.shuffleArray(this.questions).map((question) => (
								<React.Fragment>{question}</React.Fragment>
							))}

							<button onClick={() => this.button()} style={{ marginTop: 25 }}>
								Submit!
							</button>
						</FlexView>
					</FlexView>
				</div>
			);
		}
	}
}

export default App;
