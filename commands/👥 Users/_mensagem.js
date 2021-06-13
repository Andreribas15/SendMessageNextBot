/*CMD
  command: /mensagem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 👥 Users
  answer: Pode enviar a mensagem.
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Algo está errado, não está certo. Reporte este erro para @Andre_Ribas");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Mensagem de: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("A mensagem foi enviada para o Admin");


