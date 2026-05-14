import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Home, Calendar, RefreshCcw, ShieldAlert, Coffee, MapPin, HeartHandshake, Info, Users, Clock } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Schedule", path: "/schedule", icon: Clock },
  { name: "Rotations", path: "/rotations", icon: RefreshCcw },
  { name: "Thursday Plan", path: "/thursday", icon: Calendar },
  { name: "Safety", path: "/safety", icon: ShieldAlert },
  { name: "Snacks", path: "/snacks", icon: Coffee },
  { name: "Stations", path: "/stations", icon: MapPin },
  { name: "Mission Offering", path: "/mission", icon: HeartHandshake },
  { name: "Important Dates", path: "/dates", icon: Info },
  { name: "Shepherds", path: "/shepherds", icon: Users },
];

export function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-pattern bg-kq-navy font-body text-slate-800 selection:bg-kq-yellow selection:text-kq-navy flex flex-col">
      <div className="w-full bg-white relative flex flex-col min-h-screen flex-1">
        
        {/* Header */}
        <header className="bg-kq-royal text-white px-4 py-4 sticky top-0 z-50 shadow-md">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
              <img 
                src="https://thinkorange.com/wp-content/uploads/2025/06/Card-Image-Biblical.png" 
                alt="KQ Logo" 
                className="h-10 sm:h-12 object-contain rounded-md"
              />
              <div className="font-display font-black text-xl sm:text-3xl leading-tight tracking-tight">
                VBC 2026 Hub
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "px-4 py-2.5 rounded-xl font-extrabold text-sm transition-all",
                      active ? "bg-kq-yellow text-kq-navy shadow-sm" : "text-white hover:bg-white/20"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 hover:bg-white/20 rounded-lg transition-colors lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setMenuOpen(false)} />
        )}

        {/* Navigation Drawer (Mobile Only) */}
        <nav className={cn(
          "fixed lg:hidden top-0 right-0 bottom-0 w-64 bg-white z-50 border-l-4 border-kq-yellow transform transition-transform duration-300 ease-in-out shadow-2xl",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-4 bg-kq-sky text-white font-display text-lg shadow-sm border-b-4 border-kq-navy flex justify-between items-center">
            Hub Menu
            <button onClick={() => setMenuOpen(false)} className="p-1 hover:bg-white/20 rounded-lg">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col py-2 overflow-y-auto h-[calc(100vh-120px)]">
            {NAV_ITEMS.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 border-b border-slate-100 transition-colors font-bold",
                    active ? "bg-kq-yellow/20 text-kq-royal border-l-4 border-l-kq-royal" : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <item.icon size={20} className={cn(active ? "text-kq-orange" : "text-slate-400")} />
                  {item.name}
                  <ChevronRight size={16} className="ml-auto opacity-50" />
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 pb-24 lg:pb-16 relative z-0 w-full flex flex-col items-center">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 p-8 text-center relative z-10 lg:pb-8 pb-28">
          <p className="font-extrabold text-slate-800">First Methodist Mansfield Kids</p>
          <p className="text-kq-royal font-display mt-2 text-xl tracking-tight">VBC 2026: Kingdom Quest</p>
        </footer>

        {/* Mobile Bottom Quick-Access Bar */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-40 pb-safe shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)]">
          {[
             { name: "Home", path: "/", icon: Home },
             { name: "Safety", path: "/safety", icon: ShieldAlert },
             { name: "Snacks", path: "/snacks", icon: Coffee },
             { name: "Shepherds", path: "/shepherds", icon: Users },
          ].map((item) => {
             const active = location.pathname === item.path;
             return (
               <Link key={item.path} to={item.path} className={cn("flex flex-col items-center p-2 rounded-xl transition-colors min-w-[4rem]", active ? "text-kq-royal" : "text-slate-500 hover:text-slate-800")}>
                 <item.icon size={26} className={cn("mb-1", active && "text-kq-orange")} />
                 <span className={cn("text-[11px] font-extrabold", active && "text-kq-navy")}>{item.name}</span>
               </Link>
             )
          })}
        </nav>
      </div>
    </div>
  );
}
