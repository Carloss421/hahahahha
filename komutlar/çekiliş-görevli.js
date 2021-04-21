const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(` Bu komutu kullanabilmek için \`yönetici\` yetkisine sahip olmalısın`).setColor("RANDOM"));
  let çekilişlogS = db.fetch(`çlog_${message.guild.id}`)
  let çlogS = message.guild.channels.find('name', 'çekilişlog');
if (!çlogS) return message.reply('`çekilişlog` kanalını bulamıyorum. Ayarlamak için `a!çekilişlog #çekilişlog`');
if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Çekiliş Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Çekiliş Rol Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`kayıtçırol_${message.guild.id}`)
return;
return message.guild.channels.get(çlogS.id).sendEmbed(sıfırlandı);
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Çekiliş Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Çekiliş Rolü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`kayıtçırol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Çekiliş Rol Ayarlandı `)
.setColor('BLACK')
.setDescription(`Kayıt Edecek Rol Başarıyla ${rol} Olarak Ayarlandı!\nSıfırlamak için \`a!çekiliş-rol sıfırla\``)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı!`)
return message.guild.channels.get(çlogS.id).sendEmbed(ayarlandı);
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['çekiliş-görevli'],
  permlevel: 0
}
exports.help = {
  name: 'çekiliş-rol',
  description: 'kız rolünü ayarlar',
  usage: '!kız-rol @rol'
}