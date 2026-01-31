import {Message} from "../models/messages.js"

async function createMesage(text, userName,userId,roomId) {
 const newMessage =  await Message.create({
    text,
   userName, roomId,
    userId

  })
  return  {

    text: newMessage.text,

    userName: newMessage.userName,
    data: newMessage.createdAt,
    userId:newMessage.userId
}
}
async function getAllMessage(roomId) {
 const message = await Message.findAll({
  where: { roomId: Number(roomId) }
 });

  console.log(message)
  return message.map(mes=> {

  return { 'text': mes.text,

    'userName': mes.userName,
    'data': mes.createdAt,
    'userId':mes.userId,
  }
})
}
export const mesageService = {
  createMesage,getAllMessage
}
