const Discord = require('discord.js')
const colors = require('../lib/colors.json')
const moment = require('moment')
const version = require('discord.js')
require('moment-duration-format')

exports.run = (client, message, args, level) => {
    try {
    const embed = new Discord.MessageEmbed()
      .setAuthor('Update Log')
      .setColor(colors.default)
      .setThumbnail(client.user.avatarURL)
      .addField('+ New Buyable Ranks page')
      .addField('Started work on the Generator Page')
      .addField('Added Shops')
    message.channel.send(embed);
    message.delete().catch()
    const mg = args.join(' ')
    message.channel.send(mg)
  } catch (err) {
    message.channel.send(client.errors.genericError + err.stack).catch();  

  }
}

exports.conf = {
  enabled: true,
  aliases: ['botinfo'],
  guildOnly: false,
  permLevel: 'User'
}

exports.help = {
  name: 'bot',
  category: 'Utility',
  description: 'Displays information about the bot',
  usage: 'bot'
}
