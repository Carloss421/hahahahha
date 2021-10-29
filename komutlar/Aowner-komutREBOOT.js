const Discord = require("discord.js");
const dil = require("../Languages/dil");
const dils = new dil("dil", "diller");

exports.run = async (client, message, args) => {
  let en = require("../Languages/dil/en.json");
  let tr = require("../Languages/dil/tr.json");

  var lg = dils.get(`dilang.${message.guild.id}`)
  if (lg == "en") {
var lang = en;
  }
  if (!lg) {
var lang = tr;
  }
  
  
        let embed = new Discord.MessageEmbed()
        .setTitle("Reload")
        .setDescription(lang.rebootS.CrebootOWNERED)
        .setColor("#cdf785");
        if(message.author.id !== '739411430171738142') return message.channel.send(embed);

        if(!args[0].toLowerCase()) return message.channel.send(lang.rebootS.CrebootWARNNED)

        let komutİsim = args[0].toLowerCase()

        try {

          delete require.cache[require.resolve(`./${komutİsim}.js`)]
          const pull = require(`./${komutİsim}.js`)
          client.commands.set(pull.help.name, pull)
          message.channel.send(`${lang.rebootS.CrebootSUCCESFLY} \`${komutİsim}\``)
        }

        catch (e) {
          console.log(e)
          return message.channel.send(`${lang.rebootS.CrebootERRORED} ${komutİsim} \n${e}`)
        }


      }


exports.conf = {
    aliases: ['komutyenile','yenile','reload'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "komut-yenile",
    description: "Belirttiğiniz komutu yeniden başlatır.",
    usage: "komut-yenile"
};