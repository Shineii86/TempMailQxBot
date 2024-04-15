/*CMD
  command: 📧 Generate Email
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

var saeed = [[{ text: "Automatic Email Address⚡", callback_data: "/auto-create" }],[{ text: "Set Own Email Address⚡", callback_data: "/manual-create" }],[{ text: "🔐 Back", callback_data: "/back" }]] 

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text:
    "*Please Select The Option To Create An Email 📨*",reply_markup: {
        inline_keyboard: saeed}, 
parse_mode: "Markdown"})
}
