
module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
Yo, my prefix is [ 𓆩 + 𓆪 ]\n
SOME COMMANDS THAT HELP YOU:
➥ +help [number of page] -> see commands
➥ +sim [message] -> talk to bot
➥ +callad [message] -> report any problem encountered
➥ +help [command] -> information and usage of command\n\nHave fun using it enjoy!❤️\nBot Developer: https://www.facebook.com/kenzoshin18`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/M4luPbE.gif")
 });
 }
 }
}
