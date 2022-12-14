const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const ayarlar = require("../ayarlar.json")
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(
    'Bu komutu kullanabilmek için `YONETICI` yetkisine sahip olmalıısn'))
  
   let kanal = message.mentions.channels.first() || args[0]
   if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`
   ${ayarlar.hata} Güvenlik mesajlarının gideceği kanalı etiketlemedin`))
   else {
    db.set(`güvenlik.${message.guild.id}`, kanal)
    return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} Güvenlik kanalı ${kanal} olarak ayarlandı`))
   }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "güvenlik-ayarla",
  description: 'Güvenlik kanalını ayarlarsınız.',
  usage: 'güvenlik #kanal'
}