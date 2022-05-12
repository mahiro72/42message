import { FC, useState } from "react";

export const SecResult : FC = () =>{

    const message = 'test'

    return (
        <div className="mt-4 mb-4 text-center">
            <div className="container">
                <div className="form-floating">
                    <input type="text" value={message} style={{height: '150px',width:'70%'}} />
                </div>
            </div>
        </div>
    )
}

export default SecResult
