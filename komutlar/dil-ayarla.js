const Discord = require('discord.js');
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {

var lg = dils.get(`dilang.${message.guild.id}`)

let dilSeç = args[0]

if(!["Tr", "tr", "TR", "tR", "En", "en", "EN", "eN"].includes(args[0])) return message.channel.send(new Discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Dil ayarlıcaksanız **a!dil-ayarla Tr/En**/If you want to set language **a!language-set En/Tr**`))
  
if(args[0] === 'Tr' && 'tr' && 'TR' && 'tR'){
if(!dilSeç) return message.reply("<:hayir0:838855037161570375> Lütfen bir dil belirtin!\nKullanım: **a!dil-ayarla Tr/En**")
if(lg == "tr") return message.reply("<:hayir0:838855037161570375> Dil zaten Türkçe!")
const basarili = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle("<:evet1:838854924875726898> BASARILI!")
.setDescription(`Dil başarıyla **Türkçe** olarak ayarlandı!`)
.setFooter("Dil değiştirmek için a!dil-ayarla En/Tr",message.author.avatarURL()).setTimestamp()
message.channel.send({embed:basarili})
dils.set(`dilang.${message.guild.id}`, "tr")};

  
if(args[0] === 'En' && 'en' && 'EN' && 'eN'){
if(!dilSeç) return message.reply("<:hayir0:838855037161570375> Please language enter!\Usage: **a!language-set En/Tr**")
if(lg == "en") return message.reply("<:hayir0:838855037161570375> The language is already English!")
const succesfly = new Discord.MessageEmbed()
.setThumbnail(client.user.avatarURL())
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle("<:evet1:838854924875726898> SUCCESLFY!")
.setDescription(`Language successfully set to **English**!`)
.setFooter("a!language-set Tr/En to change language",message.author.avatarURL()).setTimestamp()
message.channel.send({embed:succesfly})
dils.set(`dilang.${message.guild.id}`, "en")}
};

exports.conf = {
aliases: ["language-set", "set-language"]
};

exports.help = {
name: "dil-ayarla"
}