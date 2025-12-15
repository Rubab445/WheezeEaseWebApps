import { ChevronRight, Edit, KeyRound, Ban, Trash2 } from 'lucide-react';

interface UserDetailsHeaderProps {
  userName: string;
}

export function UserDetailsHeader({ userName }: UserDetailsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Users & Roles</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">User Details</span>
        </div>
        <h1 className="text-3xl text-white">User Details</h1>
        <p className="text-gray-400 mt-1">Viewing profile for {userName}</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
          <Edit className="w-4 h-4" />
          Edit User
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
          <KeyRound className="w-4 h-4" />
          Reset Password
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-red-500/30 text-red-300 hover:bg-red-500/10 transition-all text-sm">
          <Ban className="w-4 h-4" />
          Suspend
        </button>
        <button className="p-2.5 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
