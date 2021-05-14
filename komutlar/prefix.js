const db = require('quick.db');
const Discord = require('discord.js')
exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısın.`));
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(new Discord.MessageEmbed().setDescription(`Ayarlanmayan şeyi sıfırlayamazsın.`))
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed().setDescription(`Başarılı. Mevcut prefix \`${client.ayarlar.prefix}\``))
    return
  }
  
  if (!args[0])
    return message.channel.send(`Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(new Discord.MessageEmbed()
.setDescription(` 
Prefix başarıyla \`${args[0]}\` olarak ayarlandı.
Prefixi unutursanız <@828267474192564245>'yi etiketleminiz yeterli!`))
   
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    kategori: 'ayarlar',
    permLevel: 3
};
  
  exports.help = {
    name: 'prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};