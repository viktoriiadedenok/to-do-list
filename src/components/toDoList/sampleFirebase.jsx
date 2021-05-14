import React from 'react'
import { useFirebase } from 'react-redux-firebase'
import { useFirestore } from "react-redux-firebase";

export default function Todos() {

  const firebase = useFirebase()
  const firestore = useFirestore();

  function addSampleTodo() {
    const sampleTodo = { text: 'Sample3' }
    console.log(sampleTodo)
    firestore.collection("tutorials").add(sampleTodo)
  }

  return (
    <div>
      <button onClick={addSampleTodo}>Add</button>
    </div>
  )
}