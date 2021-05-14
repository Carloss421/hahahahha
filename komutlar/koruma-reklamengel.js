const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message) => {
  
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`));

  const db = require('quick.db');
 const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply(`**${prefix}reklam-engelle aç** veya **${prefix}reklam-engelle kapat** yazınz.`);

  if (secenekler !== "aç" && secenekler !== "kapat") return message.reply(new Discord.MessageEmbed()
.setDescription(`**${prefix}reklam-engelle aç** veya **${prefix}reklam-engelle kapat** yazınz.`))

	if (secenekler === "aç") {
		
    var i = db.set(`reklamE_${message.guild.id}`, "acik")
    
		  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`Reklam Engeli Başarıyla açıldı\Reklam engelini kapatmak isterseniz **${prefix}reklam-engel kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)
 
	};

	if (secenekler === "kapat") {
    
    db.delete(`reklamE_${message.guild.id}`)
    
		message.channel.send(new Discord.MessageEmbed().setDescription('Reklam engelleme sistemi kapatıldı'))
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['link-engel','link-engelleme','reklam-engel'],
		permLevel: 4,
    kategori: "ayarlar",
   
	  };
	  
	exports.help = {
		name: 'reklam-engelle',
		description: 'Lİnk engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'link-engelle <aç/kapat>',
   
	};