const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kkayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`kkalınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`kerkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kkayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kkayıtsayı_${message.author.id}`)
let log = db.fetch(`kkayıtlog_${message.guild.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım!`).setColor("RED"))
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin!`))
if (!erkekrol) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz!`))

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin!`))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> İsim Belirtmelisin!`))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Yaş Belirtmelisin!`))
member.setNickname(`${isim} ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const alviKAYIT = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Erkek `)
.setColor('BLACK')
.setDescription(`Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Erkek Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`Kayıt edilenin ismi;`, `${isim}`, true)
.addField(`Kayıt edilenin yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
log.send(alviKAYIT)
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e','erkek-kayıt'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}