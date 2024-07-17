import PageTitle from '@/components/PageTitle';

const EditTaskPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <PageTitle title='Edit Task' />
    </div>
  );
};

export default EditTaskPage;
