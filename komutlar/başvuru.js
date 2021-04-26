const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let terfiler = message.guild.channels.cache.find(x => x.name === "başvurulog")  ;
  if (!terfiler) return message.channel.send(new Discord.MessageEmbed().setDescription('`başvurulog` kanalını bulamıyorum. Bu işlemi gerçekleştirmek için `başvurulog` adında kanal oluşturunuz!'));
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply(new Discord.MessageEmbed().setDescription(
    `**Ne Kazandirirsiniz:**
    **İstediğiniz Yetki:**
    **Kac Saat Aktif Olacaginiz:**
    **Adınız:**
    **Yaşınız ve Kendinizi Etiketleyin:**
    
    \`Örnek;\`
    a!başvur @AliBerat **Ne kazandirirsiniz:** Sunucuyu güvende tutarım
    **İstediğim Yetki:** @Moderatör
    **Aktifliğim:** 7/24
    **İsmim:** AliBerat
    **Yaşım:** 15 
    `));
  if (message.mentions.users.size < 1) return message.reply('Kendinizi Etiketleyin.').catch(console.error);
  const embed = new Discord.MessageEmbed()
    .setColor(0xD97634)
	  .setThumbnail("https://c0.klipartz.com/pngpicture/127/497/gratis-png-nota-con-el-logo-de-la-pluma-formulario-de-iconos-de-computadora-boton-de-registro.png")
    .setTimestamp()
    .addField('Durum:', 'Beklemede')
    .addField('Başvuran:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Form', reason);
	
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