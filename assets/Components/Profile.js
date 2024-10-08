import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { globalStyles } from './styles';

const Profile = ({ backgroundColor, textColor, rowBackgroundColor }) => {
  return (
    <View>
      <View style={[globalStyles.profile, { backgroundColor }]}>
        <TouchableOpacity onPress={() => {}}>
          <View style={globalStyles.profileAvatarWrapper}>
            <Image
              source={require('../Components/Avatar/profilepic.jpg')}
              style={globalStyles.profileAvatar}
            />
            <TouchableOpacity onPress={() => {}}>
              <View style={globalStyles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[globalStyles.profileName, { color: textColor }]}>
            Antonio C. Soldevillo
          </Text>
          <Text style={[globalStyles.profileAddress, { color: textColor }]}>
            BSIT-3R6
          </Text>
        </View>
      </View>

  
      <View style={globalStyles.section}>
        <Text style={[globalStyles.sectionTitle, { color: textColor }]}>Profile</Text>
        <TouchableOpacity
          onPress={() => {
            
          }}
          style={[globalStyles.row, { backgroundColor: rowBackgroundColor }]}>
          <View style={[globalStyles.rowIcon, { backgroundColor: '#007afe' }]}>
            <FeatherIcon color="#fff" name="user" size={20} />
          </View>
          <Text style={[globalStyles.rowLabel, { color: textColor }]}>Manage User</Text>
          <View style={globalStyles.rowSpacer} />
          <FeatherIcon
            color={textColor}
            name="chevron-right"
            size={20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
