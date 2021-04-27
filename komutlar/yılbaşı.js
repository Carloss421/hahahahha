const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2022-01-01:00:00')
    let zaman = ms(okul - Date.now())
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yılbaşının kutlanmasına **${zaman.days}** gün **${zaman.hours}** saat **${zaman.minutes}** dakika var.`).setTitle("Alvi BOT"));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',
  description: '',
usage: ""
};