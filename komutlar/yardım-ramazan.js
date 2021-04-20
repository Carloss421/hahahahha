const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(msg, message) {
let embedd = new Discord.MessageEmbed()
.setTitle('Alvi - Ramazan')
.setColor('RANDOM')
.setDescription(`


`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ramazan-yardım','ramazan-sistemi'],
  permlevel: 0
};
exports.help = {
  name: "yardım-ramazan"
};