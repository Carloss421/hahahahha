let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = ayarlar.prefix
let kayıty = await db.fetch(`kayıty.${message.guild.id}`)

  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
    Selam, Kayıt Alınacak Rolü Ayarlamak İçin **Kayıtsız** Bir Seçenek Girmen Gerek Aşşağıda Seçenekleri Bıraktım:
    \`${prefix}k-alınacak-rol @rol\`
    \`${prefix}k-alınacak-rol kapat\`
    Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))

  if(args[0] == 'kapat'){
      if(!db.has(`kayıtalınacakroll.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Kapalı!`).setColor(hata))
      db.delete(`kayıtalınacakroll.${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt alınacak rolü başarıyla kapatıldı!`).setColor(oldu))
    return
  }
  let type = message.mentions.roles.first()
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Bir rol etiketlemelisin!`).setColor(hata))

    if(db.has(`kayıtalınacakroll.${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Sistem Zaten Açık!`).setColor(hata))

  db.set(`kayıtalınacakroll.${message.guild.id}`, type.id)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt alınacak rolü başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kytanlıncaks"],
  permLevel: 0
};

module.exports.help = {
  name: 'kytalnıcakrol'
};