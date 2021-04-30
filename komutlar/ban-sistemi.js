const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - BanSistemi`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}bansay | a!ban-say\` Banlananları sayar. 
\`${ayarlar.prefix}ban-yetkili @Yetkili\` Banlayacak rolü ayarlar. 
\`${ayarlar.prefix}ban-log\` Banlananların logunu tutar.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-ban"],
 permLevel: 0

};
exports.help = {
    name: "ban-sistemi"
};