import { Button } from 'antd';
import { TaskType } from '@/interfaces';

const PlaceBid = ({ task }: { task: TaskType }) => {
  return (
    <div className='flex justify-center'>
      <Button>Place Bid</Button>
    </div>
  )
}

export default PlaceBid
