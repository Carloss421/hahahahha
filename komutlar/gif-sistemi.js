const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
    const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Gif Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${prefix}gif-ara\` Yazdığınız Kelime Hakkında Gif Aratır.
\`${prefix}man-gif\` Rastgele Erkek Gifi Atar.
\`${prefix}woman-gif\` Rastgele Kadın Gifi Atar.
\`${prefix}couple-gif\` Rastgele Sevgili Gifi Atar.
\`${prefix}baby-gif\` Rastgele Bebek Gifi Atar.
\`${prefix}animal-gif\` Rastgele Hayvan Gifi Atar.
\`${prefix}anime-gif\` Rastgele Anime Gifi Atar.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-gif"],
 permlevel: 0
};

exports.help = {
    name: "gif-sistemi"
};