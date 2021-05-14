const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
    const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "acik");
    message.reply(new Discord.MessageEmbed().setDescription("Anti-raid sistemi başarıyla açıldı"));
  }

  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **"+ prefix +"bot-koruma aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "acik");
    message.reply(new Discord.MessageEmbed().setDescription("Anti-raid sistemi başarıyla kapatıldı"));
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