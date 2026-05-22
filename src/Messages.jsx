import { useState } from "react";
import { Send } from "lucide-react";
import ModrenSidebar from "./ModernSidebar";

export default function Messages() {
  // ✅ Users (state editable)
  const [users, setUsers] = useState([
    { id: 1, name: "Ali", last: "Kya haal hai?", online: true },
    { id: 2, name: "Ahmed", last: "Order bhej diya", online: false },
    { id: 3, name: "Sara", last: "Thanks 👍", online: true },
  ]);

  const [activeUser, setActiveUser] = useState(users[0]);

  const [messages, setMessages] = useState([
    { from: "them", text: "Hello 👋", time: "10:00" },
    { from: "me", text: "Hi! Kaise ho?", time: "10:01" },
  ]);

  const [text, setText] = useState("");

  // 🔥 Send Message
  const sendMessage = () => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = { from: "me", text, time };

    // 👉 Chat messages update
    setMessages((prev) => [...prev, newMessage]);

    // 👉 Sidebar last message update + move to top (WhatsApp style)
    setUsers((prev) => {
      const updated = prev.map((u) =>
        u.id === activeUser.id ? { ...u, last: text } : u
      );

      const current = updated.find((u) => u.id === activeUser.id);
      const others = updated.filter((u) => u.id !== activeUser.id);

      return [current, ...others];
    });

    setText("");
  };

  return (
    <>
      <ModrenSidebar />

      <div className="ml-64 h-screen flex bg-[#0b141a] text-white">

        {/* LEFT SIDE */}
        <div className="w-1/3 bg-[#111b21] border-r border-gray-700 flex flex-col">

          {/* Top */}
          <div className="p-4 text-lg font-bold border-b border-gray-700">
            Chats
          </div>

          {/* Users */}
          <div className="overflow-y-auto flex-1">
            {users.map((u) => (
              <div
                key={u.id}
                onClick={() => setActiveUser(u)}
                className={`flex items-center gap-3 p-4 cursor-pointer transition ${
                  activeUser.id === u.id
                    ? "bg-[#2a3942]"
                    : "hover:bg-[#202c33]"
                }`}
              >
                <div className="relative">
                  <img
                    src={`https://i.pravatar.cc/40?u=${u.id}`}
                    className="rounded-full"
                    alt="profile"
                  />

                  {/* 🟢🔴 Status */}
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#111b21] ${
                      u.online ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold">{u.name}</h2>
                  <p className="text-xs text-gray-400 truncate">
                    {u.last}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col flex-1">

          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-[#202c33] border-b border-gray-700">
            <img
              src={`https://i.pravatar.cc/40?u=${activeUser.id}`}
              className="rounded-full"
              alt="profile"
            />

            <div>
              <h2 className="font-semibold">{activeUser.name}</h2>

              <p
                className={`text-xs ${
                  activeUser.online
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {activeUser.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
            <div className="space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.from === "me"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl max-w-xs ${
                      m.from === "me"
                        ? "bg-[#005c4b]"
                        : "bg-[#202c33]"
                    }`}
                  >
                    <p>{m.text}</p>
                    <span className="text-[10px] text-gray-300 block text-right mt-1">
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-[#202c33] flex items-center gap-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Type a message"
              className="flex-1 p-3 rounded-full bg-[#2a3942] outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 p-3 rounded-full hover:scale-105 transition"
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}