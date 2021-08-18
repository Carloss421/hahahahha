const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
    const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Görev Sistemi`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}me\` Görevlerinize bakarsınız.

`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["görev-sistemi"],
 permlevel: 0
};

exports.help = {
    name: "yardım-görev"
};