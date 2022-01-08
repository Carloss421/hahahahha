const Discord = require('discord.js')
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async (client, message, args) => {
    
  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (lg == "tr") {
var lang = tr;
  }
  
        let member = message.guild.member(message.mentions.users.array()[0])
        let member2 = message.guild.member(message.mentions.users.array()[1])
        var s = message.author
        if(member2) { var s = member2.user }
        if(!member) {const embed = new Discord.MessageEmbed().setDescription(lang.love.a)
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }

        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
  var yorum = lang.love.b
        if(anasonuc < 99) {
  var yorum = lang.love.c
        }
        if(anasonuc < 69) {
  var yorum = lang.love.ç
        }
        if(anasonuc < 45) {
  var yorum = lang.love.d
        }
        if(anasonuc < 27) {
  var yorum = lang.love.e
        }

        const embed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`${lang.love.f}: **${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
                .setColor("RANDOM")
        .setTimestamp()
        message.channel.send({embed})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["aşk", "love", "love-meter"],
  permLevel: 0,
};

exports.help = {
  name: 'aşk-ölçer'
};