import { Card } from "./utils/Card";
import javaspring from "../assets/javaspring.png";

export const Projects = () => {
  return (
    <div>
      {/* Java Spring Boot Project */}
      <Card
        title="Technologies: Java, Spring Boot, Hibernate, Swagger"
        image={javaspring}
        description={
          <>
            As part of my Java learning journey, I have developed a robust API
            using Spring Boot and Hibernate. I am excited to share my progress
            and code with you. Explore the{" "}
            <a href="https://lnkd.in/gWDb_98K" className="font-bold">
              documentation
            </a>{" "}
            and check out the{" "}
            <a href="https://lnkd.in/gdruYPDb" className="font-bold">GitHub repository</a>.
          </>
        }
      />
    </div>
  );
};
