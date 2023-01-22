// import React from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle ={
      color: props.mode==='dark'?'white':'#042743',
      backgroundColor: props.mode==='dark'?'#042743':'white'
    }

    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const [btnType,setbtnType] = useState("btn btn-dark");

//  const toggle = ()=>{
//     if(myStyle.color==='white'){
//         setmyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtnText("Enable Dark Mode")
//         setbtnType("btn btn-dark")
//     }
//     else{
//         setmyStyle({
//             color:'white',
//             backgroundColor:'black'
//         })
//         setbtnText("Enable Light Mode")
//         setbtnType("btn btn-light")
//     }
// }

  return (
    <>
    <div className="container" style={myStyle}>
        <h2 className="my-6">About me</h2>
    <div className="accordion" style={myStyle} id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Creator
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Ashish Vispute. </strong> Third Year Computer Engineering Student at Sinhgad College of Engineering
      </div>
    </div>
  </div>
  <div className="accordion-item " style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Email Id 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>ashishvispute306@gmail.com</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       LinkedIn
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong><a href="https://www.linkedin.com/in/ashish-vispute-885b63251/">LinkedIn</a></strong> 
      </div>
    </div>
  </div>
</div>

{/* <div className="container my-3" style={myStyle}>
<button type="button" onClick={toggle} class={btnType}>{btnText}</button>
</div> */}
    </div>


    </>
  )
}
