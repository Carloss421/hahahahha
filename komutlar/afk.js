const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  const kisi = db.fetch(`afkid_${message.author.id}_${message.guild.id}`);
  if (kisi) return;
  const sebep = args[0];
  if (!args[0]) {
    let kullanıcı = message.guild.members.get(message.author.id);

    await db.set(
      `afkSebep_${message.author.id}_${message.guild.id}`,
      "Sebep Girilmemiş"
    );
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );

    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(new Discord.MessageEmbed().setDescription(`${a} Sebebiyle afk moduna girildi.`).setColor("GREEN").setTitle("Alvi - AFK Sistemi"));
  }
  if (args[0]) {
    let sebep = args.join(" ");
    let kullanıcı = message.guild.members.get(message.author.id);
    await db.set(`afkSebep_${message.author.id}_${message.guild.id}`, sebep);
    await db.set(
      `afkid_${message.author.id}_${message.guild.id}`,
      message.author.id
    );
    const a = await db.fetch(
      `afkSebep_${message.author.id}_${message.guild.id}`
    );

    message.channel.send(new Discord.MessageEmbed().setDescription(`${a} Sebebiyle afk moduna girildi.`).setColor("GREEN").setTitle("Alvi - AFK Sistemi"));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "afk",
  description: "Afk Olmanızı Sağlar.",
  usage: "afk / afk <sebep>"
};

/*const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
let user = message.author 
let sebep = args.join(" ") 
let member = message.mentions.members.first()
let isim = args.slice(1).join(" ") 
if (!sebep) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`**Afk olmak için bir sebep yazmalısın.**`).setColor("RANDOM"))
db.set(`afk_${user.id}`, sebep) 
message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> \`${sebep}\` **sebebiyle AFK moduna girdin.**`).setTitle("Alvi - AFK Sistemi")) 
};
exports.conf = { 
  enabled: true, 
  guildOnly: true,
  aliases: ["afk"], 
  permLevel: 0
};
exports.help = { 
  name: 'afk', 
  description: "AFK olmanızı sağlar.",
  usage: 'afk <sebep>' 
};*/