import { useState, useEffect } from 'react';
import Link from 'next/link';

export const ImageUserContainer = ({ children }: any) => {
  const [x, setX] = useState<string | null>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem('username');
    if (storedValue) {
      setX(storedValue);
    }
  }, []);

  return (
    <>
      {x && (
        <Link href="/profile/view/[profile].tsx" as={`/profile/view/${x}`} className='rounded-md border-1 pt-1 pb-1 pr-1 pl-1 mt-4' style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
          {children}
        </Link>
      )}
    </>
  );
};
