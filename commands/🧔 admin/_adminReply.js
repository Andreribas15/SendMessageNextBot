/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Envie a mensagem de resposta.
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "Resposta do Admin: " + "\n" + message + "\n\n Responder de novo: /message";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("A mensagem foi enviada.")
