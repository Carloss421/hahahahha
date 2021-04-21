const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon`)
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}görevli ayarla\` Görev vericek rolü ayarlar.
\`${ayarlar.prefix}görevlog\` Logların düşeceği kanalı ayarlar.
\`${ayarlar.prefix}görev-ekle\` Belirtilen kullanıcıya görev ekler.
\`${ayarlar.prefix}görev-sil\` Belirtilen miktarda görev siler.
\`${ayarlar.prefix}\`
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod"],
 permlevel: 0
};

exports.help = {
    name: "yardım-moderasyon"
};