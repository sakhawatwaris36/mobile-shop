import { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import ModrenSidebar from "./ModernSidebar";

export default function Messages() {
  const [users] = useState([
    { id: 1, name: "Ali", last: "Kya haal hai?", online: true },
    { id: 2, name: "Ahmed", last: "Order bhej diya", online: false },
    { id: 3, name: "Sara", last: "Thanks 👍", online: true },
  ]);

  const [activeUser, setActiveUser] = useState(null);
  const [showChat, setShowChat] = useState(false);

  const [messages, setMessages] = useState([
    { from: "them", text: "Hello 👋", time: "10:00" },
    { from: "me", text: "Hi! Kaise ho?", time: "10:01" },
  ]);

  const [text, setText] = useState("");

  const openChat = (user) => {
    setActiveUser(user);
    setShowChat(true);
  };

  const backToList = () => {
    setShowChat(false);
    setActiveUser(null);
  };

  const sendMessage = () => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      { from: "me", text, time },
    ]);

    setText("");
  };

  return (
    <>
      <ModrenSidebar />

      <div className="ml-64 message h-screen flex bg-[#0b141a] text-white">

        {/* ================= LEFT (CHAT LIST) ================= */}
        <div
          className={`
            w-full md:w-1/3 bg-[#111b21] border-r border-gray-700
            flex flex-col
            ${showChat ? "hidden md:flex" : "flex"}
          `}
        >
          <div className="p-4 text-lg font-bold border-b border-gray-700">
            Chats
          </div>

          <div className="overflow-y-auto flex-1">
            {users.map((u) => (
              <div
                key={u.id}
                onClick={() => openChat(u)}
                className="flex items-center gap-3 p-4 cursor-pointer hover:bg-[#202c33]"
              >
                <img
                  src={`https://i.pravatar.cc/40?u=${u.id}`}
                  className="rounded-full"
                />

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

        {/* ================= RIGHT (CHAT SCREEN) ================= */}
        <div
          className={`
            flex flex-col flex-1
            ${showChat ? "flex" : "hidden md:flex"}
          `}
        >

          {/* Header */}
          <div className="flex items-center gap-3 p-4 bg-[#202c33] border-b border-gray-700">

            {/* Back button (mobile only) */}
            <button
              onClick={backToList}
              className="md:hidden"
            >
              <ArrowLeft />
            </button>

            {activeUser && (
              <>
                <img
                  src={`https://i.pravatar.cc/40?u=${activeUser.id}`}
                  className="rounded-full"
                />

                <div>
                  <h2 className="font-semibold">
                    {activeUser.name}
                  </h2>
                  <p className="text-xs text-green-400">
                    Online
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 bg-[#0b141a]">
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
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#202c33] flex gap-3">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Type a message"
              className="flex-1 p-3 rounded-full bg-[#2a3942] outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 p-3 rounded-full"
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}