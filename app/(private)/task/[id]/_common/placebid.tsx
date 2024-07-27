'use client';
import { Button, Form, Modal, Input } from 'antd';
import { useState } from 'react';
import { TaskType } from '@/interfaces';

const PlaceBid = ({ task }: { task: TaskType }) => {
  const [showPlaceBidModal, setShowPlaceBidModal] = useState(false);

  const handlePlaceBid = (value: any) => {};

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
              <hr className='my-5 border border-solid border-gray-300' />

              <Form layout='vertical' onFinish={handlePlaceBid}>
                <Form.Item name='bidamount' label='Bid Amount' rules={[{ required: true, message: 'Please fill your bid amount.' }]}>
                  <Input />
                </Form.Item>
                
                <Form.Item name='deadline' label='Estimated days to complete' rules={[{ required: true, message: 'Please fill your deadline.' }]}>
                  <Input />
                </Form.Item>
                
                <Form.Item name='message' label='Message' rules={[{ required: true, message: 'Please fill your message.' }]}>
                  <Input.TextArea />
                </Form.Item>

                <div className="flex justify-end gap-5">
                  <Button onClick={() => setShowPlaceBidModal(false)}>
                    Cancel
                  </Button>
                  <Button type='primary' htmlType='submit'>Place Bid</Button>
                </div>
              </Form>
            </Modal>
        )
      }
    </>
  )
}

export default PlaceBid;
