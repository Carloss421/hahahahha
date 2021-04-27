const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Token')
.setColor('RANDOM')
.setDescription(`**Buyur tokenim!**`)
.setImage("https://cdn.discordapp.com/attachments/663026557689921564/673533189024776203/ErensiNAH.gif")
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["bot-token"],

};

exports.help = {
    name: "token"
};