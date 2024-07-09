'use client';
import { useRouter } from 'next/navigation';

const LinkButton = ({
  title,
  path,
  type,
}: {
  title: string;
  path: string;
  type: 'reset' | 'submit' | 'button' | undefined;
}) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(path)} type={type}>
      {title}
    </button>
  );
};

export default LinkButton;
