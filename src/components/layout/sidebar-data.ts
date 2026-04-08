import {
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Bug,
  FileX,
  Lock,
  ServerOff,
  UserCog,
  Palette,
  FileText,
  Bell,
  Component,
} from 'lucide-react'
import type { SidebarData } from './types'

export const sidebarData: SidebarData = {
  navGroups: [
    {
      title: 'APP PAGES',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Blank Page',
          url: '/blank-page',
          icon: FileText,
          badge: '5',
        },
      ],
    },
    {
      title: 'General Pages',
      items: [
      // {
      //     title: 'Notifications',
      //     url: '/notifications',
      //     badge: '5',
      //     icon: Bell,
      //   },
        {
          title: 'Auth',
          icon: ShieldCheck,
          items: [
            { title: 'Login', url: '/login' },
            { title: 'Sign Up', url: '/sign-up' },
            { title: 'Forgot Password', url: '/forgot-password' },
          ],
        },
        {
          title: 'Errors',
          icon: Bug,
          items: [
            { title: 'Unauthorized', url: '/errors/401', icon: Lock },
            { title: 'Forbidden', url: '/errors/403', icon: ShieldCheck },
            { title: 'Not Found', url: '/errors/404', icon: FileX },
            {
              title: 'Server Error',
              url: '/errors/500',
              icon: ServerOff,
            },
          ],
        },
        {
          title: 'Settings',
          icon: Settings,
          items: [
            { title: 'Profile', url: '/settings/profile', icon: UserCog },
            {
              title: 'Appearance',
              url: '/settings/appearance',
              icon: Palette,
            },
          ],
        },
        // {
        //   title: 'Reports',
        //   icon: FileText,
        //   items: [
        //     { title: 'Sales Report', url: '/reports/sales' },
        //     { title: 'User Report', url: '/reports/users' },
        //     { title: 'Activity Log', url: '/reports/activity' },
        //   ],
        // },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'UI Components',
          icon: Component,
          items: [
            { title: 'Accordion', url: '/ui-components/accordion' },
            { title: 'Alert Dialog', url: '/ui-components/alert-dialog' },
            { title: 'Avatar', url: '/ui-components/avatar' },
            { title: 'Badge', url: '/ui-components/badge' },
            { title: 'Breadcrumb', url: '/ui-components/breadcrumb' },
            { title: 'Button', url: '/ui-components/button' },
            { title: 'Calendar', url: '/ui-components/calendar' },
            { title: 'Card', url: '/ui-components/card' },
            { title: 'Checkbox', url: '/ui-components/checkbox' },
            { title: 'Collapsible', url: '/ui-components/collapsible' },
            { title: 'Composite UI', url: '/ui-components/composite' },
            { title: 'Data Table', url: '/ui-components/data-table' },
            { title: 'Date Picker', url: '/ui-components/date-picker' },
            { title: 'Dropdown Menu', url: '/ui-components/dropdown-menu' },
            { title: 'Education UI', url: '/ui-components/school' },
            { title: 'Form Validation', url: '/ui-components/form-validation' },
            { title: 'Modal', url: '/ui-components/modal' },
            { title: 'Popover', url: '/ui-components/popover' },
            { title: 'Progress', url: '/ui-components/progress' },
            { title: 'Radio Group', url: '/ui-components/radio-group' },
            { title: 'Scroll Area', url: '/ui-components/scroll-area' },
            { title: 'Select', url: '/ui-components/select' },
            { title: 'Separator', url: '/ui-components/separator' },
            { title: 'Sheet', url: '/ui-components/sheet' },
            { title: 'Skeleton', url: '/ui-components/skeleton' },
            { title: 'Switch', url: '/ui-components/switch' },
            { title: 'Tabs', url: '/ui-components/tabs' },
            { title: 'Toast', url: '/ui-components/toast' },
            { title: 'Tooltip', url: '/ui-components/tooltip' },
          ],
        },
      ],
    },
  ],
}
