/*CMD
  command: /auto-create
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


HTTP.post({
  url: "https://api.internal.temp-mail.io/api/v3/email/new",
  body: { min_name_length: 10, max_name_length: 10 },
  success: "/auto-create#2"
})

