import React from "react";
import FeatureCard from "../components/common/FeatureCard";
import PageCard from "../components/common/Home/PageCard";
import Button from "../components/common/Button";
import { Icon } from "@iconify/react";
import Footer from "../components/common/Footer";
import { featureCardContent } from "../Data/featureCardContent";
import { pageCardContent } from "../Data/pageCardContent";
const Home = () => {
  return (
    <main className="px-5 flex flex-col gap-10 my-8">
      <section className="lg:flex justify-center">
        <div className="flex flex-col items-center text-center gap-2 lg:w-200 ">
          <h1 className="text-3xl font-bold md:text-5xl">
            Welcome to Smart Route Planner
          </h1>
          <p className="md:text-[20px] ">
            Plan efficient routes with multiple destinations, optimize for time
            or cost, and get detailed trip breakdowns. Start exploring our
            features below.
          </p>
        </div>
      </section>
      <section className=" lg:flex justify-center  ">
        <div className=" grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-5 lg:w-220">
          {featureCardContent.map((elem, index) => (
            <FeatureCard
              key={index}
              featureName={elem.featureName}
              description={elem.description}
              bg_color={elem.bg_color}
              iconColor={elem.iconColor}
              icon={elem.icon}
            />
          ))}
        </div>
      </section>
      <section className="lg:flex justify-center">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2  lg:w-[80rem]">
          {pageCardContent.map((elem, index) => (
            <PageCard
              key={index}
              {...elem}
              // pageTitle={elem.pageTitle}
              // pageDescription={elem.pageDescription}
              // icon={elem.icon}
              // linkToPage={elem.linkToPage}
              // features={elem.features}
              // iconColor={elem.iconColor}
              // bg_color={elem.bg_color}
              // hoverColor={elem.hoverColor}
            />
          ))}
        </div>
      </section>
      <section className="lg:flex justify-center">
        <div className="flex flex-col items-center text-white bg-blue-700 py-5 px-10 gap-5 rounded-2xl lg:w-[50rem]">
          <h2 className="text-2xl font-bold text-center">
            Ready To Plan Your Route?
          </h2>
          <p className="text-center">
            Start by entering your destinations and let us find the optimal path
            for you
          </p>
          <div className="flex items-center gap-2 bg-white text-blue-700 px-6 py-1 rounded-lg">
            <Icon icon="majesticons:send" height={20} width={20} />
            <Button className="" name="Start planning now" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
