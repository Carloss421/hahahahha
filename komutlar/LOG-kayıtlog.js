const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
  
  let klogS = message.mentions.channels.first()
  let kayıtlog = db.fetch(`klog_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!kayıtlog) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`:x:  Kayıt Log Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`klog_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
     .setDescription(`✅  Kayıt Log Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!klogS) {
    return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`:x:  Kayıt Log Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
  
  db.set(`klog_${message.guild.id}`, klogS.id)
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.MessageEmbed()
        .setDescription(`✅ Kayıt Log Kanalı başarıyla ${klogS} olarak ayarlandı.\nKanalı sıfırlamak için **a!kayıtlog sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt-log','kayıtlog'],
    permLevel: 0
}

exports.help = {
    name: 'kayıtlog-ayarla',
    description: 'Mod-log kanalı ayarlar.',
    usage: 'mod-log #kanal'
}