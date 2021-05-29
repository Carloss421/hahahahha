const Discord = require('discord.js');
const data = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {

const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
message.channel.send(new Discord.MessageEmbed().setTitle('Alvi Fake Hesap Sistemi').setDescription(`
\`${prefix}yeni-üye-rol [@rolEtiket]\` **Sunucunuza giren kullanıcılara verilen rolü etiketle**
\`${prefix}fake-cezalı-rol [@rolEtiket]\` **Sunucunuz içerisinde ki cezalı rolünü etiketle**
\`${prefix}yeni-üye-role-kapat\` **Ayarlı olan kayıtsız rol kapatır**
\`${prefix}fake-cezalı-rol-kapat\` **Ayarlı olan fake cezalı rol kapatır**`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["fake-üye-sistemi"],
  permLevel: 0
}

exports.help = {
  name: 'fake-hesap-sistemi'
};