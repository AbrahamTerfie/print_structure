


import React, { useState, useContext } from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { AppContext } from '../context/AppContext';
const MyDocument: any = Document
const MyPage: any = Page
const MyLink: any = Link
// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'flex-start',
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
    borderLeft: "1px solid green",
    paddingTop: 5,
    paddingBottom: 5,
  }
});


function Comment({ comment }: any) {
  const nestedComments = (comment.children || []).map((comment: { id: any }) => {
    return <Comment
      key={comment.id} comment={comment} type="child" />
  })

  return (
    <View
      style={{ paddingLeft: "40px" }} >
      <View style={styles.container} >
        <Text style={styles.text}>  {"- "} name : {comment.name}    </Text>
        <Text style={styles.text}>  {" "}  {comment.description}   </Text>
        <Text style={styles.text} > {"   "}
          <Link src={comment.link}> {comment.link} </Link>
        </Text>
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
            return (<Comment
              key={comment.name} comment={comment} />
            )
          })}
        </View>
      </MyPage>
    </MyDocument>
  )
}