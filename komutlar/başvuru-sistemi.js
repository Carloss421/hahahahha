const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(msg, message) {
    const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setDescription("`"+ prefix +"başvur - "+ prefix +"başvuru-yap` komutunu kullanarak başvurabilirsiniz.")
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-başvuru"],
  permlevel: 0
};
exports.help = {
  name: "başvuru-sistemi"
};