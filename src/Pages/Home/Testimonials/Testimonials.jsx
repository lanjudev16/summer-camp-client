import React from "react";
import user from "../../../../public/user.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import main from "../../../../public/main.png";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid lg:grid-cols-3 mx-[36px]">
        <div className="col-span-1">
          <img className="min-h-[100%]" src={main} alt="" />
        </div>
        <div className=" col-span-2">
          <Tabs>
            <div className="grid lg:grid-cols-2 justify-between mb-[24px]">
              <div>
                <h2 className="font-bold text-4xl text-[#4C696D]">
                  Testimonials
                </h2>
                <h3 className="text-[20px] font-light text-[#000000]">
                  Words from our clients
                </h3>
              </div>
              <div>
                <TabList>
                  <Tab>Google</Tab>
                  <Tab>Facebook</Tab>
                  <Tab>Weddingwire</Tab>
                  <Tab>WedmeGood</Tab>
                </TabList>
              </div>
            </div>
            <div>
              <TabPanel>
                <div className="grid lg:grid-cols-4 gap-5">
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px]  right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="mb-2 font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid lg:grid-cols-4 gap-5">
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="mb-2 font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid lg:grid-cols-4 gap-5">
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="mb-2 font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="grid lg:grid-cols-4 gap-5">
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                  <div className="bg-[#416F75]  rounded px-1  relative">
                    <img
                      className="absolute top-[-20px] right-[-20px]"
                      src={user}
                      alt=""
                    />
                    <div>
                      <p className="mt-[100px] font-normal text-base text-white text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium, aut voluptatibus ipsam ratione
                      </p>
                      <h2 className="mb-2 font-bold text-[20px] text-white text-center">
                        ~Ramdom Name
                      </h2>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
      <hr className="bg-[#ADA3A3] h-[2px] my-[45px] mx-[36px]" />
    </div>
  );
};

export default Testimonials;
