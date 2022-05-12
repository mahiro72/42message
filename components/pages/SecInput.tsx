import { FC, useReducer, useState } from "react"
import { RootState } from "../../stores/store"
import { useSelector,useDispatch } from "react-redux"
import { update,reset } from "../../stores/messageSlice"

export const SecMessage : FC = ()=>{
    const [inputText, setInputText] = useState("")
    const dispatch = useDispatch()

    const outputText = 
    `
                  :::      ::::::::   
                :+:      :+:    :+:   
              +:+ +:+         +:+     
            +#+  +:+       +#+        
          +#+#+#+#+#+   +#+           
               #+#    #+#             
              ###   ########.fr       
                                      
              ${inputText}                 
    `

    return (
        <div className="mt-4 mb-4">
            <div className="container">
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        placeholder="Leave a comment here" 
                        id="floatingTextarea2" 
                        style={{
                            height: '70px',
                            width:'75%',
                            margin:'0 auto',
                            backgroundColor:'#212529',
                            border:'1px #4A4A4A solid',
                            color:'white',
                            textAlign:'center'
                        }}
                        onChange={(e)=>{setInputText(e.target.value)}}
                    ></textarea>
                </div>
            </div>

            <div className="text-center mt-4 mb-4">
                <button 
                    className="btn btn-primary" 
                    style={{width:'200px'}}
                    onClick={()=>{dispatch(update(outputText))}}
                >
                    作成する
                </button>
            </div>
        </div>

    )
}

export default SecMessage
