<script setup lang="ts">
import { Command, Frame, SquareTerminal } from 'lucide-vue-next';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from '@/components/ui/sidebar';

import NavMain from './NavMain.vue';
import NavUser from './NavUser.vue';
import ProjectSwitcher from './ProjectSwitcher.vue';

const projects = [
  {
    logo: Command,
    name: 'Project 1',
  },
  {
    logo: Frame,
    name: 'Project 2',
  },
];

const user = {
  avatar: 'https://github.com/unovue.png',
  email: 'fan@example.com',
  name: 'Keeb Fan',
};

const items = [
  {
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        title: 'History',
        url: '#',
      },
      {
        title: 'Starred',
        url: '#',
      },
      {
        title: 'Settings',
        url: '#',
      },
    ],
    title: 'Playground',
    url: '#',
  },
];
</script>

<template>
  <Sidebar>
    <SidebarHeader>
      <ProjectSwitcher :projects />
    </SidebarHeader>
    <SidebarSeparator />
    <SidebarContent>
      <NavMain :items />
    </SidebarContent>
    <SidebarSeparator />
    <SidebarFooter>
      <NavUser :user />
    </SidebarFooter>
  </Sidebar>
</template>
