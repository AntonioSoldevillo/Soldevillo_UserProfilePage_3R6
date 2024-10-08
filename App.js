import React, { useState } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text } from 'react-native';
import Profile from '../ProfileSettingApp/assets/Components/Profile';
import Settings from '../ProfileSettingApp/assets/Components/Settings';
import { globalStyles } from '../ProfileSettingApp/assets/Components/styles';

export default function Example() {
  const [form, setForm] = useState({
    darkMode: false,
    pushNotifications: false,
  });

  const backgroundColor = form.darkMode ? '#333' : '#fff';
  const textColor = form.darkMode ? '#fff' : '#000';
  const rowBackgroundColor = form.darkMode ? '#444' : '#f2f2f2';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <Profile
        backgroundColor={backgroundColor}
        textColor={textColor}
        rowBackgroundColor={rowBackgroundColor}
      />

      <ScrollView>
        <Settings
          form={form}
          setForm={setForm}
          rowBackgroundColor={rowBackgroundColor}
          textColor={textColor}
        />

        
        <TouchableOpacity
          onPress={() => {}}
          style={[globalStyles.signOutButton, { backgroundColor: rowBackgroundColor }]}>
          <Text style={[globalStyles.signOutText, { color: textColor }]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
