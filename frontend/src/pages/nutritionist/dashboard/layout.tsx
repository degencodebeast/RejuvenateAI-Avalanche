'use client';
import DashBoardHeader from '@/components/dashboard-header';
import DashboardSideBar from '@/components/dashboard-sidebar';
import { ReactNode } from 'react';

export default function NutritionistDashBoardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navLinks = [
    { url: 'overview', title: 'Overview', icon: 'dashboard' },
    { url: 'meal-plans', title: 'Meal Plans', icon: 'fastfood' },
    { url: 'fitness-plans', title: 'Fitness Plans', icon: 'exercise' },
    { url: 'articles', title: 'Articles', icon: 'post_add' },
    { url: 'appointments', title: 'Appointments', icon: 'book_online' },
    { url: 'settings', title: 'Settings', icon: 'settings' },
  ];
  return (
    <div className='flex max-w-[1400px] mx-auto my-0 h-[100vh] max-h-[750px] min-h-[700px] bg-primaryBeige'>
      <DashboardSideBar links={navLinks} entryPath='/nutritionist/dashboard/' />
      <div className=' flex-1 pb-20 overflow-y-auto'>
        <DashBoardHeader />

        {children}
      </div>
    </div>
  );
}
