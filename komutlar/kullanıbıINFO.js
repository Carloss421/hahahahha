const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Alvi"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');

        let user = msg.mentions.users.first() || msg.author;
       let tanım = "Tanımlanamadı!"
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .setTitle('Kullanıcı;')
        .addField(`Durum`, userinfo.status, false)
        .setColor('03f2df')
        .addField(`Katılım Tarihi (Sunucu)`, tanım)
        .addField(`Kimlik:`, userinfo.id)
        .addField(`Botmu:`, userinfo.bot)
        .addField(`Son gönderdiği mesaj:`, userinfo.sonmesaj)
        .setFooter(`${botadi}  Kullanıcı Sistemi`)
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcı-bilgi"],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı'
};