"use client";
import { Button } from "antd";
import { useState } from "react";

const LoadingButton = ({
  children,
  onClick,
  index,
  type,
  htmlType
}: {
  children: string;
  onClick: number;
  index: number;
  type: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
  htmlType?: 'button' | 'submit' | 'reset'
}) => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 4000);
  };

  return (
    <Button
      type={type}
      loading={loadings[index]}
      onClick={() => enterLoading(onClick)}
      htmlType={htmlType}
    >
      {children}
    </Button>
  );
};

export default LoadingButton;
