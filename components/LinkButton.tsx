'use client';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

const LinkButton = ({
  title,
  path,
  type,
}: {
  title: string;
  path: string;
  type: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
}) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(path)} type={type}>
      {title}
    </Button>
  );
};

export default LinkButton;
