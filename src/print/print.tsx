


import React, {  useContext } from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import { AppContext } from '../context/AppContext';
const MyDocument: any = Document
const MyPage: any = Page

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
  },
  title: {
    fontSize: 16,
    fontWeight: 'light',
    flexWrap: 'wrap',
    fontFamily: 'Helvetica',
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 'light',
    flexWrap: 'wrap',
    paddingBottom: 20,
    justifyContent: 'flex-start',
    marginLeft: 40,
  },
  titleContainer: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginBottom: 30,
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
        <Text style={styles.text}>  {"- "} {comment.name}    </Text>
        <Text style={styles.text}>  {" "}  {comment.description}   </Text>
        <Text style={styles.text} > {"   "}
          <Link
            src={comment.link}
          > {comment.link} </Link>
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
        <View style={styles.titleContainer} >
          <Text style={styles.subTitle} > {state.description} </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 20,

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