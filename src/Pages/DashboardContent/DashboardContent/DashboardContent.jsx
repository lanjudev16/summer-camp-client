import React from "react";
import DashNav from "../DashNav/DashNav";
import NetIncome from "../NetIncome/NetIncome";
import SelesSupport from "../SalesSupport/SelesSupport";
import OverallSeles from "../OverallSeles/OverallSeles";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DashboardContent = () => {
    const navigate=useNavigate()
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  if (user) {
    var { data } = useQuery({
      queryKey: ["isUserSecure"],
      enabled: !loading,
      queryFn: async () => {
        const res = await axiosSecure(`/isUserValid/${user?.email}`);
        return res.data;
      },
    });
  }
  if (data?.isValid === true) {
    return (
      <div className="my-4  mx-6">
        <div className="top-nav-border-custom">
          <DashNav></DashNav>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-4">
          <div className="grid lg:grid-cols-2 col-span-2 gap-4">
            <NetIncome></NetIncome>
            <NetIncome></NetIncome>
            <NetIncome></NetIncome>
            <NetIncome></NetIncome>
          </div>
          <div>
            <SelesSupport></SelesSupport>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-4">
          <div className="col-span-2 gap-4">
            <OverallSeles></OverallSeles>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
};

export default DashboardContent;
