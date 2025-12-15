import { useState } from 'react';
import { Search, Plus, Download, ChevronDown, X, Eye, Edit, Ban, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { Users, UserCheck, Stethoscope, UserX } from 'lucide-react';

interface UsersPageProps {
  onViewUser: (userId: string) => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'Patient' | 'Doctor' | 'Admin';
  phone: string;
  location: string;
  status: 'Active' | 'Suspended' | 'Pending';
  registered: string;
  lastLogin: string;
}

const users: User[] = [
  {
    id: '1',
    name: 'Ayesha Khan',
    email: 'ayesha.k@email.com',
    role: 'Patient',
    phone: '+92 300 1234567',
    location: 'Karachi, PK',
    status: 'Active',
    registered: 'Jan 15, 2025',
    lastLogin: '2 hours ago'
  },
  {
    id: '2',
    name: 'Dr. Ali Raza',
    email: 'dr.ali@clinic.com',
    role: 'Doctor',
    phone: '+92 321 9876543',
    location: 'Lahore, PK',
    status: 'Active',
    registered: 'Dec 10, 2024',
    lastLogin: '30 mins ago'
  },
  {
    id: '3',
    name: 'Sara Malik',
    email: 'sara.malik@email.com',
    role: 'Patient',
    phone: '+92 333 4567890',
    location: 'Islamabad, PK',
    status: 'Pending',
    registered: 'Dec 13, 2025',
    lastLogin: 'Never'
  },
  {
    id: '4',
    name: 'Omar Farooq',
    email: 'omar.f@email.com',
    role: 'Patient',
    phone: '+92 345 2345678',
    location: 'Faisalabad, PK',
    status: 'Active',
    registered: 'Nov 20, 2024',
    lastLogin: '1 day ago'
  },
  {
    id: '5',
    name: 'Dr. Fatima Hassan',
    email: 'dr.fatima@hospital.com',
    role: 'Doctor',
    phone: '+92 300 8765432',
    location: 'Karachi, PK',
    status: 'Active',
    registered: 'Oct 5, 2024',
    lastLogin: '5 hours ago'
  },
  {
    id: '6',
    name: 'Yusuf Ahmed',
    email: 'yusuf.a@email.com',
    role: 'Patient',
    phone: '+92 312 6543210',
    location: 'Multan, PK',
    status: 'Suspended',
    registered: 'Sep 12, 2024',
    lastLogin: '2 weeks ago'
  },
  {
    id: '7',
    name: 'Admin User',
    email: 'admin@wheezeease.com',
    role: 'Admin',
    phone: '+92 300 0000000',
    location: 'Karachi, PK',
    status: 'Active',
    registered: 'Jan 1, 2024',
    lastLogin: '10 mins ago'
  },
  {
    id: '8',
    name: 'Layla Siddiqui',
    email: 'layla.s@email.com',
    role: 'Patient',
    phone: '+92 322 7890123',
    location: 'Peshawar, PK',
    status: 'Active',
    registered: 'Aug 22, 2024',
    lastLogin: '3 days ago'
  },
];

const kpis = [
  {
    icon: Users,
    title: 'Total Users',
    value: '2,612',
    change: '+12.5%',
    positive: true,
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: UserCheck,
    title: 'Patients',
    value: '2,348',
    change: '+8.1%',
    positive: true,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Stethoscope,
    title: 'Doctors',
    value: '126',
    change: '+2.4%',
    positive: true,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: UserX,
    title: 'Suspended Users',
    value: '14',
    change: '-3.2%',
    positive: true,
    color: 'from-pink-500 to-red-600'
  },
];

const roleFilters = ['All', 'Patients', 'Doctors', 'Admins'];
const statusFilters = ['All', 'Active', 'Suspended', 'Pending verification'];

const roleStyles = {
  Patient: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Doctor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Admin: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
};

const statusStyles = {
  Active: 'bg-green-500/20 text-green-400 border-green-500/30',
  Suspended: 'bg-red-500/20 text-red-400 border-red-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

export function UsersPage({ onViewUser }: UsersPageProps) {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [activeRole, setActiveRole] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');

  const hasActiveFilters = activeRole !== 'All' || activeStatus !== 'All';

  const clearFilters = () => {
    setActiveRole('All');
    setActiveStatus('All');
  };

  const toggleUser = (id: string) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    setSelectedUsers(prev =>
      prev.length === users.length ? [] : users.map(u => u.id)
    );
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-3xl text-white">Users & Roles</h1>
          <p className="text-gray-400 mt-1">Manage patients, doctors and admin access</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
            <Plus className="w-4 h-4" />
            Add User
          </button>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search by name, email, phone..."
          className="w-full bg-[#0E1629]/60 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 backdrop-blur-xl"
        />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.title}
              className="relative bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg shadow-purple-500/30`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">{kpi.title}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl text-white">{kpi.value}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full mb-0.5 ${
                      kpi.positive 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters Bar */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl mb-6">
        <div className="flex items-center gap-6">
          {/* Role Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 mr-2">Role:</span>
            {roleFilters.map((role) => (
              <button
                key={role}
                onClick={() => setActiveRole(role)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeRole === role
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <div className="w-px h-8 bg-white/10" />

          {/* Status Filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400 mr-2">Status:</span>
            {statusFilters.map((status) => (
              <button
                key={status}
                onClick={() => setActiveStatus(status)}
                className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeStatus === status
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="w-px h-8 bg-white/10" />

          {/* Date Filter */}
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>Last 30 days</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-sm text-red-400 hover:bg-red-500/10 transition-all"
            >
              <X className="w-4 h-4" />
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl text-white">All Users</h2>
          <p className="text-sm text-gray-400 mt-1">Complete list of platform users</p>
        </div>

        {/* Bulk Actions Bar */}
        {selectedUsers.length > 0 && (
          <div className="bg-purple-500/10 border-b border-purple-500/30 px-6 py-3 flex items-center justify-between">
            <span className="text-sm text-purple-300">{selectedUsers.length} selected</span>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm">
                Change role
              </button>
              <button className="px-4 py-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/30 transition-all text-sm">
                Suspend
              </button>
              <button className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all text-sm">
                Activate
              </button>
              <button className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition-all text-sm">
                Delete
              </button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 w-12">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={toggleAll}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                </th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    User
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    Role
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Phone</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Location</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">
                  <button className="flex items-center gap-2 hover:text-white transition-colors">
                    Status
                    <ArrowUpDown className="w-3 h-3" />
                  </button>
                </th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Registered</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Last Login</th>
                <th className="text-right py-4 px-6 text-sm text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUser(user.id)}
                      className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">{getInitials(user.name)}</span>
                      </div>
                      <div>
                        <p className="text-sm text-white">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full border text-xs ${roleStyles[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{user.phone}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{user.location}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full border text-xs ${statusStyles[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{user.registered}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{user.lastLogin}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onViewUser(user.id)}
                        className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4 text-cyan-400" />
                      </button>
                      <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4 text-purple-400" />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" title="Suspend">
                        <Ban className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
          <span className="text-sm text-gray-400">Showing 1-8 of 2,612 users</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Rows per page</span>
              <select className="bg-[#141A2E] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500/50">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <span className="text-sm text-white px-3">1 / 262</span>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
