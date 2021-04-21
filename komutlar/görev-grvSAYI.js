const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
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