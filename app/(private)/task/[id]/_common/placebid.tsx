'use client';
import { Button, Form, Modal, Input } from 'antd';
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
            onCancel={() => setShowPlaceBidModal(false)}
            footer={null}>
              <Form layout='vertical'>
                <Form.Item name='bidamount' label='Bid Amount'>
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
        )
      }
    </>
  )
}

export default PlaceBid;
