"use client";

import React from "react";
import { useRouter } from "next/navigation";
import VolumeList from "@/app/components/volume/volumeList";

const VolumePage: React.FC = () => {
  const router = useRouter();

  return <VolumeList />;
};

export default VolumePage;
