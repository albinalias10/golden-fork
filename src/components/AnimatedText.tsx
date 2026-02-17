import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

export default function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="animated-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`animated-letter ${show ? "show" : ""}`}
          style={{ transitionDelay: `${index * 35}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
