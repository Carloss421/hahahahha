const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kkayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`kalınacakrol_${message.guild.id}`)
let normalrol = db.fetch(`knormalrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kkayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kkayıtsayı_${message.author.id}`)
  
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım!`).setColor("RED"))
if(message.channel.id !== kanal) return message.channel.send(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `)
if (!normalrol) return message.channel.send(`Sunucuda Kız Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `)

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Kız Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin!`))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> İsim Belirtmelisin!`))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`<:hayir0:838855037161570375> Yaş Belirtmelisin!`))
member.setNickname(`${isim} ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(normalrol) 

const başarılı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye`)
.setColor('BLACK')
.setDescription(`Normal olarak kayıt edilen kullanıcı: ${member} \n Normal olarak kayıt eden yetkili: <@!${message.author.id}> \n Normal olarak kayıt eden yetkili'nin kayıt sayısı: **${kayıtsayı ? `**${kayıtsayı}**` : "0"}**`)
.addField(`Kayıt edilenin ismi;`, `${isim}`, true)
.addField(`Kayıt edilenin yaşı;`, `${yaş}`, true)
.setThumbnail(member.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(başarılı)
db.add(`kkayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['k'],
  permlevel: 0
}
exports.help = {
  name: 'kız',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}