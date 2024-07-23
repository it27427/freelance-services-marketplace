import Editor from 'react-simple-wysiwyg';

const Description = ({
  description,
  setDescription,
}: {
  description: string;
  setDescription: (description: string) => void;
}) => {
  return (
    <>
      <Editor
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
};

export default Description;
