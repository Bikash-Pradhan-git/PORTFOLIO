import { useState, useEffect } from "react";

export default function Typewriter({ text, speed }: any) {

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [index, text, speed]);

  return <>{displayedText}</>;
}
