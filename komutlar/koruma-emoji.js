const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

  
  
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle("Emoji Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: "+ prefix +"emoji-koruma aç/kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`emojikoruma_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Emoji Koruma sistemi!")
        .setDescription("**Dostum Zaten Emoji Koruma Sistemi Aktif !!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`emojikoruma_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle(" Emoji Koruma sistemi!")
        .setDescription("**Emoji Koruma Sistemi Aktif Halde... Silinen Emojileri Tekrar Açacağım Ve Size Bildiriceğim!**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`emojikoruma_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Emoji Koruma sistemi!")
      .setDescription("**Emoji Koruma Sistemi Kapatıldı !**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "emoji-koruma",
  description: "Emoji koruma",
  usage: "emoji-koruma"
};