const database = require("quick.db");
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');


exports.run = async (client, message) => {

  
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send("Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!");

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send("❌ **Bir Rol Etiketlemen Gerekmekte \nÖrnek: __a!abonerol @rol__**");

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(`✔️ **Abone rolü başarıyla ${rol} olarak ayarlandı!`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};
