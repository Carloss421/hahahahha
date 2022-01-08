const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
  const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.setDescription(`
👩 \`${prefix}kız | ${prefix}kız-kayıt | ${prefix}k\` Kız kaydı yapar.
👩 \`${prefix}kız-rol ayarla\` Kız kaydı yapıldığında verilecek rol.
👩 \`${prefix}kız-rol sıfırla\` Kız kaydı yapıldığında verilecek rolünü sıfırlar.

🧑 \`${prefix}erkek | ${prefix}erkek-kayıt | ${prefix}e\` Erkek kaydı yapar.
🧑 \`${prefix}erkek-rol ayarla\` Erkek kaydı yapıldığında verilecek rol.
🧑 \`${prefix}erkek-rol sıfırla\` Erkek kaydı yapıldığında verilecek rolünü sıfırlar.

📋 \`${prefix}alınacak-rol ayarla\` Bir kayıt yapıldığında **@Misafir** rolünü almasını sağlar.
📋 \`${prefix}alınacak-rol sıfırla\` Bir kayıt yapıldığında verilecek rolü sıfırlar.
📋 \`${prefix}kayıt-yetkili ayarla\` Kayıt yapacak rolü ayarlar.
📋 \`${prefix}kayıt-yetkili sıfırla\` Kayıt yapacak rolünü sıfırlar.
📋 \`${prefix}kayıt-log ayarla\` Kayıt logunu ayarlar.
📋 \`${prefix}kayıt-log sıfırla\` Kayıt logunu sıfırlar.
📋 \`${prefix}kayıt-kanal ayarla\` Kayıt kanalını ayarlar.
📋 \`${prefix}kayıt-kanal sıfırla\` Kayıt kanalını sıfırlar.
📋 \`${prefix}kayıt-sistemini sıfırla\` Bütün ayarlanan kayıt komutlarını sıfırlar.

👤 \`${prefix}normal | ${prefix}normal-kayıt | ${prefix}nk\` Üye kaydı yapar.
👤 \`${prefix}normal-rol ayarla\` Üye kaydı yapıldığında verilecek rol.
👤 \`${prefix}normal-rol sıfırla\` Üye kaydı yapıldığında verilecek rolü sıfırlar.


╔═══════════════════════════════════════════════╗
║**NOT:** \`kayıt-kanal\` ayarlanmazsa hiçbir kayıt komutu çalışmaz.İşe yaradığı birtek 
║o kanalda kayıt yapılabilmesi.
║**NOT:** \`kayıt-yetkili\`'si ayarlanmazsa hiçbir kayıt komutu çalışmaz.
╚═══════════════════════════════════════════════╝
`)
/*

╔════════════════════════════╗
║
╚════════════════════════════╝


*/

message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-kayıt-sistemi"],
  permlevel: 0
};
exports.help = {
  name: "kayıt-sistemi"
};