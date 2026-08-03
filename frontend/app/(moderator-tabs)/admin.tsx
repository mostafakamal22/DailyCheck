import { Shield } from 'lucide-react-native';

import RolePlaceholderScreen from '../../components/RolePlaceholderScreen';

export default function ModeratorAdminScreen() {
  return (
    <RolePlaceholderScreen
      title="Admin"
      description="Administrative controls and configuration are ready for the next step."
      icon={Shield}
    />
  );
}
