---
name: admin-ui-standards
description: UI standards, layout patterns, and component usage for the Tailwind React Admin Panel project.
---

# Admin UI Standards & Guidelines

This skill defines the visual identity, structural patterns, and component usage for the `tailwind-react-admin-panel`. Follow these rules to ensure consistency across all new features and modifications.

## 1. Visual Identity
- **Typography**: Use `font-sans` (Google Sans). Titles should use `font-semibold` or `font-bold`.
- **Colors**: Use CSS variables for colors (e.g., `text-primary`, `bg-background`, `border-border`). Avoid hardcoded hex codes.
- **Border Radius**: Use `rounded-lg` (standard) or `rounded-xl` (larger containers). Default radius is `0.625rem`.
- **Themes**: Support dynamic themes (`theme-purple`, `theme-blue`, etc.) and Dark Mode (`.dark` class).

## 2. Layout & Spacing
- **Page Container**: Main content area should typically have `p-4` (on all devices).
- **Section Spacing**: Vertical spacing between large blocks should use `space-y-6`.
- **Component Gaps**: Small interactive elements (buttons, icons) should use `gap-2` or `gap-3`.
- **Alignment**:
  - Actions in headers or tables should be right-aligned (`justify-end`).
  - Forms should be center-aligned or use a max-width (e.g., `max-w-2xl`).

## 3. Component Usage
- **Buttons**:
  - Primary: `variant='default'`
  - Subtle: `variant='ghost'` or `variant='outline'`
  - Destructive: `variant='destructive'`
  - Icon buttons in tables: `variant='ghost' size='sm' className='h-8 w-8 p-0'`
- **Toast Variants**:
  - Success: `variant='success'`
  - Error: `variant='destructive'`
  - Warning: `variant='warning'`
  - Info: `variant='info'`
  - Neutral: `variant='neutral'`
- **Badges (Status)**:
  - Active/Success: `variant='success'`
  - Inactive/Suspended: `variant='destructive'`
  - Default/Neutral: `variant='secondary'` or `variant='outline'`
- **Common Wrappers**: Use the following in `src/components/common`:
  - `CustomDropdown` for menus
  - `CustomSelect` for form selects
  - `CustomTooltip` for hover info
  - `CustomTabs` for tabbed navigation

## 4. Data Patterns
- **Tables**: Use the `@tanstack/react-table` pattern with the project's `<DataTable />` component.
- **Toolbars**: Every table should have a `<DataTableToolbar />` or specialized toolbar (e.g., `<UsersTableToolbar />`).
- **Empty States**: Use `<EmptyState />` for empty lists/tables.

## 5. Forms & Modals
- **Forms**: Use `react-hook-form` with `zod` for validation.
- **Inputs**: Use `src/components/ui/input.tsx`.
- **Modals/Drawers**: 
  - Desktop: Use `src/components/ui/dialog.tsx`.
  - Mobile: Prefer full-screen modals or drawers that slide up from the bottom.
  - Buttons in Modals: Standard pattern is `Cancel` (ghost/outline) on the left (or first) and `Action` (primary) on the right (or second).

## 6. Icons
- Use **Lucide React** icons (`lucide-react`).
- Standard size for icons in buttons/text: `h-4 w-4`.
- Standard size for standalone section icons: `h-5 w-5`.

## 7. Responsiveness
- Desktop: Full sidebar navigation.
- Mobile: Floating header with hamburger menu for sidebar.
- Forms: Use single column on mobile, potentially two columns on desktop if space allows.
