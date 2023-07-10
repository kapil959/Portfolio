import React, { useState, useEffect } from "react";
import { useAppSelector, getUsersData } from "../store";
import { skillsIcon } from "../images/imageSvg";
import BasicModal from "./SkillsModal";

const Skills = () => {
  const { skills } = useAppSelector(getUsersData);
  const [modalOpen, setModalOpen] = useState(false);
  const [skill, setSkill] = useState();
  const OpenModal = (skill) => {
    setModalOpen(true);
    setSkill(skill);
  };
  const showSkills = () => {
    return skills?.map((skill) => {
      return (
        <>
          <div className="divIconSkills" onClick={() => OpenModal(skill)}>
            {skillsIcon(skill.name.toLowerCase())}
          </div>
        </>
      );
    });
  };
  return (
    <>
      {showSkills()}
      {modalOpen ? (
        <BasicModal open={modalOpen} setOpen={setModalOpen} skill={skill} />
      ) : null}
    </>
  );
};
export default Skills;
