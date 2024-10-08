
import React from 'react';
import { View, Text, Switch } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { globalStyles } from './styles';

const Settings = ({ form, setForm, rowBackgroundColor, textColor }) => {
  return (
    <View style={globalStyles.section}>
      <Text style={[globalStyles.sectionTitle, { color: textColor }]}>Settings</Text>
      
      <View style={[globalStyles.row, { backgroundColor: rowBackgroundColor }]}>
        <View style={[globalStyles.rowIcon, { backgroundColor: '#007afe' }]}>
          <FeatherIcon color="#fff" name="moon" size={20} />
        </View>
        <Text style={[globalStyles.rowLabel, { color: textColor }]}>Dark Mode</Text>
        <View style={globalStyles.rowSpacer} />
        <Switch
          onValueChange={(darkMode) => setForm({ ...form, darkMode })}
          value={form.darkMode}
        />
      </View>

      <View style={[globalStyles.row, { backgroundColor: rowBackgroundColor }]}>
        <View style={[globalStyles.rowIcon, { backgroundColor: '#38C959' }]}>
          <FeatherIcon color="#fff" name="bell" size={20} />
        </View>
        <Text style={[globalStyles.rowLabel, { color: textColor }]}>Push Notifications</Text>
        <View style={globalStyles.rowSpacer} />
        <Switch
          onValueChange={(pushNotifications) =>
            setForm({ ...form, pushNotifications })}
          value={form.pushNotifications}
        />
      </View>
    </View>
  );
};

export default Settings;
