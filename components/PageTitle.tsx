interface TitleProps {
  title: string;
}

const PageTitle: React.FC<TitleProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
