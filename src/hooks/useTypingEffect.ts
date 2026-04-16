import { useEffect, useState } from "react";

export const useTypingEffect = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 40,
  delay = 1200,
) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    
    if (words.length === 0) return;

    const currentWord = words[index];

    const atEndOfWord = !isDeleting && text === currentWord;
    const atStartOfWord = isDeleting && text === "";

    const tick = () => {
      if (atEndOfWord) {
        setIsDeleting(true);
        return;
      }
      if (atStartOfWord) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setText(
        isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1),
      );
    };

    const timeout = setTimeout(
      tick,
      atEndOfWord ? delay : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, delay]);

  return text;
};
