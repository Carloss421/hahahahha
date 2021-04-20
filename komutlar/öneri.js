const Discord = require("discord.js");
const Alone = "#36393e"; 
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = function(client, message, args) {
      let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;


const onerisiz = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("• Hata: 0014 •")
.setDescription("Öneri gönderebilmek için bir öneri belirtiniz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);

const onerili = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı")
.setDescription("Öneriniz alınmıştır! Teşekkür ederiz.")
.setFooter(`©️ Tüm hakları saklıdır | Yeni Nesil Gelişmiş Bot | 2020`);  
  

  var öneri = args.slice(0).join(" ");
 
  var guildID = "666967704569380864"; // Sunucu ID
 
  var channelID = "718509292675923998"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("👤 Yeni Bir Öneri!", client.user.avatarURL())
      .addField("👤 • Öneren Kullanıcı:", message.author.tag, true)
      .addField("👤 • Öneren Kullanıcı ID:", message.author.id,true)
      .addField(":hypesquad1: • Önerisi:", öneri)
    
      .setThumbnail(message.author.avatarURL());
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.config = {
  name: "öneri",
  aliases: ["istek"],
};