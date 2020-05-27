import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
import TopBar from './index';

class SixteenTypes extends Component {
	state = {};

	render() {
		let match = useRouteMatch();

		return (
			<React.Fragment>
				<p>
					<Link to={`${match.path}/bookkeeper`}>The Bookkeeper</Link>
					(Very linear, very lexical) The Contemplative (Fairly linear, very
					lexical) The Technician (Fairly lateral, very lexical) The Human
					Calculator (Very lateral, very lexical) The Level-Headed (Very linear,
					fairly lexical) The Understanding (Fairly linear, fairly lexical) The
					Quick-Witted (Fairly lateral, fairly lexical) The Analyst (Very
					lateral, fairly lexical) The Clearsighted (Very linear, fairly
					impressionist) The Externalist (Fairly linear, fairly impressionist)
					The Overseer (Fairly lateral, fairly impressionist) The Fascinator
					(Very lateral, fairly impressionist) The Purely Instinctual (Very
					linear, very impressionist) The Impressionist (Fairly linear, very
					impressionist) The Aesthetician (Fairly lateral, very impressionist)
					The Newtype (Very lateral, very impressionist)
				</p>
				<Switch>
					<Route path={`${match.path}/bookkeeper`}>
						<TopBar />
						<p>
							Very linear, very lexical thinkers are the classic idea of the
							“Type-A,” “anal retentive” types. These people have little
							patience for nonsense because they need their time just to process
							the rules which are already in place--and they are obsessed with
							rules, whether those be the laws of the land, or their own
							conception of the rules of nature. To one of these people, a word
							which doesn’t fit its definition to the letter is an inappropriate
							word, and anyone using or spelling words wrongly comes off as
							dumb. Thanks to their very strict view of what is correct and
							incorrect, these characters tend to find themselves in arguments
							with less-precise communicators often. The ones with more relaxed
							attitudes will likely blow off and ignore much of what they see as
							the nonsense coming out of the mouths of their less-lexical
							friends. Lexical thinkers have a tendency to assume positions of
							authority because of their ability to identify and enforce the
							rules of a system to the letter--however, being on the far end of
							the lexical spectrum, these people have difficulty understanding
							and communicating with more impressionistic people, which can make
							it difficult for them to take up leadership positions that require
							them to communicate with those people. The spirit of the law is
							often difficult to capture in its letters, after all, which is why
							a lot of legal language is written to be deliberately and
							intricately vague. This is why linear-thinking hyper-lexical
							thinkers tend to be better at enforcing rules than they are at
							making or understanding rules--hence my titling them as
							Bookkeepers. For one of these people, the biggest threats to their
							happiness are getting trapped in a system that takes advantage of
							them, and their difficulty in communicating with less-lexical
							thinkers. Linear thinkers tend to have a powerful sense of self,
							since at any given time they define themselves in that moment by
							their singular ongoing chain of thought; whereas more lateral
							thinkers may struggle to place themselves within the current
							moment--instead viewing themselves in terms of behavioral trends
							or life arcs; but we’ll talk more about Lateral thinkers when we
							get to their sections. To get the best understanding of how these
							neurotypes types manifest themselves in anime, I find it most
							helpful to start by highlighting the characters with the highest
							and lowest IQs in each category, as they show us the extremes of
							how these neurotypes effect a person’s life. Our high-IQ
							characters will be the Patron Saints of their respective
							categories, while the lower-IQ characters will be the Workin’
							Hards. The Patron Saint of Bookkeepers would be Tsunemori Akane
							from Psycho-Pass. Top of her class and given the highest
							recommendation for every possible job in government by the
							government, Akane was pretty much written specifically to be the
							ultimate Type-A personality. It could be argued that her arc over
							the course of the entire show is her struggle to understand the
							conception nearly everyone else she encounters has that the
							letters of this world’s laws are fundamentally flawed; and in the
							end, she comes to the conclusion that the spirit of the law, while
							yet intangible, is something fundamentally different from the
							current letter of the law, and that she will from now on consider
							herself loyal to the letters of her own codification of the law.
							Of course, no one’s ever been Workin’ Hard like Ei-chan from Baby
							Steps. Right from the start, we are introduced to Ei-chan as
							someone who has reached the top of his class in spite of the fact
							that absolutely nothing about learning comes easily to him, purely
							because he will just continually study a subject until he is
							finally able to grasp it. With his neurotype and work ethic,
							there’s no question that Ei-chan would’ve easily found work in any
							kind of middle-management position, which the Japanese education
							basically exists for the sole purpose of filing people into.
							However, to the shock of literally everyone, Ei-chan, who is so
							unfit that he can’t even jog short distances, develops an interest
							in tennis--and as soon as his coach is able to show him that
							tennis is a game which can be player hyper-lexically, he becomes
							totally enthralled with it. If Ei-chan had a more lateral mind,
							he’d be able to interpret a lot more of the sensory data which he
							takes in while playing a match during the course of play--but
							because he’s such a linear thinker, it takes all of his
							concentration just to be able to react in the heat of the moment.
							Only after pouring over what he saw in extensive detail can
							Ei-chan get a firm grasp on what just happened and start trying to
							compare it against previous notes--but because he needs to be able
							to do at least some of this on the fly in order to make
							adjustments to his play over the course of a match, he goes
							straight to his notebook after every play, draws out the
							trajectories of every pass, and takes as many notes as he can
							before he has to go back. Ei-chan shows us how even someone with a
							low IQ can find a way to engage with something which might
							initially seem totally out of their lane, and that they can
							potentially advance and find happiness or success even if it takes
							a lot more work than it would for smarter or better-fit people.
							Another lower-IQ character in this category is Utena Tenjou.
							Utena’s personal code of ethics differs from that of the society
							surrounding her in certain ways, but she very much holds herself
							and those around her to that code--even though her relative
							ignorance makes her easy to manipulate by smarter thinkers of all
							categories. Middle Managers with average IQ are extremely common
							in anime--most often as somewhat stereotypically nagging
							girlfriends. The nagging girlfriend archetype in any culture
							essentially represents that culture’s platonic ideals--a person
							who demands that the main character, who is neurally unfit to
							fulfill that society’s platonic ideal, become more like that
							ideal. Since Japanese society is very lexically driven, characters
							like Yoko from Gurren Lagann, Kagome from Inu-Yasha, Steph from No
							Game No Life, Winry from FullMetal Alchemist, Kaname from Full
							Metal Panic, Misty from Pokemon, and of course Chiri from Sayonara
							Zetsubou Sensei are all highly critical of risky behavior, annoyed
							by egotism, and of course in love with their man’s mysterious,
							unplaceable charisma for a reason that’s always out of grasp… If
							this character type is put into a group of girls they fulfill a
							similar straight-man role: as in the cases of Mio from K-On or
							Kagami from Lucky Star. Guys with personalities like this will
							have their friends asking “what are you, my wife?” all the time.
							Jet Black from Cowboy Bebop is probably the only guy structured
							enough to keep a hold on Spike. Shinpachi tries his damndest to do
							the same for the crew in Gintama, but he’s trounced by the fact
							that his companions are just more intelligent. Rossiu’s dedication
							to data nearly led him to shoving humanity back underground in
							Gurren Lagann--but luckily, risk-takers prevailed. Some higher-IQ
							characters in this category would be the likes of Nodoka from K-On
							or Lawrence from Spice and Wolf, who tend to be lacking in
							imagination on their own, but are smart enough to recognize when
							someone else’s less-lexical abilities might be useful.
						</p>
					</Route>
				</Switch>
			</React.Fragment>
		);
	}
}

export default SixteenTypes;
