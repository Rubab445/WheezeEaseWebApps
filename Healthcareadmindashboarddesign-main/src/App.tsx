import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { UsersPage } from './pages/UsersPage';
import { UserDetailsPage } from './pages/UserDetailsPage';
import { EditUserPage } from './pages/EditUserPage';
import { AlertsPage } from './pages/AlertsPage';
import { SymptomLogsPage } from './pages/SymptomLogsPage';
import { EnvironmentPage } from './pages/EnvironmentPage';
import { EducationPage } from './pages/EducationPage';
import { SettingsPage } from './pages/SettingsPage';

export type PageType = 'dashboard' | 'users' | 'user-details' | 'edit-user' | 'alerts' | 'symptom-logs' | 'environment' | 'education' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleViewUser = (userId: string) => {
    setSelectedUserId(userId);
    setCurrentPage('user-details');
  };

  const handleEditUser = () => {
    setCurrentPage('edit-user');
  };

  const handleBackToUsers = () => {
    setSelectedUserId(null);
    setCurrentPage('users');
  };

  const handleBackToUserDetails = () => {
    setCurrentPage('user-details');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#070B1A] to-[#0B1230] overflow-hidden">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'users' && <UsersPage onViewUser={handleViewUser} />}
        {currentPage === 'user-details' && <UserDetailsPage onBack={handleBackToUsers} onEdit={handleEditUser} />}
        {currentPage === 'edit-user' && <EditUserPage onBack={handleBackToUserDetails} />}
        {currentPage === 'alerts' && <AlertsPage />}
        {currentPage === 'symptom-logs' && <SymptomLogsPage />}
        {currentPage === 'environment' && <EnvironmentPage />}
        {currentPage === 'education' && <EducationPage />}
        {currentPage === 'settings' && <SettingsPage />}
      </main>
    </div>
  );
}