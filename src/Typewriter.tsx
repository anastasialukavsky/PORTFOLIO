import { useEffect, useState } from 'react';
import lodash from 'lodash';

export type Props = {
  text: string;
  name: string;
};

const Typewriter = ({ text, name }: Props) => {
  const [displayedText, setDisplayedText] = useState('');

  const typeText = (str: string, index: number) => {
    if (index <= str.length) {
      setDisplayedText(str.slice(0, index));
      setTimeout(() => {
        typeText(str, index + 1);
      }, 110);
    }
  };

  const eraseName = () => {
    let index = name.length;
    const eraseInterval = setInterval(() => {
      if (index >= 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        index--;
      } else {
        clearInterval(eraseInterval);
   
          typeText(text, 0);
      }
    }, 60);
  };

  useEffect(() => {
    
    typeText(name, 0);

    
    setTimeout(() => {
      eraseName();
    }, name.length * 150);


  }, [name, text]);

  


  return <span className='blink blink-styles'>{displayedText}</span>;
};

export default Typewriter;
