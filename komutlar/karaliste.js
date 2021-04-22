const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
    if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:warning: Bu komut yapımcıma özel!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
  
    if (args[0] == 'al') {
   let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeye almak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  } 
  if (args[0] == 'çıkar') {
    db.delete(`karalist_${user.id}`)
    db.delete(`karalog_${user.id}`)
    message.channel.send(`Otorolü başarıyla kapattım.`)
  }};
  
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['blacklist'],
    permLevel: 0
}

exports.help = {
    name: 'karaliste',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}

/*const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args, cmd) => {
      if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:warning: Bu komut yapımcıma özel!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
  
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeye almak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
    let em = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeden çıkarmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: em})
    return;
  };
  
  if (db.has(`karalist_${user.id}`) === true) return message.reply("Bu kullanıcı zaten kara listede!");
  
  db.add(`karalist_${user.id}`, "al")

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeye alındı!`)
    message.channel.send({embed: embed})
  const karaliste = db.fetch(`karalist_${user.id}`);
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD){
    if(karaliste){
 return message.channel.send(new Discord.MessageEmbed() .setColor("RANDOM").setDescription("Sen botun komutlarını kullanamazsın! Çünkü karalistedesin!"))
    }};
  
  db.delete(`karaliste_${user.id}`, "çıkar")
  let ember = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeden çıkarıldı!`)
  message.channel.send({embed: ember})
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "karaliste",
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};*/