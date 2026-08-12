'use client';
import { useState } from 'react';

const APP_ID = '3463nhXH7fjSQ0MnBcXl4';
const loginUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}`;

export default function Home() {
  const [tab, setTab] = useState("dcircles");

  return (
    <main className="bg-black text-white min-h-screen">
      {/* TOP RED BAR LIKE HERS */}
      <header className="bg-red-600 text-white px-4 py-2 flex justify-between items-center">
        <div className="flex gap-4 text-sm overflow-x-auto">
          {["Free Bots","Bot Builder","Dashboard","TradingView","DCircles","Charts"].map(t=>(
            <button key={t} onClick={()=>setTab(t.toLowerCase())} className="hover:underline whitespace-nowrap">{t}</button>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-red-600 px-3 py-1 rounded">Log In</button>
          <button className="bg-purple-600 px-3 py-1 rounded">Sign Up</button>
        </div>
      </header>

      {/* DERIV LOGO */}
      <div className="px-4 py-2">
        <h1 className="text-red-500 text-2xl font-bold">deriv</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="p-4">
        {tab === "dcircles" && <DCircles />}
        {tab === "bot builder" && <BotBuilder />}
        {tab === "free bots" && <FreeBots />}
        {tab === "dashboard" && <Dashboard />}
      </div>

      {/* FLOATING AI BUTTON BOTTOM LEFT LIKE HERS */}
      <button className="fixed bottom-20 left-4 bg-blue-500 w-12 h-12 rounded-full font-bold shadow-lg">AI</button>
      
      {/* RED NOTIFICATION BUTTON */}
      <button className="fixed bottom-20 left-20 bg-red-500 w-8 h-8 rounded-full text-xs">12</button>

      {/* BOTTOM RUN BAR LIKE HERS */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 p-3 flex items-center gap-3">
        <button className="bg-gray-700 px-4 py-2 rounded flex items-center gap-2">
          <span>▶</span> Run
        </button>
        <span className="text-gray-400">Bot is not running</span>
      </div>
    </main>
  )
}

function DCircles() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">DIGIT DISTRIBUTION</h2>
      <div className="grid grid-cols-5 gap-3">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-gray-900 border border-gray-700 rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold mx-auto">
            {i}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-600 p-3 rounded-lg">EVEN/ODD <div className="text-2xl">50.0%</div></div>
        <div className="bg-red-600 p-3 rounded-lg">OVER/UNDER <div className="text-2xl">50.0%</div></div>
      </div>
    </div>
  )
}

function BotBuilder() {
  return (
    <div className="bg-[#1a1a1a] p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Quick strategy</h2>
      <div className="space-y-3">
        <div>
          <label className="text-sm">Launch Number</label>
          <input defaultValue="4" className="w-full bg-black p-2 rounded border-gray-700" />
        </div>
        <div>
          <label className="text-sm">Initial Stake</label>
          <input defaultValue="0.23" className="w-full bg-black p-2 rounded border border-gray-700" />
        </div>
        <div>
          <label className="text-sm">Martingale</label>
          <input defaultValue="1.17" className="w-full bg-black p-2 rounded border-gray-700" />
        </div>
        <div>
          <label className="text-sm">Take Profit</label>
          <input defaultValue="6000" className="w-full bg-black p-2 rounded border border-gray-700" />
        </div>
        <button className="w-full bg-red-600 p-3 rounded-xl font-bold">RUN BOT</button>
      </div>
    </div>
  )
}

function FreeBots() { return <div>TradeScript, ProfitGainer XV1 bots here...</div> }
function Dashboard() { return <div>Load or build your bot</div> }
