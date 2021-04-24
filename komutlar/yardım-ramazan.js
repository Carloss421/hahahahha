const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(msg, message) {
let embedd = new Discord.MessageEmbed()
.setTitle('Alvi - Ramazan')
.setColor('RANDOM')
.setDescription(`
\`a!ramazan\` yazarak bütün ramazan komutlarını görebilirsiniz.`)
message.channel.send(embedd)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ramazan-system'],
  permlevel: 0
};
exports.help = {
  name: "ramazan-sistemi"
};