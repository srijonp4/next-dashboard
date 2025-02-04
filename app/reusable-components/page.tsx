import { MyButton, myButtonVariants } from '@/app/ui/components/MyButton';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <MyButton size="sm" variant={'ghost'}>
        Hello world
      </MyButton>
      <Link
        href={'/reusable-components'}
        className={myButtonVariants({ variant: 'default', size: 'sm' })}
      >
        Reload
      </Link>
    </div>
  );
};

export default page;
