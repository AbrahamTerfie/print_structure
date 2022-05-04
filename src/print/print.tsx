


import React, { useState, useContext } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { AppContext } from '../context/AppContext';
const MyDocument: any = Document
const MyPage: any = Page
// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    paddingTop: '40px',
    height: '100%',
    width: '100%',
    flexWrap: 'wrap',


  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  text: {
    fontSize: 10,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  container: {
    // borderLeft: "1px solid gray",
    borderLeft: "1px solid green",
    paddingTop: 10,
    paddingBottom: 10,

  }
});


function Comment({ comment }: any) {

  const nestedComments = (comment.children || []).map((comment: { id: any }) => {
    return <Comment
      key={comment.id} comment={comment} type="child" />
  })
  return (

      <View
        style={{ paddingLeft: "40px"  }} >
        <View style={styles.container} >
          <Text style={styles.text}>  {"- "} name : {comment.name} , {comment.description}   </Text>
          <Text style={styles.text} > {"    "} link:  {comment.link}</Text>
        </View>
        {nestedComments}
      </View>

  )
}


export default function Print() {
  const { state } = useContext(AppContext)

  return (
    <MyDocument>
      <MyPage size="A4" style={styles.page}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          {state.children.map((comment) => {
            return (

              <Comment
                key={comment.name} comment={comment} />

            )
          })}
        </View>
      </MyPage>
    </MyDocument>
  )
}