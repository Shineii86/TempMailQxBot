/*CMD
  command: 📊 Statistics
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

var m = Libs.ResourcesLib.anotherChatRes("m", "global")
  var ms = Libs.ResourcesLib.anotherChatRes("ms", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
 if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text: "<b>📊 Bot Live Stats 📊\n\n💡 Total Users: "+status.value().toFixed(0)+" User(s)\n\n⚙ Total Email Generated : "+m.value()+" \n\n🗑 Total Email Deleted : "+ms.value()+" </b>", parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "🔙 Back", callback_data: "/back" }]]
  }
})
}
