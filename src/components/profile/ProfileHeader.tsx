import { QuoteOfTheMoment } from "../dashboard";
import imageProfile from "../../assets/user_picture.jpg";
import { currentUser } from "../../dummydata/profile";

interface IProfileHeaderProps{
    height: string;
}

export const ProfileHeader = ({height}:IProfileHeaderProps) =>{
    return (
        <div className={"bg-slate-700 w-full flex justify-center items-center gap-2 rounded-2xl px-8" + " " + height}>
          <div className="h-full w-1/10 flex justify-center items-center">
            <img
              alt="user"
              src={imageProfile}
              className="w-30 h-30 rounded-full object-cover"
            />
          </div>
          <div className="h-full w-3/10 flex flex-col gap-2 justify-center">
            <h1 className="text-xl text-white">{currentUser.firstName} {currentUser.lastName}</h1>
            <h1 className="text-md text-white/80 italic">{currentUser.role}</h1>
            <h1 className="text-md text-white/80 italic">
              {currentUser.height} cm, {currentUser.weight} kg, BMI{" "}
              {currentUser.bmi}
            </h1>
          </div>
          <div className="h-full w-6/10">
            <QuoteOfTheMoment />
          </div>
        </div>
    )
}