const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let CEKişi = message.mentions.users.first();
  let CESebep = args.slice(1).join(" ") || "Belirtilmemiş";
  let CELog = db.fetch("cezalog." + message.guild.id);
  let CEYetkili = db.fetch("banyetkilisi." + message.guild.id);

  if (!CEYetkili) return message.channel.send(new Discord.MessageEmbed().setDescription("Sistem ayarlanmamış! Ayarlamak için `a!ban-sistemi`"));
  if (!CELog) return message.channel.send(new Discord.MessageEmbed().setDescription("Sistem ayarlanmamış! Ayarlamak için `a!ban-sistemi`"));

  if (!message.member.roles.cache.has(CEYetkili))
    return message.channel.send(`<@${message.author.id}> Ban Yetkin Olmadan Ban Sistemdeki Hiç Birşeyi Ayarlamassın.`);
  if (!CEKişi)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(` Banlanacak Kişiyi Etiketle \n🔮 Doğru Kullanım \`${prefix}ban @Kişi <Sebep>\``)
    );
  if (
    !message.guild.members.cache
      .get(client.user.id)
      .hasPermission("BAN_MEMBERS")
  )
    return message.channel.send(" Ban yetkim yok.");
  await message.guild.members.ban(CEKişi.id, { reason: CESebep });
  await message.guild.channels.cache
    .get(CELog)
    .send(
      "<@" +
        CEKişi.id +
        " kişisi <@" +
        message.author.id +
        " kişisi tarafından ``" +
        CESebep +
        "`` sebebi ile banlandı!"
    );
  return message.channel.send(
    "<@" +
      CEKişi.id +
      " kişisi <@" +
      message.author.id +
      " kişisi tarafından ``" +
      CESebep +
      "`` sebebi ile banlandı!"
  );
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