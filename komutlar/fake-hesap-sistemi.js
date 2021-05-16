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
\`${prefix}fake-cezalı-rol-kapat\` **Ayarlı olan fake cezalı rol kapatır**`).setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

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