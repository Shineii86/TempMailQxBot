/*CMD
  command: /auto-create#2
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

var result = JSON.parse(content)
var c1 = result.email
var c2 = result.token
var url =
  "https://temp-mail.io/en/email/" +
  c1 +
  "/token/" +
  c2 +
  "?utm_campaign=TempMailBot&utm_content=email_info&utm_medium=organic&utm_source=telegram-bot"
var m = Libs.ResourcesLib.anotherChatRes("m", "global")
m.add(+1)

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text: "*📧 Your Temporary Email Address : *\n" + c1 + "",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "📪 Inbox", callback_data: "📪 Inbox" },{ text: "🗑️ Delete", callback_data: "/del "+c1+" "+c2+"" }],[{ text: "🔙 Back", callback_data: "/back" }]]
  }
})
}
User.setProperty("email", c1, "string")
User.setProperty("token", c2, "string")
