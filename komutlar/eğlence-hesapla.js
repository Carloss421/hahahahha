const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const db = require('quick.db')
const stripIndents = require('common-tags').stripIndents



exports.run = async(client, message, args) => {
let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: '+ prefix +'hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err +'**')
        }

        const embed = new Discord.RichEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(embed)
    }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};