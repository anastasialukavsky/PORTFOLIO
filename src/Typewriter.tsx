import { useEffect, useState } from 'react';
import lodash from 'lodash';

export type Props = {
text: string
}
const Typewriter = ({ text }: Props) => {
  const [displayedText, setDisplayedText] = useState('');

  console.log('dispTxt', displayedText)

  
  const typeFunc = lodash.debounce(( ) => {
    let index = 0;

    while (index < text.length) {
      console.log(index);
      console.log('txt', text);
      console.log('txt_idx', text[index]);

      const letter = text[index];

      const interval = setTimeout(() => {
        setDisplayedText((prev) => prev + letter);
        // index += 1;
      }, 150 * index);

      index++;
    }
  })
  useEffect(() => {

typeFunc()
    // return () => clearInterval(interval);
  }, []);

  return <span className='blink'>{displayedText}</span>;
};

export default Typewriter;
