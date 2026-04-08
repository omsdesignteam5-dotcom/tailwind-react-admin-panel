# Tailwind React Admin Template (မြန်မာ/English)

Admin Dashboard များအတွက် လှပခေတ်မီပြီး အသုံးပြုရလွယ်ကူသော အခြေခံ Template တစ်ခု ဖြစ်ပါသည်။

<img width="959" height="475" alt="admin-dashboard" src="https://github.com/user-attachments/assets/8f465e39-c47e-4dc1-99ed-1f376bdb2dbf" />

---

## မိတ်ဆက် (Introduction)
ဤ Project သည် modern ဖြစ်သော နည်းပညာများ (React 19, Tailwind CSS 4, TanStack Router) ကို အသုံးပြု၍ တည်ဆောက်ထားသော Admin Panel Template တစ်ခု ဖြစ်ပါသည်။ ၎င်းကို ကိုယ်ပိုင် လုပ်ငန်းသုံး Application များ သို့မဟုတ် Dashboards များအတွက် အလွယ်တကူ အခြေခံပြီး စတင်နိုင်ရန် ရည်ရွယ်ပါသည်။

> 🚀 **မြန်မြန်ဆန်ဆန် စတင်ရန်:** GitHub repository ရဲ့ အပေါ်ဘက်မှာရှိတဲ့ **"Use this template"** button ကို နှိပ်ပြီး ဒီ project ကို အခြေခံတဲ့ repository အသစ်တစ်ခုကို တိုက်ရိုက် တည်ဆောက်နိုင်ပါတယ်။

## အဓိက ပါဝင်သော Features များ (Key Features)
*   **Modern UI:** Tailwind CSS 4 နှင့် Radix UI ကို အခြေခံထားသော လှပသပ်ရပ်သည့် UI Components များ။
*   **Type-safe Routing:** TanStack Router ကို အသုံးပြုထားသောကြောင့် Type-safe ဖြစ်ပြီး မြန်ဆန်သော Routing ကို ရရှိစေပါသည်။
*   **Power Data Table:** TanStack Table (React Table) ဖြင့် Pagination, Filtering နှင့် Sorting များ လုပ်ဆောင်နိုင်သော Table များ။
*   **Dark Mode Support:** Light နှင့် Dark mode ပြောင်းလဲနိုင်သော Feature။
*   **Form Management:** React Hook Form နှင့် Zod ကို ပေါင်းစပ်ထားသော Form Validation စနစ်။
*   **Responsive Design:** ဖုန်း၊ တက်ဘလက် နှင့် ကွန်ပျူတာ အားလုံးတွင် အဆင်ပြေစေသော Layout။
*   **Lucide Icons:** လှပပြီး သုံးရလွယ်ကူသော Icons များ။

## အသုံးပြုထားသော နည်းပညာများ (Tech Stack)
*   **Frontend:** React 19 (Latest)
*   **Styling:** Tailwind CSS 4
*   **Routing:** TanStack Router
*   **Build Tool:** Vite
*   **Data Table:** TanStack Table v8
*   **Form:** React Hook Form + Zod
*   **Icons:** Lucide React
*   **UI Library:** Radix UI Primitives

## စတင်အသုံးပြုပုံ (Getting Started)

### ၁။ Clone လုပ်ရန်
```bash
git clone https://github.com/your-username/tailwind-react-admin-panel.git
cd tailwind-react-admin-panel
```

### ၂။ Package များ Install လုပ်ရန်
```bash
npm install
```

### ၃။ Development Server ဖွင့်ရန်
```bash
npm run dev
```

### ၄။ Build ဆွဲရန် (Production)
```bash
npm run build
```

## အရောင်ပြင်ဆင်ခြင်း (Customizing Theme Colors)

ခလုတ် (Buttons) များ၊ Link များနှင့် အခြား UI Component များ၏ အဓိကအရောင် (Primary Color) ကို ပြောင်းလဲလိုပါက **`src/styles/theme.css`** ဖိုင်တွင် ဝင်ရောက်ပြင်ဆင်နိုင်ပါသည်။

အောက်ပါ CSS Variable များ၏ တန်ဖိုး (oklch, hsl, မျှော်လင့်ထားသော အရောင် code) များကို မိမိနှစ်သက်ရာ အရောင်ဖြင့် ပြောင်းလဲပေးပါ -

```css
/* src/styles/theme.css */
:root {
  /* Light mode အရောင်ကို ဒီမှာပြောင်းပါ */
  --primary: oklab(20.841% -0.00264 -0.04161);
  --primary-foreground: oklch(0.984 0.003 247.858);
}

.dark {
  /* Dark mode အရောင်ကို ဒီမှာပြောင်းပါ */
  --primary: oklch(0.98 0 0);
  --primary-foreground: oklch(0.14 0 0);
}
```

## ထပ်မံပြင်ဆင်သင့်သော အချက်များ (Further Customizations)

Template ကို စတင်အသုံးပြုသည့်အခါ မိမိလုပ်ငန်းလိုအပ်ချက်အရ အောက်ပါအချက်များကို ပြင်ဆင်ရန် လိုအပ်ပါမည်။

### ၁။ စာမျက်နှာအသစ် ထည့်သွင်းခြင်း (Adding a New Page)
1. **Page ဖန်တီးရန်:** `src/pages/` အောက်တွင် မိမိနှစ်သက်ရာ Folder နှင့် Component ဖိုင် (ဥပမာ- `src/pages/reports/reports.tsx`) ကို တည်ဆောက်ပါ။
2. **Route သတ်မှတ်ရန်:** TanStack Router အသုံးပြုထားသောကြောင့် `src/routes/_authenticated/` (သို့မဟုတ် လိုအပ်သော route အောက်) တွင် `.lazy.tsx` ဖိုင် (ဥပမာ- `reports.lazy.tsx`) ကို ဖန်တီးပါ။ ပြီးလျှင် အောက်ပါအတိုင်းရေးပါ:
   ```tsx
   import { createLazyFileRoute } from '@tanstack/react-router'
   import { ReportsPage } from '@/pages/reports/reports'

   export const Route = createLazyFileRoute('/_authenticated/reports')({
     component: ReportsPage,
   })
   ```
3. **Sidebar Navigation တွင် ထည့်သွင်းရန်:** `src/components/layout/sidebar-data.ts` ဖိုင်ကိုဖွင့်ပြီး `navGroups` အတွင်းရှိ သက်ဆိုင်ရာ နေရာတွင် `url: '/reports'` စသဖြင့် ထည့်သွင်းပေးပါ။

### ၂။ App Name နှင့် Logo ပြင်ဆင်ခြင်း (Updating App Name & Logo)
- **Title (Tab Name):** Project ၏ အပြင်ဘက်ဆုံးမှာရှိတဲ့ `index.html` ဖိုင်ထဲကိုဝင်ရောက်ပြီး `<title>` tag ကို ပြင်ဆင်ပါ။
- **Sidebar အတွင်းမှ အမည်:** `src/components/layout/sidebar.tsx` ဖိုင်ထဲရှိ "Admin Panel" ဆိုသော စာသားကို မိမိနှစ်သက်ရာ ကုမ္ပဏီအမည်ဖြင့် ပြောင်းလဲနိုင်ပါသည်။

---

## English Version

### Introduction
A modern, premium Admin Panel Template built specifically for scalability and performance using React 19, Tailwind CSS 4, and TanStack Router.

> 🚀 **Quick Start:** Click the **"Use this template"** button at the top of the GitHub repository to create a new repository based on this project immediately.

### Key Features
*   **Premium UI:** Built with Tailwind CSS 4 and Radix UI for a modern look and feel.
*   **Fully Type-safe Routing:** Powered by TanStack Router for robust navigation.
*   **Advanced Grids:** TanStack Table integration for handling complex data scenarios.
*   **Built-in Dark Mode:** Seamless transition between light and dark themes.
*   **Form Validation:** Type-safe form handling via React Hook Form and Zod.
*   **Adaptable Layout:** Fully responsive components that work on any device.
*   **Iconography:** Hundreds of icons provided by Lucide React.

### Tech Stack
*   **Core:** React 19 + TypeScript
*   **CSS Engine:** Tailwind CSS 4
*   **Routing:** TanStack Router
*   **Build Environment:** Vite
*   **Table Engine:** TanStack Table v8
*   **Validation:** Zod
*   **Forms:** React Hook Form

### Getting Started

1.  **Clone the project:**
    ```bash
    git clone https://github.com/your-username/tailwind-react-admin-panel.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run development mode:**
    ```bash
    npm run dev
    ```
4.  **Production build:**
    ```bash
    npm run build
    ```

### Customizing Theme Colors

To change the primary color of buttons, links, and other UI components, you need to modify the **`src/styles/theme.css`** file.

Update the values (oklch, hsl, or hex numeric code) of the following CSS variables to your desired color:

```css
/* src/styles/theme.css */
:root {
  /* Adjust light mode colors here */
  --primary: oklab(20.841% -0.00264 -0.04161);
  --primary-foreground: oklch(0.984 0.003 247.858);
}

.dark {
  /* Adjust dark mode colors here */
  --primary: oklch(0.98 0 0);
  --primary-foreground: oklch(0.14 0 0);
}
```

### Further Customizations

When starting a new project with this template, here are a few essential things you'll likely want to customize for your business requirements:

#### 1. Adding a New Page
1. **Create the Page component:** Create a new folder and `.tsx` file inside `src/pages/` (e.g., `src/pages/reports/reports.tsx`).
2. **Setup the Route:** As the project uses TanStack Router, create a corresponding route file like `reports.lazy.tsx` inside `src/routes/_authenticated/` (or your desired route path).
   ```tsx
   import { createLazyFileRoute } from '@tanstack/react-router'
   import { ReportsPage } from '@/pages/reports/reports'

   export const Route = createLazyFileRoute('/_authenticated/reports')({
     component: ReportsPage,
   })
   ```
3. **Add to Sidebar Navigation:** Open `src/components/layout/sidebar-data.ts` and update the `navGroups` array to include your new route (e.g., set `url: '/reports'`).

#### 2. Updating App Name & Logo
- **Browser Tab Title:** Modify the `<title>` tag inside the root `index.html` file.
- **Sidebar Brand Name:** Open `src/components/layout/sidebar.tsx` to find and replace the "Admin Panel" text with your own application name.

---

## Project Structure
```text
src/
├── components/     # UI Components (Common, Layout, etc.)
├── pages/          # Page views (Dashboard, Settings, etc.)
├── routes/         # TanStack Router route definitions
├── styles/         # Global styles & Tailwind config
├── lib/            # Utility functions & shared logic
└── main.tsx        # Application entry point
```
