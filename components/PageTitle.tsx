const PageTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <h1 className='text-xl font-semibold capitalize text-info'>{title}</h1>
    </div>
  );
};

export default PageTitle;
