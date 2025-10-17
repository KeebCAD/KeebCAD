<script setup lang="ts">
import EditorLeftSidebar from '@/components/editor/EditorLeftSidebar.vue';
import EditorLeftSidebarProvider from '@/components/editor/EditorLeftSidebarProvider.vue';
import EditorRightSidebar from '@/components/editor/EditorRightSidebar.vue';
import EditorRightSidebarProvider from '@/components/editor/EditorRightSidebarProvider.vue';
import ProjectsHeader from '@/components/ProjectsHeader.vue';
import ProjectsSidebar from '@/components/ProjectsSidebar.vue';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
</script>

<template>
  <SidebarProvider>
    <ProjectsSidebar />
    <SidebarInset>
      <ProjectsHeader />
      <main class="relative h-full">
        <EditorLeftSidebarProvider>
          <EditorRightSidebarProvider>
            <EditorLeftSidebar collapsible="icon" variant="floating">
              <RouterView name="left-sidebar" />
            </EditorLeftSidebar>
            <RouterView />
            <EditorRightSidebar collapsible="icon" variant="floating" side="right">
              <RouterView name="right-sidebar" />
            </EditorRightSidebar>
          </EditorRightSidebarProvider>
        </EditorLeftSidebarProvider>
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
