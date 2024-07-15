import PageTitle from '@/components/PageTitle';
import TaskForm from './_common/taskform';

const page = () => {
  return (
    <div>
      <PageTitle title='Create New Task' />

      <TaskForm />
    </div>
  );
};

export default page;
