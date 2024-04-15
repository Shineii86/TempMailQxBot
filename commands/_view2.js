/*CMD
  command: /view2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/


if (content) {
  var rs = JSON.parse(content)
  var cc1 = "" + rs.date + ""
  var cc2 = "" + rs.from_mail + ""
  var cc3 = "" + rs.from_name + ""
  var cc4 = "" + rs.subject + ""
  var cc5 = "" + rs.text + ""
  var cc6 = "" + rs.to + ""
  var cc7 = "" + rs.mail_id + ""

  var msg =
    "Mail Id : `" +
    cc7 +
    "`\nDate & Time : `" +
    cc1 +
    "`\nFrom: `" +
    cc2 +
    " [ " +
    cc3 +
    " ]`\nSubject: `" +
    cc4 +
    "`\nTo: `" +
    cc6 +
    "`\n\nText:\n" +
    cc5 +
    ""
  Api.sendMessage({
    text: msg,
    parse_mode: "Markdown"
  })
}

