/*CMD
  command: index
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/


function getUrl(command){
  return WebApp.getUrl({ command: command })
}

WebApp.render({
   template: "index.html"
   // we can pass vars to tem
})

