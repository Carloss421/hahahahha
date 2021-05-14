const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {

  let param = db.fetch(`para_${message.author.id}`)
    let miktar = args[0]
  const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankaya yatırılacak para miktarını girmelisin!
\`${prefix}yatır <miktar || hepsi>\``))

 if(miktar === 'hepsi' || miktar === 'all') {
   if(param === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription("⛔ Bankaya yatırmak için hiç paran yok!"))
db.add(`bankapara_${message.author.id}`, param)
db.add(`para_${message.author.id}`, -param)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<:evet1:838854924875726898> Başarılı, bankaya **${param}TL** yatırdın!`))
} else {
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Girdiğin miktar geçerli bir sayı değil !?`))  
  }

      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 Geçerli sayımı acaba bu?`))
   if (miktar > param) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Bankaya yatırmak için elinde sadece **${param}TL** var`))

if(args[0] === 'all' || args[0] === 'hepsi') {
  return;
}  else {
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`<:evet1:838854924875726898> Başarılı, bankaya **${miktar}TL** yatırdın!`))
db.add(`para_${message.author.id}`, -miktar)
db.add(`bankapara_${message.author.id}`, miktar) 
  }
}
exports.conf = {
  enabled: true,
  aliases: ["yatır"],
};

exports.help = {
  name: 'Para Yatırma',
};