const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = message.guild.channels.cache.find(x => x.name === "başvurulog")  ;
  if (!terfiler) return message.reply('`başvurulog` kanalını bulamıyorum. ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply(new Discord.MessageEmbed().setDescription(
    `**Ne Kazandirirsiniz:**
    **İstediğiniz Yetki:**
    **Kac Saat Aktif Olacaginiz:**
    **Adınız:**
    **Yaşınız ve Kendinizi Etiketleyin:**
    
    \`Örnek;\` 
    **Ne kazandirirsiniz:** Sunucuyu güvende tutarım
    **İstediğim Yetki:** @Moderatör
    **Aktifliğim:** 7/24
    **İsmim:** AliBerat
    **Yaşım:** 15 @AliBerat
    `));
  if (message.mentions.users.size < 1) return message.reply('Isminizi Etiketleyin.').catch(console.error);
  const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
	.setThumbnail("https://i.hizliresim.com/mJ20o2.jpg")
    .setTimestamp()
    .addField('Durum:', 'Beklemede')
    .addField('Gonderen Kisi:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Bilgiler', reason);
	
	return guild.channels.cache.get(terfiler.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['başvur'],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-yap',
  description: 'Kullanıcıyı terfi ettirir.',
  usage: 'başvuru [kullanıcı]'
};