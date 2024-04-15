/*CMD
  command: /view
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

HTTP.get({
  url:
    "https://tempmail.plus/api/mails/" +
    params.split("/")[1] +
    "?email=" +
    params.split("/")[2] +
    "&epin=",
  success: "/view2 " 
})

