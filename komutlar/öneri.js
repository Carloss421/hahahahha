const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = function(client, message, args) {
      let p = ayarlar.prefix;


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
 
  var guildID = "833185818629111838"; // Sunucu ID
 
  var channelID = "718509292675923998"; // Kanal ID
 
  if (!öneri) {
    return message.channel.send(embed);
  } else {
    var embed = new Discord.MessageEmbed()
 
      .setTimestamp()
 
      .setColor("RANDOM")
 
      .setAuthor("👤 Yeni Bir Öneri!", client.user.avatarURL())
      .addField("👤 Öneren Kullanıcı:", message.author.tag, true)
      .addField("👤 Öneren Kullanıcı ID:", message.author.id,true)
      .addField("📜 Önerisi:", öneri)
  
 
    client.guilds
      .cache.get(guildID)
      .channels.cache.get(channelID)
      .send(embed);

    message.channel.send(onerili);
  }
};
 
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["istek"],
permlevel: 0
};
exports.help = {
  name: "öneri"
};