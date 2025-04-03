# Task Manager & Chat App

A full-stack Task Manager with an integrated Chat feature. This project consists of separate backend and frontend services running on different ports for task management and chat functionality.

## Features
- **Task Manager**: Create, update, delete, and manage tasks.
- **Chat App**: Real-time messaging between users.
- **Authentication**: Secure login/signup functionality.
- **Responsive UI**: User-friendly design with a modern look.
- **API Integration**: REST API for handling tasks and chat messages.

---

## Tech Stack
### Backend
- **Node.js** (Express.js)
- **MongoDB** (for database)
- **Socket.io** (for real-time chat)

### Frontend
- **React.js**
- **Vite** (for frontend development)
- **Tailwind CSS** (for styling)

---

## Project Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/task-manager-chat-app.git
cd task-manager-chat-app
```

### **2. Backend Setup**
#### **Task Manager Backend (Port: 5000)**
```sh
cd backend/task-manager
npm install
node index.js
```

#### **Chat Backend (Port: 3001)**
```sh
cd backend/chat
npm install
node server.js
```

### **3. Frontend Setup**
#### **Task Manager Frontend (Port: 3000)**
```sh
cd frontend/task-manager
npm install
npm run dev
```

#### **Chat Frontend (Port: 5173)**
```sh
cd frontend/chat
npm install
npm run dev
```

---

## Environment Variables
Create a `.env` file in both backend folders (`backend/task-manager/` and `backend/chat/`) with the following values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
```env
PORT=3001
CHAT_DB_URI=your_mongodb_connection_string_for_chat
JWT_SECRET=your_secret_key
```

---

## API Routes

### **Task Manager API (Backend: 5000)**
| Method | Endpoint       | Description          |
|--------|---------------|----------------------|
| GET    | /tasks        | Get all tasks       |
| POST   | /tasks        | Create a task       |
| PUT    | /tasks/:id    | Update a task       |
| DELETE | /tasks/:id    | Delete a task       |

### **Chat API (Backend: 3001)**
| Method | Endpoint      | Description            |
|--------|--------------|------------------------|
| GET    | /messages    | Get chat messages      |
| POST   | /messages    | Send a new message     |

---

## Running the App
Make sure **all four servers** (task backend, chat backend, task frontend, chat frontend) are running properly.

1. **Start Task Manager Backend** (`5000`)
2. **Start Chat Backend** (`3001`)
3. **Start Task Manager Frontend** (`3000`)
4. **Start Chat Frontend** (`5173`)

Once all servers are running, open:
- **Task Manager UI**: `http://localhost:3000`
- **Chat UI**: `http://localhost:5173`

---

## Contributions
Feel free to fork the repository and create a pull request with any improvements!

---

## License
This project is licensed under the MIT License.

