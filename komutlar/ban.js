const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async(client, message, args) => {

    
  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (lg == "tr") {
var lang = tr;
  }

  let prefix = ayarlar.prefix;
  let CEKişi = message.mentions.users.first();
  let CESebep = args.slice(1).join(" ") || lang.ban.a;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(lang.ban.b));
  if (!CEKişi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(`${lang.ban.c}\n🔮 ${lang.ban.ç} \`${prefix}ban @${lang.ban.d} <${lang.ban.e}>\``).setColor("RED")
    );
  if (
    !message.guild.members.cache
      .get(client.user.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(new Discord.MessageEmbed().setDescription(lang.ban.f).setColor("RED"));
  await message.guild.members.ban(CEKişi.id, { reason: CESebep });

return message.channel.send(new Discord.MessageEmbed().setDescription("<@"+ CEKişi.id +" adlı kullanıcı <@"+ message.author.id +"> adlı yetkili tarafından\n```" +CESebep +"```,\nsebebi ile banlandı!"
  ));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "",
  usage: ""
};



/*const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.MessageEmbed().setDescription(`Gerekli izin yok`).setColor("RANDOM"));

  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
    let modlog = message.guild.channels.find('name', 'cezalog');
    if (!modlog) return message.reply('`cezalog` kanalını bulamıyorum. Bunu gerçekliştirmek için **cezalog** adında kanal oluşturun!');

  if (message.mentions.users.size < 1) return message.reply('Banlamak İstediğiniz Kişiyi Etiketleyiniz');
  if (reason.length < 1) return message.reply('Sebep belirtin');
  if (user.id === message.author.id) return message.reply('Kendini Banlayamazssın');




  message.guild.ban(user, 2);

  const narkozban = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`🧹 Başarıyla banlandı`)
  .setAuthor(`${message.author.tag} Tarafından Banlandı`, message.author.avatarURL)
  .setTimestamp()
 // message.channel.send(narkozban)

return message.guild.channels.get(modlog.id).send(narkozban);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban', 'yasakla'],
  permLevel: 3,
    kategori: "moderasyon",
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'yasakla <@kullanıcı> <sebep>',

};*/