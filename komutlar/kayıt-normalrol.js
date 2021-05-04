const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(` Bu komutu kullanabilmek için \`yönetici\` yetkisine sahip olmalısın`).setColor("RED"));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`<:evet1:838854924875726898> Sunucu için ayarladığınız Normal Üye rolü başarıyla sıfırlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı!`)
message.channel.send(sıfırlandı)
db.delete(`kkızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Normal Üye rolünü belirtiniz!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı!`)
message.channel.send(ayarlanmadı)
}
db.set(`knormalrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Normal Üye rolü ayarlandı`)
.setColor('BLACK')
.setDescription(`<:evet1:838854924875726898> Normal Üye rolü başarıyla ${rol} olarak ayarlandı!`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıld !`)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kızrol', 'krol', 'k-rol'],
  permlevel: 0
}
exports.help = {
  name: 'kız-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}