import PageTitle from '@/components/PageTitle';
import { getTaskById } from '@/server-actions/tasks';
import TaskForm from '../../create/_common/taskform';

const EditTaskPage = async ({ params }: { params: { id: string } }) => {
  const response = await getTaskById(params.id);
  const task = response.data;

  return (
    <div>
      <PageTitle title='Edit Task' />

      <TaskForm initialValues={task} isEdit={true} />
    </div>
  );
};

export default EditTaskPage;
