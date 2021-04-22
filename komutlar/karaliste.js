const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')
exports.run = async (bot, message, args) => {
      if(message.author.id !== ayarlar.ownerID)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:warning: Bu komut bakımda!\nSebep: Ayarlanıyor**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    };
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
  name: 'karaliste',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};