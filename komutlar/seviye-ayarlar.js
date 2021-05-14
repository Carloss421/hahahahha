const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {

  //if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);

  const db = require('quick.db');


  const ayarlar = require('../ayarlar.json')
let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let args = message.content.split(' ').slice(1);
  const secenekler = args.slice(0).join(' ');

  if(secenekler.length < 1) return message.reply(`**${prefix}seviye-ayarlar aç** veya **${prefix}seviye-ayarlar kapat** yazınz `);
  //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat") return message.reply(`**${prefix}seviye-ayarlar aç** veya **${prefix}seviye-ayarlar kapat** yazınz `)

  if (secenekler === "aç") {

    var i = db.set(`lvll_${message.guild.id}`, "acik")

      const embed = new Discord.RichEmbed()
    .setColor('RED')
    .setDescription(`Seviye Sistem Başarıyla açıldı\nSeviye sistemini kapatmak isterseniz **${prefix}seviye-ayarlar kapat** yazmanız yeterlidir.`)
    message.channel.send(embed)


  };

  if (secenekler === "kapat") {



    db.delete(`lvll_${message.guild.id}`)

    message.channel.send('Seviye sistemi kapatıldı.')


  };
}

exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: [],
		permLevel: 4,
    kategori: "moderasyon2",
	};

module.exports.help = {
  name: 'seviye-ayarlar',
  description: 'seviye-sistem aç kapat.',
  usage: 'seviye-sistem'
};