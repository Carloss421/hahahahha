const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription('Çekiliş Konusu belirtmelisin.').setColor("RANDOM").setTitle("Alvi - Çekiliş HATA"));
  let süre = args.slice(0).join(' ');
  if (süre.length < 1) return message.channel.send(new Discord.MessageEmbed().setDescription('Çekilişin bitiş süresini belirtmelisin. Kullanım: [D] gün [H] saat [m] dakika [s] saniye').setColor("RANDOM").setTitle("Alvi - Çekiliş HATA"));
    const embed = new Discord.MessageEmbed()
        .setColor("#36393F")
        .addField('Ödül', `${mesaj}`)
        .addField('Bitiş Süresi', `${süre}`)
        .addField('Kazanan:', `${message.guild.members.random().displayName}`)
    return message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['çekiliş-yap'],
    permLevel: 2
};

exports.help = {
    name: 'çekiliş-başlat',
    description: 'çekilişyap.',
    usage: 'çekilişyap'
};