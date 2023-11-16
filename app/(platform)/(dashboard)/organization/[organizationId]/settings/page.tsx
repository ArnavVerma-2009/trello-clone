"use client";
import { OrganizationProfile, UserProfile } from "@clerk/nextjs";
import { User } from "lucide-react";
import { brotliDecompress } from "zlib";
const settingsPage = () => {
  return (
    <>
      <div className="">
        <div>
          <h1 className="text-4xl text-neutral-950 font-black uppercase tracking-wide my-12 ml-12 undelrine underline-offset-4">
            Organization Settings
          </h1>
        </div>
        <OrganizationProfile
          appearance={{
            elements: {
              card: {
                border: "1px solid #050505",
                boxShadow: "none", 
              },
            },
          }}
        />

        <div>
          <h1 className="text-4xl text-neutral-950 font-black uppercase tracking-wide my-12 ml-12 undelrine underline-offset-4">
            User Settings
          </h1>
        </div>
        <UserProfile />
      </div>
    </>
  );
};

export default settingsPage;
