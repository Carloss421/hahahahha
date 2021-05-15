const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  const ayarlar = require("../ayarlar.json")
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setDescription(
    'Bu komutu kullanabilmek için `YONETICI` yetkisine sahip olmalıısn'))


    db.delete(`güvenlik.${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} üvenlik kanalı sıfırlandı.`))
   

  
  

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "güvenlik-sıfırla",
  description: 'Güvenlik kanalını ayarlarsınız.',
  usage: 'güvenlik #kanal'
}