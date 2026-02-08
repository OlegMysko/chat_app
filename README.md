# Chat App – Monorepo

This is a **full-stack chat application** built with React (Client) and Node.js (Server) using **Socket.IO** for real-time communication.  
Users can create rooms, join them, send messages, and see message history.

##  README (UA)
- ua [Українська версія readme](README.ua.md)

### Features
- Set a **username** (saved in `localStorage`)  
- Messages include:
  - **Author**
  - **Time**
  - **Text**
- **Room management**:
  - Create
  - Rename
  - Join
  - Delete
- New users can see **all previous messages** in the room
- Real-time updates using **Socket.IO**
- Responsive UI

### Tech Stack
**Frontend:**
- React + TypeScript
- Socket.IO Client
- SCSS 
- ESLint + Prettier

**Backend:**
- Node.js + Express (or Nest.js)
- Socket.IO Server
- JavaScript
- In-database storage for rooms/messages

### Project Structure
chat_app/
├─ Client/ # React client
│ ├─ src/
│ ├─ tsconfig.json
│ └─ .eslintrc.cjs
├─ Server/ # Node.js server
│ ├─ src/
│ └─ .eslintrc.cjs
└─ README.md
### Installation & Running
# Client
cd Client
npm install
npm start
# Server
cd Server
npm install
npm run start