import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams,
} from 'react-router-dom';
import FlexView from 'react-flexview/lib';
import SixteenTypes from './sixteentypes';

class TopBar extends Component {
	state = {};
	render() {
		return (
			<FlexView
				height='75px'
				style={{ backgroundColor: '#AAAAAA', marginBottom: 30 }}
			>
				<FlexView marginRight='auto' style={{ margin: 30 }}>
					Neurotyping
				</FlexView>
				<FlexView marginLeft='auto'>
					<Link to='/16types' style={{ margin: 30 }}>
						16 types
					</Link>
					<Link to='/howwork' style={{ margin: 30 }}>
						How work?
					</Link>
					<Link to='/purpose' style={{ margin: 30 }}>
						Purpose
					</Link>
					<Link to='/test' style={{ margin: 30 }}>
						Take Test
					</Link>
				</FlexView>
			</FlexView>
		);
	}
}

export default TopBar;

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Switch>
				<Route path='/test'>
					<FlexView column>
						<TopBar />
						<App />
					</FlexView>
				</Route>
				<Route path='/'>
					<FlexView column>
						<TopBar />
						<p>
							It all started when a certain YouTuber going by the name of
							Digibro uploaded the video "How Anime Characters Think" on April
							13, 2020. Unsatisfied with the very popular personality test known
							as the Myers-Briggs Type Indicator (MBTI), but still inspired by
							its premise, he set out to create his own system which seeks to
							describe one's thinkingstyle. I ask you, what exactly is an
							“introverted” person? Is it someone who doesn’t like to be around
							other people period, or is it someone who struggles to find people
							that they like to be around because there are so few people that
							they can connect with? Maybe I don’t like being around my friends,
							or maybe I just don’t have the right friends--either way,
							introversion is a behavioral symptom, not a cause. Far more
							important to understanding why people act the way they do is to
							understand why they think the way they think, and that’s where
							Neurotypology comes in! Not unlike MBTI, this system breaks the
							human neurotypes into 16 categories. This is much easier to
							classify someone with--you don’t even need this quiz or anything.
							This quiz has been created for the sole purpose of helping those
							who have trouble placing themselves on the chart by giving them
							questions to think about. Furthermore, this test and system are by
							no means complete or scientific. Neurotypology is still very new
							and changes can be made to it at any given moment. If you want to
							have a place to discuss the system and to offer new ideas, please
							visit the Subreddit or the Discord.
						</p>
					</FlexView>
				</Route>
				<Route path='/howwork'>
					<TopBar />
					<p>
						Linear vs. Lateral thinking Linearity refers to how linear the
						thoughts in your head are. An extremely linear thinker only has a
						single train of thought at any given time, and communicates in very
						straightforward ways; while a non-linear or Lateral thinker will
						have multiple trains of thought at any given time and tend to
						communicate in more jumbled or indirect ways. Linear thinkers focus
						on coming up with single, well-established answers to problems. They
						are oriented toward deriving the most often correct answer to any
						given question. Linear thinkers heavily emphasize accuracy, speed,
						and logic and focus on reapplying existing and known techniques,
						recognizing what is familiar, and accumulating and recalling stored
						information. When an answer readily exists and simply needs to be
						either recalled or worked out through decision making strategies,
						the Linear thinker shines the most. A very important part of Linear
						thinking is that it leads to a single "best" answer, leaving little
						to no room for ambiguity. As such, Linear thinkers often come up
						with answers that are either right or wrong, which also impacts the
						way they process information (Cropley, 2006). Lateral thinking, on
						the other hand, is a method or thought process that is used to
						generate creative ideas by exploring many possible solutions.
						Lateral thinking typically occurs in a free-flowing, spontaneous,
						"non-linear" manner, which results in many ideas being generated in
						an emergent cognitive fashion. In a short amount of time, the
						Lateral thinker explores many possibilities and they consequently
						often draw unexpected connections (Baer, 2014). Lexical vs.
						Impressionistic thinking Lexicality refers to how much a person’s
						understanding depends on the ability to codify ideas using specific
						language. An extremely lexical thinker will only understand things
						which they can put into words, refusing to acknowledge
						understandings which haven’t been codified. Non-lexical or
						Impressionistic thinkers on the other hand might have a firmer
						understanding of things, but they may struggle to put them into
						words and instead find other methods of communication preferable.
					</p>
				</Route>
				<Route path='/16types'>
					<TopBar />
					<p>
						<Link to='/16types/bookkeeper'>The Bookkeeper</Link>
						(Very linear, very lexical)
						<br /> <Link to='/16types/contemplative'>The Contemplative</Link>
						(Fairly linear, very lexical) <br />{' '}
						<Link to='/16types/technician'>The Technician</Link> (Fairly
						lateral, very lexical)
						<br />{' '}
						<Link to='/16types/humancalculator'>The Human Calculator</Link>{' '}
						(Very lateral, very lexical) <br />
						<Link to='/16types/levelheaded'>The Level-Headed</Link> (Very
						linear, fairly lexical) <br />
						<Link to='/16types/understanding'>The Understanding</Link> (Fairly
						linear, fairly lexical) <br />
						<Link to='/16types/quickwitted'>The Quick-Witted</Link>
						(Fairly lateral, fairly lexical)
						<br /> <Link to='/16types/analyst'>The Analyst</Link> (Very lateral,
						fairly lexical) <br />
						<Link to='/16types/clearsighted'>The Clearsighted</Link> (Very
						linear, fairly impressionist) <br />{' '}
						<Link to='/16types/externalist'>The Externalist</Link> (Fairly
						linear, fairly impressionist)
						<br /> <Link to='/16types/overseer'>The Overseer</Link>
						(Fairly lateral, fairly impressionist) <br />
						<Link to='/16types/fascinator'>The Fascinator</Link> (Very lateral,
						fairly impressionist) <br />
						<Link to='pureinstinct'>The Fascinator</Link> (Very linear, very
						impressionist) <br />
						<Link to='/16types/sensate'>The Sensate</Link> (Fairly linear, very
						impressionist)
						<br />
						<Link to='/16types/aesthetician'>The Aesthetician</Link> (Fairly
						lateral, very impressionist) <br />
						<Link to='/16types/newtype'>The Newtype</Link>
						(Very lateral, very impressionist)
					</p>

					<Switch>
						<Route path='/16types/bookkeeper'>
							<h2>The Bookkeeper</h2>
							<p>
								Very linear, very lexical thinkers are the classic idea of the
								“Type-A,” “anal retentive” types. These people have little
								patience for nonsense because they need their time just to
								process the rules which are already in place--and they are
								obsessed with rules, whether those be the laws of the land, or
								their own conception of the rules of nature. To one of these
								people, a word which doesn’t fit its definition to the letter is
								an inappropriate word, and anyone using or spelling words
								wrongly comes off as dumb. Thanks to their very strict view of
								what is correct and incorrect, these characters tend to find
								themselves in arguments with less-precise communicators often.
								The ones with more relaxed attitudes will likely blow off and
								ignore much of what they see as the nonsense coming out of the
								mouths of their less-lexical friends. Lexical thinkers have a
								tendency to assume positions of authority because of their
								ability to identify and enforce the rules of a system to the
								letter--however, being on the far end of the lexical spectrum,
								these people have difficulty understanding and communicating
								with more impressionistic people, which can make it difficult
								for them to take up leadership positions that require them to
								communicate with those people. The spirit of the law is often
								difficult to capture in its letters, after all, which is why a
								lot of legal language is written to be deliberately and
								intricately vague. This is why linear-thinking hyper-lexical
								thinkers tend to be better at enforcing rules than they are at
								making or understanding rules--hence my titling them as
								Bookkeepers. For one of these people, the biggest threats to
								their happiness are getting trapped in a system that takes
								advantage of them, and their difficulty in communicating with
								less-lexical thinkers. Linear thinkers tend to have a powerful
								sense of self, since at any given time they define themselves in
								that moment by their singular ongoing chain of thought; whereas
								more lateral thinkers may struggle to place themselves within
								the current moment--instead viewing themselves in terms of
								behavioral trends or life arcs; but we’ll talk more about
								Lateral thinkers when we get to their sections. To get the best
								understanding of how these neurotypes types manifest themselves
								in anime, I find it most helpful to start by highlighting the
								characters with the highest and lowest IQs in each category, as
								they show us the extremes of how these neurotypes effect a
								person’s life. Our high-IQ characters will be the Patron Saints
								of their respective categories, while the lower-IQ characters
								will be the Workin’ Hards. The Patron Saint of Bookkeepers would
								be Tsunemori Akane from Psycho-Pass. Top of her class and given
								the highest recommendation for every possible job in government
								by the government, Akane was pretty much written specifically to
								be the ultimate Type-A personality. It could be argued that her
								arc over the course of the entire show is her struggle to
								understand the conception nearly everyone else she encounters
								has that the letters of this world’s laws are fundamentally
								flawed; and in the end, she comes to the conclusion that the
								spirit of the law, while yet intangible, is something
								fundamentally different from the current letter of the law, and
								that she will from now on consider herself loyal to the letters
								of her own codification of the law. Of course, no one’s ever
								been Workin’ Hard like Ei-chan from Baby Steps. Right from the
								start, we are introduced to Ei-chan as someone who has reached
								the top of his class in spite of the fact that absolutely
								nothing about learning comes easily to him, purely because he
								will just continually study a subject until he is finally able
								to grasp it. With his neurotype and work ethic, there’s no
								question that Ei-chan would’ve easily found work in any kind of
								middle-management position, which the Japanese education
								basically exists for the sole purpose of filing people into.
								However, to the shock of literally everyone, Ei-chan, who is so
								unfit that he can’t even jog short distances, develops an
								interest in tennis--and as soon as his coach is able to show him
								that tennis is a game which can be player hyper-lexically, he
								becomes totally enthralled with it. If Ei-chan had a more
								lateral mind, he’d be able to interpret a lot more of the
								sensory data which he takes in while playing a match during the
								course of play--but because he’s such a linear thinker, it takes
								all of his concentration just to be able to react in the heat of
								the moment. Only after pouring over what he saw in extensive
								detail can Ei-chan get a firm grasp on what just happened and
								start trying to compare it against previous notes--but because
								he needs to be able to do at least some of this on the fly in
								order to make adjustments to his play over the course of a
								match, he goes straight to his notebook after every play, draws
								out the trajectories of every pass, and takes as many notes as
								he can before he has to go back. Ei-chan shows us how even
								someone with a low IQ can find a way to engage with something
								which might initially seem totally out of their lane, and that
								they can potentially advance and find happiness or success even
								if it takes a lot more work than it would for smarter or
								better-fit people. Another lower-IQ character in this category
								is Utena Tenjou. Utena’s personal code of ethics differs from
								that of the society surrounding her in certain ways, but she
								very much holds herself and those around her to that code--even
								though her relative ignorance makes her easy to manipulate by
								smarter thinkers of all categories. Middle Managers with average
								IQ are extremely common in anime--most often as somewhat
								stereotypically nagging girlfriends. The nagging girlfriend
								archetype in any culture essentially represents that culture’s
								platonic ideals--a person who demands that the main character,
								who is neurally unfit to fulfill that society’s platonic ideal,
								become more like that ideal. Since Japanese society is very
								lexically driven, characters like Yoko from Gurren Lagann,
								Kagome from Inu-Yasha, Steph from No Game No Life, Winry from
								FullMetal Alchemist, Kaname from Full Metal Panic, Misty from
								Pokemon, and of course Chiri from Sayonara Zetsubou Sensei are
								all highly critical of risky behavior, annoyed by egotism, and
								of course in love with their man’s mysterious, unplaceable
								charisma for a reason that’s always out of grasp… If this
								character type is put into a group of girls they fulfill a
								similar straight-man role: as in the cases of Mio from K-On or
								Kagami from Lucky Star. Guys with personalities like this will
								have their friends asking “what are you, my wife?” all the time.
								Jet Black from Cowboy Bebop is probably the only guy structured
								enough to keep a hold on Spike. Shinpachi tries his damndest to
								do the same for the crew in Gintama, but he’s trounced by the
								fact that his companions are just more intelligent. Rossiu’s
								dedication to data nearly led him to shoving humanity back
								underground in Gurren Lagann--but luckily, risk-takers
								prevailed. Some higher-IQ characters in this category would be
								the likes of Nodoka from K-On or Lawrence from Spice and Wolf,
								who tend to be lacking in imagination on their own, but are
								smart enough to recognize when someone else’s less-lexical
								abilities might be useful.
							</p>
						</Route>
						<Route path='/16types/contemplative'>
							<h2>The Contemplative</h2>
							<p>
								While similar for the most part and kind of hard to distinguish
								from the Bookkeepers, especially when we’re talking about anime
								characters who tend to be presented with more extreme
								personalities, the distinguishing factor of a less-linear
								thinker would be their ability to step outside of themselves,
								granted by the increase in number of simultaneous trains of
								thought. People in this category make for good doctors, lawyers,
								and killers because of the increased distance they can put
								between themselves and their actions or the consequences
								thereof, while still functioning in highly-lexical contexts. The
								Patron Saint of Contemplatives is undoubtedly Light Yagami from
								Death Note. While the distance he puts between himself and his
								actions eventually allows him to stomach his own sickening
								power, once he’s convinced himself that the letter of his law is
								the right one, nothing can stop him from putting the world into
								his version of order. Spending so much time embodying the
								separate conception of himself which he develops to fulfill his
								godly role eventually causes that version of his personality to
								become his real one, as more lateral thinkers continue finding
								their way towards boxing him in. The Contemplative Workin’ the
								Hardest is good ol’ Mob from Mob Psycho 100. Not unlike Ei-chan,
								Mob tasks himself with a physical challenge outside his
								wheelhouse, although since he lacks a coach who can easily help
								him to understand how to make progress with his exercise, it
								remains a slow and difficult slog. While Mob is like Utena in
								that his adherence to what he sees as the rules makes him easy
								to manipulate by anyone creative enough to make up the rules for
								him, he is somewhat more mysterious in that he seems to
								internally have doubts about the things others tell him, but to
								outwardly go along with it anyways--and learning to listen to
								that doubtful, more honest side of himself and bring it to the
								forefront is a major part of his arc. I think Kiki from Kiki’s
								delivery service is a similar, possibly somewhat more
								intelligent character, though it’s hard to say since she’s even
								younger. The reason I call these characters Contemplatives is
								that whereas their chain of thought is very lexical, their
								ability to think multiple things at the same time means that
								their outward and inward personalities can differ from
								one-another--and as such, they tend to do more of their thinking
								on the inside and to verbalize only their conclusions. You’ll be
								more likely to hear these characters speaking often if they are
								more intelligent and able to come to conclusions quickly. Some
								quieter characters of this type are the likes of Hiei from Yuu
								Yuu Hakusho, Kiritsugu from Fate/Zero, Jin from Samurai
								Champloo, and Sasuke from Naruto. While these characters often
								have just as many contentions with the seemingly-illogical
								statements of the people around them as the Bookkeepers, they
								are more likely to keep those feelings internal until
								confronted. More talkative characters of this type include Nami
								from One Piece, Ryuk from Death Note, and Arima from Kare Kano.
								These characters are almost just as self-assured as their more
								linear counterparts in the Middle Management category, but again
								their ability to step back from themselves gives them a chance
								to be a bit more self-aware and to humor perspectives outside
								their own under the supposition that they put their own
								standpoint on hold for a moment.
							</p>
						</Route>
						<Route path='/16types/technician'>
							<h2>The Technician</h2>
							<p>
								Technicians are one of the more common types of characters found
								in anime, likely because many fans and creators of anime fall
								into this category. Technicians are usually thinking about a few
								unrelated things at once, but they still very clearly understand
								those things in lexical terms--which makes them great for jobs
								which involve keeping track of huge amounts of data in service
								of developing a greater whole, such as coding, accounting, and
								even most styles of animating, given it requires drawing the
								same thing over and over with slight variations while keeping
								track of how they effect the whole of the cut. Anime’s Patron
								Saint Technician is Makise Kurisu from Steins;Gate. Her high IQ
								and fairly lateral thinking make her able to understand new
								concepts extremely fast, as long as there is a clear, lexical
								justification for those ideas. Not unlike the bossy
								middle-managers we talked about before, the most difficult thing
								for her to deal with is the nonsense logic of a less-lexical,
								lower-IQ, and even-more-lateral thinker like Okabe--but we’ll
								get to him later. Tohsaka Rin from Fate/Stay Night is kind of
								the same type of thinker but for magic. I wasn’t able to find a
								popular anime character that I knew well enough to put in the
								lower-IQ section of this category, but if I had to name a
								technician who’s most certainly Workin’ Hard, it’d be Kobayashi
								from Miss Kobayashi’s Dragon Maid. Kobayashi is one of the most
								realistic and imminently relatable anime characters around, and
								I have to imagine that her day-to-day life and way of thinking
								is about as accurate to the real life experience of the average
								Technician as anime has ever gotten. Similarly, Kugiyama from
								Genshiken would likely fall into this category. Technicians fill
								a lot of interesting roles in anime thanks to the vast array of
								situations they see themselves applied to. Ginko from Mushi-shi
								is essentially a travelling technician solving problems with
								nature spirits. Rimuru from Tensura uses his technical prowess
								to fix monster society in the world he gets isekai’d to. Ritsuko
								Akagi from Evangelion and Leeron from Gurren Lagann need their
								lateral thinking abilities just to keep up with the data outputs
								and repairs for all the giant robots they need to oversee, as do
								so many other anime scientists; while Black Jack is sort of the
								ultimate doctor thanks to his lateral mind. Killua from Hunter X
								Hunter is a sort of murder technician. For examples of these
								characters who haven’t yet graduated highschool, look no further
								than Hanekawa from the Monogatari series and Mei from Manabi
								Straight. It is worth noting that because lateral thinkers have
								somewhat faster and more chaotic minds than the average person,
								they can preoccupy themselves with their own thoughts and
								interests more easily than linear thinkers, and will more
								quickly become disinterested or bored with things which don’t
								interest them. If they don’t have the IQ to recognize this
								behavior in themselves and mask or take advantage of it, then
								there is a decent change that they may be diagnosed with
								developmental disorders such as ADHD, aspergers, or autism.
							</p>
						</Route>
						<Route path='/16types/humancalculator'>
							<h2>The Human Calculator</h2>
							<p>
								The more data which a human mind can process at once, and the
								more lexically they understand that data, the closer they come
								to functioning like a human calculator. A more lateral view of
								the world tends to be much more complex than a linear one, and a
								more lexical view tends to be much more specific--meaning that
								these people consider the world to operate under a very complex
								and particular set of rules which they are very serious about
								following. Human Calculators, like any hyper-lateral thinkers,
								are recognizably autistic to just about anyone regardless of
								their IQ. As someone’s worldview becomes increasingly specific
								and alienating thanks to the breadth of their perspective, they
								are harder and harder for anyone else to relate to, including
								fellow lateral thinkers who have come to different conclusions.
								The more autistic someone is, the less likely others are to be
								able to parse the specifics of their worldview, and may at best
								be able to grasp the broad strokes of their perspective. The
								Patron Saint of Human Calculators is L from Death Note. This guy
								is constantly loading his brain with an endless stream of raw
								data and pumping out calculations like it’s nobody’s
								business--yet he’s so particular about following the letter of
								the law that even when Light is basically the only suspect on
								the face of the planet, L still feels the need to prove his
								actions beyond a shadow of a doubt before doing something about
								him. This, in spite of the fact that from anyone else’s
								perspective, L would seem to be breaking every rule that exists
								in polite society--but from L’s perspective, he is doing
								everything in the way he’s deemed most-optimal. It is very rare
								that these characters are portrayed in anime as anything less
								than super geniuses, but thankfully there’s one boy Workin’ Hard
								enough to give us an idea of how this would manifest at a lower
								IQ in the form of Sousuke Sagara from Full Metal Panic. This
								guy’s hyper-lateral thinking allows him to make quick decisions
								and protect his ass on the battlefield, where knowing the most
								logical decision to make in a given situation will usually
								prevail--however, his hyper-specific understanding of how to
								survive in the world has little application in the daily life of
								a Japanese high schooler; and because Sousuke is an idiot his
								attempts to identify the best course of action in situations he
								doesn’t understand leads to taking the wrong actions constantly.
								Mostly, though, I could say all the same things about the rest
								of these characters that I did about L. Shiro from No Game No
								Life, Smile from Ping Pong, and Yuki Nagato from The Melancholy
								of Haruhi Suzumiya are all unintentionally-eccentric geniuses
								who can run through countless possibilities in their head at
								mach speed and choose just-right conclusions based on their
								understanding--which will only be skewed in situations where
								less-lexical interpretations of inputs were necessary for
								understanding.
							</p>
						</Route>
						<Route path='/16types/levelheaded'>
							<h2>The Level-Headed</h2>
							<p>
								While linear thinkers are usually very straightforward in their
								communication, it doesn’t mean that they only way they can ever
								understand things is through words--in fact, I would argue that
								the human brain was fundamentally designed to be able to
								understand things without the use of language. Lexical thinkers
								aren’t incapable of harboring impressions somewhere within their
								minds, but those impressions lack any concrete sense of meaning
								to them until they are able to be codified somehow. Level-Headed
								people on the other hand, while still mostly relying on language
								to communicate, are more capable of listening to their gut and
								considering the validity of ideas which they have yet to fully
								codify, even if they may continue working to do so. While it’s
								hard to find a character like this with an especially high IQ,
								there’s no doubt that the category’s patron saint is Saitama
								from One Punch Man. Compared to the extreme personalities
								surrounding him, he is almost serenely placid and perfectly
								reasonable towards most circumstances and people--you could even
								say it’s like his superpower. Besides of course being One Punch
								Man. Whereas Bookkeepers almost never get to be the stars of
								action-adventure stories, Level-Headed people are fairly popular
								as older-teen protagonists in shounen manga--and none is Workin’
								Hard like Yusuke Urameshi, who’s just a regular, reasonable guy
								constantly beset by the unreasonability of the world around
								him--and since he lacks the intelligence to deal with things
								rationally, he spends a lot of time pissed off, confused, and
								flailing in the dark--but after years of learning, training, and
								taking responsibility, he becomes a big damn hero. Similar
								things could be said of Ichigo from Bleach, Chihiro from
								Spirited Away, or even Hikaru from Macross. These characters can
								play great support to less-reasonable or more-lateral characters
								as well, as do Zoro from One Piece, Naotsugu from Log Horizon,
								Jigen from Lupin III, and Azusa from K-On. In Genshiken, part of
								the joke is that Saki Kasukabe is this type of person, but is
								made to seem unreasonable from the perspective of the
								unLevel-Headed people surrounding her.
							</p>
						</Route>
						<Route path='/16types/understanding'>
							<h2>The Understanding</h2>
							<p>
								The four categories in the center of the chart are inevitably
								some of the rarest, simply because it is almost required to
								employ some nuance in their characterization to keep them from
								coming across as more fringe personalities. When I created this
								category and called it Understanding people, I initially
								second-guessed the classification thinking it too specific, and
								yet every anime character I could find who fit this category
								could also be perfectly described by the word “Understanding” in
								some sense, which either means that it’s the only context anime
								has found to employ this neurotype, or that people of this
								neurotype are just intrinsically predisposed to caretaking
								roles. Considering their placement on the chart, this kind of
								makes perfect sense, because they’re in the best position out of
								any Neurotype to be able to understand people of the largest
								different number of other Neurotypes and to help organize and
								codify those people’s ideas. They can step outside of themselves
								thanks to their more lateral thinking, and they are
								understanding of more impressionist ideas because they aren’t
								purely lexical thinkers themselves--yet their relative linearity
								and lexicality makes their minds a lot more organized than
								less-linear and less-lexical thinkers. The Patron Saint of
								Understanding people is Misato Katsuragi from Neon Genesis
								Evangelion. Her relatively lateral thinking gives her in
								advantage in action scenarios not only because she can keep
								track of multiple things and solve problems quickly, but also
								because she can parse some of the more lateral ideas proposed by
								the scientists and analysts surrounding her. She also has some
								complex, non-lexical feelings that she very much does not want
								to talk about, and as such she can be empathetic towards the
								extremely impressionistic attitudes of the young people
								surrounding her. In the end, she ends up playing den mother to
								basically everyone. While I wouldn’t consider him to have
								below-average IQ, Takasu Ryuuji from Toradora is most definitely
								Workin’ Hard. His thinking is neither nearly as lateral nor
								impressionistic as Taiga’s, but it’s just enough of both that he
								empathizes with her easily and doesn’t take too long to fully
								understand her--and then, of course, to find himself taking care
								of her. Depending on their temperament, Understanding people can
								range from gentle-hearted but stern-willed characters like Fate
								from Nanoha, Haru from Beastars, Asuna from Sword Art Online,
								Brock from Pokemon, and Shirayukihime, to more sarcastic,
								begrudging Understanding people such as Kyon from Haruhi or any
								of the main guys in Air, Clannad, and Kanon.
							</p>
						</Route>
						<Route path='/16types/quickwitted'>
							<h2>The Quick Witted</h2>
							<p>
								While you may think that being in one of the central squares
								would mean that Quick-Witted people have just as easy a time
								getting along with others as Caretakers, this isn’t necessarily
								the case, as more lateral thinkers will inevitably come to have
								much more specific and complex worldviews than more
								straightforward thinkers. While they still do have more of an
								ability to understand and communicate with people across a
								larger chunk of the chart than most hyper-lexical thinkers do,
								it is likely that the perceived cleverness of these quick-witted
								types will be relative to their audience. Holo from Spice and
								Wolf is, of course, the Patron Saint of witty characters.
								Whereas hyper-lexical characters have more of a tendency to
								focus on the exact meanings of words, those with a more
								impressionistic view of language will tend to view it as
								something to be toyed with, and to deliberately navigate the
								gaps in its ability to communicate. Holo uses her more lateral
								and less-lexical take on language to tease and entertain her
								friend Lawrence, whom we’ve previously identified as a high-IQ
								Middle Manager. Quick-witted characters occupy a range of
								personalities, on account of this likely being another category
								into which a lot of anime fans and staff would themselves be
								placed, given it’s only a small step to the right of the
								technicians, and that being an animator means being a technician
								in a medium which is essentially non-lexical by nature. For a
								more realistic take on a high-intellect person of this
								neurotype, look to Yukino from Kare Kano as a main character, or
								Kensuke from Evangelion as a support. A more realistic and
								incredibly unfortunate low-IQ example is of course the infamous
								Tomoko from Watamote, who’s Workin’ Hard in her own way. I was
								tempted to put Kirito in the low-IQ section of this category,
								but I think Reki Kawahara was trying to write him as a high-IQ
								Technician and failed because he, himself, is a low-IQ,
								fast-thinking author--which is why I tried to stick to
								well-realized characters for most of this chart. Ryuugamine from
								Durarara and Watashi from Humanity Has Declined are more
								intelligent characters in this archetype with a lot of
								interesting outlooks on the society around them, while I’d argue
								Lupin III is perhaps even more over-the-top intelligent than
								Holo as a character in this category, though I didn’t want to
								pick him as Patron Saint simply because Holo’s show is almost
								dedicated to communication. To put it another way, conversation
								is a game which Lupin loves but plays to win--as does Faye
								Valentine from Cowboy Bebop while I’m at it--whereas Holo plays
								just for fun. You could probably say the same about Shinobu from
								Monogatari, but she’s a bit more blase towards conversation as
								compared to Holo. Sometimes the witty life can be a struggle,
								too. Simon the Driller started pretending to be a purely lexical
								thinker after an earthquake killed his parents and scared him
								straight, but the outlandishly impressionistic Kamina brought
								that part of him back to the surface and put him in this
								category. Handa-kun from Barakamon deals with trying to navigate
								the narrow space between lexicality and impressionism wherein
								resides calligraphy, as someone for whom coming to terms with
								the inability to codify his abstract feelings is part of his
								arc. I don’t wanna go on about this category all day, so I’ll
								just list a few more I found: Reigen from Mob Psycho, Otako from
								Galko-chan, Tanaka from Genshiken, and Sae from Hidamari Sketch.
							</p>
						</Route>
						<Route path='/16types/analyst'>
							<h2>The Analyst</h2>
							<p>
								Not unlike Quick-Witted, Analysts are common in anime because
								it’s a common Neurotype of anime creators and fans. While a lot
								of these people may feel like human calculators with the sheer
								amount of information constantly bouncing around in their heads,
								most people aren’t quite as hyper-lexical as the people we
								talked about in the previous column, especially if they are,
								again, interested in an inherently somewhat non-lexical medium.
								It’s precisely that slight impressionistic slant which creates
								the Analyst, out of their desire to attempt to codify that
								feeling as lexically as possible to get the best understanding
								that they can. Whereas a living calculator is unlikely to trifle
								itself with considering yet-unproven possibilities, analysts
								will gain a sense of something before they have the ability to
								codify it, and then work towards the ability to do so. Picking a
								Patron Saint of Analysts is difficult, as there are multiple
								high-IQ characters deserving of the title, but I’m gonna have to
								hand it to Sora from No Game No Life, as I think he represents
								the clearest conception of the archetype. Sora is extremely
								intelligent and wealthy with technical knowledge--only slightly
								less so than his adoptive sister, the living computer Shiro,
								even being seven years her senior--but what he’s got on her is
								imagination. Sora figures out what he needs to do and does it
								often as soon as he’s finished understanding it, and before he’s
								found enough words to describe his reasoning--which he always
								does in extensive depth. All it really takes is the
								understanding that impressionistic ideas exist, to begin taking
								a lexical approach towards deconstructing impressionistic
								understandings, affording the analyst much more capability in
								translating impressionist ideas in ways that even a living
								computer might be able to understand--while still understanding
								that there will never be enough words to communicate anything
								“accurately.” Their ability to get at least a loose lexical
								grasp on the impressionistic reasoning of the people around them
								makes them excellent leaders and tacticians, as well as
								extremely dangerous manipulators. On a sliding scale of innocent
								to evil high-IQ Analysts, I’d put Senkuu from Dr. Stone, Shiroe
								from Log Horizon, Lelouch from Code Geass, and Shinra from
								Durarara!! But of course, not everyone who tries to do analysis
								is necessarily good at it, and anime loves to make fun of these
								characters for thinking they’ve decoded the universe when
								they’re actually spewing a bunch of nonsense. The perfect mid-IQ
								Analyst of course is Okarin from Steins;Gate. In dramatic,
								ironic fashion, a lot of Okarin’s manic ravings do turn out to
								be correct--it’s clear that his impressionistic idea of what was
								going on in the world wasn’t unfounded, but his ability to
								explain it was lacking thanks to his substandard scientific
								knowledge. Haruko from FLCL is similarly rambunctious and seems
								to think she has all the answers, having an easy time
								manipulating a naive child like Naota, but in the end she
								underestimated Naota and was undone by her loose and somewhat
								idiotic approach to her goals. In more realistic contexts, these
								characters are most often obsessive otaku with a propensity for
								dispensing long-winded analytical diatribes. Madarame from
								Genshiken is the realest take on this type, while Konata from
								Lucky Star mercifully moefies it. Keima from The World God Only
								Knows and Erika from Durarara are somewhere in-between. Araragi
								from Monogatari is less of an out-and-out otaku, but thinks
								exactly like one. Itoshiki from Sayonara Zetsubou Sensei would
								probably never admit that he was an otaku--and by the way,
								Hiroshi Kamiya voices like half of these characters. Low-IQ
								Analysts aren’t as common, but if anyone out there is Workin’
								Hard, it’d be Naofumi from Rising of the Shield Hero, who finds
								himself at odds with society on the whole and is constantly
								running through an angry, disorganized analysis in his mind of
								how much of a piece of shit everyone else is.
							</p>
						</Route>
						<Route path='/16types/clearsighted'>
							<h2>The Clearsighted</h2>
							<p>
								Impressionistic understanding is often referred to as
								“emotional” or “non-verbal” understanding, including in this
								video for the sake of variety and ease of understanding; but
								neither of those is quite accurate. Lexical thinking does not
								mean thinking in words per se, but thinking with lexemes--i.e.
								The units of a lexicon. You may have heard analysts refer to the
								idea of a “visual lexicon” before, referring to images which
								become lexemes within the visual language of a medium which are
								then repeated by an artist or by other artists. Even a computer
								could technically create an original image by calculating visual
								possibilities on the basis of analyzing images in terms of
								lexemes--however, a computer can never create a new lexeme from
								whole cloth--it can only identify those which have been
								analyzed. The human mind is often compared to a computer, and
								it’s possible that impressionistic thought is technically
								created through esoteric arrangements of unidentified
								lexemes--but we have yet to find a way to program a computer to
								do this automatically at a level which even approaches what the
								human mind is capable of impressionistically. Extending this
								computer metaphor, one could think of the laterality of thought
								as being similar to a computer’s Random Access Memory--however,
								whereas a computer has to be commanded to use its RAM, a human
								has to make an extreme concerted effort through meditation to
								shut it off. Likewise, while you can give a computer a set of
								broad parameters within which it can randomize lexemes to create
								technically original work, an impressionistic thinker just
								simply does think in this seemingly non-lexical way at all
								times. Like, imagine if when they coded the Brave Browser, the
								computer had then just created the logo for it entirely on its
								own based on the impression it got from that code. That’d be
								like impressionistic thinking. But this doesn’t mean that
								impressionism has to manifest itself as art--in can be
								manifested physically, lingually, and emotionally just as
								easily, and we’ll see characters who manifest their
								impressionist thoughts in many different ways as we procede! A
								fairly impressionist but linear thinker will still communicate
								largely through words, but be much more likely to use imprecise
								and impressionistic language or even sound effects and
								non-verbal expressions in conversation. Because these kinds of
								people tend to live in the moment, they don’t likely have the
								patience for art, and will more likely prefer to express
								themselves physically through activities like sports and
								adventure. Like with previous Linear categories, it’s somewhat
								difficult to identify high-IQ characters, as the lack of lateral
								thought kind of limits the speed at which these characters can
								think, but the Patron Saint I’ve chosen for this category is
								Mikuru from The Melancholy of Haruhi Suzumiya. We learn from
								early on that Mikuru is a straight-A student and clearly
								intelligent, but because she doesn’t know how to put up cogent
								arguments against the situations she gets thrust into, she has a
								tendency to simply go along with them and express her discomfort
								in unacknowledged expressions by the autistic Haruhi. When we
								meet the future version of Mikuru, she seems to have gotten much
								more comfortable with speaking and is able to explain things
								clearly and confidently in a way that she probably could have
								all along had she just had more faith in her own intelligence.
								By far the majority of Clearsighted characters though are
								Workin’ Hard as hell, because Linear, Impressionistic characters
								with Low-IQ are pretty much the bread and butter of the shounen
								action/adventure genre. Naruto is gonna be my pick for the
								hardest worker of them all. He’s not quite as abstract as the
								characters we’re going to be talking about in the last column,
								but he’s definitely the type who understands things on the
								emotional level first and foremost, while being a general
								complete and utter moron about everything else. Which is fine,
								because he’s in good company with Ash from Pokemon, Renton from
								Eureka Seven, and Inu-Yasha himself. When the main character
								falls into more of a reasonable role, you can be sure that a guy
								like this is going to be stalking around somewhere in the
								supporting cast, like Kuwabara from Yuu Yuu Hakusho, Taijuu from
								Dr. Stone, or in a rare low-IQ female portrayal of this role,
								Kallen from Code Geass. This isn’t to say that there aren’t
								plenty of girls on this side of the chart, of course--after all,
								women are typically seen as being more commonly impressionistic
								in thought than men. Actually, I think it’s fair to say that the
								ability for a woman to think impressionistically and still be
								intelligent is far more commonly suggested than a man’s ability
								to do the same. When a man has more impressionistic tendencies
								then it tends to be blamed on his lack of intelligence, even if
								he ends up being the one who solves everyone’s problems and
								saves the day in the end. It’s obvious that these authors are
								trying to say that this more impressionistic form of thought has
								value, but because the universes of some stories like Naruto are
								themselves impressionistic in turn, the message is likely to be
								lost on more lexical thinkers who would need to see this
								character proving the worth of impressionist thought in a
								lexically coherent setting. Thankfully, shows about Clearsighted
								girls don’t seem to have the same insecurities as those about
								boys. Madoka Magica, Lyrical Nanoha, and Cardcaptor Sakura all
								tend to feel very strongly for the people around them and
								dedicate the whole of themselves to helping others in the heat
								of the moment. A few male characters do come across similarly,
								such as Ippo from Hajime no Ippo, Alphonse from FullMetal
								Alchemist, or Ashitaka from Princess Mononoke. Alongside them
								I’d put the likes of Kanbaru Suruga from Monogatari, who
								probably isn’t necessarily meant to come off as intelligent as
								Nisioisin can’t help making her sound, and the also Miyuki
								Sawashiro-voiced Celty from Durarara. Saber from Fate/Stay
								Night, Akane from Ranma ½, and Darkness from Konosuba would all
								fall under this category as well.
							</p>
						</Route>
						<Route path='/16types/externalist'>
							<h2>The Externalist</h2>
							<p>
								Externalists fulfil a similar role to Understanding people for
								the same reason of being very close to the highest number of
								different Neurotypes, but whereas Understanding people tend to
								be focused on providing care for others in a more logistical
								sense, Externalists, as the name implies, have a tendency to
								bring emotional nourishment to the people around them through
								their own self-expression. This isn’t to say that all of these
								people will brighten everyone’s day all of the time, but their
								presence tends to comfort people in all of the more linear and
								at-all impressionist categories by creating an atmosphere in
								which it is clear that you will not be judged for your ability
								to portray yourself lexically. Because these people have more
								than a singular train of thought, they are capable of developing
								front-facing personas that they don’t have to intellectually
								embody in the way that linear thinkers do, allowing them to
								craft those personas--and whereas lexical thinkers will craft
								these personas in systems of logic, impressionists will craft
								them around aesthetics. My Patron Saint of Externalists is
								Nyanta from Log Horizon. Nyanta is an older gentleman, a
								hardcore role-playing furry that says “nyaa” at the end of his
								sentences, and acts like a swashbuckling knight of some
								denomination. He is intelligent and wise, patient and
								considerate, understanding and highly capable of communicating
								even with more lexical thinkers through carefully worded
								metaphor. His presence is a comfort to others because you’ll
								never feel like you have to put on airs around a guy who talks
								and acts like a cat, no matter how sagely the stuff he says.
								It’s no surprise that the Understanding person, Serara, admires
								him so much. Porco Rosso has a similar presence to Nyanta, even
								if his disarming appearance wasn’t crafted as a matter of
								choice. A Externalist has a lot more opportunity to succeed even
								with relatively low intelligence because people are generally
								drawn to their presence, which is why I nearly titled this
								category Pop Stars--and after all Minmei from Macross keeps
								Workin’ Hard at her family’s restaurant even after becoming
								famous as a pop idol aboard the Macross. Minmei has her own kind
								of wisdom in places so I wouldn’t go so far as to call her a
								total fuckin’ moron, but she certainly knows how to act like
								one. But it’s not like everyone who’s born to be a pop star
								necessarily gets the opportunity. Dororo is without a doubt a
								delightful personality, but as an orphan child in feudal Japan,
								their gift of gab isn’t good for much more than trying to
								sweet-talk people. Fu from Samurai Champloo is older, cuter, and
								further in the future, so she fares a little better. Galko-chan
								has this effect on people, but her particular choice of
								aesthetic also leads to a lot of misunderstandings. Ayame from
								Shimoneta would be an absolute blast if she wasn’t trapped in a
								society in which the concepts of dirty jokes doesn’t exist
								thanks to regulation. Kazuma from Konosuba is definitely this
								kind of person, but because he’s such a bastard no one wants to
								admit how much they love him--but everyone does. Not all of
								these thinkers are as self-assured or outwardly expressive as
								these, however. Characters like Mayoi from Monogatari, Tsukasa
								from Lucky Star or Yunocchi from Hidamari Sketch are comparably
								low-key, and part of Yuno’s arc is her journey to discover her
								own aesthetic, out of admiration for the impressionist output of
								other creators. Naota from FLCL seems like someone who thinks
								like this but is only just coming to even understand himself by
								the end of the show. This kind of frustration can be seen in
								Soul Eater as well, who is much more outwardly aesthetically
								driven, but also hasn’t quite nailed down exactly the kind of
								person that he wants to be yet. Masaomi from Durarara is in a
								similar position, though he’s been put there as much by external
								forces as by inner conflict.
							</p>
						</Route>
						<Route path='/16types/overseer'>
							<h2>The Overseer</h2>
							<p>
								In a similar way to how Understanding people seem inclined to
								assist more-lateral and more-impressionistic thinkers to
								organize themselves, Overseers seem driven to do something
								similar in reverse--offering emotional comfort to more lexical
								and linear thinkers because they find themselves in the middle
								of all the extremes. However, while these people may be uniquely
								predisposed to understanding and knowing how to help others,
								they don’t necessarily have the words to explain their complex
								impressionistic ideas. These people will most likely develop a
								powerful sense of defeat over the course of their life at how
								often they are misunderstood, and will either need to constantly
								refine their communication to reach people more clearly, or give
								up and simply choose to explain themselves as little as possible
								except in contexts where they are made to feel comfortable
								speaking freely. This guardedness can keep these people feeling
								distant to the people that they care the most about, and keep
								them watching the people they care about from the shadows more
								than directly interacting. Given that I named this category
								Overseers, a lot of these characters will fit that description
								very literally, but my Patron Saint of the category definitely
								doesn’t: she’s the loud and boisterous Asuka from Neon Genesis
								Evangelion. Asuka is an obsessive admirer of the high-IQ
								Room-Brightener Kaji, for whom coolness and charisma are second
								nature. Asuka thinks similarly to Kaji, but her lexicon for
								projecting her ideas of coolness are vastly more complex. She
								obsessively customizes her behavior in order to craft a specific
								character that she considers to represent her innermost
								intentions about her identity--but to outward observers, the
								level of craft put into this performance gives it an appearance
								of facade to more linear thinkers, who aren’t used to the idea
								of a more chaotically-crafted identity. Asuka is smart enough to
								be aware of this, which is why she’s gone out of her way to
								learn how to justify herself lexically, readily diving into
								explanations about why her worldview is correct because she
								can’t tolerate people getting the wrong idea about her
								impressionistically-expressed intentions. What Asuka desires
								more than anything is just for someone to appreciate the level
								of effort that she’s putting into accomplishing her goals while
								remaining true to herself--but her trueness to herself isn’t
								appreciated by anyone else, who would prefer she turn off those
								abrasive parts of her personality in order to cooperate. What
								those people don’t understand is that the whole of the identity
								is integral to their ability to perform themselves. Asuka can’t
								simply achieve the understanding which allows her to operate
								with the efficiency that she does without being in the flow
								state of being true to herself. Evangelion suggests that the
								Overseer is only in the shadows because that’s where society has
								decided to put them--but the majority of these thinkers will
								come to this realization early and simply place themselves
								there, and possibly embrace the role wholeheartedly. Akatsuki
								from Log Horizon is a great example--an aesthetically-obsessed
								role-player who dedicates herself to the service of a loyal
								master offering her strength from the shadows. Even though I’d
								consider her to have a fairly high IQ, her understanding is much
								more physical than lexical, leading to her enormous feats of
								strength and weapon arts. Her arc in the first half of the
								second season is basically about achieving the same kind of flow
								state that Asuka did. Other characters with similar
								personalities to Asuka include the likes of Edward Elric from
								FullMetal Alchemist, Sanji from One Piece, and Gintoki from
								Gintama. Others with personalities more similar to Akatsuki
								include Homura from Madoka Magica, Anri from Durarara, Kurama
								from Yuu Yuu Hakusho, Sasahara from Genshiken, Reina from Hibike
								Euphonium, and Legosi from Beastars. Saori from Wandering Son
								starts off as more of an Asuka and basically gets beaten into
								the shadows by her surroundings. Nadeko from Monogatari goes in
								the opposite direction in the second season. Eureka from Eureka
								Seven is probably the closest to being in the dead center of the
								two extremes. Not every character in this category is quite so
								pronounced, of course. Koizumi from Haruhi seems pretty
								comfortable in the background, though he indulges himself
								somewhat in his kind of eccentric manner of expression, putting
								him on the border of being a Room-Brightener. Hiro from Hidamari
								Sketch is more than comfortable as an art student playing
								low-key wife to her quick-witted counterpart. There aren’t a lot
								of popular low-IQ characters in this category, but to be a
								low-IQ Shadow Guardian is simply to suffer, as evidenced by
								Subaru from Re:Zero. This guy has no idea who the hell he’s
								supposed to be or what the fuck he’s supposed to do, so he’s
								Workin’ Hard ramming his head against every wall in his path
								until it breaks. Poor bastard.
							</p>
						</Route>
						<Route path='/16types/fascinator'>
							<h2>The Fascinator</h2>
							<p>
								If you thought being fairly impressionist and fairly lateral
								made it difficult to connect with and communicate with others,
								it only gets harder as understandings become more laterally
								complex and specific. The only thing keeping these characters
								from registering immediately as autistic is that whereas lexical
								autistic thinkers will attempt to explain themselves with an
								endless string of words, an impressionist is more likely to keep
								to themselves and let their actions do the talking. Because
								their logic is so opaque to outside observers, others tend to
								develop a certain fascination with characters of this type, for
								better or for worse. Senjougahara will have to be the Patron
								Saint for this category because she’s the one who codified it
								herself in the first season of Monogatari. It may be tempting to
								see Hitagi as a more lexical character, as she engages endlessly
								in conversation with Araragi, but this has more to do with
								Nioisin himself being a hardcore analyst who is obsessed with
								impressionistic thinkers. After all, Senjougahara treats
								language entirely like a game, bending it to her desire and
								caring way less about precise meaning than about creating an
								overall impression. That is, with the one person she actually
								feels comfortable opening up to at all--most of the time, she
								prefers the stone wall approach, with a hardcore aggression
								policy towards anyone attempting a breach. Characters with
								hyper-lateral minds that can’t be understood have a tendency in
								anime to use it for evil, like Griffith from Berserk, Gendo from
								Evangelion, Izaya from Durarara, or Char Aznable from Mobile
								Suit Gundam--all who massively manipulate everyone around them
								in service of some grand scheme. C.C. from Code Geass sits
								somewhere mysteriously in-between. Rei from Sangatsu no Lion
								would make another good Patron Saint for this category as
								someone whose incredible intelligence manifests itself in his
								impressionistically hyper-lateral understanding of Shogi, which
								earns him comparison to the current reigning champ, who we
								eventually realize is even more dyslexic in his understanding as
								a result of being literally deaf. What if one of these
								characters flat-out didn’t care what others thought of them and
								laid out the full breadth of their impressionistic,
								hyper-lateral thinking right on the surface? That’s where you
								find the Goddere characters like Haruhi from The Melancholy of
								Haruhi Suzumiya or Kyouka from Kyouran Kazoku Nikki, whose
								confidence in their breadth of lateral understanding leads them
								to regard themselves as literal gods. Kyouka is more often
								correct, though Haruhi is extremely intelligent for a high
								schooler, but if you want to see a lower-IQ version of this
								character, look no further than Isaac from Baccano, whose
								self-confidence persists in spite of frequent failures, only
								offset by what seem like inexplicable successes. Perhaps the
								most relaxed character in this category is Tsumugi from K-On.
								Not only does she seem fairly comfortable hanging in the
								background most of the time, but she manages to make friends who
								appreciate her even if they can barely understand her. We get to
								see a lot more of her chaotic thinking in the way that she moves
								and expresses herself which isn’t usually noticed by the other
								characters. Is there a fascinator out there I can say is Workin’
								Hard? Probably Tatsuhiro Satou from Welcome to the NHK. This
								poor dude’s mind is paranoia theater as he haplessly tries to
								ascribe words to the chaos of his brain, retreating from society
								in the process.
							</p>
						</Route>
						<Route path='/16types/pureinstinct'>
							<h2>The Purley Instinctual</h2>
							<p>
								If you’re always living in the moment, and your understanding of
								that moment is completely dyslexic, then there’s little chance
								that you’re often going to the trouble to stop and recount
								what’s happened to put it into lexical terms for someone
								else--especially if you’re smart enough that your seemingly
								impulsive decisions prove to be the right ones all the time.
								Instinctually-driven characters and people will always be the
								most popular, because they are capable of making the right
								choices in ways that are totally inexplicable to anyone else.
								They are the least pretentious and easiest characters to project
								yourself onto because any lexical reasoning you apply to their
								actions is more specific than what is stated in the text.
								Attempting to understand one of these people is a participatory
								process in which others can’t help but get involved--as
								evidenced by the most perfect real-world example, US President
								Donald Trump. Distinguishing high and low IQ is incredibly
								difficult with these characters because it’s so hard to be sure
								why they made the decisions which they did. In the end, the
								safest bet is to look at their rate of success versus failure,
								and how quickly they learn from mistakes and change course.
								While my choice of Patron Saint is still too young in the story
								to really flex any kind of intellect, I think Gon from Hunter X
								Hunter is presented as much more understanding and adaptable
								than most of the characters in his archetype. He’s a lot more
								likely to actually take that extra second to think things
								through if he’s not completely sure what to do, but when pressed
								he’ll clock into overdrive and let his instincts run wild. If
								anyone’s been Workin’ Hard in this category, you know it’s
								everyone’s favorite boy, Guts. I’ve touched on this archetype
								previously in my video Interesting Anime Protagonists, but in
								spite of this trope being fairly common to anime and manga,
								there aren’t a lot of stories which really try to capture the
								strengths and weaknesses of this manner of thinking the way
								Berserk does. Guts lives an incredibly harsh life from the very
								beginning, but the strength of his instincts always guides him
								to the top of physical confrontation, even if he can barely
								string together a sentence. When considering whether one of
								these characters is lower or higher IQ, I think we should
								consider their adaptability to different situations. Guts is
								basically useless in any context besides a battlefield, whereas
								Gon is actually capable of higher learning in addition to
								instinctual battle prowess. With this in mind the following list
								is organized from what I’d consider lowest to highest IQ based
								on the character’s failure rate of understanding and
								decision-making. Ryouga from Ranma ½, Shirou from Fate/Stay
								Night, Mugen from Samurai Champloo, Goku from Dragon Ball Z,
								Luffy from One Piece, Space Dandy, Ichise from Texhnolyze, Ahiru
								from Princess Tutu, Rei from Neon Genesis Evangelion, and Misaka
								from A Certain Magical Index.
							</p>
						</Route>
						<Route path='/16types/sensate'>
							<h2>The Sensate</h2>
							<p>
								Not unlike Externalists, Impressionists tend to have some kind
								of specific crafted persona which they tend to embody, but these
								people are even less interested in or capable of explaining
								themselves, and as a result are a lot more easily misunderstood.
								Depending on how talkative they are, this might make them come
								off as mysterious, or simply insane to others. The Patron Saint
								of Impressionists is the man who flows like water, Spike Spiegel
								from Cowboy Bebop. While I might not go so far as to call Spike
								a genius, it’s always readily apparent that he’s got a much
								better grasp on the situation than anyone would think, and is
								extremely quick to adapt, only bested by the sheer chaos that
								tends to unfold across one of his missions. Like other somewhat
								non-linear thinkers on the fringes, though, his being a thinker
								makes him a bit of a brooder as well. It’s noteworthy, by the
								way, that after creating this character, Shinichiro Watanabe’s
								next two protagonists were driven by Pure Instinct, as though
								he’d explored as much as he cared to in the realm of thought
								with Spike. I’d have to say that Revy from Black Lagoon is
								Workin’ pretty Hard by comparison. Her constructed character is
								based on a pretty narrow worldview that she isn’t interested in
								challenging, and struggles hard with new ideas. Her instincts
								are great in the heat of battle, and thinking doesn’t seem like
								it has the same amount of value in pursuit of survival.
								Characters I’d put on the more linear side are the likes of
								Ryuko from Kill la Kill, Shizuo from Durarara, Ranma from Ranma
								½, Vash the Stampede from Trigun, Onizuka from Great Teacher
								Onizuka, and Chitose from Girlish Number who thinks that she’s
								one of those Goddere Fascination types and has to learn the hard
								way that she ain’t that. Ritsu from K-On seems like just a bit
								more of a thinker, but not by much, and certainly not
								above-average IQ.
							</p>
						</Route>
						<Route path='/16types/aesthetician'>
							<h2>The Aesthetician</h2>
							<p>
								When we talked about Overseers, we saw how a laterally
								constructed aesthetic identity is difficult to communicate to
								others, in spite of those people being capable of understanding
								people in a lot of neighboring categories. Aestheticians on the
								other hand have an even more difficult time communicating with
								lexical thinkers, and are likely to encounter a lot of
								difficulty and frustration living in a society which is so
								driven by lexical codification, when their personal
								understanding of reality and its rules are not only much more
								laterally intricate, but more lexically unquantifiable. As a
								result, these characters tend to be incredibly frustrated with
								everyone around them, feeling like they are both trying to say
								the same thing and wondering why they’re so hung up on the
								specific word choices. While I can’t say he’s the most
								intelligent character in this category, the undoubted Patron
								Saint of Aestheticians is Kamina from Gurren Lagann. The core
								arc of Gurren Lagann can be considered a story about the need to
								balance lexical and impressionistic thought by showing the
								strengths and weaknesses of both extremes. Where Rossiu was a
								technician who at his worst nearly damns humanity with his lack
								of imagination and at best leads it to rapid sociological
								progress, Kamina’s imagination is what brought humanity out from
								underground in the first place, even though his recklessness was
								eventually the death of him. Kamina wears an intricate and
								aggressive persona which permeates every aspect of his
								communication, not unlike Asuka from Evangelion, but he doesn’t
								feel he needs to justify himself lexically in order to deserve
								to be considered correct--and thus, just like her, he sets out
								to prove himself again and again. He’s a bit more mature than
								Asuka though and fully recognizes his need to rely on more
								lexical thinkers to get him out of trouble--but because his
								Quick-Witted buddy Simon is trapped in a mind prison during
								Kamina’s final battle, he ends up making the wrong impulsive
								gamble. By comparison to Kamina, our boy Black Star from Soul
								Eater is out there Workin’ Hard. He’s got a dope aesthetic going
								on, tons of cool moves and legitimate combat skills, but as a
								result thinks he’s hot shit when he’s actually kind of an idiot.
								He’ll need to figure that out and let his more intelligent
								partner guide him if he wants to succeed. For a more grounded
								take on this type of character, take a look at Taiga from
								Toradora. We actually know from her grades and problem-solving
								abilities that she’s pretty intelligent, but her lingual
								abilities are sorely lacking--not helped by the fact that the
								persona she’s crafted to face the world with is transparently
								inauthentic to her real intentions, causing her to contradict
								herself and mess up constantly until the caretaker Takasu can
								offer her some acceptance. For a younger and less temperamental
								character in this category, take Niitori from Wandering Son,
								whose struggle to understand themselves impressionistically and
								to reflect that understanding externally is the backbone of the
								story. The actual higher-IQ characters in this category would be
								the likes of Accelerator from A Certain Magical Index, and Tohru
								from Miss Kobayashi’s Dragon Maid. Both of these characters have
								a very particular understanding of the world’s rules which
								happens to be fundamentally at odds with the understanding of
								those around them, leading to endless frustration over the fact
								that they both are pretty sure they know what they’re talking
								about but have no way to communicate it to a hyper-lexical
								thinker like their companions--yet both seem to have been
								convinced to shift their hyper-specific worldview slowly to
								better reflect the relationships that they want to have with
								their companion.
							</p>
						</Route>
						<Route path='/16types/newtype'>
							<h2>The Newtype</h2>
							<p>
								What if you had nothing but just insanely complex, detailed and
								robust ideas all the time and absolutely no idea how to express
								them in words without serious deliberation? From the perspective
								of pretty much anyone else, you would seem completely
								incomprehensible--and yet, depending on your intelligence, it
								might be that you actually understand what’s going on in the
								world around you even more completely than a living computer is
								capable of. There could be no Patron Saint of Newtypes but
								Serial Experiments Lain herself--the goddess of the Wired and
								literal schizofrenic. Even though she can hardly squeeze out a
								word when confronted directly, her way of thinking allows her to
								prevail on the internet, where information exists in endless
								forms and arrangements. The dichotomy of how she is perceived is
								common towards these characters: either that of completely
								writing them off, or outright worship. In all honesty, though,
								just as the Human Calculators are usually typecast as
								super-geniuses with social dysfunction, the most common
								portrayal of Newtypes is as hyper-social morons, whose unique
								mental capabilities only lead to feats of bizarre genius about
								as often as lightning strikes the same place. Mako from Kill la
								Kill, Mayuri from Steins;Gate, Yui from K-On, Index from A
								Certain Magical Index, Kafuka from Sayonara Zetsubou Sensei, and
								Miria from Baccano all fall under the trope of a hyper-lateral
								thinker spewing what seems like mostly nonsense much of the
								time, but occasionally stumbling on a long-shot grasp at
								understanding something which no one else in the show could get.
								Not all of these characters are portrayed as equally idiotic,
								though. Miyako from Hidamari Sketch isn’t the brightest, but is
								a more realistic take on the character type. Mamimi from FLCL is
								treated like an idiot by the people around her, but reveals an
								underlying intelligence that no one understands over the course
								of the show. Misaki from Welcome to the NHK comes across
								similarly mysterious, as she keeps most of her real feelings
								veiled behind a lexical persona. Shiki from Kara no Kyoukai is
								presented as fractured between her lateral and impressionistic
								minds, leading to an intensely difficult personality to
								understand. Haku from Spirited Away literally is a god, though
								not necessarily especially intelligent given he is manipulated
								and taken advantage of by smarter humans. Nia from Gurren Lagann
								is probably one of the most heroic characters of this type,
								refusing to be blown off when she isn’t understood and
								steadfastly staking her claim on her understanding in the same
								way that Kamina would have, but while being even more
								intelligent. Anthy from Utena has more of Misaki’s approach,
								where her remarkable and veiled intelligence allows her to
								manipulate everyone around her in ways that they never even
								notice while staying quiet. You may have noticed that I’ve only
								talked about women so far, and that’s because these characters
								are way more commonly female in anime than male, for reasons we
								talked about at the start of the impressionist section. In spite
								of the fact that Japan is a nation with a masterful culture of
								impressionist art, their society puts so much stock in lexical
								thought that more sensitive or egotistical boys will struggle to
								be identified in their culture, whereas woman with those
								personalities will just simply be written off as borderline or
								insane. Shinji from Evangelion is probably the best male example
								in the category as well as the most realistic portrayal of this
								neurotype in anime, and I’m sure it’s got a lot to do with
								what’s made him one of the most contentious anime characters of
								all time. For the more wacky genius variety of Newtype, you can
								look to Eiji Nizuma from Bakuman, who basically draws manga on
								pure instinct following his hyper-lateral thought process. Jing
								from King of Bandits Jing probably falls into this category as
								well, though we never really get much of a peak inside of his
								head--and thought the same can be said of Sakamoto from Haven’t
								You Heard? I’m Sakamoto, it’s clear that his high-IQ Newtype
								problem-solving skills are the backbone of the show. Characters
								of this type:
							</p>
						</Route>
					</Switch>
				</Route>
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
