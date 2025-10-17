<script setup lang="ts">
import type { HTMLAttributes, Ref } from 'vue';

import { useLocalStorage, useMediaQuery, useVModel } from '@vueuse/core';
import { TooltipProvider } from 'reka-ui';
import { computed, ref } from 'vue';

import { cn } from '@/lib/utils';

import {
  LEFT_SIDEBAR_STORAGE_KEY,
  provideEditorLeftSidebarContext,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_ICON,
} from './editor-sidebars';

const storage = useLocalStorage(LEFT_SIDEBAR_STORAGE_KEY, false);

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class'];
    defaultOpen?: boolean;
    open?: boolean;
  }>(),
  {
    open: undefined,
  },
);

const emits = defineEmits<{
  'update:open': [open: boolean];
}>();

const isMobile = useMediaQuery('(max-width: 768px)');
const openMobile = ref(false);

const open = useVModel(props, 'open', emits, {
  defaultValue: props.defaultOpen ?? storage.value ?? false,
  passive: (props.open === undefined) as false,
}) as Ref<boolean>;

function setOpen(value: boolean) {
  open.value = value;
  storage.value = value;
}

function setOpenMobile(value: boolean) {
  openMobile.value = value;
}

function toggleSidebar() {
  return isMobile.value ? setOpenMobile(!openMobile.value) : setOpen(!open.value);
}

const state = computed(() => (open.value ? 'expanded' : 'collapsed'));

provideEditorLeftSidebarContext({
  isMobile,
  open,
  openMobile,
  setOpen,
  setOpenMobile,
  state,
  toggleSidebar,
});
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      data-slot="sidebar-wrapper"
      :style="{
        '--sidebar-width': SIDEBAR_WIDTH,
        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
      }"
      :class="
        cn(
          'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-full w-full',
          props.class,
        )
      "
      v-bind="$attrs"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
