const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')

exports.run = function(client, message, args) {

let sayaçrol = db.fetch(`sayac_${message.guild.id}`) ? `${sayaçrol}` : `\`Ayarlanmamış!\``
let sayaçkanal = db.fetch(`sayack_${message.guild.id}`) ? `${sayaçkanal}` : `\`Ayarlanmamış!\``
let otorol = db.fetch(`otoRL_${message.guild.id}`) ? `${otorol}` : `\`Ayarlanmamış!\``
let otorolkanal = db.fetch(`otoRK_${message.guild.id}`) ? `${otorolkanal}` : `\`Ayarlanmamış!\``

let kayıtlog = db.fetch(`logkayıt.${message.guild.id}`) ? `${kayıtlog}` : `\`Ayarlanmamış!\``
//  db.set(`otoRL_${message.guild.id}`, rol.id);
//  db.set(`otoRK_${message.guild.id}`, kanal.id);

let embed = new Discord.MessageEmbed()

.setTitle(`Alvi - Ayarlar`)
.setColor("RANDOM")
.setDescription(`
**SAYAC**
**Rol:** ${sayaçrol} **Kanal:** ${sayaçkanal}
`,true)
.setDescription(`
**OTOROL**
**Rol:** ${otorol} **Kanal:** ${otorolkanal}
`,true)
.setDescription(`
**KAYIT-SISTEMI**
**Rol:** **Kanal:** **Yetkili:** **Log:** ${kayıtlog}
`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-ayarlar","ayarlar"],
 permlevel: 0
};

exports.help = {
    name: "settings"
};