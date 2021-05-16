const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(message.author.username, message.author.avatarURL({dynamic: true})).setDescription(`${message.author} Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın!`)).then(m => m.delete({timeout: 7000}))
  
let kanal = message.mentions.channels.first()

if (!kanal) {

const uyarı = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setColor('RED')
.setDescription(`Bir Kanal Etiketlemen Gerekiyor Örnek: **${prefix}seviye-kanal-ayarla #kanal**`)
return message.channel.send(uyarı).then(a => a.delete({timeout:15000}))
};

  
const başarılı = new MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
.setColor('GREEN')
.setDescription(`Seviye Kanalı Başarıyla ${kanal} olarak Ayarlandı.`)
message.channel.send(başarılı)
db.set(`seviyekanal_${message.guild.id}`, kanal.id)

}
module.exports.conf = {
    guildOnly: true,
    aliases: ["seviyekanal","seviyekanal-ayarla","seviye-kanal","saviyekanal-ayarla"],
    permLevel: 0
};

module.exports.help = {
    name: "seviye-kanal-ayarla",
};
