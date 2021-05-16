const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Alvi Jail(Karantina= Sistemi').setDescription(`
\`${prefix}jail-log [#kanalEtiket]\` Jail sistemi için gereklidir. **Karantina** kanalını seçmeniz gerekiyor.
\`${prefix}jail-log-kapat\`
\`${prefix}jail-yetkili-role [@rolEtiket]\` Jaili **kullanacak yetkili** rolünü etiketle
\`${prefix}jail-karantina-role [@rolEtiket]\` Jail **karantina rolünü** etiketle`)
.addField('ᅠ', 'ᅠ')
.addField('Jail Komutu', `${prefix}cezalı, ${prefix}Cezalı, ${prefix}jail`)
.addField('Örnek Karantina komut', `\`\`\`${prefix}jail @etiket\`\`\``)
.addField('ᅠ', 'ᅠ')// xd
.addField('Jail den çıkarmak isterseniz', `\`${prefix}k-erkek\`, \`${prefix}k-kadın\`\n**Komutları aktif etmek için:** \`${prefix}erkek-role [@roleEtiket]\` **-** \`${prefix}kadın-role [@roleEtiket]\``)
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'jail-sistemi'
};