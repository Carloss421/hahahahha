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

    const a = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: **Bu komutu kullanmak için bir ses kanalında olmanız gerekir.**`)  
  if (!voiceChannel) return message.channel.send(a)

    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        const asjdhsaasjdhaadssad = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:play_pause: Devam ettiriliyor :thumbsup:`)
      return message.channel.send(asjdhsaasjdhaadssad);
    }
    const b = new Discord.MessageEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: Şu anda çalan şarkı yok.`)
    if (!serverQueue) return message.channel.send(b);

};

exports.conf = {
    enabled: true,
    aliases: ['r'],
    permLevel: 0
};

exports.help = {
    name: 'resume',
    description: 'Duraklatılmış şarkıyı devam ettirir.',
    usage: 'devamet'
};