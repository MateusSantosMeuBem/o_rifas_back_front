import { useEffect, useState } from 'react';
import './style.css'
import tinyImage from '@/assets/tiny.png'
import mediumImage from '@/assets/medium.png'
import bigImage from '@/assets/medium.png'
import bigestImage from '@/assets/biggest.png'

const Banner = () => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 770) {
        setImageSrc(tinyImage);
      } else if (screenWidth <= 1300) {
        setImageSrc(mediumImage);
      } else if (screenWidth <= 1700) {
        setImageSrc(bigImage);
      } else {
        setImageSrc(bigestImage);
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
    src={imageSrc}
    alt=''
    className='banner'
  />;
}

export default Banner