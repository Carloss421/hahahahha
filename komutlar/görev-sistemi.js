const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
    const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Görev Sistemi`)
.setColor("RANDOM")
.setDescription(`
~~\`${prefix}görevli\` Görev vericek rolü ayarlar.~~
~~\`${prefix}görevlog\` Logların düşeceği kanalı ayarlar.~~
~~\`${prefix}görev-ekle\` Belirtilen kullanıcıya görev ekler.~~
~~\`${prefix}görev-sil\` Belirtilen miktarda görev siler.~~
~~\`${prefix}görev-sayısı\` Belirtilen kullanıcı'nın görev sayısını görürsünüz.~~
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