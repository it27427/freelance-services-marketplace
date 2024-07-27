'use client';
import { Button } from 'antd';
import { useState } from 'react';
import { TaskType } from '@/interfaces';

const PlaceBid = ({ task }: { task: TaskType }) => {
  const [placeBidModal, setPlaceBidModal] = useState(false);

  return (
    <>
      <div className='flex justify-center'>
        <Button onClick={() => setPlaceBidModal(true)} type='primary'>Place Bid</Button>
      </div>
    </>
  )
}

export default PlaceBid;
