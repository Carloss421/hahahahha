const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
    const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (args[0] == "aç") {
    if (db.has(`botK_${message.guild.id}`) === true) {
      return message.channel.send("Bot koruma zaten açılmış.");
    }
    db.set(`botK_${message.guild.id}`, "acik");
    message.reply(new Discord.MessageEmbed().setDescription("Bot koruma sistemi başarıyla açıldı"));
  }

  if (args[0] == "kapat") {
    if (db.has(`botK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Bot koruma açılmamış. Açmak için **"+ prefix +"bot-koruma aç**"
      );
    }
    db.delete(`botK_${message.guild.id}`, "acik");
    message.reply(new Discord.MessageEmbed().setDescription("Bot koruma sistemi başarıyla kapatıldı"));
  }
  if (!args[0])
    return message.reply(new Discord.MessageEmbed().setDescription(
      "Lütfen geçerli işlem girin. Örnek: **"+ prefix +"bot-koruma aç/kapat**"
    ));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "botkoruma"
};