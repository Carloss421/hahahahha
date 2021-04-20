const Discord = require("discord.js");
const fs = require("fs");
const color = JSON.parse(fs.readFileSync(`color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Alv, - Ticket Sistemi`)
.setColor(color.none)
.setDescription(`Ticket açmak için 🎟️ emojisine tıkla.`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}