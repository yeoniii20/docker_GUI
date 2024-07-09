"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { HOME_ROUTER } from "../../../../data/home";
import QuickActions from "@/app/components/home/quickActions";
import RecentActivity from "@/app/components/home/recentActivity";
import ResourceUsage from "@/app/components/home/resourceUsage";
import SystemOverView from "@/app/components/home/systemOverView";

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Docker Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 전체 상태 개요 */}
        <SystemOverView />
        {/* 빠른 액세스 */}
        <QuickActions data={HOME_ROUTER} />
        {/* 최근 활동 */}
        <RecentActivity />
      </div>
      {/* 시스템 리소스 사용량 */}
      <ResourceUsage />
    </div>
  );
};

export default Home;
