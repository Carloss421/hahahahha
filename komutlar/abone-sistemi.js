const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = function(client, message, args) {

let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - ""`)
.setColor("RANDOM")
.setDescription("")
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-abone"],
 permLevel: 0

};
exports.help = {
    name: "abone-sistemi"
};