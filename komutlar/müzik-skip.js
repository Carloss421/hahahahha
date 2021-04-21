const Discord = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyBTW0jnA023NBduCrds0Wz4PRwOOmDuQxI');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);

    var voiceChannel = message.member.voiceChannel;
        
    const err0 = new Discord.MessageEmbed()
      .setColor("#0f0f0f")
      .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**`) 
    if (!voiceChannel) return message.channel.send(err0);
    const err05 = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: Şu anda çalan şarkı yok.`)
    if (!serverQueue) return message.channel.send(err05);
    const songSkip = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`Şarkı başarıyla atlandı!`)
    serverQueue.connection.dispatcher.end('');
    message.channel.send(songSkip)
if(!message.member.hasPermission("KİCK_MEMBERS")) return message.reply(":x: **Bu komut, ** `DJ` ** veya **`Kanalları Yönet` ** adlı bir role sahip olmanızı gerektirir ** (botla yalnız kalmak da işe yarar");
};

exports.conf = {
    enabled: true,
    aliases: ['sk'],
    permLevel: 0
};

exports.help = {
    name: 'skip',
    description: 'Sıradaki şarkıya geçer. Sırada şarkı yoksa şarkıyı kapatır.',
    usage: 'geç'
};