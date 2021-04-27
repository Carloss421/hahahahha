const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - BanSistemi`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}abone-rol\` Abone rolünü ayarlar.
\`${ayarlar.prefix}abone-yetkili @Yetkili\` Abone verecek rolü ayarlar. 
\`${ayarlar.prefix}abone-log\` Abone rolü verilenlerin logunu tutar.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-abone"],
 permLevel: 0

};
exports.help = {
    name: "abone-sistemi"
};