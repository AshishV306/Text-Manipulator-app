import React from 'react'

export default function Alert(props) {
  return (
    <div style={{height:'50px'}}>
   {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.typ}</strong>: {props.alert.msg}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}
