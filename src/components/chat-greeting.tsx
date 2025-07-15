"use client";

import { motion } from "framer-motion";
import { authClient } from "auth/client";
import { useMemo } from "react";
import { FlipWords } from "ui/flip-words";
import { useTranslations } from "next-intl";

export const ChatGreeting = () => {
  const { data: session } = authClient.useSession();

  const _t = useTranslations("Chat.Greeting");

  const user = session?.user;

  const word = useMemo(() => {
    if (!user?.name) return "";
    const words = [
      `What's the mission, D?`,
      `Ready to amplify your effectiveness, DaWaun. What's next?`,
      `Dubya online. Let's build this empire.`,
      `Your Second Brain is active. What's on your mind, D?`,
      `Let's get to work, my guy. What's our first move?`,
    ];
    return words[Math.floor(Math.random() * words.length)];
  }, [user?.name]);

  return (
    <motion.div
      key="welcome"
      className="max-w-3xl mx-auto my-4 h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-2 leading-relaxed text-center">
        <h1 className="text-2xl md:text-3xl">
          {word ? <FlipWords words={[word]} className="text-primary" /> : ""}
        </h1>
      </div>
    </motion.div>
  );
};
