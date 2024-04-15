/*CMD
  command: /get
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Enter your Bots Buisness Email ID_

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
   email: message,
   bot_id: bot.id
})
Bot.sendMessage("_Bot Installed to "+message+"_\n\n*© @KingBjss*")
