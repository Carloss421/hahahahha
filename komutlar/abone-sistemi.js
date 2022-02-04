const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = function(client, message, args) {

let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Abone Sistemi`)
.setColor("RANDOM")
.setDescription("`a!abone-rol` Abone rolünü ayarlar.\n`a!abone-yetkili @Yetkili` Abone verecek rolü ayarlar. \n`a!abone-log` Abone rolü verilenlerin logunu tutar.\n`a!abone-kanal ayarla & a!abone-kanal kapat` Youtube abone sayaç ayarlar.**YAKINDA!**")
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