


export default function Question(props) {

  const handler = (e) => {
    let temp = e.target.value === props.ans ? 1 : 0;

    props.onChangeHandler(temp,props.qnum)

  }


  return (
    <div onChange={handler}>

      <h2>Q.{props.qnum}   : {props.ques}</h2>
      <input type='radio' name={props.qnum} value='A' />A.{props.optA}<br />
      <input type='radio' name={props.qnum} value='B' />B.{props.optB}<br />
      <input type='radio' name={props.qnum} value='C' />C.{props.optC}<br />
      <input type='radio' name={props.qnum} value='D' />D.{props.optD}<br />


    </div>
  )
}
