"use client";

import NetworkList from "@/app/components/networks/networksList";
import React from "react";
import { NETWORKS_LIST } from "../../../../data/networks";

export default function NetworkPage() {
  const handleDelete = (id: string) => {
    console.log(`Deleting network with id ${id}`);
  };

  return <NetworkList networks={NETWORKS_LIST} onDelete={handleDelete} />;
}
