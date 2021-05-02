let database = require("quick.db");
const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js')
exports.run = async (client, message) => {
  if (!message.member.hasPermission(`ADMINISTRATOR`))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `💲 **Bir Rol Etiketlemen Gerekmekte \nÖrnek: __${ayarlar.prefix}abonerol @rol__**`
    );

  database.set(`abonerol.${message.guild.id}`, rol.id);
  message.channel.send(new Discord.MessageEmbed().setDescription(
    `✔️ **Abone rolü başarıyla <@${rol.id}> olarak ayarlandı.**`
  ));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-rol"],
  perm: 0
};
exports.help = {
  name: "abonerol"
};

exports.play = {
  kullanım: "y!abonerol @rol",
  açıklama: "Abone Rolünü Ayarlarsınız",
  kategori: "Abone"
};
