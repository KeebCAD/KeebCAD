import type { ComputedRef, HTMLAttributes, Ref } from 'vue';

import { createContext } from 'reka-ui';

export interface SidebarProps {
  class?: HTMLAttributes['class'];
  collapsible?: 'icon' | 'none' | 'offcanvas';
  side?: 'left' | 'right';
  variant?: 'floating' | 'inset' | 'sidebar';
}

export const LEFT_SIDEBAR_STORAGE_KEY = '@keebcad/editor-left-sidebar';
export const RIGHT_SIDEBAR_STORAGE_KEY = '@keebcad/editor-right-sidebar';
export const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
export const SIDEBAR_WIDTH_ICON = '3rem';

export const [useEditorLeftSidebar, provideEditorLeftSidebarContext] = createContext<{
  isMobile: Ref<boolean>;
  open: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpen: (value: boolean) => void;
  setOpenMobile: (value: boolean) => void;
  state: ComputedRef<'collapsed' | 'expanded'>;
  toggleSidebar: () => void;
}>('EditorLeftSidebar');

export const [useEditorRightSidebar, provideEditorRightSidebarContext] = createContext<{
  isMobile: Ref<boolean>;
  open: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpen: (value: boolean) => void;
  setOpenMobile: (value: boolean) => void;
  state: ComputedRef<'collapsed' | 'expanded'>;
  toggleSidebar: () => void;
}>('EditorRightSidebar');
