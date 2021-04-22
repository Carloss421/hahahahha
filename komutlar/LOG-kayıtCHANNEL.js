const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`).setColor("RANDOM"));
  
  let klogS = message.mentions.channels.first()
  let kayıtCHANNEL = db.fetch(`kchannel_${message.guild.id}`)

if(args[0] === "sıfırla") {
    if(!kayıtCHANNEL) {
      message.channel.send(new Discord.MessageEmbed()
      .setDescription(`:x:  Kayıt Kanalı zaten ayarlı değil.`)
      .setColor("RED"))                     
      return
    }
    
    db.delete(`klog_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
     .setDescription(`✅  Kayıt Kanalı başarıyla sıfırlandı.`)
      .setColor("GREEN"))                   
    return
  }


  
  if (!klogS) {
    return message.channel.send(new Discord.MessageEmbed()
     .setDescription(`:x:  Kayıt Kanalı etiketlemelisin.`)
    .setColor("RED"))                          
  }
  
  
  
  
  db.set(`kchannel_${message.guild.id}`, klogS.id)
  
   // message.channel.send(`Otorol \`${rol.name}\`, otorol kanalı ${rolk} olarak ayarlandı.`)
  
  const embed = new Discord.MessageEmbed()
        .setDescription(`✅ Kayıt  Kanalı başarıyla ${klogS} olarak ayarlandı.\nKanalı sıfırlamak için **a!kayıt-kanal sıfırla** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
  
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['kayıt-kanal','kayıtkanal'],
    permLevel: 0
}

exports.help = {
    name: 'kayıtkanal-ayarla',
    description: 'Mod-log kanalı ayarlar.',
    usage: 'mod-log #kanal'
}