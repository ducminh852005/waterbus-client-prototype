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
    createdAt: '10 phút trước',
  },
  {
    id: 'REQ-1001',
    name: 'Nguyễn Trần Minh Anh',
    phone: '0933 456 789',
    scale: 'Dưới 20 khách (Cano)',
    date: '2025-10-30',
    status: 'processing',
    createdAt: '2 giờ trước',
  },
  {
    id: 'REQ-1000',
    name: 'Gia đình Bác Hùng',
    phone: '0912 000 111',
    scale: '20 - 50 khách (Du thuyền nhỏ)',
    date: '2025-11-05',
    status: 'confirmed',
    createdAt: '1 ngày trước',
  },
];

export default function AdminCharter() {
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  const updateStatus = (id: string, newStatus: string) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: newStatus } : req)));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="bg-error/10 text-error rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase">
            Mới
          </span>
        );
      case 'processing':
        return (
          <span className="bg-tertiary/10 text-tertiary rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase">
            Đang tư vấn
          </span>
        );
      case 'confirmed':
        return (
          <span className="bg-secondary/10 text-secondary rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase">
            Đã chốt
          </span>
        );
      case 'rejected':
        return (
          <span className="bg-surface-variant/30 text-on-surface-variant rounded-md px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase">
            Đã hủy
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface flex h-screen">
      {/* Sidebar */}
      <aside className="bg-surface-container-low border-outline-variant/20 flex hidden w-64 flex-col border-r md:flex">
        <div className="border-outline-variant/20 flex h-16 items-center border-b px-6">
          <Link className="group flex items-center gap-2 focus:outline-none" to="/">
            <img alt="Logo" className="h-6 w-auto" src="/images/asset_a053120a.webp" />
            <span className="font-headline-sm text-primary text-sm font-bold">ADMIN PORTAL</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-4 py-6">
          <a
            href="#"
            className="text-on-surface-variant hover:bg-surface-container hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span> Tổng quan
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:bg-surface-container hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">confirmation_number</span> Quản
            lý Vé
          </a>
          <a
            href="#"
            className="bg-secondary-container text-on-secondary-container flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">sailing</span> Yêu cầu Thuê Tàu
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:bg-surface-container hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">group</span> Khách hàng
          </a>
        </nav>
        <div className="border-outline-variant/20 border-t p-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-on-primary flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
              AD
            </div>
            <div>
              <p className="text-primary text-sm font-bold">Admin System</p>
              <p className="text-on-surface-variant text-[11px]">Quản trị viên</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-surface-container-lowest border-outline-variant/20 flex h-16 shrink-0 items-center justify-between border-b px-8">
          <h1 className="font-headline-sm text-primary text-xl font-bold">
            Quản lý Yêu cầu Thuê Tàu (Charter)
          </h1>
          <div className="flex items-center gap-4">
            <button className="text-outline hover:text-primary relative p-2 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="bg-error border-surface-container-lowest absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full border-2"></span>
            </button>
          </div>
        </header>

        <div className="bg-surface flex-1 overflow-auto p-8">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div className="bg-surface-container-lowest border-outline-variant/30 flex items-center gap-4 rounded-2xl border p-5 shadow-sm">
                <div className="bg-error-container text-error flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
                </div>
                <div>
                  <p className="text-outline mb-0.5 text-xs font-semibold tracking-wider uppercase">
                    Yêu cầu mới
                  </p>
                  <p className="text-primary text-2xl font-bold">
                    {requests.filter((r) => r.status === 'new').length}
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant/30 flex items-center gap-4 rounded-2xl border p-5 shadow-sm">
                <div className="bg-tertiary-container text-tertiary flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[24px]">support_agent</span>
                </div>
                <div>
                  <p className="text-outline mb-0.5 text-xs font-semibold tracking-wider uppercase">
                    Đang xử lý
                  </p>
                  <p className="text-primary text-2xl font-bold">
                    {requests.filter((r) => r.status === 'processing').length}
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant/30 flex items-center gap-4 rounded-2xl border p-5 shadow-sm">
                <div className="bg-secondary-container text-secondary flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                </div>
                <div>
                  <p className="text-outline mb-0.5 text-xs font-semibold tracking-wider uppercase">
                    Đã chốt (Tháng)
                  </p>
                  <p className="text-primary text-2xl font-bold">12</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border-outline-variant/30 flex items-center gap-4 rounded-2xl border p-5 shadow-sm">
                <div className="bg-primary-container text-primary flex h-12 w-12 items-center justify-center rounded-xl">
                  <span className="material-symbols-outlined text-[24px]">payments</span>
                </div>
                <div>
                  <p className="text-outline mb-0.5 text-xs font-semibold tracking-wider uppercase">
                    Doanh thu dự kiến
                  </p>
                  <p className="text-primary text-2xl font-bold">2.4B</p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-surface-container-lowest border-outline-variant/30 overflow-hidden rounded-2xl border shadow-sm">
              <div className="border-outline-variant/20 bg-surface-container-low/50 flex flex-wrap items-center justify-between gap-4 border-b p-5">
                <div className="relative w-full max-w-xs">
                  <span className="material-symbols-outlined text-outline absolute top-1/2 left-3 -translate-y-1/2 text-[18px]">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Tìm tên, số điện thoại..."
                    className="bg-surface-container-lowest border-outline-variant/40 focus:border-secondary w-full rounded-lg border py-2 pr-4 pl-9 text-sm focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 text-sm">
                  <button className="border-outline-variant/40 bg-surface-container-lowest hover:bg-surface-container rounded-lg border px-3 py-1.5 font-medium transition-colors">
                    Tất cả
                  </button>
                  <button className="border-error/30 bg-error/5 text-error rounded-lg border px-3 py-1.5 font-bold">
                    Mới nhất
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-surface-container-low/30 text-outline text-xs font-semibold uppercase">
                    <tr>
                      <th className="px-6 py-4">Mã Yêu Cầu</th>
                      <th className="px-6 py-4">Thông tin khách hàng</th>
                      <th className="px-6 py-4">Quy mô tàu</th>
                      <th className="px-6 py-4">Ngày gửi</th>
                      <th className="px-6 py-4">Trạng thái</th>
                      <th className="px-6 py-4 text-right">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="divide-outline-variant/20 divide-y">
                    {requests.map((req) => (
                      <tr
                        key={req.id}
                        className="hover:bg-surface-container-low/50 group transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="text-primary font-bold">{req.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-on-surface mb-0.5 font-bold">{req.name}</div>
                          <div className="text-outline flex items-center gap-1 text-xs">
                            <span className="material-symbols-outlined text-[14px]">call</span>{' '}
                            {req.phone}
                          </div>
                        </td>
                        <td className="text-on-surface-variant px-6 py-4 font-medium">
                          {req.scale}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-on-surface">{req.createdAt}</div>
                        </td>
                        <td className="px-6 py-4">{getStatusBadge(req.status)}</td>
                        <td className="space-x-2 px-6 py-4 text-right">
                          {req.status === 'new' && (
                            <button
                              onClick={() => updateStatus(req.id, 'processing')}
                              className="bg-tertiary-container hover:bg-tertiary text-on-tertiary-container hover:text-on-tertiary rounded px-3 py-1.5 text-xs font-bold transition-colors"
                            >
                              Đã gọi tư vấn
                            </button>
                          )}
                          {req.status === 'processing' && (
                            <button
                              onClick={() => updateStatus(req.id, 'confirmed')}
                              className="bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary rounded px-3 py-1.5 text-xs font-bold transition-colors"
                            >
                              Chốt Hợp Đồng
                            </button>
                          )}
                          <button className="text-outline hover:bg-surface-variant inline-flex rounded p-1.5 transition-colors">
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
