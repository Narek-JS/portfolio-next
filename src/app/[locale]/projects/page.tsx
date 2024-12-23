import { ProjectList } from "@/components/ProjectList";
import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";

const Projects: React.FC = () => {
  return (
    <Container classname="my-[20px]">
      <Banner classname="h-[138px]" />
      <div className="pt-[60px] shadow rounded-b-[15px] p-[40px] bg-[#FFFFFF]">
        <ProjectList />
      </div>
    </Container>
  );
};

export default Projects;
