import { useEffect, useState } from 'react';

const titles = [
  'Shyam Pareek',
  'Mern Stack Developer',
  'Software Engineer',
  'Native App Developer',
  'Content Creator'
];

export const useDocumentTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set initial title
    document.title = titles[currentIndex];

    // Set up interval to rotate titles every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return titles[currentIndex];
};
