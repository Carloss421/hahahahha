const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.chanel.send(new Discord.MessageEmbed().setDescription(
"Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin .s) \nOy vermek için: https://discordbots.org/bot/"+ client.user.id +"/vote")) 

        } else {
            message.channel.send(new Discord.MessageEmbed().setDescription("Destekçi rolün verildi."));
            message.member.roles.add("847139314542313522")//oy verince eklenecek rol id

        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["upvote", "oyverdim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'oyverdim',
  category: 'kullanıcı',
  description: 'Destekçi rolü alırsın.',
  usage: '/oyverdim'
};