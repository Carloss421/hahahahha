const Discord = require("discord.js");
const util = require("util");
const ayarlar = require("../ayarlar.json");
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

  if (message.author.id !== ayarlar.ownerID) {
    const embed = new Discord.MessageEmbed()
      .setDescription(lang.evalCommand.AownerEvalOWNERED)
      .setColor("BLUE");
    return message.channel.send(embed).then(msg => msg.delete(3000));
  }
  let tokenuyari = lang.evalCommand.AownerEvalTOKENWARN;
  var embed = new Discord.MessageEmbed().setColor("RANDOM");
  var code = args.join(" ");
  //var code2 = args.slice(1).join(' ') ||  args.join(' ');

  if (!args[0]) {
    message.channel.send(lang.evalCommand.AownerEvalTESTCOMMANDSWARN);
    return;
  }

  if (code.match(/(client.token)/g)) {
    let token_uyari = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `${lang.evalCommand.AownerEvalERROR}\n\`\`\`xl\n${tokenuyari}\`\`\``
      );
    message.channel.send(token_uyari);
    return;
  }
  if (args[0] === "ayarlar.token")
    code = lang.evalCommand.AownerEvalTOKENERRORED;
  if (args[0] === "config.token")
    code = lang.evalCommand.AownerEvalTOKENERRORED;
  if (code.match(/(client["token"])/g)) {
    let token_uyari2 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `${lang.evalCommand.AownerEvalERROR}\n\`\`\`xl\n${tokenuyari}\`\`\``
      );
    message.channel.send(token_uyari2);
    return;
  }

  function clean(text) {
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 0 });
    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  try {
    var evaled = clean(await eval(code));
    if (evaled.startsWith("NDC4O")) evaled = tokenuyari;
    if (evaled.constructor.name === "Promise")
      embed.setDescription(`\`\`\`\n${evaled}\n\`\`\``);
    else embed.setDescription(`\`\`\`xl\n${evaled}\n\`\`\``);
    let giren_cıkan = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        `${lang.evalCommand.AownerEvalCODE}\n\`\`\`javascript\n${code}\n\`\`\``
      )
      .setDescription(
        `${lang.evalCommand.AownerEvalCONCLUSION}\n\`\`\`xl\n${evaled}\`\`\``
      );
    message.channel.send(giren_cıkan);
  } catch (err) {
    embed.setColor("RANDOM");
    embed.setDescription(
      `${lang.evalCommand.AownerEvalERROReD}\n\`\`\`xl\n${err}\n\`\`\``
    );
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koddene", "eval", "trycode", "evalCODE"],
  permLvl: 4
};
exports.help = {
  name: "evalKOD",
  description: "Kod test etmek için kullanılır.",
  usage: "eval kod"
};
