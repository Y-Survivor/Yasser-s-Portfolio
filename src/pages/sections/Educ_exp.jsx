import React, { useState } from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
} from "react-icons/hi";
import "./qualification.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experienceData } from "../../data/experienceData";
import { educationData } from "../../data/educationData";
import { SectionWrapper } from "../../hoc";

import LineHead from "../../components/reusable/LineHead";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#233554",
        color: "#fff",
      }}
      // className="dark:bg-[#233554] dark:text-[#eee]"
      contentArrowStyle={{ borderRight: "12px solid  #233554" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-primary-green text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-ternary-light text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#233554",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "12px solid  #233554" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={education.icon}
            alt={education.school}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-primary-green text-[24px] font-bold">{education.title}</h3>
        <h5>{education.subtitle}</h5>
        <p
          className="text-ternary-light text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.school}
        </p>
      </div>
    </VerticalTimelineElement>
  );
};

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <LineHead title="__.Qualification" />
      <div className="flex justify-center items-center gap-20 my-8 text-primary-dark dark:text-primary-light">
        <div
          className={`text-xl cursor-pointer flex flex-col items-center  ${
            toggleState === 1 ? "qualification__active" : ""
          }`}
          onClick={() => toggleTab(1)}
        >
          <HiOutlineAcademicCap size={40} />
          Education
        </div>
        <div
          className={`text-xl cursor-pointer flex flex-col items-center ${
            toggleState === 2 ? "qualification__active" : ""
          }`}
          onClick={() => toggleTab(2)}
        >
          <HiOutlineBriefcase size={40} />
          Experience
        </div>
      </div>
      <div
       className={`mt-20 flex flex-col ${
        toggleState === 2
          ? "qualification__content qualification__content-active"
          : "qualification__content"
      }`}
      >
        <VerticalTimeline>
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
      <div
        className={`mt-20 flex flex-col ${
          toggleState === 1
            ? "qualification__content qualification__content-active"
            : "qualification__content"
        }`}
      >
        <VerticalTimeline>
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Qualification, "work");

// import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
// import {educationData} from "../../data/educationData";
// import {experienceData} from "../../data/experienceData";

// const Qualification = () => {
//   const [toggleState, setToggleState] = useState(1);

//   const toggleTab = (index) => {
//     setToggleState(index);
//   };

//   return (
//     <section className="qualification section">
//       <div className="qualification__container container">
//         <div className="qualification__tabs">
//           <div
//             className={
//               toggleState === 1
//                 ? "qualification__button button--flex qualification__active"
//                 : "qualification__button button--flex"
//             }
//             onClick={() => toggleTab(1)}
//           >
//             <HiOutlineAcademicCap className="qualification__icon" />
//             Education
//           </div>
//           <div
//             className={
//               toggleState === 2
//                 ? "qualification__button button--flex qualification__active"
//                 : "qualification__button button--flex"
//             }
//             onClick={() => toggleTab(2)}
//           >
//             <HiOutlineBriefcase className="qualification__icon" />
//             Experience
//           </div>
//         </div>

//         <div className="qualification__sections">
//           <div
//             className={
//               toggleState === 1
//                 ? "qualification__content qualification__content-active"
//                 : "qualification__content"
//             }
//           >
//             {educationData.map((item) => (
//               <div className="qualification__data" key={item.id}>
//                 <div>
//                   <h3 className="qualification__title">{item.title}</h3>
//                   <span className="qualification__subtitle">{item.subtitle}</span>
//                   <div className="qualification__calendar">
//                     <HiOutlineCalendar className="qualification__calendar-icon" />
//                     {item.date}
//                   </div>
//                 </div>
//                 <div>
//                   <span className="qualification__rounder"></span>
//                   <span className="qualification__line"></span>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div
//             className={
//               toggleState === 2
//                 ? "qualification__content qualification__content-active"
//                 : "qualification__content"
//             }
//           >
//             {experienceData.map((item) => (
//               <div className="qualification__data" key={item.id}>
//                 <div>
//                   <h3 className="qualification__title">{item.title}</h3>
//                   <span className="qualification__subtitle">{item.subtitle}</span>
//                   <div className="qualification__calendar">
//                     <HiOutlineCalendar className="qualification__calendar-icon" />
//                     {item.date}
//                   </div>
//                 </div>
//                 <div>
//                   <span className="qualification__rounder"></span>
//                   <span className="qualification__line"></span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Qualification;
