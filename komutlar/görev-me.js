const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let e = message.author.id;

let görevMesaj = db.fetch(`görevMesajGönder.${e}`)

let görevListesi = {
b: "**Günde 893 mesaj gönder.**",
i: "**Sunucuya 30 kişi davet et.**",
ü: "****"
}

const göreveleri = new Discord.MessageEmbed()
.setTitle(`${message.author.nickname || message.author.username} adlı kullanıcı'nın görevleri`)
.setDescription(`
`)
message.channel.send({ embed: göreveleri })
};

exports.conf = {
aliases: ["görevlerim", "tasks"]
};

exports.help = {
  name: "me"
};