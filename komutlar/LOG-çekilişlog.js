const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
  
  let mlog = message.mentions.channels.first()
  let çekilişlogS = db.fetch(`çlog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!çekilişlogS) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`:x:  Çekiliş Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`mlog_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
     .setDescription(`✅  Çekiliş Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!mlog) {
    return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`:x:  Çekiliş Log Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
  
  db.set(`mlog_${message.guild.id}`, mlog.id)
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.MessageEmbed()
        .setDescription(`✅ Çekiliş Log Kanalı başarıyla ${mlog} olarak ayarlandı.\nKanalı sıfırlamak için **a!çekilişlog sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çekiliş-log','çekilişlog'],
    permLevel: 0
}

exports.help = {
    name: 'çekilişlog-ayarla',
    description: 'Mod-log kanalı ayarlar.',
    usage: 'mod-log #kanal'
}