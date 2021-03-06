import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { cats } from '.././breeds'
import Cell from './Cell'

function SettingsScreen({ navigation }) {

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={cats}
        renderItem={({ item, index }) => {
          return (
            <Cell
              title={item.breed}
              showDetails={() => navigation.navigate('Details', { item })}
            />
          )
        }}
        keyExtractor={(item) => item.breed}
      />
    </SafeAreaView>
  );
}

export default SettingsScreen
