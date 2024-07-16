'use client';
import { Button, Form, Input, Tag } from 'antd';

const AddSkills = ({
  skills,
  setSkills,
  skillsValue,
  setSkillsValue,
}: {
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
  skillsValue: string;
  setSkillsValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleAddSkills = () => {
    const newSkills = skillsValue.split(',').map((skill) => skill.trim());
    setSkills([...skills, ...newSkills]);
    setSkillsValue('');
  };

  const handleClose = (removedSkill: string) => {
    const newSkills = [...skills];
    newSkills.filter((slill) => slill !== removedSkill);
    setSkills(newSkills);
  };

  const rules = [{ required: true, message: 'This field is required.' }];

  return (
    <>
      <div className='flex flex-col gap-2 w-full'>
        <h5 className='text-sm m-0 font-normal'>
          Skills <span className='text-xs'>(Separated by commas)</span>
        </h5>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex gap-5 w-full'>
            <Form.Item rules={rules} className='flex-1'>
              <Input
                value={skillsValue}
                onChange={(e) => setSkillsValue(e.target.value)}
                placeholder='Enter your skills'
              />
            </Form.Item>
            <Button onClick={handleAddSkills} type='default'>
              Add
            </Button>
          </div>

          <div className='flex flex-wrap gap-3 lg:gap-5'>
            {skills.map((skill, index) => (
              <Tag
                key={index}
                closable
                onClose={() => handleClose(skill)}
                className='px-5 py-2 bg-secondary text-white m-0'
                color='secondary'
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSkills;
