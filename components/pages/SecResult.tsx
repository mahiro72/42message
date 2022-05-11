import { FC } from "react";
import Image from "next/image";

export const SecResult : FC = () =>{
    return (
        <div className="text-center">
            <Image src="/images/arrow.png" width={100} height={100} alt="arrow" />
            <div>
            </div>
        </div>
    )
}

export default SecResult
