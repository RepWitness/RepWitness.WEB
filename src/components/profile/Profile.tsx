import { AppScreen } from "../common";
import { ProfileHeader } from "./ProfileHeader";
import { PersonalInformation } from "./PersonalInformation";

export const Profile = () => {
  return (
    <AppScreen className="p-4">
      <div className="h-full w-full flex flex-col gap-2">
        <div className="w-full h-1/10 flex flex-col justify-center px-4">
          <h1 className="text-2xl font-semibold text-white/80 italic">My profile</h1>
        </div>
        <ProfileHeader height="h-2/10" />
        <PersonalInformation/>
      </div>
    </AppScreen>
  );
};
