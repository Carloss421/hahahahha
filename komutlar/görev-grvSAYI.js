const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:warning: Bu komut bakımda!\nSebep: Ayarlanıyor**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
  
const embed = new Discord.MessageEmbed()
let görevNUMBER = await db.fetch(`görevNUMBER_${user.id}`)
.setTitle("Alvi - Görev Sayı")
.setColor("RANDOM")
.setDescription(`${user.id} adlı kullanıcının görev sayısı: \`${görevNUMBER}\``)
let user = message.mentions.users.first()
};
exports.conf = {
  enabled: true,
  aliases: ["görev-sayısı"],
};

exports.help = {
  name: 'görev sayısı',
};