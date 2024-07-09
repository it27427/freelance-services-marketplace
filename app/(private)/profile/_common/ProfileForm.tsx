"use client";
import { useState } from "react";

import { Button, Form, Input, Tag } from "antd";

const ProfileForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [skillsValue, setSkillsValue] = useState("");

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

  return (
    <Form layout="vertical" autoComplete="off">
      <div className="md:grid grid-cols-2 gap-5">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
      </div>

      <div className="md:grid grid-cols-2 gap-5">
        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Portfolio" name="portfolio">
          <Input />
        </Form.Item>
      </div>

      <Form.Item label="Bio" name="bio">
        <Input.TextArea rows={6} />
      </Form.Item>

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
    </Form>
  );
};

export default ProfileForm;
