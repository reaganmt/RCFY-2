"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const quickMessages = [
  "Is this still available?",
  "Can I arrange an inspection?",
  "Would you consider a lower offer?",
];

export default function MessageForm({ listingTitle }: { listingTitle: string }) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setMessage("");
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Quick prompts */}
      <div className="flex flex-wrap gap-1.5">
        {quickMessages.map((q) => (
          <button
            key={q}
            onClick={() => setMessage(q)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-[#E0DED8] text-[#888780] hover:border-[#D85A30] hover:text-[#D85A30] transition-colors"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Textarea */}
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Hi, I'm interested in your ${listingTitle}…`}
        className="input text-xs resize-none leading-relaxed"
      />

      {/* Send button */}
      <button
        onClick={handleSend}
        disabled={!message.trim()}
        className="w-full btn btn-primary py-2.5 text-sm justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send size={13} />
        {sent ? "Message sent!" : "Send message"}
      </button>
    </div>
  );
}
