import { Button, Input, Upload } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const Attachments = ({
  newAttachments,
  setnewAttachments,
  existingAttachments,
  setExistingAttachments,
}: {
  newAttachments: {
    name: string;
    file: File | null;
    url?: string;
  }[];
  setnewAttachments: (newAttachments: any[]) => void;
  existingAttachments: any[];
  setExistingAttachments: (existingAttachments: any[]) => void;
}) => {
  const addAttachmentHandler = () => {
    const tempAttachments = [...newAttachments];
    tempAttachments.push({
      name: '',
      file: null,
      url: '',
    });
    setnewAttachments(tempAttachments);
  };

  const attachmentUpdateHandler = (index: number, key: string, value: any) => {
    const tempAttachments: any = [...newAttachments];
    tempAttachments[index][key] = value;
    setnewAttachments(tempAttachments);
  };

  const removeAttachmentHandler = (index: number) => {
    const tempAttachments: any = [...newAttachments];
    tempAttachments.splice(index, 1);
    setnewAttachments(tempAttachments);
  };

  const removeExistingAttachmentHandler = (index: number) => {
    const tempAttachments: any = [...existingAttachments];
    tempAttachments.splice(index, 1);
    setExistingAttachments(tempAttachments);
  };

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex justify-end'>
        <Button onClick={addAttachmentHandler}>Add Attachment</Button>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        {newAttachments.map((attachment, index) => (
          <div
            key={index}
            className='border border-gray-300 border-solid flex flex-col gap-5 p-5'
          >
            <Input
              placeholder='Attachment Name'
              value={attachment.name}
              onChange={(e) =>
                attachmentUpdateHandler(index, 'name', e.target.value)
              }
            />
            <Upload
              listType='picture-card'
              beforeUpload={(file) => {
                attachmentUpdateHandler(index, 'file', file);
                return false;
              }}
              maxCount={1}
            >
              <span className='text-sm text-gray-500'>Upload file</span>
            </Upload>
            <Button onClick={() => removeAttachmentHandler(index)}>
              <DeleteOutlined />
              Remove
            </Button>
          </div>
        ))}

        {existingAttachments.map((attachment, index) => (
          <div
            key={index}
            className='border border-gray-300 border-solid flex flex-col gap-5 p-5'
          >
            <Input
              placeholder='Attachment Name'
              value={attachment.name}
              disabled
            />
            <Upload
              fileList={[
                {
                  uid: attachment._id,
                  name: attachment.name,
                  status: 'done',
                  url: attachment.url,
                },
              ]}
              listType='picture-card'
              maxCount={1}
              disabled
            ></Upload>
            <Button
              onClick={() => {
                removeExistingAttachmentHandler(index);
              }}
            >
              <DeleteOutlined />
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attachments;
