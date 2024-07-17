import LinkButton from '@/components/LinkButton';
import PageTitle from '@/components/PageTitle';
import { getTaskPostedByLoggedInUser } from '@/server-actions/tasks';

const TasksPage = async () => {
  const tasks = getTaskPostedByLoggedInUser();

  return (
    <div>
      <div className='flex items-center justify-between'>
        <PageTitle title='Tasks' />
        <LinkButton title='Create Task' path='/profile/tasks/create' type='primary' />
      </div>
    </div>
  );
};

export default TasksPage;
