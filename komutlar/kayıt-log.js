let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = ayarlar.prefix

let kayıty = await db.fetch(`kayıty: ${message.guild.id}`)

  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`
    Selam, Kayıt Kanalını Ayarlamak İçin Aşşağıda Verdiğimiz Seçenekleri Kullanabilirsiniz:
    
    \`${prefix}k-log #kanal\`
    \`${prefix}k-log kapat\`
    Bu Seçenekleri Kullanabilirsiniz.`).setColor(hata))




  if(args[0] == 'kapat'){
    if(!db.has(`kayıtlog_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Log Zaten Kapalı!`).setColor(hata))
    db.delete(`kayıtlog_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt logu başarıyla kapatıldı!`).setColor(oldu))
    return
  }
  let type = args[0]
  if(!type) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bir kanal etiketlemelisin!`).setColor(hata))

   if(db.has(`kayıtlog_${message.guild.id}`)) return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata2} | Kayıt Log Zaten Açık!`).setColor(hata))
  db.set(`kayıtlog_${message.guild.id}`)
  message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.oldu2} | Kayıt logu başarıyla ${type} olarak ayarlandı!`).setColor(oldu))
  return

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k-log", "kayıtlog"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-log'
};