const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {


  if(!message.member.hasPermission("ADMINISTRATOR") return message.channel.send()

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Erkek Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Erkek Rol Başarıyla Sıfırlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`kayıty_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Yetkili Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Yetkili Rolü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`kayıty_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Yetkili Rolü Ayarlandı `)
.setColor('BLACK')
.setDescription(`Kayıt Yetkili Rol Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
  
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["k-y-rol", "kayıtyetkilirol","kayıt-yetkili"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-yetkili-rol'
};

/*let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

    let ayarlar = require("../ayarlar.json")

        let prefix = ayarlar.prefix

       

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`).setColor(hata))

  if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
  Selam, Kayıt Yetkili Rolünü Ayarlamak İçin Bir Seçenek Belirtmen Lazım Aşşağıda Örnekler Var:
  
  \`${prefix}k-y-rol @rol\`
  \`${prefix}k-y-rol kapat\`
  Bu Seçenekleri Kullanabilirsiniz`).setColor(hata))

  if(args[0] == 'kapat'){

       if(!db.has(`kayıty_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Yetkili Rolü Zaten Kapalı!`).setColor(hata))

    db.delete(`kayıty_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt yetkili rolü başarıyla kapatıldı!`).setColor(oldu))
    return
  }
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir rol etiketlemelisin!`).setColor(hata))

   if(db.has(`kayıty_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Yetkili Rolü Zaten Açık!`).setColor(hata))
  db.set(`kayıty_${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt yetkili rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-y-rol", "kayıtyetkilirol","kayıt-yetkili"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-yetkili-rol'
};

const discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!kayıtçı) return message.channel.send(new discord.MessageEmbed().setDescription(`Kayıtçı Rolü Ayarlanmadığı İçin Bu Komudu Kullanamazsınız!`).setColor("RANDOM"))
if (!member) return message.channel.send(new discord.MessageEmbed().setDescription(`Kayıtçı Rolü Vereceğiniz Kullanıcıyı Belirtiniz!`).setColor("RANDOM"))
member.roles.add(kayıtçı) 
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('BLACK')
.setDescription(`${member} Adlı Kullanıcıya Kayıtçı Rolü Verildi ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.set(`kayıtsayı_${member.id}`, 1) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtçıver'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-ver',
  description: 'kayıtçı rolü verir',
  usage: '!kayıtçı-ver @kullanıcı'
}*/ 