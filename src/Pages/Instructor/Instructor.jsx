import React from "react";
import backgroundImage from "../../../public/PhotoGraphic.png";
import backgroundImage1 from "../../../public/PhotoGraphicLeft.png";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SingleInstructor from "./SingleInstructor";
import Footer from "../Shared/Footer/Footer";
const Instructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users").then((data) => {
        return res.data;
      });
    },
  });
  console.log(data);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="rounded lg:mx-[36px] py-[113px]"
      >
        <div className="grid lg:grid-cols-2 items-center ">
          <div className="text-left lg:pl-[60px]">
            <h3 className="font-normal lg:text-[40px] text-white text-center text-[36px]">
              Here <br /> All The <br />{" "}
              <span className="lg:text-[65px] font-semibold">Instructor</span>
            </h3>
          </div>
          <div className="lg:w-full">
            <img
              className="lg:w-full lg:ml-[-50px] w-[250px] mx-auto mt-5"
              src={backgroundImage1}
              alt=""
            />
          </div>
        </div>
      </div>
      <h2 className="text-center text-2xl uppercase font-extrabold">All user</h2>
      <div className="grid lg:grid-cols-3 gap-5 mx-[36px]">
        
        {
            data && data.map((instructor,index)=><SingleInstructor key={index} instructor={instructor} ></SingleInstructor>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Instructor;
