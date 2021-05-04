const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = function(client, message, args) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Kayıt")
.setColor("RANDOM")
.setDescription(`
👩 \`${ayarlar.prefix}kız | ${ayarlar.prefix}kız-kayıt | ${ayarlar.prefix}k\` Kız kaydı yapar.
👩 \`${ayarlar.prefix}kız-rol\` Kız kaydı yapıldığında verilecek rol.
👩 \`${ayarlar.prefix}kız-rol sıfırla\` Kız kaydı yapıldığında verilecek rolünü sıfırlar.

🧑 \`${ayarlar.prefix}erkek | ${ayarlar.prefix}erkek-kayıt | ${ayarlar.prefix}e\` Erkek kaydı yapar.
🧑 \`${ayarlar.prefix}erkek-rol\` Erkek kaydı yapıldığında verilecek rol.
🧑 \`${ayarlar.prefix}erkek-rol sıfırla\` Erkek kaydı yapıldığında verilecek rolünü sıfırlar.

📋 \`${ayarlar.prefix}alınacak-rol\` Bir kayıt yapıldığında **@Kayıtsız, @Misafir** rollerini almasını sağlar.
📋 \`${ayarlar.prefix}kayıt-yetkili\` Kayıt yapacak rolü ayarlar.
📋 \`${ayarlar.prefix}kayıt-log\` Kayıt logunu ayarlar.
📋 \`${ayarlar.prefix}kayıt-kanal\` Kayıt kanalını ayarlar.
📋 \`${ayarlar.prefix}kayıt-sistemini sıfırla\` Bütün ayarlanan kayıt komutlarını sıfırlar.
📋 \`${ayarlar.prefix}kayıt-sistemini geri getir\` Sıfırlanan kayıt komutlarını geri getirir.

👤 \`${ayarlar.prefix}normal | ${ayarlar.prefix}normal-kayıt | ${ayarlar.prefix}nk\` Üye kaydı yapar.
👤 \`${ayarlar.prefix}normal-rol\` Üye kaydı yapıldığında verilecek rol.
👤 \`${ayarlar.prefix}normal-rol sıfırla\` Üye kaydı yapıldığında verilecek rolü sıfırlar.


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