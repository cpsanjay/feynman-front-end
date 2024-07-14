import React from "react";
import HorizontalRoller from "../HorizontalRoller";

const infoDetails = [
  {
    title: "Weekend Exams",
    description:
      "Weekend OMR + descriptive type exams will be conducted to track the progress of the student.",
  },
  {
    title: "Daily Monitoring",
    description:
      "You are required to follow a weekly study plan.  Although the main classes are on Holidays, you will be engaged every day through proper daily monitoring.",
  },
  {
    title: "Classes on Holidays",
    description:
      "We offer classes on holidays to maximize your learning opportunities.",
  },
];

const Card = ({ title, description }) => {
  return (
    <div className="block max-w-sm p-6 mx-auto bg-blue-100 rounded-lg hover:shadow hover:bg-blue-50 m-4 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      <p className="font-normal text-gray-700">{description}</p>
    </div>
  );
};

const InfoCards = () => {
  return (
    <div className=" w-screen mt-10" id="info-card-section">
      <div className="container mx-auto px-4">
        <div className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 text-center flex flex-col">
          <span className="font-Playwrite">
            Enhance Your Knowledge and Fullfil You Aspirations
          </span>
          <span className="text-sm font-light mt-4 leading-6">
            -Albert Einstein
          </span>
        </div>
        <HorizontalRoller />
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
          OUR SPECIALITIES
        </h1>
        <div className="lg:flex gap-4 mx-auto">
          {infoDetails.map((item, i) => (
            <Card description={item.description} title={item.title} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
