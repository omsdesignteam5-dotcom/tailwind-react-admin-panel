import type { LucideIcon } from 'lucide-react'

export interface BaseNavItem {
  title: string
  badge?: string
  icon?: LucideIcon
}

export interface NavLink extends BaseNavItem {
  url: string
  items?: never
}

export interface NavCollapsible extends BaseNavItem {
  items: (BaseNavItem & { url: string })[]
  url?: never
}

export type NavItem = NavCollapsible | NavLink

export interface NavGroup {
  title: string
  items: NavItem[]
}

export interface SidebarData {
  navGroups: NavGroup[]
}
