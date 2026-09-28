import React, { useState } from 'react';
import { ScanLine, CheckCircle2, XCircle } from 'lucide-react';

export default function StaffScanner() {
  const [scanResult, setScanResult] = useState<'idle' | 'success' | 'error'>('idle');

  // MOCK SCAN FUNCTION
  const simulateScan = (type: 'success' | 'error') => {
    setScanResult(type);
    setTimeout(() => setScanResult('idle'), 3000);
  };

  return (
    <div className="relative flex h-full flex-col bg-slate-950 text-white">
      <div className="z-10 shrink-0 p-6 text-center">
        <h1 className="text-xl font-semibold">Scan Ticket QR</h1>
        <p className="mt-1 text-sm text-slate-400">Align QR code within the frame</p>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center">
        {/* Scanner Frame */}
        <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-3xl border-4 border-blue-500 bg-slate-800/50 backdrop-blur-sm">
          <ScanLine className="h-16 w-16 animate-pulse text-blue-500 opacity-50" />
          {/* Scanning Line Animation */}
          <div className="absolute top-0 left-0 h-1 w-full animate-[scan_2s_ease-in-out_infinite] bg-blue-400 shadow-[0_0_15px_bg-blue-400]"></div>
        </div>

        {/* Mock Controls */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={() => simulateScan('success')}
            className="rounded-full bg-slate-800 px-6 py-2 text-sm font-medium hover:bg-slate-700"
          >
            Simulate Success
          </button>
          <button
            onClick={() => simulateScan('error')}
            className="rounded-full bg-slate-800 px-6 py-2 text-sm font-medium hover:bg-slate-700"
          >
            Simulate Error
          </button>
        </div>
      </div>

      {/* Result Overlay */}
      {scanResult !== 'idle' && (
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center ${scanResult === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-in fade-in duration-200`}
        >
          {scanResult === 'success' ? (
            <>
              <CheckCircle2 className="mb-4 h-24 w-24 text-white" />
              <h2 className="text-3xl font-bold text-white">VALID TICKET</h2>
              <p className="mt-2 text-lg text-white/90">Seat 12 - Nguyễn Văn A</p>
            </>
          ) : (
            <>
              <XCircle className="mb-4 h-24 w-24 text-white" />
              <h2 className="text-3xl font-bold text-white">INVALID TICKET</h2>
              <p className="mt-2 text-lg text-white/90">Ticket already scanned</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
