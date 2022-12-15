export const ListTask = (props) => {
   return (
            <div >
            

              {props.complete === false && 
              <div>
              <h4 >{props.id}  {props.taskName}  </h4> 
              <p>
                {props.taskDescription}
              </p>
              </div>
              
              
               }
              
              
              {props.complete === true && <div>
                <h4 >{props.id}  {props.taskName} </h4> 
                <p> {props.taskDescription} </p>
                <p> -Complete</p>
                
              <button style={{ backgroundColor: "blue", borderColor: 'green', }} onClick={ () => props.completeFalseHandler(props.id)}>In-Complete</button> 
              <br/>
              </div> }

              <br/>
              

              <button style={{ backgroundColor: "green", borderColor: 'green', }} onClick={ () => props.completeHandler(props.id)}>Complete</button> 

              <button onClick={ () => props.deleteHandler(props.id)}> Delete </button> 
              
              
            </div>
          )
}