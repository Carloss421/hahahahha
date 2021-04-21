const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
let eğlence = new Discord.MessageEmbed()
.setTitle('Alvi - Eğlence')
.setColor('RANDOM')
.setDescription(`
\`${ayarlar.prefix}8ball\` Sihirli 8ball sorularınızı cevaplar .
\`${ayarlar.prefix}ara155\` Polisi Arar(ciddiye almayın).
\`${ayarlar.prefix}atatürk\` Atatürk fotoğraları gönderir. 
\`${ayarlar.prefix}avatar\` Avatarınızı gösterir.
\`${ayarlar.prefix}emoji-yazı\` Mesajınızı emojiye çevirir.
\`${ayarlar.prefix}gifara\` Mesajınızla ilgili gifleri Giphy'da aratır.
\`${ayarlar.prefix}havadurumu\` Havadurumu söyler.
\`${ayarlar.prefix}herkeze-benden çay\` Herkeze Çay Verir.
\`${ayarlar.prefix}hesapla\` Belirtilen işlemi yapar.
\`${ayarlar.prefix}mesajdöndür\` Mesajınızı tersden yazar.
\`${ayarlar.prefix}simit\` Simit Yer.
\`${ayarlar.prefix}stresçarkı\` Sizin için bir stres çarkı çevirir.
\`${ayarlar.prefix}yazıtura\` Yazı-Tura atar.
\`${ayarlar.prefix}çekiç\` İstediğiniz Kişiye Çekiç Atarsınız.
\`${ayarlar.prefix}şifre\` Rastgele bir şifre oluşturur.
`)
message.channel.send(eğlence)
};

exports.conf = {
 enabled: true,
 aliases: ["yardım-fun"],

};

exports.help = {
    name: "yardım-eğlence"
};
