const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const premium = new Discord.MessageEmbed()
.setTitle("Alvi - Premium")
.setColor("RANDOM")
.setDescription(`
**Premium nedir?**
Premium özel komutlar veya ona ait yapılan bir komuttur. Premium herşeyde öncelik sağlar,%38 daha fazla katkı. 
`)
message.channel.send(premium)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pre-yardım"],
  permlevel: 0
};
exports.help = {
  name: "yardım-premium"
};