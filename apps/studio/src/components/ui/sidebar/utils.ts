import type { ComputedRef, Ref } from 'vue';

import { createContext } from 'reka-ui';

export const SIDEBAR_STORAGE_KEY = '@keebcad/sidebar';
export const SIDEBAR_WIDTH = '16rem';
export const SIDEBAR_WIDTH_MOBILE = '18rem';
export const SIDEBAR_WIDTH_ICON = '3rem';
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

export const [useSidebar, provideSidebarContext] = createContext<{
  isMobile: Ref<boolean>;
  open: Ref<boolean>;
  openMobile: Ref<boolean>;
  setOpen: (value: boolean) => void;
  setOpenMobile: (value: boolean) => void;
  state: ComputedRef<'collapsed' | 'expanded'>;
  toggleSidebar: () => void;
}>('Sidebar');
