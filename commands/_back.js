/*CMD
  command: /back
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

var url = WebApp.getUrl({ command: "index" })
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text:
    "<b>👋 Welcome To Fast and secure temp mail inbox.\n🚧 Forget about spam and protect your privacy with Tempmail</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "📧 Generate Email", callback_data: "/auto-create" },{ text: "☎️ Contact", url: url }],[{ text: "📊 Statistics", callback_data: "📊 Statistics" }]]
  }
})
}
