import React, { useState } from "react";
import LinkButton from "../components/common/LinkButton";
import RouteSettingCard from "../components/setting/RouteSettingCard";
import DropdownSetting from "../components/setting/DropdownSetting";
import { optimizationData } from "../Data/SettingData/optimizationData";
import SettingToggle from "../components/setting/SettingToggle";
import Button from "../components/common/Button";

const Settings = () => {
  const [optimization, setOptimization] = useState("Balanced");
  return (
    <main className="px-5 lg:px-30">
      <LinkButton
        name="Back to Home"
        pageLink="/"
        icon="tabler:arrow-left"
        className="flex-row-reverse  max-w-fit p-2  rounded-lg mt-10  bg-gray-200 mb-5"
      />
      <section className="mb-3">
        <h1 className="text-3xl font-bold md:text-4xl">Route Settings</h1>
        <p>
          Customize your route planning preferences and optimization options
        </p>
      </section>
      <section className="grid grid-cols-1 gap-5">
        <RouteSettingCard
          label="Route Optimization"
          description="Choose how to optimize your route"
          color="text-blue-700"
          icon="basil:lightning-alt-outline"
        >
          <DropdownSetting
            options={optimizationData}
            setValue={setOptimization}
            value={optimization}
          />
          <SettingToggle
            label="Traffic Aware Routing"
            description="Factor in current traffic conditions and delays"
          />
        </RouteSettingCard>
        <RouteSettingCard
          label="Suggested Stops"
          description="Suggested Stops Get recommendations for useful stops along your route"
          icon="pepicons-pop:map"
          color="text-green-700"
        >
          <SettingToggle
            label="Enable Suggested Stops"
            description="Show recommendations for hotels, gas stations, and rest areas"
          />
        </RouteSettingCard>
        <RouteSettingCard
          label="Route Preferences"
          description="Customize road type and route constraints"
          icon="ion:paper-plane-outline"
          color="text-purple-700"
        >
          <SettingToggle
            label="Avoid Toll Roads"
            description="Prefer routes without toll charges"
          />
          <SettingToggle
            label="Avoid Highways"
            description="Use local roads and scenic route"
          />
        </RouteSettingCard>
        <RouteSettingCard
          label="Emergency & Alternate Routes"
          description="Plan for unexpected situations"
          icon="material-symbols-light:emergency-home-outline-rounded"
          color="text-red-700"
        >
          <SettingToggle
            label="Show Emergency Alternate Routes"
            description="Prepare backup routes for unexpected road closures"
          />
        </RouteSettingCard>
      </section>
      <section className="my-4 grid grid-cols-1 gap-2 md:grid md:grid-cols-2 ">
        <Button name="Save Settings" className="bg-black text-white border flex justify-center py-1 rounded-xl font-semibold"/>
        <Button name="Go to Planner" className="border flex justify-center py-1 rounded-xl font-semibold "/>
      </section>
    </main>
  );
};

export default Settings;
