const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')


exports.run = async(client, message, args) => {
  

const isim = args[0];
const yaş = args[1];
const cinsiyet = args[2];
const açıklama = args[3];
  
if(!isim) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir isim girmelisin!`))
if(!yaş) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir yaş girmelisin!`))
if(!cinsiyet) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için bir cinsiyet belirlemelisin!\nCinsiyetler: **Erkek Kız/Kadın Özel**`))
if(!açıklama) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`${ayarlar.hata} Hesap oluşturmak için kendi!`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["account-create"],
  permlevel: 0
};

exports.help = {
  name: "hesap-oluştur"
}