const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
message.channel.send(new Discord.MessageEmbed().setDescription(`**${ayarlar.hata}** Prefix \`/\` olduğundan dolayı bu komut kullanım dışıdır!\nAyrıntılar: [:information_source:](https://discord.gg/WBEvG7efdK)`).setColor('BLUE'))
/*
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let ohow = await db.fetch(`prefix_${message.guild.id}`)

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription("Bu komutu kullanabilmek için `YONETICI` iznine sahip olmalısın!"));


if(args[0] !== 'ayarla' && args[0] !== 'sıfırla') return message.channel.send(new Discord.MessageEmbed().setDescription(`
${ayarlar.hata} Lütfen **${prefix}prefix ayarla** veya **${prefix}prefix sıfırla** yaz.`))
/*
 if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(new Discord.MessageEmbed().setDescription(`${ayarlar.hata} Küfür Engel Ayarlamak İçin \`${prefix}Küfür aç\` | Kapatmak İstiyorsanız \`${prefix}Küfür kapat\` Yazabilirsiniz`))
*/
 /* 
if(args[0] === 'ayarla') {
db.set(`prefix_${message.guild.id}`, args[1])
message.channel.send(new Discord.MessageEmbed().setDescription(`
${ayarlar.oldu2} Prefix Başarıyla **`+ args[1] + `** olarak ayarlandı.`).setFooter(`
NOT: Prefixi unutursan Alvi'yi etiketlemeyi unutma`).setColor("#29f713"))
};
  
if(args[0] === 'sıfırla') {
      if(!ohow) {
       return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bir prefix ayarlanmadan sıfırlanamaz!`).setColor("#f00e0e"));
    }
    db.delete(`prefix_${message.guild.id}`)       
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`
${ayarlar.oldu2} Prefix Başarıyla Sıfırlandı. Prefix: **${ayarlar.prefix}**
`).setColor("#29f713"));
}
*/
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["prefx","prefixx"],
  permlevel: 0
};

exports.help = {
  name: "prefix"
};