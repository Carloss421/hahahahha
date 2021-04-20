const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Ticket Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}ekle\` ekle @rol #kanal Ticket'a başka birisini/rolü ekler.
\`${ayarlar.prefix}sil\` sil @etiket #kanal Ticketta ekli birisini/rolü siler.
\`${ayarlar.prefix}kapat\` Ticket'ı kapatır.
\`${ayarlar.prefix}ticket-sil\` Ticket'ı siler.
\`${ayarlar.prefix}ticket-kanal\` ticket-kanal [ayarla/sıfırla] (kanal) Ticket Kanalı Ayarlar.
\`${ayarlar.prefix}ticket\` ticket gönder Ticket Mesajı Yollar.`)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ticket-help","ticket-yardım"],
  permlevel: 0
};
exports.help = {
  name: "ticket-sistemi"
};