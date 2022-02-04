const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
      message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Bu komut bakımdadır!`).setColor("#ff0000"))
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["canlı-destek"],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};