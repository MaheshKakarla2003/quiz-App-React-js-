import React, { useState } from 'react'
import Question from './Question'

export function Java() {
  let tempMarks = []

  const [marks, setMarks] = useState([])

  const handleSubmit = () => {

    const total = marks.reduce((a, b) => a + b, 0)

    alert(total)
  }
  const onChangeHandler = (value, index) => {
    tempMarks = marks;
    tempMarks[index - 1] = value
    setMarks([...tempMarks])

  }

  const javaQuestions = [

    {
      qnum: '1',
      ques: 'What is the memory size of int ?',
      optA: '2 bytes',
      optB: '5 bytes',
      optC: '4 bytes',
      optD: '10 bytes',
      ans: 'C'
    },

    {
      qnum: '2',
      ques: 'What is the memory size of long ?',
      optA: '2 bytes',
      optB: '8 bytes',
      optC: '4 bytes',
      optD: '10 bytes',
      ans: 'B'
    },

    {
      qnum: '3',
      ques: 'Which of the following is NOT a primitive data type in Java?',
      optA: 'int',
      optB: 'float',
      optC: 'String',
      optD: 'boolean',
      ans: 'C'
    },

    {
      qnum: '4',
      ques: 'What is the result of 10 % 3 in most programming languages?',
      optA: '2',
      optB: '3',
      optC: '1',
      optD: '0',
      ans: 'C'
    },

    {
      qnum: '5',
      ques: 'What is the purpose of the "static" keyword in Java?',
      optA: 'To declare a variable that can only be accessed by the class itself',
      optB: 'To indicate that a method or variable belongs to the class rather than instances of the class',
      optC: 'To prevent inheritance of a class',
      optD: 'To specify that a method cannot be overridden in subclasses',
      ans: 'B'
    }

  ]
  return (
    <>
      <center> <u><h1>Java Assessment </h1></u></center>
      <form onSubmit={handleSubmit}>
        {
          javaQuestions.map(
            (question) =>
            (
              <Question
                qnum={question.qnum}
                ques={question.ques}
                optA={question.optA}
                optB={question.optB}
                optC={question.optC}
                optD={question.optD}
                ans={question.ans}
                onChangeHandler={onChangeHandler}

              />
            )
          )
        }

        <input type='submit' value='GET RESULT' class='submit'></input>
      </form>

    </>
  )
}

export function Sql() {
  let tempMarks = []
  const [marks, setMarks] = useState([])

  const handleSubmit = () => {
    const total = marks.reduce((a, b) => a + b, 0)
    alert("result= " + total + "/5")

  }
  const onChangeHandler = (value, index) => {
    tempMarks = marks;
    tempMarks[index - 1] = value
    setMarks([...tempMarks])

  }

  const sqlQuestions = [
    {
      qnum: '1',
      ques: 'SQL stands for? ',
      optA: 'Structured Query Language',
      optB: 'System Control Language',
      optC: 'Simple Query Language',
      optD: 'Sectional Quotient Language',
      ans: 'A'
    },
    {
      qnum: '2',
      ques: 'What is called a row in a table ?',
      optA: 'row',
      optB: 'record',
      optC: 'tuple',
      optD: 'both B & C',
      ans: 'D'
    },
    {
      qnum: '3',
      ques: 'What is the purpose of the "HAVING" clause in SQL?',
      optA: 'To filter rows based on a specified condition',
      optB: 'To sort rows in ascending or descending order',
      optC: 'To combine rows into summary rows based on some column values',
      optD: 'To filter groups based on a specified condition',
      ans: 'D'
    },
    {
      qnum: '4',
      ques: 'Which keyword is used to retrieve data from a SQL database?',
      optA: 'SELECT',
      optB: 'UPDATE',
      optC: 'DELETE',
      optD: 'INSERT',
      ans: 'A'
    },

    {
      qnum: '5',
      ques: 'What is the purpose of the "GROUP BY" clause in SQL?',
      optA: 'To filter rows based on a specified condition',
      optB: 'To sort rows in ascending or descending order',
      optC: 'To combine rows into summary rows based on some column values',
      optD: 'To join tables based on a common column',
      ans: 'C'
    }

  ]
  return (
    <>
      <center> <u><h1>Sql Assessment</h1></u></center>
      <form onSubmit={handleSubmit}>
        {
          sqlQuestions.map(
            (question) =>
            (
              <Question
                qnum={question.qnum}
                ques={question.ques}
                optA={question.optA}
                optB={question.optB}
                optC={question.optC}
                optD={question.optD}
                ans={question.ans}
                onChangeHandler={onChangeHandler}

              />
            )
          )
        }
        <input type='submit' value='GET RESULT' class='submit'></input>

      </form>
    </>
  )
}

export function Html() {
  let tempMarks = []
  const [marks, setMarks] = useState([])

  const handleSubmit = () => {
    const total = marks.reduce((a, b) => a + b, 0)
    alert("result= " + total + "/5")

  }
  const onChangeHandler = (value, index) => {
    tempMarks = marks;
    tempMarks[index - 1] = value
    setMarks([...tempMarks])

  }
  const htmlQuestions = [
    {
      qnum: '1',
      ques: 'Which tag is used to create a paragraph?',
      optA: '<paragraph>',
      optB: '<p>',
      optC: '<div>',
      optD: '<span>',
      ans: 'B'
    },

    {
      qnum: '2',
      ques: 'Is <div> a singelaton tag ?',
      optA: 'No',
      optB: 'Yes',
      optC: 'Both',
      optD: 'Statement False',
      ans: 'A'
    },
    {
      qnum: '3',
      ques: 'Which HTML tag is used to create a hyperlink?',
      optA: '<link>',
      optB: '<a>',
      optC: '<href>',
      optD: '<hyperlink>',
      ans: 'B'
    },
    {
      qnum: '4',
      ques: 'Which HTML tag is used to define an unordered list?',
      optA: '<ol>',
      optB: '<li>',
      optC: '<ul>',
      optD: '<dl>',
      ans: 'C'
    },

    {
      qnum: '5',
      ques: 'Which HTML attribute is used to specify additional information about an element?',
      optA: 'class',
      optB: 'id',
      optC: 'style',
      optD: 'title',
      ans: 'D'
    }
  ]
  return (
    <>
      <center><u><h1>Html Assessment </h1></u></center>
      <form onSubmit={handleSubmit}>
        {
          htmlQuestions.map(
            (question) =>
            (
              <Question
                qnum={question.qnum}
                ques={question.ques}
                optA={question.optA}
                optB={question.optB}
                optC={question.optC}
                optD={question.optD}
                ans={question.ans}
                onChangeHandler={onChangeHandler}

              />
            )
          )
        }

        <input type='submit' value='GET RESULT' class='submit'></input>
      </form>
    </>
  )
}
