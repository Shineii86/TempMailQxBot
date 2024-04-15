/*CMD
  command: /del
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

if (!params) {
  return
}
var p = params.split(" ")

HTTP.delete({
  url: "https://api.internal.temp-mail.io/api/v3/email/"+p[0]+"",
  body: {"token":""+p[1]+""},
  success: "/del#2"
})
