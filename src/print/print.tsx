


import React, { useState, useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { AppContext } from '../context/AppContext';
const MyDocument: any = Document
const MyPage: any = Page
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    height: '100%',
    width: '100%',

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});




export default function Print() {
  const { state } = useContext(AppContext)
  return (

    <MyDocument>
      <MyPage size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{state.name}</Text>
        </View>
        <View style={styles.section}>
          <Text> {state.description} </Text>
        </View>


        <View style={styles.section}>
          <Text> {state.link} </Text>
        </View>
      </MyPage>
    </MyDocument>
  )
}