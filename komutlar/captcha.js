const Discord = require("discord.js");
const captcha = require("captcha-plus");
const db = require("quick.db");

exports.run = async (client, message, args) => {
     if(message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription("Üzgünüm Yetkin Yok!"))
     let ch = message.mentions.channels.first();
     if(!ch) return message.channel.send("Kanal Etiketle!");
     let rol = message.mentions.roles.first();
     if(!rol) return message.channel.send("Rol Etiketle");
     if(ch && rol) return message.channel.send("Zaten Ayarlı");
     db.set(`captcha.${message.guild.id}`,ch.id);
     db.set(`captcharol.${message.guild.id}`,rol.id)
     message.channel.send("Ayarlandı!")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "captcha"
}