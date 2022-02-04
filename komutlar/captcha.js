const Discord = require("discord.js");
const captcha = require("captcha-plus");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
   
    const embed = new Discord.MessageEmbed()
    .setDescription(`**${ayarlar.hata} Bu Komut Bakımdadır!**`)
    .setColor('#ff0000')
   message.channel.send(embed).then(msg=>msg.delete(5000));
    
 /* 
  
     let ch = message.mentions.channels.first();
     if(!ch) return message.channel.send("Kanal Etiketle!");
     let rol = message.mentions.roles.first();
     if(!rol) return message.channel.send("Rol Etiketle");
     if(ch && rol) return message.channel.send("Zaten Ayarlı");
     db.set(`captcha.${message.guild.id}`,ch.id);
     db.set(`captcharol.${message.guild.id}`,rol.id)
     message.channel.send("Ayarlandı!")
*/
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