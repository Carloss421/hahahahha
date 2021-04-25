let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  
    let ayarlar = require("../ayarlar.json")

        let prefix = ayarlar.prefix
  let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
        
  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
  
      if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
      Selam, Kayıt Kadın Rolü Ayarlayabilmek İçin Seçenek Belirtmen Gerek Örnekler Aşşağıda:
      
      \`${prefix}k-kadın-rol @rol\`
      \`${prefix}k-kadın-rol kapat\`
      Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))

  
    
  

  if(args[0] == 'kapat'){
        if(!db.has(`kayıtkadın.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı!`).setColor(hata))

      db.delete(`kayıtkadın.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt kadın rolü başarıyla kapatıldı`).setColor(oldu))
    return
  }
  
    let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir rol etiketlemelisin!`).setColor(hata))
  
      if(db.has(`kayıtkadın.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`kayıtkadın.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt kadın rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
  
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-kadın-rol", "kayıtkadınrol","kız-rol"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-kadın-rol'
};



/*const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new discord.MessageEmbed().setDescription(` Bu komutu kullanabilmek için \`yönetici\` yetkisine sahip olmalısın`).setColor("RANDOM"));

if(args[0] === "sıfırla") {
const sıfırlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kız Rol Sıfırla `)
.setColor('BLACK')
.setDescription(`Sunucu İçin Ayarladığınız Kız Rolü Başarıyla Sıfırlandı !`)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(sıfırlandı)
db.delete(`kızrol_${message.guild.id}`)
return;
}

let rol = message.mentions.roles.first();   
if (!rol) {
  const ayarlanmadı = new discord.MessageEmbed()
.setTitle(`${client.user.username} - Kız Rol Ayarla `)
.setColor('BLACK')
.setDescription(`Ayarlayacağınız Kız Rolünü Belirtiniz ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlanmadı)
}
db.set(`kızrol_${message.guild.id}`, rol.id)
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - kız Rol Ayarlandı `)
.setColor('BLACK')
.setDescription(`Kız Rolü Başarıyla ${rol} Olarak Ayarlandı ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
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
}*/