const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('Sa-as yazısını açmak için; `'+ prefix +'sa-as aç veya kapat`'))

  if (args[0] == 'aç') {
    db.set(`ss_${message.guild.id}`, 'açık')
      message.channel.send(new Discord.MessageEmbed().setDescription(`Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`))

  }
  if (args[0] == 'kapat') {
    db.delete(`ss_${message.guild.id}`, 'kapat')
      message.channel.send(new Discord.MessageEmbed().setDescription(` Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`))

  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa','as'],
  kategori: 'ayarlar',
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: '!!sa-as'
};