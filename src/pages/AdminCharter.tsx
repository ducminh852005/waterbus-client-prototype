import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_REQUESTS = [
  {
    id: 'REQ-1002',
    name: 'Công ty Cổ phần VinTech',
    phone: '0901 234 567',
    scale: 'Trên 50 khách (Catamaran lớn)',
    date: '2025-11-20',
    status: 'new', // new, processing, confirmed, rejected
    createdAt: '10 phút trước'
  },
  {
    id: 'REQ-1001',
    name: 'Nguyễn Trần Minh Anh',
    phone: '0933 456 789',
    scale: 'Dưới 20 khách (Cano)',
    date: '2025-10-30',
    status: 'processing',
    createdAt: '2 giờ trước'
  },
  {
    id: 'REQ-1000',
    name: 'Gia đình Bác Hùng',
    phone: '0912 000 111',
    scale: '20 - 50 khách (Du thuyền nhỏ)',
    date: '2025-11-05',
    status: 'confirmed',
    createdAt: '1 ngày trước'
  }
];

export default function AdminCharter() {
  const [requests, setRequests] = useState(MOCK_REQUESTS);
  
  const updateStatus = (id: string, newStatus: string) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: newStatus } : req));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new': return <span className="px-2.5 py-1 rounded-md bg-error/10 text-error text-[11px] font-bold uppercase tracking-wider">Mới</span>;
      case 'processing': return <span className="px-2.5 py-1 rounded-md bg-tertiary/10 text-tertiary text-[11px] font-bold uppercase tracking-wider">Đang tư vấn</span>;
      case 'confirmed': return <span className="px-2.5 py-1 rounded-md bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-wider">Đã chốt</span>;
      case 'rejected': return <span className="px-2.5 py-1 rounded-md bg-surface-variant/30 text-on-surface-variant text-[11px] font-bold uppercase tracking-wider">Đã hủy</span>;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-surface-container-lowest font-body-md text-on-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-low border-r border-outline-variant/20 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-outline-variant/20">
          <Link className="flex items-center gap-2 group focus:outline-none" to="/">
            <img alt="Logo" className="h-6 w-auto" src="/images/asset_a053120a.webp" />
            <span className="font-headline-sm text-sm font-bold text-primary">ADMIN PORTAL</span>
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[20px]">dashboard</span> Tổng quan
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[20px]">confirmation_number</span> Quản lý Vé
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container transition-colors text-sm font-bold">
            <span className="material-symbols-outlined text-[20px]">sailing</span> Yêu cầu Thuê Tàu
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors text-sm font-medium">
            <span className="material-symbols-outlined text-[20px]">group</span> Khách hàng
          </a>
        </nav>
        <div className="p-4 border-t border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">AD</div>
            <div>
              <p className="text-sm font-bold text-primary">Admin System</p>
              <p className="text-[11px] text-on-surface-variant">Quản trị viên</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 flex items-center justify-between px-8 bg-surface-container-lowest border-b border-outline-variant/20 shrink-0">
          <h1 className="font-headline-sm text-xl text-primary font-bold">Quản lý Yêu cầu Thuê Tàu (Charter)</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-outline hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-error rounded-full border-2 border-surface-container-lowest"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8 bg-surface">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-error-container text-error flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">Yêu cầu mới</p>
                  <p className="text-2xl font-bold text-primary">{requests.filter(r => r.status === 'new').length}</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-container text-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">Đang xử lý</p>
                  <p className="text-2xl font-bold text-primary">{requests.filter(r => r.status === 'processing').length}</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-secondary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">Đã chốt (Tháng)</p>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-container text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-outline uppercase tracking-wider mb-0.5">Doanh thu dự kiến</p>
                  <p className="text-2xl font-bold text-primary">2.4B</p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-outline-variant/20 flex flex-wrap gap-4 items-center justify-between bg-surface-container-low/50">
                <div className="relative w-full max-w-xs">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                  <input type="text" placeholder="Tìm tên, số điện thoại..." className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-secondary" />
                </div>
                <div className="flex gap-2 text-sm">
                  <button className="px-3 py-1.5 rounded-lg border border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container transition-colors font-medium">Tất cả</button>
                  <button className="px-3 py-1.5 rounded-lg border border-error/30 bg-error/5 text-error font-bold">Mới nhất</button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-surface-container-low/30 text-outline text-xs uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Mã Yêu Cầu</th>
                      <th className="px-6 py-4">Thông tin khách hàng</th>
                      <th className="px-6 py-4">Quy mô tàu</th>
                      <th className="px-6 py-4">Ngày gửi</th>
                      <th className="px-6 py-4">Trạng thái</th>
                      <th className="px-6 py-4 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {requests.map(req => (
                      <tr key={req.id} className="hover:bg-surface-container-low/50 transition-colors group">
                        <td className="px-6 py-4">
                          <span className="font-bold text-primary">{req.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-bold text-on-surface mb-0.5">{req.name}</div>
                          <div className="text-xs text-outline flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">call</span> {req.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-on-surface-variant font-medium">
                          {req.scale}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-on-surface">{req.createdAt}</div>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(req.status)}
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          {req.status === 'new' && (
                            <button 
                              onClick={() => updateStatus(req.id, 'processing')}
                              className="px-3 py-1.5 rounded bg-tertiary-container hover:bg-tertiary text-on-tertiary-container hover:text-on-tertiary text-xs font-bold transition-colors"
                            >
                              Đã gọi tư vấn
                            </button>
                          )}
                          {req.status === 'processing' && (
                            <button 
                              onClick={() => updateStatus(req.id, 'confirmed')}
                              className="px-3 py-1.5 rounded bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary text-xs font-bold transition-colors"
                            >
                              Chốt Hợp Đồng
                            </button>
                          )}
                          <button className="p-1.5 rounded text-outline hover:bg-surface-variant transition-colors inline-flex">
                            <span className="material-symbols-outlined text-[18px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
