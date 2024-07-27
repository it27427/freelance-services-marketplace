'use client';
import { useState } from 'react';
import { Button, Form, Modal, Input, message } from 'antd';
import { TaskType } from '@/interfaces';
import useUserStore, { UserStoreType } from '@/store/users-store';
import { placeMyBid } from '@/server-actions/bids';

const PlaceBid = ({ task }: { task: TaskType }) => {
  const [showPlaceBidModal, setShowPlaceBidModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { loggedInUserData }: UserStoreType = useUserStore() as any;

  const handlePlaceBid = async (values: any) => {
    try {
      setLoading(true);
      const payload = {
        ...values,
        freelancer: loggedInUserData?._id,
        task: task._id,
        client: task.user._id,
      };

      const response = await placeMyBid(payload);

      if (response.success) {
        message.success(response.message);
        setShowPlaceBidModal(false);
      } else {
        message.error(response.message);
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <Button onClick={() => setShowPlaceBidModal(true)} type='primary'>
          Place Bid
        </Button>
      </div>

      {showPlaceBidModal && (
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
                <Button onClick={() => setShowPlaceBidModal(false)} disabled={loading}>
                  Cancel
                </Button>
                <Button type='primary' htmlType='submit' loading={loading}>Place Bid</Button>
              </div>
            </Form>
        </Modal>
      )}
    </>
  );
};

export default PlaceBid;
