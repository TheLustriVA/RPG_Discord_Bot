const dailyPrizes = {
	0: {
		gold: 10,
	},
	1: {
		gold: 50,
		["oak wood"]: 15,
	},
	2: {
		gold: 100,
		["oak wood"]: 25,
	},
	3: {
		gold: 300,
		["oak wood"]: 20,
		["copper ore"]: 20,
	},
	4: {
		gold: 1000,
		["oak wood"]: 25,
		["copper ore"]: 25,
		["yew wood"]: 10,
	},
};

const getDailyPrize = (day)=>{
	return dailyPrizes[day];
};

module.exports = { getDailyPrize };