import { FC, useState } from "react"

export const SecMessage : FC = ()=>{
    const [message, setMessage] = useState("")
    // const f = ()=>{
    //     console.log(message)
    // }
    return (
        <div className="mt-4 mb-4">
            <div className="container">
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        placeholder="Leave a comment here" 
                        id="floatingTextarea2" 
                        style={{height: '150px',width:'70%',margin:'0 auto'}}
                        onChange={(e)=>{setMessage(e.target.value)}}
                    ></textarea>
                </div>
            </div>
            {/* <button className="btn btn-primary" onClick={f}>check</button> */}
        </div>

    )
}

export default SecMessage
