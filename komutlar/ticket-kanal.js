const Discord = require("discord.js");
const data = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const db = require("quick.db")
let premium = db.has(`premium.${message.guild.id}`) ? "Premium Aktif" : "Premium Aktif Değil!"
if(premium !== db.fetch(`premium.${message.guild.id}`)) {
if (premium == "Premium Aktif Değil!") {
let pre = new Discord.MessageEmbed()
.setDescription(`Sunucunuz **Premium** olmadığı için kullanamazsınız.`)
.setColor("RED")
 return message.channel.send(pre).then(msg=>msg.delete(5000));
}}; 
  if (premium == "Premium Aktif") {
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Bu komutu kullanmak için yetkin yok.");

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#ee7621`)
          .setDescription(
            `Mesajı göndereceğim kanal zaten ayarlı: ${prefix}ticket-kanal sıfırla`
          )
      );
    let kanal = message.mentions.channels.first();
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#ee7621`)
          .setDescription(`Bir kanalı etiketlemelisin.`)
      );
    if (!kanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor(`#ee7621`)
          .setDescription(`Etiketlediğin kanalı bulamıyorum.`)
      );
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#ee7621`)
        .setDescription(
          `Mesajın kanalı başarıyla ayarlandı: ${prefix}ticket gönder`
        )
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        new Discord.MessageEmbed().setDescription(
          `Mesajı göndereceğim kanal zaten ayarlı değil: ${prefix}ticket-kanal ayarla`
        )
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#ee7621`)
        .setDescription(
          `Mesajın kanalı başarıyla sıfırlandı: ${prefix}ticket-kanal ayarla #kanal`
        )
    );
  }

  if (!message.includes === "sıfırla" || "ayarla") {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#ee7621`)
        .setDescription("Sadece `ayarla` veya `sıfırla` kullanın.")
    );
  }}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "ticket-kanal"
};
