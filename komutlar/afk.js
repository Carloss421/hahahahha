const Discord = require('discord.js'); 
const db = require('quick.db') 
exports.run = async (client, message, args) => { 
  let user = message.author
  let sebep = args.join(" ") 
  let member = message.mentions.members.first() 
  
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setDescription(`
<:hayir0:838855037161570375> \`AFK\` moduna girmek için bir sebep yazmalısın.`).setColor("RED"))
  db.set(`afk_${user.id}`, sebep) 
medb.set(`afkSüre_${user.id}`, Date.now());ssage.channel.send(new Discord.MessageEmbed().setDescription(`
<:evet1:838854924875726898> Başarıyla **${sebep}** sebebiyle \`AFK\` moduna geçildi.`).setColor("GREEN")) 
}; 
exports.conf = { 
  enabled: true,
  guildOnly: true, 
  aliases: ["afkol"],
  permLevel: 0 
} 
exports.help = { 
  name: 'afk',
  description: "AFK olmanızı sağlar.", 
  usage: 'afk <sebep>'
}

/*const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async (client, message, args) => {
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Bakımdadır! **`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
    const user = message.mentions.users.first()
    const sebep = args.join(" ")
    const sebeb = db.fetch(`afksebep_${message.guild.id}_${user.id}`, sebep)
    const kullanıcı = db.fetch(`afkkullanıcı_${user.id}`)
    if(sebeb.length < 1) {
        return message.channel.send(new Discord.MessageEmbed().setDescription('AFK Sebebini Belirtmelisin.').setColor("RED")); //botun hata oldugunda verecegi mesaj
    } else {  
        message.delete()
        const afk = new  Discord.MessageEmbed()
        .setColor('GREEN') //embed renk kodu degiştirmek isterseniz buraya ekleyin
        .setTitle('AFK') //Başlık
        .setDescription(`<@${message.author.id}> Başarıyla **${sebeb}** sebebiyle \`Afk\` Oldun!`) //botun verdiği mesaj
        .setTimestamp() // zaman 
        message.channel.send(afk);
        db.add(`afkkullanıcı_${user.id}`)
        db.add(`afksebep_${message.guild.id}_${user.id}`, sebep)
     
      }    
  };

  exports.conf = {
      enabled: true, //komut kullanıma açık olup olmadıgı buradan ayarlanır
      guildOnly: false, // komutun sadee servera özel olup olmadıgını burdan ayarnalır
      aliases: ['afk', 'afkol'], // komut kullanım türleri
      permlevel: 0, // permleve bu ne işe yarar derseniz bu discord sunucu yetkiler demektir buraya göre bot kişiye cevam verir yada vermez bu detaylar CodeMareFi de anlatılacak
  };

  exports.help = {
      name: 'afkol', //komut ismi
      description: 'afk notu burakır', // komut açıklaması 
      usage: 'afkol' //komutun kullanım şekli {örnek ""$$afkol"}
  };


    -------------------------------------------------------------------------------------------

const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Bakımdadır! Hataları Fazla.**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
  
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

const Discord = require('discord.js');
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