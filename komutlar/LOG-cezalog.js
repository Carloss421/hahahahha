const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
    if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut YAKINDA!**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
  
  let mlog = message.mentions.channels.first()
  let cezalog = db.fetch(`clog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!cezalog) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`:x:  Ceza Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
     .setDescription(`✅  Ceza Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!mlog) {
    return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`:x:  Ceza Log Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
  
  db.set(`mlog_${message.guild.id}`, mlog.id)
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.MessageEmbed()
        .setDescription(`✅ Ceza Log Kanalı başarıyla ${mlog} olarak ayarlandı.\nKanalı sıfırlamak için **a!cezalog sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ceza-log','cezalog'],
    permLevel: 0
}

exports.help = {
    name: 'cezalog-ayarla',
    description: 'Mod-log kanalı ayarlar.',
    usage: 'mod-log #kanal'
}