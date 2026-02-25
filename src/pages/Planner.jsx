import React, { useState } from "react";
import LinkButton from "../components/common/LinkButton";
import { Icon } from "@iconify/react";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import DropDown from "../components/Planner/DropDown";
import InfoCard from "../components/Planner/InfoCard";
import { featureCardContent } from "../Data/featureCardContent";
import FeatureCard from "../components/common/FeatureCard";
const Planner = () => {
  const [startingLocation, setStartingLocation] = useState("");
  const [destinations, setDestinations] = useState([""]);
  const [VehicleType, setVehicleType] = useState("");
  const [priceCount, setPriceCount] = useState("");
  const addDestination = () => {
    setDestinations((prev) => [...prev, ""]);
  };

  const updateDestination = (index, value) => {
    const updated = [...destinations];
    updated[index] = value;
    setDestinations(updated);
  };

  const vehicleOptions = [
    { value: "car", label: "Car" },
    { value: "suv", label: "SUV" },
    { value: "truck", label: "Truck" },
    { value: "motorycle", label: "Motorcycle" },
    { value: "electric vehicle", label: "Electric Vehicle" },
  ];

  const formHandler = (e) => {
    e.preventDefault(); //Prevent page from reloading
  };
  return (
    <main className="px-5 lg:px-25">
      <LinkButton
        name="Back to Home"
        pageLink="/"
        icon="tabler:arrow-left"
        className="flex-row-reverse  max-w-fit p-2  rounded-lg mt-10  bg-gray-200 mb-5"
      />
      <div className="lg:grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-4 mb-10">
          <section className="mb-3">
            <h1 className="text-3xl font-bold md:text-4xl">
              Plan Your Perfect Route{" "}
            </h1>
            <p>
              Enter your destinations and let us calculate the most efficient
              path, saving you time and fuel costs.
            </p>
          </section>

          <section>
            <form
              onSubmit={formHandler}
              className="flex flex-col p-5 rounded-xl bg-white shadow-[0_0_5px_rgba(0,0,0,0.25)] gap-5"
            >
              <Input
                type="text"
                label="Starting Point"
                icon="akar-icons:check-in"
                placeholder="Starting Location"
                value={startingLocation}
                onChange={(e) => setStartingLocation(e.target.value)}
              />
              {destinations.map((dest, index) => (
                <Input
                  key={index}
                  type="text"
                  label={index === 0 && "Destination"}
                  icon="akar-icons:check-in"
                  placeholder={`Enter Destination ${index + 1}`}
                  value={dest}
                  onChange={(e) => updateDestination(index, e.target.value)}
                />
              ))}

              <Button
                onClick={addDestination}
                name="Add Another Destination"
                icon="rivet-icons:plus"
                className="flex items-center border-2 border-dashed justify-center gap-2 p-2 rounded-xl border-blue-400 hover:bg-gray-300 "
              />
              <div className="md:grid grid-cols-2 gap-2">
                <DropDown
                  vehicleOptions={vehicleOptions}
                  value={VehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  label="Vehicle Type"
                />

                <Input
                  type="number"
                  placeholder="300"
                  icon="rivet-icons:money"
                  label="Fuel Price(per litre)"
                  value={priceCount}
                  onChange={(e) => setPriceCount(Number(e.target.value))}
                />
              </div>

              <Button
                name="Calculate Optimal Route"
                icon="solar:map-arrow-up-linear"
                className="flex items-center justify-center bg-blue-600 gap-2 p-3 rounded-xl text-white"
              />
            </form>
          </section>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <section className="flex flex-col gap-2">
            <h2 className="text-2xl">Route Preview </h2>
            <div className="flex flex-col items-center h-80 justify-center bg-gray-300 rounded-xl ">
              <Icon icon="pepicons-pencil:map" width="50" height="50" />
              <p>Route Map Will Appear Here</p>
            </div>
          </section>
          <section>
            <div className="flex gap-4">
              <InfoCard
                value="--"
                label="Total Distance"
                textColor="text-blue-500"
              />
              <InfoCard
                value="--"
                label="Est. Time"
                textColor="text-green-500"
              />
              <InfoCard
                value="--"
                label="Fuel Cost"
                textColor="text-purple-500"
              />
            </div>
          </section>
        </div>
      </div>
      <section className="grid grid-cols-1 gap-5 mb-10 md:grid-cols-3">
        {featureCardContent.map((elem, index) => (
          <FeatureCard key={index} {...elem} />
        ))}
      </section>
    </main>
  );
};

export default Planner;
