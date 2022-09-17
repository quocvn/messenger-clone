import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import chatRoomData from '../assets/dummy-data/Chats';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // console.warn('Displaying chat room: ', route.params?.id);

  navigation.setOptions({ title: 'Quoc title' });

  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
