import { User, Calendar, MapPin, UserPlus } from 'lucide-react';

export function PatientInformation() {
  const infoItems = [
    { icon: User, label: 'Age', value: '28 years' },
    { icon: User, label: 'Gender', value: 'Female' },
    { icon: User, label: 'Blood Type', value: 'O+' },
    { icon: MapPin, label: 'Location', value: 'Gujrat, Punjab' },
    { icon: UserPlus, label: 'Registration', value: 'Mar 15, 2024' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-[#1F2937] mb-4">Patient Information</h3>
      
      <div className="space-y-3">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
              <div className="w-8 h-8 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                <Icon className="w-4 h-4 text-[#059669]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#6B7280]">{item.label}</p>
                <p className="text-sm font-medium text-[#1F2937]">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
