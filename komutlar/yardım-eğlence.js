const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('RANDOM')
.setDescription(`
\`${prefix}8ball\` Sihirli 8ball sorularınızı cevaplar .
\`${prefix}ara155\` Polisi Arar(ciddiye almayın).
\`${prefix}atatürk\` Atatürk fotoğraları gönderir. 
\`${prefix}avatar\` Avatarınızı gösterir.
\`${prefix}emoji-yazı\` Mesajınızı emojiye çevirir.
\`${prefix}gifara\` Mesajınızla ilgili gifleri Giphy'da aratır.
\`${prefix}havadurumu\` Havadurumu söyler.
\`${prefix}herkeze-benden çay\` Herkeze Çay Verir.
\`${prefix}hesapla\` Belirtilen işlemi yapar.
\`${prefix}mesajdöndür\` Mesajınızı tersden yazar.
\`${prefix}simit\` Simit Yer.
\`${prefix}stresçarkı\` Sizin için bir stres çarkı çevirir.
\`${prefix}yazıtura\` Yazı-Tura atar.
\`${prefix}çekiç\` İstediğiniz Kişiye Çekiç Atarsınız.
\`${prefix}şifre\` Rastgele bir şifre oluşturur.
\`${prefix}yılbaşı\` Yılbaşına ne kadar kaldı öğrenirsin.

Burada çok fazla komut olduğu için \`${prefix}yardım-eğlence2\` yazarak komutların devamına bakabilirsiniz.`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};