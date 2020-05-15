if (cmd) nin altına 

messageye eklencek 

const kl =  kl.fetch(`kara_${message.author.id}`); // \\
    if (kl == 'kara') return message.reply("Malesef Sen Karalistedesin Ve Komutları Kullanamassın ")




beyaz liste

const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const dbengel = require('quick.db')
          const i = await dbengel.fetch(`engel_${message.channel.id}`); // \\
    if (i == 'acik') return message.reply("Burada Komut Kullanımı Kapalı")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`kara_${nesne}`)
  
        message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Bu Kullanıcı Artık Beyaz Listede<a:as:618036123863744513>").setColor("Black"));
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'beyazlist',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
   





kara liste 

const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const kl = require('quick.db')
          const i = await kl.fetch(`kara_${message.channel.id}`); // \\
    if (i == 'kara') return message.reply("Malesef Sen Karalistedesin Ve Komutları Kullanamassın ")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`kara_${nesne}`, 'kara')
  
  message.channel.send(`**${nesne}** İD Lİ Kullanıcı Kara Listeye Alındı`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'karalist',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
}; 
