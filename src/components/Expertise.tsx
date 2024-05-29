import orderix from "../assets/orderix.jpeg";
import Henry from "../assets/HenryLogo.svg";
import { Card } from "./utils/Card";

export const Expertise = () => {
  return (
    <div className="flex flex-col gap-10">
      <a
        href="https://orderix.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col"
      >
        <Card
          title="Orderix.co - Desarrollador full stack"
          subTitle="2022 - Actualidad (Remoto)"
          image={orderix}
          description="Currently, I work part-time with technologies like React,
        TypeScript, and PostgreSQL. During my time at Orderix.co I focused
        on continuous improvement of the application, implementing modern
        front-end development practices. I actively contributed to the
        design and optimization of the user interface as well as the
        improvement of the user experience. Additionally occasionally
        participate in backend development tasks as necessary."
        />
      </a>
      <a
        href=" https://www.soyhenry.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col"
      >
        <Card
          title="SoyHenry, Argentina - Teaching Assistant"
          subTitle="JAN 2021 - JUL 2021"
          image={Henry}
          description="Coordinating students in a study group, providing guidance
        throughout the course, assisting students who may be struggling,
        facilitating group collaboration in exercises (Pair Programming),
        and suggesting improvements for Bootcamp processes. Technologies:
        React, TypeScript, Postgres, Node, Express."
        />
      </a>
    </div>
  );
};
