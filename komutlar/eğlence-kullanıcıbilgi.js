const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();



exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');

        let user = msg.mentions.users.first()
if (!user) return msg.channel.send(new Discord.MessageEmbed().setDescription("Bilgilerine bakacağın kullanıcıyı etiketle!").setColor("#ff000"))
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `<:dnd:848185896658534451> Rahatsız Etmeyin`)
        .replace("online", `<:online:848185874205507655> Çevrimiçi`)
        .replace("idle", `<:idle:848185921361805332> Boşta`)
        .replace("offline", `<:offline:848185846816964618> Çevrimdışı`)
        userinfo.bot = user.bot.toString()
        .replace("false", `Hayır`)
        .replace("true", `Evet`)
        userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
        const uembed = new Discord.MessageEmbed()
        .setThumbnail(userinfo.avatar)
        .setTitle('Alvi - Kullanıcı Bilgi')
        .setDescription(`
        Bilgilere Bakan Kullanıcı: <@${msg.author.id}>
        Bilgilerine Bakılan Kullanıcı: <@${userinfo.id}>`)
        .addField(`Durum`, userinfo.status,true)
        .setColor('03f2df')
        .addField(`Kimlik;`, userinfo.id,true)
        .addField(`Botmu;`, userinfo.bot,true)
        .addField(`Son gönderdiği mesaj;`, userinfo.sonmesaj,true)
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kullanıcı-bilgi"],
  permLevel: 0
};
exports.help = {
  name: 'kullanıcı-bilgileri',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'kullanıcı'
};