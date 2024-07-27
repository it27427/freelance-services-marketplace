'use client';
import { Button, Modal } from 'antd';
import { useState } from 'react';
import { TaskType } from '@/interfaces';

const PlaceBid = ({ task }: { task: TaskType }) => {
  const [showPlaceBidModal, setShowPlaceBidModal] = useState(false);

  return (
    <>
      <div className='flex justify-center'>
        <Button onClick={() => setShowPlaceBidModal(true)} type='primary'>
          Place Bid
        </Button>
      </div>

      {
        showPlaceBidModal && (
          <Modal 
            open={showPlaceBidModal}
            title='Place Your Bid'
            centered
            closable
            onCancel={() => setShowPlaceBidModal(false)}></Modal>
        )
      }
    </>
  )
}

export default PlaceBid;
