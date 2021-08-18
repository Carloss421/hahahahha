const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} ${message.author}, bu komutu kullanabilmek için \`YONETICI\` yetkisine sahip olmalısın!`))

let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;  
let l = db.fetch(`aboneKL_${message.guild.id}`)
let i = db.fetch(`aboneK_${message.guild.id}`)
let ı = db.fetch(`aboneKI_${message.guild.id}`)

if(args[0] !== 'ayarla' && args[0] !== 'kapat') return message.channel.send(new Discord.MessageEmbed().setDescription(`
${ayarlar.hata} Lütfen **${p}abone-kanal ayarla** veya **${p}abone-kanal kapat** yaz.`))

let log = message.mentions.channels.first()
let kanal = args[1]
let kanalN = args[2]

if(args[0] === 'ayarla') {
if(!log) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Abonelerin log tutalacağı kanal'ı etiketlemelisin!`).setColor("#ff0000"))
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Youtube kanal ID'sini yazmalısın!`).setColor("#ff0000"))
if(!kanalN) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Youtube kanal İsmini yazmalısın!`).setColor("#ff0000"))
  
  const em = new Discord.MessageEmbed()
  .setTitle("BAŞARILI!")
  .setDescription(`Log kanalını ${log}, youtube kanal idsini **||${kanal}||** ve youtube kanal ismini **||${kanalN}||** olarak kayıt ettim.`)
message.channel.send({ embed: em })
db.set(`aboneKL_${message.guild.id}`, log)
db.set(`aboneK_${message.guild.id}`, kanal)
db.set(`aboneKI_${message.guild.id}`, kanalN)
};

if(args[0] === 'kapat') {
  const e = new Discord.MessageEmbed()
  .setTitle("BAŞARILI!")
  .setDescription(`Abone sayaç sıfırlandı!`)
  message.channel.send({ embed: e })
db.delete(`aboneKL_${message.guild.id}`)
db.delete(`aboneK_${message.guild.id}`)
db.delete(`aboneKI_${message.guild.id}`)
};
  
/*
if(k.kapali !== k.acik) {
  const emb = new Discord.MessageEmbed()
  .setDescription(`${ayarlar.hata} Lütfen abonesi log tutulacak kanal ID'sini yazınız`)
  .setColor("#ff0000")
  return message.channel.send({ embed: emb })
}

if(h.kapali !== h.acik) {
  const em = new Discord.MessageEmbed()
  .setDescription(`${ayarlar.hata} Lütfen abonelerin log'ları tutulacağı kanalı belirtiniz`)
  .setColor("#ff0000")
  return message.channel.send({ embed: em })
}


   if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Yapımcıma Özeldir !**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }


////----------------------\\\\ PREMİUM KONTROL ////----------------------\\\\   
if(message.author.id !== sahip) {
  if(args[0] === 'kontrol') {
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)  
  message.channel.send(new Discord.MessageEmbed()  
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`Bu sunucu için **Premium** sistemi **${açıkmı ? 'aktif' : 'kapalı'}**!`)
.setTimestamp())   
}}
*/

};

exports.conf = {
  aliases: ["abone-channel", "subscribe-channel"],
  permlevel: 0
};

exports.help = {
  name: "abone-kanal"
}