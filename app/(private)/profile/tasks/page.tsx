import LinkButton from '@/components/LinkButton';
import PageTitle from '@/components/PageTitle';

const TasksPage = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <PageTitle title='Tasks' />
        <LinkButton title='Create Task' path='/tasks/create' type='primary' />
      </div>
    </div>
  );
};

export default TasksPage;
