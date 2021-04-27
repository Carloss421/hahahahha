const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Görev Sistemi`)
.setColor("RANDOM")
.setDescription(`
~~\`${ayarlar.prefix}görevli\` Görev vericek rolü ayarlar.~~
~~\`${ayarlar.prefix}görevlog\` Logların düşeceği kanalı ayarlar.~~
~~\`${ayarlar.prefix}görev-ekle\` Belirtilen kullanıcıya görev ekler.~~
~~\`${ayarlar.prefix}görev-sil\` Belirtilen miktarda görev siler.~~
~~\`${ayarlar.prefix}görev-sayısı\` Belirtilen kullanıcı'nın görev sayısını görürsünüz.~~
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