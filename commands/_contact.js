/*CMD
  command: /contact
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ☎️ contact
  group: 
CMD*/

var url = WebApp.getUrl({ command: "index" })

Bot.sendMessage("You can use this url as Web App:")
Api.sendMessage({ text: url })
