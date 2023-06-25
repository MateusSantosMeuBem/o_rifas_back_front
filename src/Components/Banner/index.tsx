import { useEffect, useState } from 'react';
import './style.css'

const Banner = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 770) {
        setImageSrc('tiny.png');
      } else if (screenWidth <= 1300) {
        setImageSrc('medium.png');
      } else if (screenWidth <= 1700) {
        setImageSrc('big.png');
      } else {
        setImageSrc('biggest.png');
      }
    };

    handleResize();

    // Attach the event listener to the window resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <img
    src={`/src/assets/banners/${imageSrc}`}
    alt=''
    className='banner'
  />;
}

export default Banner