const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu} ${message.author}, bu komutu kullanabilmek için \`YONETICI\` yetkisine sahip olmalısın!`))

let p = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;  
let v = db.fetch(`aboneK_${message.guild.id}`)
let k = db.has(`aboneK_${message.guild.id}` ? "acik" : "kapali")

if(k.kapali !== k.acik) {
  const emb 
}
/*
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