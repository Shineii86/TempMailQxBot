/*CMD
  command: /start
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
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
Api.sendMessage({
  text:
    "<b>👋 Welcome To Fast and secure temp mail inbox.\n🚧 Forget about spam and protect your privacy with Tempmail</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "📧 Generate Email", callback_data: "/auto-create" },
        { text: "Updates 🔰", url: "t.me/MaximXBots " }
      ],
      [
        { text: "📊 Statistics", callback_data: "📊 Statistics" },
        { text: "Close ⛔", callback_data: "/close" }
      ]
    ]
  }
})
if (user.username != undefined) {
  var hh = "[@" + user.username + "]"
} else {
  var hh = ""
}
function touchingOwnLink() {
  Bot.sendMessage("**")
}
function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: "<b></b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
function alreadyStarted() {
  Bot.sendMessage("**")
}

var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted,
  linkPrefix: "Bot"
}

RefLib.track(tracks)
if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")
  var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
  stat.add(1)
}
//Your BJs Code
{
  {
    // Check if the user is new by checking for the presence of a property indicating they've been seen before
    var isNewUser = !User.getProperty("seen")

    if (isNewUser) {
      var statu = Libs.ResourcesLib.anotherChatRes("to", "global")
      statu.add(1)
      var logsChannelId = "-1002078281897" // Replace with the actual ID of your logs channel

      var currentDate = new Date().toLocaleDateString("en-US", {
        timeZone: "Asia/Kolkata"
      }) // Get the current date in Asia/Kolkata timezone
      var currentTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata"
      }) // Get the current time in Asia/Kolkata timezone
      var botName = bot.name // Get the name of your bot

      Api.sendMessage({
        chat_id: logsChannelId,
        text:
          "🥳 *New User Notification* 🔔" +
          "\n\n*User:* [" +
          user.first_name +
          "](tg://user?id=" +
          user.telegramid +
          ")" +
          "\n*Username:* @" +
          user.username +
          "\n*ID:* " +
          user.telegramid +
          "\n\n*Date:* " +
          currentDate +
          "\n*Time:* " +
          currentTime +
          "\n*Bot Name:* @" +
          botName +
          "\n*Total Users:* " +
          statu.value(1),
        parse_mode: "Markdown"
      })

      // Set the 'seen' property to indicate that the user has been seen
      User.setProperty("seen", true, "boolean")
    }
  }
}

