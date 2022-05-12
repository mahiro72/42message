import { FC, useState } from "react";

import { RootState } from "../../stores/store"
import { useSelector,useDispatch } from "react-redux"
import { update,reset } from "../../stores/messageSlice"


export const SecResult : FC = () =>{
    const text = useSelector((state: RootState) => state.message.text)
    const [shareText, setShareText] = useState('')

    const copyAndShare = ()=>{
        navigator.clipboard.writeText(text)
        setShareText(`
            copyが完了しました!! Twitterで共有しましょう
        `)
    }
    return (
        <div className="mt-5 mb-4 text-center">
            <div className="container">
                <div className="form-floating">
                    <textarea 
                        className="form-control" 
                        style={{
                            height: '200px',
                            width:'75%',
                            margin:'0 auto',
                            lineHeight:'0.9rem',
                            letterSpacing: '3px',
                            backgroundColor:'#212529',
                            border:'1px #4A4A4A solid',
                            color:'white',
                            textAlign:'center'
                        }}
                        readOnly
                        value={text}
                    ></textarea>
                </div>
            </div>

            <button 
                style={{width:'200px'}}
                className="btn btn-secondary m-3" 
                onClick={copyAndShare}
            >
                copy
            </button>

            <div className="mt-2 mb-2">
                {shareText}
            </div>


        </div>
    )
}

export default SecResult
