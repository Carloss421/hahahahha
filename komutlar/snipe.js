const Discord = require("discord.js")
const fs = require("fs")

exports.run = (bot, message) => {
    let profil = JSON.parse(fs.readFileSync("../jsonlar/snipe.json", "utf8"));
    if(!profil[message.guild.id]) {
      const embed = new Discord.MessageEmbed();
      embed.setTitle(`**Alvi - Son Silinen Mesaj**`);
      embed.setColor('RANDOM')
      embed.setDescription(`\`\`\`Bu sunucuda mesaj silinmediği için bulunamadı!\`\`\``)
    message.channel.send({embed: embed});

    } else {

      if(profil[message.guild.id]) {
    const embed = new Discord.MessageEmbed();
      embed.setTitle(`**Alvi - Son Silinen Mesaj**`);
      embed.setColor('RANDOM')
      embed.setDescription(`
    **Silinen mesaj sahibi:** ${profil[message.guild.id].isim}
    
    **Silinen Mesaj İçeriği;**
    \`\`\`${profil[message.guild.id].mesaj}\`\`\``)
    message.channel.send({embed: embed});
      }
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s','son-silinen mesaj'],
  permLevel: 0
};

exports.help = {
  name: "snipe",
  description: "En son silinen mesaji gosterir.",
  usage: "snipe"
};
/*  
 const Discord = require('discord.js');
 const db = require('quick.db');
  exports.run = async (client, message, params) => {
  // if (message.author.bot) return;
  let atan = await db.fetch(`atan_${message.channel.id}`);
  let mesaj = await db.fetch(`mesaj_${message.channel.id}`);
  
 // let link = /(www|WWW|.com|.COM|com|http|HTTP|https|HTTPS|.net|.NET|net|NET|.me|.ME||dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.NET|.TK|DİSCORD.GG|.PW)/
 // let küfür = /(m a l|ma l|m al|amk|sg|oç|sik|amına|amın|orospu|orospo|çocuğu|orosbu|orosbo|cocugu|mal|salak|kapçuk|amcık|amcuk|sikik|amk malı|amına kodum|amınakoduğum|amına koduğum|M A L|MA L|M AL|AMK|SG|OÇ|SİK|AMINA|AMIN|OROSPU|OROSPO|ÇOCUĞU|OROSBU|OROSBO|COCUGU|ÇOCUGU|MAL|SALAK|KAPÇUK|AMCIK|AMCUK|SİKİK|AMK MALI|AMINA GODUM|AMINAKODUGUĞUM|AMINA KODUĞUM|www|WWW|.com|.COM|com|http|HTTP|https|HTTPS|.net|.NET|net|NET|.me|.ME||dicord.gg|.tk|.pw|https:|http:|.info|.cf|gg|.NET|.TK|DİSCORD.GG|.PW)/
 // if (mesaj.match(küfür)) return message.channel.send(`Son silinen mesaj küfür/reklam içeriyor bu mesajı sana gösteremem!`)
  //if (mesaj.match(link)) return message.channel.send(`Son silinen mesaj reklam içeriyor bu mesajı sana gösteremem!`)
  
if(mesaj == null) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription('Son silinen mesajı bulamadım sanırım mesaj çok eski veya bu kanalda hiç mesaj silinmemiş')
.setTimestamp()
.setFooter(`Komutu kullanan: ${message.author.tag}`)
return message.channel.send(embed)
} 
    
   
     const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
     .addField(`Son silinen mesaj sahibi: ${atan}`, `Son silinen mesaj: ${mesaj}`)
     .setFooter(`Komutu kullanan: ${message.author.tag}`)
     .setTimestamp()
     message.channel.send(embed)
    
    
    
    
};
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["snipe"],
  permLevel: 3,
  kategori: "moderasyon"
 
};
exports.help = {
  name: 'snipe',
  description: 'Kanalda son silinen mesajı gösterir',
  usage: 'snipe',
 
};*/