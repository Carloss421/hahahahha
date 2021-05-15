const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  const db = require('quick.db')
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - MuteSistemi`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}mute\` Muteleme komutu.
\`${prefix}mute-yetkili @Yetkili\` Muteleyecek rolü ayarlar. 
\`${prefix}mute-log\` Mutelenenlerin logunu tutar.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mute"],
 permLevel: 0

};
exports.help = {
    name: "mute-sistemi"
};