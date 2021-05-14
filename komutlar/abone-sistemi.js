const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - AboneSistemi`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}abone-rol\` Abone rolünü ayarlar.
\`${prefix}abone-yetkili @Yetkili\` Abone verecek rolü ayarlar. 
\`${prefix}abone-log\` Abone rolü verilenlerin logunu tutar.`)
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