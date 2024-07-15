"use client";
import { useState } from "react";

import { Button, Form, Input, Tag } from "antd";
import LoadingButton from '@/components/LoadingButton';
import useUserStore, { UserStoreType } from '@/store/users-store'

const ProfileForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsValue, setSkillsValue] = useState("");
  const { loggedInUserData } = useUserStore() as UserStoreType;

  const handleAddSkills = () => {
    const newSkills = skillsValue.split(",").map((skill) => skill.trim());
    setSkills([...skills, ...newSkills]);
    setSkillsValue("");
  };

  const handleClose = (removedSkill: string) => {
    const newSkills = [...skills];
    newSkills.filter((slill) => slill !== removedSkill);
    setSkills(newSkills);
  };

  const handleSubmit = (value: any) => {};

  const rules = [{required: true, message: 'This field is required.'}]

  return (
    <Form layout="vertical" autoComplete="off" onFinish={handleSubmit}>
      <div className="md:grid grid-cols-2 gap-5">
        <Form.Item label="Name" name="name" rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={rules}>
          <Input />
        </Form.Item>
      </div>

      <div className="md:grid grid-cols-2 gap-5">
        <Form.Item label="Phone" name="phone" rules={rules}>
          <Input />
        </Form.Item>
        <Form.Item label="Portfolio" name="portfolio" rules={rules}>
          <Input />
        </Form.Item>
      </div>

      <Form.Item label="Bio" name="bio" rules={rules}>
        <Input.TextArea rows={6} />
      </Form.Item>

      <div className="flex flex-col gap-2">
        <h5 className="text-sm m-0 font-normal">
          Skills <span className="text-xs">(Separated by commas)</span>
        </h5>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <Input
              value={skillsValue}
              onChange={(e) => setSkillsValue(e.target.value)}
              placeholder="Enter your skills"
            />
            <Button onClick={handleAddSkills} type="default">
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 lg:gap-5">
            {skills.map((skill, index) => (
              <Tag
                key={index}
                closable
                onClose={() => handleClose(skill)}
                className="px-5 py-2 bg-secondary text-white m-0"
                color="secondary"
              >
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <LoadingButton onClick={1} index={1} type="primary" htmlType="submit">
          Submit
        </LoadingButton>
      </div>
    </Form>
  );
};

export default ProfileForm;
