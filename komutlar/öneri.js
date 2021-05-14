const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require("../ayarlar.json");



exports.run = function(client, message, args) {
    let hata = args.join(" ")
    let şikayetlog = "833884749180960779"
    let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription(`
\`__Hatalı Kullanım...__\`
${hata}
\`__Doğru Kullanım__\`
\`${prefix}öneri <öneririniz>\`**`));

const ace = new Discord.MessageEmbed()
.setDescription(`<@${message.author.id}>\n\n Öneriniz Bildirildi! En Kısa Sürede Geri Dönüş Yapılıcakatır.\n\n Anlayışınız İçin Teşekkürler`)
.setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send(ace)

const acee = new Discord.MessageEmbed()
.setDescription(`<@${message.author.id}> adlı kullanıcının **__Önerisi__**:`)
.addField(`
**Kulanıcı Bilgileri**`,
` **__Kullanıcı ID:__** **\`${message.author.id}\`**
**__Kullanıcı Adı:__** **\`${message.author.username}\`**
**__Kullanıcı Tagı:__** **\`#${message.author.discriminator}\`**`)
.addField("Kullanıcı Önerisi", type)
.setThumbnail(message.author.avatarURL)
 client.channels.cache.get(şikayetlog).send(acee);
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["öner","alviyi öner"],
  permLevel: 0 
};

exports.help = {
  name: 'öneri',
  description: 'Şikayet de bulunursunuz..',
  usage: 'şikayet <şikayet>'
}; 