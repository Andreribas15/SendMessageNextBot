/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 🧔 admin
  answer: Digite a senha de Admin.
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var msg;

// Automatic fix
var msg;

// Automatic fix
var msg;

msg = "Algo está errado, não está certo. Seu acesso ao painel de Admin foi negado."

if(message=="2853K7wbhe"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "Hum, você realmente é um Admin. Ok, pode entrar.";
}

Bot.sendMessage(msg);

