const signs = [
	{
		name: "aquarius",
		range: "January 20 - February 18",
		horoscope: "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
	},
	{
		name: "pisces",
		range: "February 19 - March 20",
		horoscope: "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back."
	},
	{
		name: "aries",
		range: "March 21 - April 19",
		horoscope: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings."
	},
	{
		name: "taurus",
		range: "April 20 - May 20",
		horoscope: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction."
	},
	{
		name: "gemini",
		range: "May 21 - June 20",
		horoscope: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see."
	},
	{
		name: "cancer",
		range: "June 21 - July 22",
		horoscope: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering."
	},
	{
		name: "leo",
		range: "July 23 - August 22",
		horoscope: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier."
	},
	{
		name: "virgo",
		range: "August 23 - September 22",
		horoscope: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time."
	},
	{
		name: "libra",
		range: "September 23 - October 22",
		horoscope: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible."
	},
	{
		name: "scorpio",
		range: "October 23 - November 21",
		horoscope: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
	},
	{
		name: "sagittarius",
		range: "November 22 - December 21",
		horoscope: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life. Sagittarius is extrovert, optimistic and enthusiastic, and likes changes. Sagittarius-born are able to transform their thoughts into concrete actions and they will do anything to achieve their goals."
	},
	{
		name: "capricorn",
		range: "December 22 - January 19",
		horoscope: "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
	}
]


//When button pushed display horoscpe info
$("#reading-button").click(function(){
	const userSign = $("input").val().toLowerCase();
	const nameInfo = $("#sign-name");
	const dateInfo = $("#sign-date");
	const readingInfo = $("#sign-reading");


	for(var i=0; i < signs.length; i++){
		const currentSign = signs[i].name;
		const currentDate = signs[i].range;
		const currentHoro = signs[i].horoscope;

		if(userSign == currentSign){
			return [nameInfo.text(currentSign), dateInfo.text(currentDate), readingInfo.text(currentHoro)];
		}
		
	}
	if(userSign == ""){
		return readingInfo.text("You didn't enter anything! Please try again");
	}else{
		return readingInfo.text("That's not a horoscope sign! Please try again");
	}
	

});

