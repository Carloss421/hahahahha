const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
    const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Davet Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${prefix}davetlerim\` Davetlerini gösteririr.
\`${prefix}davet-ekle\` Davet ekler.
\`${prefix}davet-kanal\` Davet logu ayarlar.
\`${prefix}davet-oluştur\` Davet oluşturur.
\`${prefix}davet-say\` Sunucunun davet bilgilerini açar.
\`${prefix}davet-top35\` TOP35^'de olanları açar.
\`${prefix}davet-stokla\` Davetlerinizi stoklar.
\`${prefix}davet-sıfırla\` Bütün davetleri siler.
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-davet"],
  permlevel: 0
};
exports.help = {
  name: "davet-sistemi"
};

/*const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(message, msg) {
let davetSYSTEM = new Discord.MessageEmbed()
.setTitle("Alvi - Davet Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}davetlerim\` Davetlerini gösteririr.
\`${ayarlar.prefix}davet-ekle\` Davet ekler.
\`${ayarlar.prefix}davet-kanal\` Davet logu ayarlar.
\`${ayarlar.prefix}davet-oluştur\` Davet oluşturur.
\`${ayarlar.prefix}davet-say\` Sunucunun davet bilgilerini açar.
\`${ayarlar.prefix}davet-top35\` TOP35^'de olanları açar.
\`${ayarlar.prefix}davet-stokla\` Davetlerinizi stoklar.
\`${ayarlar.prefix}davet-sıfırla\` Bütün davetleri siler.`)
message.channel.send(davetSYSTEM)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-davet'],
  permlevel: 0
};
exports.help = {
  name: "davet-sistemi"
};*/