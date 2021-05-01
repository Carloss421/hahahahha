const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`).setColo("RED"));
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`Otorol sistemi zaten kapalı.`)
 
 
  message.channel.send(`Otorol sistemi başarıyla sıfırlandı.`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`)  

  };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["otorolsıfırla","otorol-sıfırla"],
    permlevel: 0
};

exports.help = { 
    name: 'otorolsıfırla', 
    description: 'Resets server statics.',
    usage: '[p]rstats [all/voice/messages]'
};

/*const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );
  const rol = db.fetch(`otoRL_${message.guild.id}`);
  if (!rol)
    return message.reply(`Sanırım bu özellik zaten kapalıymış :slight_smile:`);

  message.reply(
    `Bu özellik **başarıyla kapatıldı.** 
    )}`
  );

  db.delete(`otoRL_${message.guild.id}`);
  db.delete(`otoRK_${message.guild.id}`);
  db.delete(`otoRM_${message.guild.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol-kapat", "otorolkapat","otorol-sıfırla"],
  permLevel: 0
};

exports.help = {
  name: "oto-rol-kapat",
  description: "taslak",
  usage: "Otorol-ayarla"
};
*/