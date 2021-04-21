const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

exports.run = function(message, msg) {
let embed = new Discord.MessageEmbed()
.setTitle("Alvi - Gif Sistemi")
.setColor("RANDOM")
.setDescription(`
\`${ayarlar.prefix}gif-ara\` Yazdığınız Kelime Hakkında Gif Aratır.
\`${ayarlar.prefix}man-gif\` Rastgele Erkek Gifi Atar.
\`${ayarlar.prefix}woman-gif\` Rastgele Kadın Gifi Atar.
\`${ayarlar.prefix}couple-gif\` Rastgele Sevgili Gifi Atar.
\`${ayarlar.prefix}baby-gif\` Rastgele Bebek Gifi Atar.
\`${ayarlar.prefix}animal-gif\` Rastgele Hayvan Gifi Atar.

`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-gif"],
  permlevel: 0
};
exports.help = {
  name: "gif-sistemi"
};