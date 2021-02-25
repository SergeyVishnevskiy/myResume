import About from "../about/About";
// import Photo from "../photo/Photo";
import Sidebar from "../sidebar/Sidebar";
import ResumeWrapper from "./ResumeStyled";

const Resume = () => {
  return (
    <>
      <ResumeWrapper>
        <About />
        <Sidebar />
      </ResumeWrapper>
    </>
  );
};

export default Resume;
