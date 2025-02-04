'use client';
import { MyButton, myButtonVariants } from '@/app/ui/components/MyButton';
import Link from 'next/link';
import { useRef } from 'react';
import { MyButtonUsingForwardRefs } from '../ui/components/MyButtonUsingForwardRefs';

const page = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const myButtonRef = useRef<HTMLButtonElement | null>(null);
  const myButtonUsingForwardRefsRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div>
      <MyButton
        ref={myButtonRef}
        size="sm"
        variant={'ghost'}
        onClick={() => {
          console.log('custom component was clicked');
        }}
      >
        Hello world
      </MyButton>
      <MyButtonUsingForwardRefs
        onClick={() => {
          console.log('MyButtonUsingForwardRefButton was pressed');
        }}
        ref={myButtonUsingForwardRefsRef}
      >
        MyButtonUsingForwardRefButton
      </MyButtonUsingForwardRefs>
      <Link
        href={'/reusable-components'}
        className={myButtonVariants({ variant: 'default', size: 'sm' })}
      >
        Reload
      </Link>
      <button
        onClick={() => {
          console.log('button 1 was clicked');
        }}
        ref={buttonRef}
        className={myButtonVariants({ variant: 'default', size: 'sm' })}
      >
        btn1
      </button>
      <button
        onClick={() => {
          console.log('button 2 clicked ');
          buttonRef.current?.click();
          myButtonRef.current?.click();
          myButtonUsingForwardRefsRef.current?.click();
        }}
        className={myButtonVariants({ variant: 'destructive', size: 'lg' })}
      >
        btn2
      </button>
    </div>
  );
};

export default page;
