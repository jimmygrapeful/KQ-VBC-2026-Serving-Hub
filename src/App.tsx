import { Layout } from "./components/Layout";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Users, Clock, RefreshCcw, Calendar, ShieldAlert, Coffee, MapPin, HeartHandshake, Info, ChevronDown, Phone } from "lucide-react";
import * as data from "./data";
import { cn } from "./lib/utils";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Card({ title, desc, to, colorClass, icon: Icon }: any) {
  return (
    <Link to={to} className={cn("block group h-full", colorClass)}>
      <div className="border-[3px] border-slate-800 rounded-xl p-6 lg:p-8 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(30,41,75,1)] shadow-[4px_4px_0px_rgba(30,41,75,1)] transition-all bg-white flex flex-col h-full relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
          <Icon size={120} />
        </div>
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <div className="p-3 border-2 border-slate-800 rounded-lg bg-white shadow-[2px_2px_0px_rgba(30,41,75,1)]">
            <Icon size={28} />
          </div>
          <h3 className="font-display font-black text-2xl tracking-tight text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 font-semibold relative z-10 leading-relaxed text-sm lg:text-base flex-1">{desc}</p>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <div className="w-full bg-white flex flex-col justify-center items-center px-6 py-16 lg:py-24 text-center min-h-[75vh]">
        <img 
          src="https://thinkorange.com/wp-content/uploads/2025/06/Frame.png" 
          alt="Kingdom Quest Theme" 
          className="w-full max-w-4xl mb-8 lg:mb-12 object-contain drop-shadow-xl"
        />
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-kq-navy mb-6 tracking-tight leading-[1.1]">VBC 2026<br/>Serving Team Hub</h1>
        <p className="text-slate-700 font-bold text-xl lg:text-2xl mb-6 max-w-2xl mx-auto">A quick reference hub for Kingdom Quest volunteers.</p>
        <p className="text-slate-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-medium">Thank you for serving at VBC 2026. This hub is here to help you find what you need before training, during training, during VBC week, and anytime questions come up.</p>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-12 lg:py-20 space-y-16 lg:space-y-24">
        
        {/* Quick Top Nav Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          <Link to="/schedule" className="bg-kq-royal text-center text-white py-6 px-4 rounded-2xl font-display font-black text-lg lg:text-xl shadow-md transition-all hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center h-32">View<br/>Schedule</Link>
          <Link to="/safety" className="bg-kq-green text-center text-white py-6 px-4 rounded-2xl font-display font-black text-lg lg:text-xl shadow-md transition-all hover:bg-green-600 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center h-32">Review<br/>Safety Info</Link>
          <Link to="/snacks" className="bg-kq-orange text-center text-white py-6 px-4 rounded-2xl font-display font-black text-lg lg:text-xl shadow-md transition-all hover:bg-orange-500 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center h-32">Check<br/>Snacks & Allergies</Link>
          <Link to="/shepherds" className="bg-kq-purple text-center text-white py-6 px-4 rounded-2xl font-display font-black text-lg lg:text-xl shadow-md transition-all hover:bg-purple-600 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center h-32">Shepherd<br/>Info</Link>
        </div>

        {/* Safety Alert */}
        <div className="w-full bg-white border-l-[12px] border-kq-red p-6 lg:p-10 rounded-2xl shadow-sm lg:shadow-md flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-kq-red/10 p-4 rounded-2xl text-kq-red shrink-0 hidden md:block">
            <ShieldAlert size={48} />
          </div>
          <div>
            <h2 className="font-display font-black text-2xl lg:text-4xl text-kq-red mb-3 flex items-center gap-3">
              <ShieldAlert className="md:hidden" /> Safety Matters
            </h2>
            <p className="text-slate-700 font-semibold leading-relaxed lg:text-xl">Every volunteer plays a part in keeping kids safe. Please review the Safety section before VBC begins and ask a staff member right away if anything is unclear.</p>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h2 className="font-display font-black text-3xl lg:text-5xl text-slate-900 mb-10 text-center">Quick Access</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            <Card title="Daily Schedule" desc="Check volunteer arrival, worship, rotation, wrap-up, and dismissal times." to="/schedule" icon={Clock} colorClass="text-kq-royal" />
            <Card title="Rotation Schedule" desc="View where each grade goes throughout the morning." to="/rotations" icon={RefreshCcw} colorClass="text-kq-orange" />
            <Card title="Thursday Plan" desc="Review the adjusted Thursday schedule for the VBC Block Party." to="/thursday" icon={Calendar} colorClass="text-kq-purple" />
            <Card title="Safety Procedures" desc="Know what to do for emergencies, injuries, weather, allergies, and campus safety." to="/safety" icon={ShieldAlert} colorClass="text-kq-red" />
            <Card title="Snacks & Allergies" desc="See each day's snack and food items." to="/snacks" icon={Coffee} colorClass="text-kq-green" />
            <Card title="Station Locations" desc="Find where worship, snacks, rec, crafts, first aid, and classrooms are located." to="/stations" icon={MapPin} colorClass="text-kq-sky" />
            <Card title="Mission Offering" desc="Review the mission partner and pastors praying over offering each day." to="/mission" icon={HeartHandshake} colorClass="text-kq-red" />
            <Card title="Shepherd Info" desc="Classroom leaders can review arrival, dismissal, materials, and checkout steps." to="/shepherds" icon={Users} colorClass="text-kq-navy" />
          </div>
        </div>

      </div>
    </div>
  );
}

function PageHeader({ title, icon: Icon, color }: any) {
  return (
    <div className={cn("p-8 lg:p-12 text-white shadow-md rounded-2xl mb-8 lg:mb-12 flex items-center gap-5 lg:gap-6", color)}>
      <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm shrink-0">
        <Icon size={36} strokeWidth={2.5} className="lg:w-12 lg:h-12" />
      </div>
      <h1 className="font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">{title}</h1>
    </div>
  );
}

function Schedule() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Daily Schedule" icon={Clock} color="bg-kq-royal" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Use this page to check the main VBC schedule, volunteer arrival times, rotation start time, wrap-up, and dismissal.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-6 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
            <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 border-b-2 border-slate-100 pb-2">Daily Timeline</h2>
            <div className="space-y-4 relative">
              <div className="absolute top-4 bottom-4 left-[2.25rem] w-1 bg-slate-200 z-0 hidden sm:block"></div>
              {data.dailySchedule.map((s, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
                  <div className="bg-kq-royal text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-24 shrink-0 flex items-center justify-center shadow-sm">
                    {s.time}
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex-1">
                    <h3 className="font-bold text-slate-800 text-lg">{s.activity}</h3>
                    <p className="text-sm text-slate-600 font-semibold mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-300 hidden lg:block">
             <h3 className="font-display font-black text-2xl text-kq-orange mb-4">VBC Themes</h3>
             <div className="grid sm:grid-cols-2 gap-4">
              {data.daysOverview.map(d => (
                <div key={d.day} className="bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="font-display font-black text-lg lg:text-xl text-kq-orange mb-1">Day {d.day}: {d.theme}</div>
                    <div className="text-xs lg:text-sm font-bold text-slate-700">Story: <span className="font-normal">{d.story} ({d.reference})</span></div>
                    <div className="text-xs lg:text-sm font-bold text-slate-700">Bottom Line: <span className="font-normal">{d.line}</span></div>
                  </div>
                  {d.wear && <div className="mt-3 pt-2 border-t border-orange-200 text-xs lg:text-sm font-bold text-orange-900 leading-snug"><span className="text-kq-orange font-black uppercase tracking-wider text-[10px] block mb-0.5">What to wear</span>{d.wear}</div>}
                </div>
              ))}
             </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-kq-yellow p-5 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
            <h3 className="font-display font-black text-xl text-slate-800 mb-2">Volunteer Arrival Matters</h3>
            <p className="font-semibold text-slate-700 text-sm">Please arrive on time and be in your assigned area by <span className="font-bold text-kq-navy bg-white px-1 rounded">8:30 AM</span>. This helps check-in, transitions, and the full morning run smoothly.</p>
          </div>

          <div className="space-y-3">
             <div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-3">
                <div className="bg-kq-sky text-kq-navy p-2 rounded-lg"><Clock size={24} /></div>
                <div>
                   <div className="font-bold text-slate-800 mb-0.5">Check-In <span className="text-kq-sky font-black ml-1">8:15 AM</span></div>
                   <div className="text-sm font-semibold text-slate-600 leading-snug">Volunteers check in and prepare for their role.</div>
                </div>
             </div>
             
             <div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-3">
                <div className="bg-kq-orange text-white p-2 rounded-lg"><RefreshCcw size={24} /></div>
                <div>
                   <div className="font-bold text-slate-800 mb-0.5">Rotations <span className="text-kq-orange font-black ml-1">9:50 AM</span></div>
                   <div className="text-sm font-semibold text-slate-600 leading-snug">Groups begin moving to stations.</div>
                </div>
             </div>

             <div className="bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm flex items-start gap-3">
                <div className="bg-kq-green text-white p-2 rounded-lg"><Users size={24} /></div>
                <div>
                   <div className="font-bold text-slate-800 mb-0.5">Wrap Up & Dismissal <span className="text-kq-green font-black block sm:inline mt-1 sm:mt-0 lg:block xl:inline">11:50 AM-12:00 PM</span></div>
                   <div className="text-sm font-semibold text-slate-600 leading-snug">Groups wrap up and prepare for pickup.</div>
                </div>
             </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-2xl border-[3px] border-kq-purple shadow-sm mt-4">
             <h3 className="font-display font-black text-xl text-kq-purple mb-2">Thursday Schedule Note</h3>
             <p className="font-semibold text-purple-900 text-sm mb-4">Thursday will look different because the VBC Block Party begins at 11:00 AM. Check the Thursday Plan page for the adjusted rotation plan and party details.</p>
             <Link to="/thursday" className="block text-center bg-kq-purple text-white font-bold py-2 px-4 rounded-xl hover:bg-purple-700 transition-colors">View Thursday Plan</Link>
          </div>

          <div className="mt-8">
            <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/rotations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Rotation Schedule</Link>
              <Link to="/thursday" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Thursday Plan</Link>
              <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety Procedures</Link>
              <Link to="/shepherds" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Shepherd Info</Link>
            </div>
          </div>
        </div>
      </div>

       <div className="mt-8 pt-4 border-t-2 border-dashed border-slate-300 lg:hidden pb-8">
          <h3 className="font-display font-black text-2xl text-kq-orange mb-4">VBC Themes</h3>
          <div className="grid grid-cols-1 gap-4">
            {data.daysOverview.map(d => (
              <div key={d.day} className="bg-orange-50 border-2 border-orange-200 p-4 rounded-2xl shadow-sm">
                <div className="font-display font-black text-lg text-kq-orange mb-1">Day {d.day}: {d.theme}</div>
                <div className="text-sm font-bold text-slate-700 mb-0.5">Story: <span className="font-normal">{d.story} ({d.reference})</span></div>
                <div className="text-sm font-bold text-slate-700">Bottom Line: <span className="font-normal">{d.line}</span></div>
                {d.wear && <div className="mt-3 pt-2 border-t border-orange-200 text-sm font-bold text-orange-900 leading-snug"><span className="text-kq-orange font-black uppercase tracking-wider text-xs block mb-0.5">What to wear</span>{d.wear}</div>}
              </div>
            ))}
          </div>
       </div>

    </div>
  );
}

function RotationCard({ r }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-[3px] border-slate-800 rounded-2xl overflow-hidden shadow-[4px_4px_0px_rgba(30,41,75,1)] bg-white transition-all">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full bg-kq-sky px-4 py-3 font-display font-black tracking-widest text-lg text-slate-900 border-b-2 border-slate-200 flex justify-between items-center text-left hover:bg-sky-400 transition-colors"
      >
        <span>{r.grade} Grade</span>
        <RefreshCcw size={20} className={cn("text-sky-800 transition-transform", open ? "rotate-180" : "")} />
      </button>
      {open && (
        <div className="grid grid-cols-1 divide-y divide-slate-100 bg-sky-50/30 pb-2">
          <div className="flex px-4 py-3">
            <div className="w-24 text-xs font-bold text-slate-400 uppercase flex items-center">9:00 AM</div>
            <div className="font-bold text-slate-700">{r.t1}</div>
          </div>
          <div className="flex px-4 py-3 bg-slate-50">
            <div className="w-24 text-xs font-bold text-slate-400 uppercase flex items-center">9:50 AM</div>
            <div className="font-bold text-slate-700">{r.t2}</div>
          </div>
          <div className="flex px-4 py-3">
            <div className="w-24 text-xs font-bold text-slate-400 uppercase flex items-center">10:30 AM</div>
            <div className="font-bold text-slate-700">{r.t3}</div>
          </div>
          <div className="flex px-4 py-3 bg-slate-50">
            <div className="w-24 text-xs font-bold text-slate-400 uppercase flex items-center">11:10 AM</div>
            <div className="font-bold text-slate-700">{r.t4}</div>
          </div>
          <div className="flex px-4 py-3">
            <div className="w-24 text-xs font-bold text-slate-400 uppercase flex items-center">11:50 AM</div>
            <div className="font-bold text-slate-700">{r.t5}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function Rotations() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Rotation Schedule" icon={RefreshCcw} color="bg-kq-orange" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Use this page to check where each grade goes during the morning.</p>
      </div>
      
      <div className="space-y-6 pb-8">
        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-x-auto pb-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-kq-navy text-white font-display font-black tracking-widest text-base">
              <tr>
                <th className="p-4 border-2 border-kq-navy w-32">Grade</th>
                <th className="p-4 border-2 border-kq-navy">9:00-9:45</th>
                <th className="p-4 border-2 border-kq-navy">9:50-10:25</th>
                <th className="p-4 border-2 border-kq-navy">10:30-11:05</th>
                <th className="p-4 border-2 border-kq-navy">11:10-11:45</th>
                <th className="p-4 border-2 border-kq-navy">11:50-12:00</th>
              </tr>
            </thead>
            <tbody className="bg-white font-bold text-slate-700 text-base">
              {data.rotations.map((r, i) => (
                <tr key={r.grade} className={i % 2 === 0 ? "bg-white" : "bg-slate-50 hover:bg-orange-50"}>
                  <td className="p-4 border-2 border-slate-200 bg-kq-sky text-slate-900">{r.grade}</td>
                  <td className="p-4 border-2 border-slate-200">{r.t1}</td>
                  <td className="p-4 border-2 border-slate-200">{r.t2}</td>
                  <td className="p-4 border-2 border-slate-200">{r.t3}</td>
                  <td className="p-4 border-2 border-slate-200">{r.t4}</td>
                  <td className="p-4 border-2 border-slate-200">{r.t5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View */}
        <div className="lg:hidden space-y-4">
          <div className="bg-orange-50 border border-orange-200 text-orange-900 px-4 py-2 rounded-xl text-center text-sm font-bold shadow-sm">
            Tap a grade to view its schedule
          </div>
          {data.rotations.map((r) => (
             <RotationCard key={r.grade} r={r} />
          ))}
        </div>

        {/* Station Location Reminder */}
        <div className="mt-8">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 border-b-2 border-slate-100 pb-2">Station Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {data.stationLocations.map((s, i) => (
              <div key={i} className="flex flex-col bg-white border-2 border-sky-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-sky-50 px-4 py-2 font-display font-black text-lg tracking-wide text-sky-800 border-b border-sky-100">
                  {s.name}
                </div>
                <div className="p-4 font-bold text-slate-700 flex items-start gap-2 h-full">
                  <MapPin size={20} className="text-kq-sky shrink-0 mt-0.5" />
                  <span>{s.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Daily Schedule</Link>
            <Link to="/thursday" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Thursday Plan</Link>
            <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety Procedures</Link>
            <Link to="/shepherds" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Shepherd Info</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThursdayPlan() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Thursday Plan" icon={Calendar} color="bg-kq-purple" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Thursday has a different schedule because the VBC Block Party begins at 11:00 AM.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Important Alert Card */}
        <div className="bg-kq-red/10 border-l-8 border-kq-red p-5 lg:p-6 rounded-r-2xl">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-red mb-2 flex items-center gap-2"><ShieldAlert /> Thursday Is Different</h2>
          <p className="text-slate-700 font-semibold leading-snug lg:text-lg">Because the VBC Block Party starts at 11:00 AM, Thursday rotations will be adjusted. Please review this page before Thursday morning so you know where your group or team should be.</p>
        </div>

        {/* Thursday Schedule Section */}
        <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-6 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 border-b-2 border-slate-100 pb-2">Thursday Timeline</h2>
          <div className="space-y-4 relative">
            <div className="absolute top-4 bottom-4 left-[2.25rem] w-1 bg-slate-200 z-0 hidden sm:block"></div>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-kq-royal text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-28 shrink-0 flex items-center justify-center shadow-sm">
                9:00 AM
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-slate-800 text-lg">Worship Begins</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-kq-orange text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-28 shrink-0 flex items-center justify-center shadow-sm">
                9:50 AM
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-slate-800 text-lg">First Rotation Begins</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-kq-orange text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-28 shrink-0 flex items-center justify-center shadow-sm">
                10:30 AM
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-slate-800 text-lg">Second Rotation Begins</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-kq-purple text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-28 shrink-0 flex items-center justify-center shadow-sm">
                11:00 AM
              </div>
              <div className="bg-purple-50 border border-purple-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-kq-purple text-lg">VBC Block Party Begins</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-slate-800 text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-32 shrink-0 flex items-center justify-center shadow-sm leading-tight text-center">
                12:00-1:00 PM
              </div>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-slate-800 text-lg">Family Experience / VBC Block Party</h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 relative z-10">
              <div className="bg-kq-green text-white font-bold px-3 py-2 rounded-xl text-sm w-fit sm:w-32 shrink-0 flex items-center justify-center shadow-sm leading-tight text-center">
                1:00-3:00 PM
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-xl flex-1">
                <h3 className="font-bold text-green-900 text-lg">Volunteer and Serve Team Appreciation Party / Clean Up</h3>
              </div>
            </div>

          </div>
        </div>

        {/* Thursday Rotation Plan */}
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 border-b-2 border-slate-100 pb-2">Thursday Rotation Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-6">
            
            {/* Card 1 */}
            <div className="bg-white border-[3px] border-kq-orange rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-kq-orange text-white px-4 py-3 font-display font-black tracking-widest text-xl">
                First Rotation
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">K-1st Grade</div>
                  <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Small Group Bible Time</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">2nd-4th Grade</div>
                  <div className="font-bold text-slate-800 text-lg">Snack Time</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-[3px] border-kq-orange rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-kq-orange text-white px-4 py-3 font-display font-black tracking-widest text-xl">
                Second Rotation
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">K-1st Grade</div>
                  <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Snack Time</div>
                </div>
                <div>
                  <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">2nd-4th Grade</div>
                  <div className="font-bold text-slate-800 text-lg">Small Group Bible Time</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Rec and Crafts Team Note */}
        <div className="bg-kq-sky p-5 lg:p-6 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <h3 className="font-display font-black text-2xl text-slate-900 mb-2">Rec and Crafts Teams</h3>
          <p className="font-bold text-slate-800 lg:text-lg">On Thursday, the Rec and Crafts teams will help in the gym with snacks or help with setup for the VBC Block Party.</p>
        </div>

        {/* After Party Card */}
        <div className="bg-kq-yellow p-5 lg:p-6 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <h3 className="font-display font-black text-2xl text-slate-900 mb-2">After the VBC Block Party</h3>
          <p className="font-bold text-slate-800 lg:text-lg">After the VBC Block Party, volunteers and serve team members are invited to stay for the Volunteer and Serve Team Appreciation Party and clean up from 1:00 PM to 3:00 PM.</p>
        </div>

        {/* Leader Checkout Reminder */}
        <div className="border-[3px] border-slate-800 p-5 rounded-2xl shadow-[4px_4px_0px_rgba(30,41,75,1)] bg-purple-50">
           <h2 className="font-display font-black text-2xl text-kq-navy mb-3">Leader Checkout Steps</h2>
           <ul className="list-disc pl-5 font-bold text-slate-700 space-y-2">
             <li>Take down decorations (recycle what you can)</li>
             <li>Return all items to the gym:</li>
             <ul className="list-circle pl-5 font-semibold text-slate-600 mt-1">
                <li>Crate</li>
                <li>Binder</li>
                <li>Lanyard</li>
                <li>Supply Bin</li>
                <li>Shepherd Bag</li>
             </ul>
           </ul>
        </div>
        
        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/rotations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Rotations</Link>
            <Link to="/snacks" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Snacks</Link>
            <Link to="/stations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Stations</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function AccordionItem({ title, children, defaultOpen = false }: any) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-[3px] border-slate-800 rounded-2xl overflow-hidden shadow-[4px_4px_0px_rgba(30,41,75,1)] bg-white mb-4 transition-all">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full bg-slate-50 px-5 py-4 font-display font-black text-xl lg:text-2xl text-kq-navy font-black border-b-2 border-slate-200 flex justify-between items-center text-left hover:bg-slate-100 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown size={24} className={cn("text-kq-navy transition-transform shrink-0 ml-4", open ? "rotate-180" : "")} />
      </button>
      {open && (
        <div className="p-5 bg-white font-semibold text-slate-700 text-sm lg:text-base border-t-2 border-slate-800">
          {children}
        </div>
      )}
    </div>
  );
}

function Safety() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Safety & Emergency Procedures" icon={ShieldAlert} color="bg-kq-navy text-white" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">The safety of every child, student, volunteer, and family is a top responsibility during VBC. Review this page before VBC begins and use it as a reference if questions come up.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Top Safety Alert */}
        <div className="bg-kq-red/10 border-l-8 border-kq-red p-5 lg:p-6 rounded-r-2xl">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-red mb-2 flex items-center gap-2"><ShieldAlert /> Safety Is Not Taken Lightly</h2>
          <p className="text-slate-700 font-semibold leading-snug lg:text-lg">Every volunteer plays a part in keeping kids safe. Stay alert, keep your group together, count kids during transitions, and ask for help right away if anything feels unclear or concerning.</p>
        </div>

        {/* General Safety Guidelines */}
        <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-6 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 border-b-2 border-slate-100 pb-2">General Safety Guidelines</h2>
          <ul className="space-y-3">
            {[
              "Safety team members will wear orange vests.",
              "Staff members can be identified by mint green shirts.",
              "Report anything unusual or concerning right away to a safety team member or staff member.",
              "Never leave children unattended.",
              "Never go anywhere alone with a child. Always have a second volunteer with you.",
              "Count kids during every transition.",
              "Keep your group together when moving between stations.",
              "Do not allow unauthorized adults into children's spaces.",
              "When in doubt, ask a staff member immediately."
            ].map((g, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-kq-red shrink-0 mt-2"></div>
                <span className="font-bold text-slate-700">{g}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-slate-800 text-white rounded-2xl p-5 lg:p-6 border-4 border-kq-yellow shadow-[4px_4px_0px_rgba(250,204,21,1)]">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-yellow mb-2">Emergency Contacts</h2>
          <p className="font-bold text-slate-200 mb-6 bg-white/10 p-3 rounded-lg border border-white/20">If the situation is critical, call 911 first, then notify VBC leadership.</p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a href="tel:817-657-4650" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors border border-white/10">
              <Phone className="text-kq-yellow shrink-0" />
              <div>
                <div className="font-bold text-white text-lg">Brittni Blevins</div>
                <div className="text-slate-300 font-semibold tracking-wide">817-657-4650</div>
              </div>
            </a>
            <a href="tel:817-903-0777" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors border border-white/10">
              <Phone className="text-kq-yellow shrink-0" />
              <div>
                <div className="font-bold text-white text-lg">Jimmy Nguyen</div>
                <div className="text-slate-300 font-semibold tracking-wide">817-903-0777</div>
              </div>
            </a>
            <a href="tel:817-705-9213" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors border border-white/10 sm:col-span-2 md:col-span-1">
              <Phone className="text-kq-yellow shrink-0" />
              <div>
                <div className="font-bold text-white text-lg">Kelly Grieser</div>
                <div className="text-slate-300 font-semibold tracking-wide">817-705-9213</div>
              </div>
            </a>
          </div>

          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
            <div className="font-bold text-kq-yellow text-lg">Campus Address</div>
            <div className="text-slate-300 font-semibold mb-2">777 N. Walnut Creek Dr.<br/>Mansfield, TX</div>
            <div className="font-bold text-kq-yellow text-lg">Kids Building</div>
            <div className="text-slate-300 font-semibold">Building A</div>
          </div>
        </div>

        {/* Emergency Procedure Accordions */}
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 pl-2 border-l-8 border-kq-red">Emergency Procedures</h2>
          
          <AccordionItem title="Fire">
            <ul className="list-disc pl-5 space-y-2">
              <li>Take the red evacuation bag.</li>
              <li>Take your check-in or sign-in sheet.</li>
              <li>Exit through the nearest safe exit.</li>
              <li>Lead children to the rally point at Building D.</li>
              <li>Keep your group together.</li>
              <li>Check in with staff when you arrive.</li>
              <li>Do not release children unless directed by staff.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Severe Weather">
            <ul className="list-disc pl-5 space-y-2">
              <li>Take the red evacuation bag.</li>
              <li>Take your check-in or sign-in sheet.</li>
              <li>Move to the approved severe weather location based on where you are.</li>
              <li>Building A classes move to the nursery hallway or approved rooms.</li>
              <li>Building C classes move to C8, C9, or restrooms.</li>
              <li>Sanctuary groups move to restrooms or front rooms.</li>
              <li>Stay away from windows and loose objects.</li>
              <li>Keep children calm and together until staff gives more direction.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Stranger on Campus">
            <ul className="list-disc pl-5 space-y-2">
              <li>Politely direct unfamiliar adults to Building D for assistance.</li>
              <li>Do not allow unauthorized adults to stay in children's ministry areas.</li>
              <li>Send another volunteer to notify a staff member or safety team member immediately.</li>
              <li>Keep your group supervised.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Campus-Wide Evacuation">
            <ul className="list-disc pl-5 space-y-2">
              <li>Take the red evacuation bag.</li>
              <li>Take your check-in or sign-in sheet.</li>
              <li>Walk your group safely to Worley Middle School.</li>
              <li>Keep children calm and together.</li>
              <li>Wait for staff direction.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Lost Child">
            <ul className="list-disc pl-5 space-y-2">
              <li>Quickly scan your immediate area.</li>
              <li>Check behind doors, under tables, nearby rooms, and restrooms if appropriate.</li>
              <li>Notify the nearest staff member in a mint green shirt immediately.</li>
              <li>Do not leave the rest of your group unsupervised.</li>
              <li>Staff will begin emergency protocol.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Minor Injury">
            <ul className="list-disc pl-5 space-y-2">
              <li>Bring the child to the nurse station at the Check-in Desk in Building A.</li>
              <li>Fill out an Incident Report.</li>
              <li>Give the report to a Kids Ministry staff member to sign.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Major Injury">
            <ul className="list-disc pl-5 space-y-2">
              <li>Stay with the injured child.</li>
              <li>Send a youth or nearby volunteer to notify staff and the nurse immediately.</li>
              <li>Keep the area clear.</li>
              <li>Reassure the child until help arrives.</li>
              <li>Do not move the child unless there is immediate danger.</li>
            </ul>
          </AccordionItem>

          <AccordionItem title="Allergies">
            <ul className="list-disc pl-5 space-y-2">
              <li>Children with allergies are marked on the attendance sheet.</li>
              <li>Children with allergies must wear a pink allergy bracelet in addition to their class bracelet.</li>
              <li>Children with food allergies should bring their own snack in a drawstring bag or give it to their shepherd to hold.</li>
              <li>Review snack ingredients before serving.</li>
              <li>Do not guess about allergy safety.</li>
              <li>When in doubt, ask staff before giving a child food.</li>
            </ul>
          </AccordionItem>

        </div>

        {/* Bottom Reminder Card */}
        <div className="bg-kq-sky p-5 lg:p-6 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(30,41,75,1)] mt-8">
          <h3 className="font-display font-black text-2xl text-slate-900 mb-2">Ask for Help Quickly</h3>
          <p className="font-bold text-slate-800 lg:text-lg">If you are unsure what to do, ask a staff member right away. It is always better to ask early than to wait.</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/snacks" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Snacks & Allergies</Link>
            <Link to="/stations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Stations</Link>
            <Link to="/shepherds" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Shepherds</Link>
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Snacks() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Snacks & Allergies" icon={Coffee} color="bg-kq-green text-white" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Use this page to review each day’s snack and food items, especially for children with food allergies or dietary restrictions.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Top Allergy Alert Card */}
        <div className="bg-kq-red/10 border-l-8 border-kq-red p-5 lg:p-6 rounded-r-2xl">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-red mb-2 flex items-center gap-2"><ShieldAlert /> Check Before Serving</h2>
          <p className="text-slate-700 font-semibold leading-snug lg:text-lg">Please review all snack items and ingredients before serving, especially for children with food allergies or dietary restrictions. Some items may contain or be processed near wheat, dairy, soy, peanuts, or tree nuts.</p>
        </div>

        {/* Snack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          
          <div className="border-[3px] border-slate-800 bg-white rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)] flex flex-col">
            <div className="bg-kq-navy inline-block px-3 py-1 text-white font-display font-black tracking-widest text-sm rounded-lg mb-3 self-start transform -rotate-2">
              MONDAY
            </div>
            <h3 className="font-display font-black text-2xl text-slate-800 mb-4">Goldfish</h3>
            <div className="space-y-3 flex-1 text-sm lg:text-base">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Snack:</span>
                <span className="font-bold text-slate-700">Goldfish crackers</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Food Being Used:</span>
                <ul className="list-disc pl-5 font-bold text-slate-700">
                  <li>Goldfish crackers</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 mt-4 text-sm font-semibold text-slate-700">
               Goldfish may be served in individual bags or poured into cups since snack will not be served outside.
            </div>
          </div>

          <div className="border-[3px] border-slate-800 bg-white rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)] flex flex-col">
            <div className="bg-kq-sky inline-block px-3 py-1 text-kq-navy font-display font-black tracking-widest text-sm rounded-lg mb-3 self-start transform rotate-2">
              TUESDAY
            </div>
            <h3 className="font-display font-black text-2xl text-slate-800 mb-4">Jesus Walks on Water Snack</h3>
            <div className="space-y-3 flex-1 text-sm lg:text-base">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Snack:</span>
                <span className="font-bold text-slate-700">Graham crackers, Teddy Grahams, and blue icing</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Food Being Used:</span>
                <ul className="list-disc pl-5 font-bold text-slate-700">
                  <li>Graham crackers</li>
                  <li>Teddy Grahams</li>
                  <li>Blue icing</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 mt-4 text-sm font-semibold text-slate-700">
               This snack connects with the Bible story of Jesus walking on water.
            </div>
          </div>

          <div className="border-[3px] border-slate-800 bg-white rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)] flex flex-col">
            <div className="bg-kq-orange inline-block px-3 py-1 text-white font-display font-black tracking-widest text-sm rounded-lg mb-3 self-start transform -rotate-1">
              WEDNESDAY
            </div>
            <h3 className="font-display font-black text-2xl text-slate-800 mb-4">Trail Mix</h3>
            <div className="space-y-3 flex-1 text-sm lg:text-base">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Snack:</span>
                <span className="font-bold text-slate-700">Pre-made trail mix</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Food Being Used:</span>
                <ul className="list-disc pl-5 font-bold text-slate-700">
                  <li>Pretzels</li>
                  <li>Raisins</li>
                  <li>Ritz crackers</li>
                  <li>Marshmallows</li>
                  <li>M&Ms</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border-2 border-slate-200 mt-4 text-sm font-semibold text-slate-700">
               Trail mix will be pre-made before snack time.
            </div>
          </div>

          <div className="border-[3px] border-slate-800 bg-white rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)] flex flex-col">
            <div className="bg-kq-purple inline-block px-3 py-1 text-white font-display font-black tracking-widest text-sm rounded-lg mb-3 self-start transform rotate-1">
              THURSDAY
            </div>
            <h3 className="font-display font-black text-2xl text-slate-800 mb-4">Popcorn</h3>
            <div className="space-y-3 flex-1 text-sm lg:text-base">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Snack:</span>
                <span className="font-bold text-slate-700">Popcorn</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Food Being Used:</span>
                <ul className="list-disc pl-5 font-bold text-slate-700">
                  <li>Popcorn</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Allergy Procedure Card */}
        <div className="bg-pink-50 p-5 lg:p-6 rounded-2xl border-[3px] border-pink-400 shadow-[4px_4px_0px_rgba(244,114,182,1)]">
          <h3 className="font-display font-black text-2xl text-pink-700 mb-3 text-shadow-solid-sm">Children With Allergies</h3>
          <p className="font-bold text-pink-900 lg:text-lg mb-4">Children with allergies are marked on the attendance sheet and should wear a pink allergy bracelet. Children with food allergies should bring their own snack in a drawstring bag or give it to their shepherd to hold.</p>
          <div className="bg-white p-4 rounded-xl border-2 border-pink-200 shadow-sm">
             <div className="font-bold text-slate-800 uppercase text-xs tracking-wider mb-1">Reminder</div>
             <p className="font-semibold text-slate-700 text-sm">Do not guess about allergy safety. When in doubt, ask staff before giving a child food.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety</Link>
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/thursday" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Thursday Plan</Link>
            <Link to="/shepherds" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Shepherds</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Stations() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Station Locations" icon={MapPin} color="bg-kq-sky text-kq-navy" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Use this page to find where each team serves, who the team leads are, and what each team is responsible for during VBC.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Station Location Summary */}
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 pl-2 border-l-8 border-kq-sky">Overview</h2>
          <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-6 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Worship & Music</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Sanctuary</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Small Group Bible Time</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Classroom</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Daily Wrap Up</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Classroom</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Snacks</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Gym</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Recreation</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Back Porch / Parking Lot West Side of Building A</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">Crafts</div>
                <div className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2">Loft Common Area</div>
              </div>
              <div>
                <div className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-1">First Aid</div>
                <div className="font-bold text-slate-800 text-lg">Check-in Desk in Building A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Cards */}
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 pl-2 border-l-8 border-kq-orange">Team Roles</h2>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            
            {/* Crafts */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-orange mb-3">Crafts</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Team Leads:</span>
                  <span className="font-bold text-slate-700">Diane Thomson and Kerri Chucci</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Location:</span>
                  <span className="font-bold text-slate-700">Loft Common Area</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Crafts volunteers help with craft supplies and support the craft station.</span>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-200 mt-4 text-sm font-semibold text-orange-900">
                <span className="font-bold text-kq-orange block mb-1">Thursday Note:</span>
                On Thursday, the Crafts team may help in the gym with snacks or help with VBC Block Party setup.
              </div>
            </div>

            {/* Snacks */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-green mb-3">Snacks</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Team Lead:</span>
                  <span className="font-bold text-slate-700">Jill Aldridge</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Location:</span>
                  <span className="font-bold text-slate-700">Gym</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Snack volunteers help prepare and serve snacks. Review allergy information before serving.</span>
                </div>
              </div>
            </div>

            {/* Recreation */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-royal mb-3">Recreation</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Team Lead:</span>
                  <span className="font-bold text-slate-700">Jennifer Spiegel</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Location:</span>
                  <span className="font-bold text-slate-700">Back Porch / Parking Lot West Side of Building A</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Recreation volunteers help lead outdoor games and activities.</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4 text-sm font-semibold text-blue-900">
                <span className="font-bold text-kq-royal block mb-1">Thursday Note:</span>
                On Thursday, the Recreation team may help in the gym with snacks or help with VBC Block Party setup.
              </div>
            </div>

            {/* Hospitality */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-red mb-3">Volunteer Hospitality</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Team Lead:</span>
                  <span className="font-bold text-slate-700">Amber Kaumans</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Location:</span>
                  <span className="font-bold text-slate-700">Room A113, Orchestra Room</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Hospitality volunteers help provide a welcoming space with drinks and snacks for volunteers.</span>
                </div>
              </div>
            </div>

            {/* Shepherds */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-purple mb-3">Shepherds</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Team Lead:</span>
                  <span className="font-bold text-slate-700">Anna Alexander</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Location:</span>
                  <span className="font-bold text-slate-700">Check in daily at the volunteer table</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Shepherds lead their assigned group of children to each station throughout the session.</span>
                </div>
              </div>
            </div>

            {/* Wee VBC */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-yellow text-shadow-solid-sm mb-3">Wee VBC</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Drop-off is 8:15-8:30 AM. Children should be picked up as soon as volunteers have finished their assignments for the day.</span>
                </div>
              </div>
            </div>

            {/* Included VBC */}
            <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
              <h3 className="font-display font-black text-2xl text-kq-sky mb-3">Included VBC</h3>
              <div className="space-y-3 text-sm lg:text-base">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-0.5">Details:</span>
                  <span className="font-bold text-slate-700">Volunteers serving with Included VBC should check in daily at the Included table located in the Sanctuary Atrium.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/rotations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Rotations</Link>
            <Link to="/thursday" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Thursday Plan</Link>
            <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Mission() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Mission Offering" icon={HeartHandshake} color="bg-kq-red text-white" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">This year, VBC kids and families will help support children through Allies in Youth Development.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Mission Partner Section */}
        <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-6 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-red mb-4 border-b-2 border-slate-100 pb-2">Allies in Youth Development</h2>
          <div className="space-y-4 font-semibold text-slate-700 lg:text-lg leading-relaxed">
            <p>This year, our VBC mission gives kids and families a simple, hands-on way to help others. We are partnering with Allies in Youth Development.</p>
            <p>During VBC week, we will collect school supplies and offerings. Kids can bring items like notebooks or pocket folders with paper, crayons, colored pencils or markers, glue sticks or bottles of glue, scissors or a ruler, pens, pencils, and erasers.</p>
            <p>All supplies will go to Allies in Youth in Mansfield and then be sent to children in Peru through our connection with Kristy Serfass. Every item helps support a child in need.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Supply List Card */}
          <div className="bg-kq-sky/10 border-[3px] border-kq-sky rounded-2xl p-5 lg:p-6 shadow-sm">
            <h3 className="font-display font-black text-2xl text-kq-navy mb-4">School Supplies Kids Can Bring</h3>
            <ul className="list-disc pl-5 font-bold text-slate-700 space-y-2 lg:text-lg">
              <li>Notebook or pocket folder with paper</li>
              <li>Crayons</li>
              <li>Colored pencils</li>
              <li>Markers</li>
              <li>Glue sticks or bottles of glue</li>
              <li>Scissors</li>
              <li>Ruler</li>
              <li>Pens</li>
              <li>Pencils</li>
              <li>Erasers</li>
            </ul>
          </div>

          {/* Pastors Praying */}
          <div>
            <h3 className="font-display font-black text-2xl text-kq-navy mb-4 pl-2 border-l-8 border-kq-yellow">Pastors Praying Over Offering</h3>
            <div className="space-y-3">
              {[
                { day: "Day 1", pastor: "Pastor Mike" },
                { day: "Day 2", pastor: "Pastor Thomas" },
                { day: "Day 3", pastor: "Pastor Michelle" },
                { day: "Day 4", pastor: "Pastor David" }
              ].map(d => (
                <div key={d.day} className="flex items-center gap-4 bg-white border-2 border-slate-200 p-3 rounded-xl shadow-sm">
                   <div className="bg-kq-yellow text-slate-900 font-display font-black w-14 h-14 flex items-center justify-center rounded-lg text-lg transform -rotate-3 border-2 border-slate-800">{d.day.replace('Day ', 'D')}</div>
                   <div>
                     <div className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-0.5">{d.day}</div>
                     <div className="font-bold text-xl text-slate-800">{d.pastor}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Note Card */}
        <div className="bg-kq-purple/10 border-l-8 border-kq-purple p-5 lg:p-6 rounded-r-2xl">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-purple mb-2">Why This Matters</h2>
          <p className="text-slate-700 font-bold leading-snug lg:text-lg">This gives kids a simple way to practice generosity and see how their giving can help other children.</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Daily Themes</Link>
            <Link to="/stations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Stations</Link>
            <Link to="/" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Home</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Dates() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Important Dates" icon={Calendar} color="bg-kq-navy text-white" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">Use this page to review key VBC dates for training, decorating, VBC week, the Block Party, and clean up.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Timeline Section */}
        <div className="bg-white border-[3px] border-slate-800 rounded-2xl p-5 lg:p-8 shadow-[4px_4px_0px_rgba(30,41,75,1)]">
          <div className="space-y-6 relative">
            <div className="absolute top-4 bottom-4 left-[2.25rem] w-1 bg-slate-200 z-0 hidden lg:block"></div>
            
            {[
              { title: "May 27", event: "Volunteer Training Night", time: "6:00 PM-7:30 PM", color: "bg-kq-sky text-kq-navy" },
              { title: "June 6", event: "Shepherd classroom and door decorating", time: "9:00 AM-12:00 PM", color: "bg-kq-orange text-white" },
              { title: "June 7", event: "Additional classroom decorating", time: "12:00 PM-4:00 PM", color: "bg-kq-purple text-white" },
              { title: "June 8", event: "VBC begins", time: "", color: "bg-kq-green text-white" },
              { title: "June 11", event: "VBC Block Party", time: "11:00 AM-1:00 PM", color: "bg-kq-yellow text-slate-900" },
              { title: "June 11", event: "Volunteer and Serve Team Appreciation Party / Clean Up", time: "1:00 PM-3:00 PM", color: "bg-kq-red text-white" }
            ].map((d, i) => (
              <div key={i} className="flex flex-col lg:flex-row gap-3 lg:gap-6 relative z-10 w-full">
                <div className={cn("font-display font-black text-xl px-4 py-3 rounded-xl w-full lg:w-32 shrink-0 flex items-center justify-center shadow-sm border-2 border-slate-800 transform lg:-rotate-2 z-10", d.color)}>
                  {d.title}
                </div>
                <div className="bg-slate-50 border-2 border-slate-200 p-4 rounded-xl flex-1 shadow-sm mt-[-10px] lg:mt-0 lg:ml-0 z-0">
                  <h3 className="font-bold text-slate-800 text-lg lg:text-xl">{d.event}</h3>
                  {d.time && <p className="text-sm text-slate-500 font-bold mt-1 tracking-wide">{d.time}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminder Card */}
        <div className="bg-kq-yellow p-5 lg:p-6 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(250,204,21,1)]">
          <h3 className="font-display font-black text-2xl text-slate-900 mb-2">Use This Hub During VBC Week</h3>
          <p className="font-bold text-slate-800 lg:text-lg">This hub is here to help volunteers quickly review schedules, locations, safety procedures, snacks, allergy notes, and role-specific instructions.</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/thursday" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Thursday Plan</Link>
            <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety</Link>
            <Link to="/shepherds" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Shepherds</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function Shepherds() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-6 lg:mb-10 lg:mt-6">
        <PageHeader title="Shepherd Info" icon={Users} color="bg-kq-purple text-white" />
        <p className="text-slate-600 font-semibold text-sm lg:text-base leading-relaxed px-2">A reference page for Adult Shepherds and classroom leaders.</p>
      </div>

      <div className="space-y-6 lg:space-y-8 pb-8">
        
        {/* Intro Card */}
        <div className="bg-kq-navy p-5 lg:p-6 rounded-2xl border-[3px] border-slate-800 shadow-[4px_4px_0px_rgba(250,204,21,1)] text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-kq-purple via-transparent to-transparent" />
           <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-yellow mb-2 relative z-10">Shepherds Lead the Way</h2>
           <p className="text-slate-200 font-semibold leading-snug lg:text-lg relative z-10">Shepherds help lead their assigned group of kids, keep track of attendance, help with transitions, support classroom time, and make sure children are supervised at all times.</p>
        </div>

        {/* Section Accordions */}
        <div>
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-navy mb-4 pl-2 border-l-8 border-kq-purple">Shepherd Guide</h2>
          
          <AccordionItem title="Before VBC" defaultOpen={true}>
            <div className="space-y-4">
              <p>Class lists will be emailed on <span className="font-bold text-kq-navy">Friday, June 6</span>.</p>
              <p>Adult Shepherds should email or call their families over the weekend before VBC begins on Monday.</p>
              
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-2">Include in your message:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name</li>
                  <li>Your helper's name</li>
                  <li>Your classroom</li>
                  <li>Their child's group</li>
                  <li>Drop-off and pick-up location</li>
                  <li>Reminder to bring a water bottle and snack each day</li>
                  <li>Reminder for kids to wear tennis shoes each day</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-xl mt-4">
                <h4 className="font-display font-black text-xl text-kq-purple mb-2">Classroom Decorating</h4>
                <p className="mb-3">Decorating is optional but encouraged.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-100">
                    <div className="font-bold text-slate-800">Saturday, June 7</div>
                    <div className="text-sm font-semibold text-slate-600">12:00-4:00 PM</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-purple-100">
                    <div className="font-bold text-slate-800">Sunday, June 8</div>
                    <div className="text-sm font-semibold text-slate-600">12:00-4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Materials You'll Receive">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h4 className="font-display font-black text-xl text-kq-navy mb-2 border-b-2 border-slate-200 pb-1">Binder</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Rotation Schedule</li>
                  <li>Staff Contact Info</li>
                  <li>Daily Devotionals</li>
                  <li>Small Group Lessons</li>
                  <li>Shepherd Cheat Sheet</li>
                  <li>Emergency Procedures</li>
                  <li>Incident Report</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h4 className="font-display font-black text-xl text-kq-navy mb-2 border-b-2 border-slate-200 pb-1">Attendance Folder</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>2 Attendance Sheets</li>
                  <li>Wristbands</li>
                  <li>Allergy Wristbands</li>
                  <li>Parent Pick-Up Sheets with map on back</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h4 className="font-display font-black text-xl text-kq-navy mb-2 border-b-2 border-slate-200 pb-1">Drawstring Bag</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Hand sanitizer</li>
                  <li>Sharpies and pens</li>
                  <li>Paper</li>
                  <li>Tissues</li>
                  <li>Wipes</li>
                  <li>Band-aids</li>
                  <li>Travel Time Questions</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <h4 className="font-display font-black text-xl text-kq-navy mb-2 border-b-2 border-slate-200 pb-1">Classroom Supplies</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Crate with supplies for each day's small group activity</li>
                  <li>Supply tub with markers, pencils, crayons, glue sticks, tape, and scissors</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-kq-yellow p-4 rounded-r-xl mt-4">
               <span className="font-bold text-yellow-900 block mb-1">Needs Note:</span>
               <span className="text-sm font-semibold text-yellow-800">If anything is missing, fill out the Classroom Needs sheet in your binder and give it to a staff member.</span>
            </div>
          </AccordionItem>

          <AccordionItem title="Daily Arrival Checklist">
            <div className="space-y-2">
              {[
                "Be ready at your assigned sanctuary spot by 8:40 AM.",
                "Wear your name tag.",
                "Review your rotation schedule.",
                "Grab your folder.",
                "At drop-off, fill out the pick-up sheet and hand it to the parent.",
                "Take attendance on both sheets.",
                "Write each child's name and group number on their wristband.",
                "Apply wristbands.",
                "Use pink allergy bands when needed.",
                "Leave one attendance sheet in the pew.",
                "Take the other attendance sheet with you."
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-kq-royal focus:ring-kq-royal shrink-0" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </label>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Shepherding Stations">
            <p className="mb-4">Shepherds travel with their kids to each station.</p>
            <div className="space-y-3">
               <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                 <div className="bg-kq-navy text-white px-4 py-3 font-bold w-32 shrink-0 flex items-center">Bible Study</div>
                 <div className="p-3 font-semibold text-slate-700 flex items-center">Classroom</div>
               </div>
               <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                 <div className="bg-kq-orange text-white px-4 py-3 font-bold w-32 shrink-0 flex items-center">Crafts</div>
                 <div className="p-3 font-semibold text-slate-700 flex items-center">Upstairs Loft Area</div>
               </div>
               <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                 <div className="bg-kq-royal text-white px-4 py-3 font-bold w-32 shrink-0 flex items-center">Recreation</div>
                 <div className="p-3 font-semibold text-slate-700 flex items-center">Outside Porch</div>
               </div>
               <div className="flex bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                 <div className="bg-kq-green text-white px-4 py-3 font-bold w-32 shrink-0 flex items-center">Snack</div>
                 <div className="p-3 font-semibold text-slate-700 flex items-center">Gym</div>
               </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Daily Dismissal Checklist">
             <div className="space-y-2">
              {[
                "Clean up the classroom with kids and youth helpers.",
                "Remove trash from floors and tables.",
                "Push in chairs.",
                "Student sign-out is required with an adult volunteer only.",
                "Leave the attendance sheet, Drawstring Shepherd Bag, handheld sign, and any materials in the classroom.",
                "The Kids Ministry team will pick everything up and reset it for the next day."
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-kq-royal focus:ring-kq-royal shrink-0" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </label>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Thursday Checkout">
            <div className="space-y-4">
              <div className="space-y-2">
                {[
                  "Take down decorations.",
                  "Recycle what you can.",
                  "Return all items to the gym."
                ].map((item, i) => (
                  <label key={i} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-slate-300 text-kq-royal focus:ring-kq-royal shrink-0" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </label>
                ))}
              </div>

              <div className="bg-purple-50 border-2 border-purple-200 p-4 rounded-xl">
                 <h4 className="font-display font-black text-xl text-kq-purple mb-2">Items to Return:</h4>
                 <ul className="list-disc pl-5 font-semibold text-purple-900 space-y-1">
                   <li>Crate</li>
                   <li>Binder</li>
                   <li>Lanyard</li>
                   <li>Supply Bin</li>
                   <li>Shepherd Bag</li>
                 </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem title="Need Help During VBC?">
            <p className="mb-4">Please text Anna Alexander and include your class, room number, and what is needed.</p>
            <a href="tel:817-832-7874" className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white p-4 rounded-xl transition-colors border-4 border-slate-900 shadow-sm inline-flex">
              <Phone className="text-kq-sky shrink-0" />
              <div>
                <div className="font-bold text-lg">Anna Alexander</div>
                <div className="text-slate-300 font-semibold tracking-wide">817-832-7874</div>
              </div>
            </a>
          </AccordionItem>
          
        </div>

        {/* Final Reminder Card */}
        <div className="bg-kq-red/10 border-l-8 border-kq-red p-5 lg:p-6 rounded-r-2xl mt-8">
          <h2 className="font-display font-black text-2xl lg:text-3xl text-kq-red mb-2 flex items-center gap-2"><ShieldAlert /> Supervision Comes First</h2>
          <p className="text-slate-700 font-bold leading-snug lg:text-lg">Above all else, supervise kids at all times. Never leave any children unattended.</p>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <h3 className="font-display font-black text-xl text-slate-800 mb-3 pl-2 border-l-4 border-kq-royal">Quick Links</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Link to="/safety" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Safety</Link>
            <Link to="/schedule" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Schedule</Link>
            <Link to="/rotations" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Rotations</Link>
            <Link to="/snacks" className="bg-slate-100/80 hover:bg-slate-200 text-slate-800 font-extrabold py-3 px-4 rounded-xl text-sm transition-all hover:-translate-y-0.5 text-center shadow-sm">Snacks</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/rotations" element={<Rotations />} />
          <Route path="/thursday" element={<ThursdayPlan />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/shepherds" element={<Shepherds />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
