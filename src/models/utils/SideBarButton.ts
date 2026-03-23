import type { ReactNode } from "react";

export type SideBarButton= {
  name: string,
  icon: ReactNode,
  isActive: boolean,
  link: string,
};