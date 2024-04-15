/*CMD
  command: inbox#2
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

if (content.length < 8) {
  Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ No New Messages Were Recieved",
  show_alert: true
})
  return
}

var result = JSON.parse(content)
var btcc = result
for (var ii in btcc) {
  var fr = btcc[ii].from
  var id = btcc[ii].id
  var sub = btcc[ii].subject
  var dt = btcc[ii].body_text
  var to = btcc[ii].to
//  var fl = btcc[ii].attachments
var eg = parseFloat(ii) + parseInt(1)
  
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text: "*📬 Inbox* _"+eg +"_\n*🆔️ Id :* _"+id+"_\n*✈ To :*_ "+to+"_\n*🔰 Subject :*_ " + sub + "_\n*📌 From :*_ " + fr + "_\n*💬 Message :* " + dt +"", parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "♻️ Refresh", callback_data: "📪 Inbox" }],[{ text: "🔙 Back", callback_data: "/back" }]]
  }
 })
}
}
