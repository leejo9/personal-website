// src/components/Layout.tsx
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-gray-300 font-sans selection:bg-indigo-500/30 flex flex-col">

      {/* Content Container 
                pt-16 accounts for the fixed navbar height so content isn't hidden behind it.
                h-screen ensures the page takes up the full window height.
            */}
      <main className="bg-green-100 dark:bg-black w-full flex-1 relative overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}