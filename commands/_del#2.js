/*CMD
  command: /del#2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ( content == undefined ){
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "✅ Successfully Delete Emails",
  show_alert: true
})
var ms = Libs.ResourcesLib.anotherChatRes("ms", "global")
ms.add(1)

Api.deleteMessage({ message_id: request.message.message_id })
Bot.runCommand("/start")
}else{
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Unsuccessful Delete Emails",
  show_alert: true
})
}

