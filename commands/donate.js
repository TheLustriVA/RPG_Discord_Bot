const Discord = require("discord.js");
module.exports = {
	name: "donate",
	aliases: ["support", "paypal", "patreon"],
	description: "Support Ultimate RPG and get in-game benefits!",
	execute(message) {

		const donateEmbed = generateDonationEmbed();
		return message.channel.send(donateEmbed);

	},
};

const generateDonationEmbed = () => {

	const sideColor = "#45b6fe";
	const title = "If you want to support ** MEGA RPG **";


	const payPalUrl = "https://www.paypal.com/paypalme/";
	const supportServerUrl = "https://discord.gg/mF3xQE69QP";
	const patreonUrl = "https://www.patreon.com/";

	const links = `[Patreon](${patreonUrl}) Get in-game benefits like reduced cooldown \n [PayPal](${payPalUrl}) Help us keeping the servers alive! \n [Support Server](${supportServerUrl}) Join our support server`;


	const donateEmbed = new Discord.MessageEmbed()
		.setTitle(title)
		.setColor(sideColor)
		.setDescription(links);

	return donateEmbed;
};