/*CMD
  command: 📪 Inbox
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


  var at = User.getProperty("email")
  if ( at == undefined){
    Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "❌ Please Create An Email First",
  show_alert: true
})
  }else{
  HTTP.get({
    url:
"https://api.internal.temp-mail.io/api/v3/email/"+at+"/messages",
    success: "inbox#2"
  })
  return}
