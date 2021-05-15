const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`));

  const db = require('quick.db');
  

  const ayarlar = require('../ayarlar.json')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**${prefix}küfür-engelle aç** veya **${prefix}küfür-engelle kapat** yazınz `));


  if (secenekler !== "aç" && secenekler !== "kapat") return message.reply(`**${prefix}küfür-engelle aç** veya **${prefix}küfür-engelle kapat** yazınz `)
  
	if (secenekler === "aç") {
    
    var i = db.set(`küfürE_${message.guild.id}`, "acik")
    
		  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`Küfür Engel Başarıyla açıldı\nKüfür engel kapatmak isterseniz **${prefix}küfür-engel kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)

	};

	if (secenekler === "kapat") {
    
    db.delete(`küfürE_${message.guild.id}`)
    
		message.channel.send(new Discord.MessageEmbed()
.setDescription('Küfür engel kapatıldı'))

    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür'],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'küfür-engel',
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'küfür-engel <aç/kapat>',
    
	};