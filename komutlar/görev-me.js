const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
let e = message.author.id;
let g = message.guild.id;
let emoji = {
başlamaBar: "<:yellowB:845390991065219094>",
doluBar: "<:yellowO:856880370213716008>",
doluBitişBar: "<:sapsariBAR:856465984758874112>",
başlangıcBar: "<:greyB:849765192535113789>",
boşBar: "<:greyO:845390779823554632>",
boşBitişBar: "<:greyS:845390694683508826>"
}

let görevMesaj = db.fetch(`görevMesajGönder.${g}.${e}`) || 0
let görevDavet = db.fetch(`görevDavetEt.${g}.${e}`) || 0
function mesajBari (value, maxValue, size) {
  const veri = db.fetch(`görevMesajGönder.${g}.${e}`)
        const progress = Math.round(size * ((value / maxValue) > 1 ? 1 : (value / maxValue)));
        const emptyProgress = size - progress > 0 ? size - progress : 0;
         let progressStart;
            if(veri !== 0) progressStart = `${emoji.başlangıcBar}`
            if(veri > 0) progressStart = `${emoji.başlamaBar}`
             const progressText = `${emoji.doluBar}`.repeat(progress);
             const emptyProgressText = `${emoji.boşBar}`.repeat(emptyProgress)
             const bar = progressStart + progressText + emptyProgressText + `${emptyProgress == 0 ? `${emoji.doluBitişBar}` : `${emoji.boşBitişBar}`}`;
        return bar;
}

  function davetBari (value, maxValue, size) {
  const veri = db.fetch(`görevDavetEt.${g}.${e}`)
        const progress = Math.round(size * ((value / maxValue) > 1 ? 1 : (value / maxValue)));
        const emptyProgress = size - progress > 0 ? size - progress : 0;
         let progressStart;
            if(veri !== 0) progressStart = `${emoji.başlangıcBar}`
            if(veri > 0) progressStart = `${emoji.başlamaBar}`
             const progressText = `${emoji.doluBar}`.repeat(progress);
             const emptyProgressText = `${emoji.boşBar}`.repeat(emptyProgress)
             const bar = progressStart + progressText + emptyProgressText + `${emptyProgress == 0 ? `${emoji.doluBitişBar}` : `${emoji.boşBitişBar}`}`;
        return bar;
}
  
let görevListesi = {
b: "**Günde 893 mesaj gönder.**",
i: "**Sunucuya 30 kişi davet et.**",
}

const göreveleri = new Discord.MessageEmbed()
.setTitle(`${message.author.nickname || message.author.username} adlı kullanıcı'nın görevleri`)
.setDescription(`
${görevListesi.b}
${mesajBari(görevMesaj, 893, 9)} \`${görevMesaj > 893 ? "Tamamlandı!" : `${görevMesaj+" / 893"}`}\`

${görevListesi.i}
${davetBari(görevDavet, 39, 9)} \`${görevDavet > 30 ? "Tamamlandı!" : `${görevDavet+" / 30"}`}\``)
message.channel.send({ embed: göreveleri })
};

exports.conf = {
aliases: ["görevlerim", "tasks"]
};

exports.help = {
  name: "me"
};