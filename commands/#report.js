/*CMD
  command: #report
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Por favor, envie sua denunciar.
  keyboard: 
  aliases: /report
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

msg = "Denuncia de: " + user_link +
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

Bot.sendMessage("*Relatório Enviado!*");


