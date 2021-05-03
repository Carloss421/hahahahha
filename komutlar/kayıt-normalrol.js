const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let kayıty = await db.fetch(`kayıty_${message.guild.id}`)

  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor("RED"))

if(args[0] === "sıfırla") {
const darkcodeee = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Normal Üye Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(darkcodeee)
db.delete(`kayıtnorml_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const darkcodee = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Normal Üye Rolünü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(darkcodee)
}
db.set(`kayıtnorml_${message.guild.id}`)
const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye Rol Ayarlandı `)
.setColor('BLACK')
.setDescription(`Normal Üye Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(darkcode)

}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['normal-rolN'],
  permlevel: 0
}
exports.help = {
  name: 'normal-rol',
  description: 'erkek rolünü ayarlar',
  usage: '!erkek-rol @rol'
} 