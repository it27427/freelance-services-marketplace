import LinkButton from '@/components/LinkButton';
import PageTitle from '@/components/PageTitle';
import { getTaskPostedByLoggedInUser } from '@/server-actions/tasks';
import TasksTable from './_common/TasksTable';

const TasksPage = async () => {
  const tasks = await getTaskPostedByLoggedInUser();

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center justify-between'>
        <PageTitle title='Tasks' />
        <LinkButton
          title='Create Task'
          path='/profile/tasks/create'
          type='primary'
        />
      </div>

      <TasksTable tasks={tasks.data} />
    </div>
  );
};

export default TasksPage;
