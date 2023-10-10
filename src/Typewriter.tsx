import React, { useEffect, useState } from 'react';

export type Props = {
text: string
}
const Typewriter = ({ text }: Props) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index += 1;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval for typing speed
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
