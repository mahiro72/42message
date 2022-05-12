import { FC } from "react"
import Image from "next/image"

export const SecAbout:FC = ()=>{
    return (
        <div className="text-center mb-3">
            <Image
                src="/images/42.png"
                alt="Picture of the author"
                width={300}
                height={230}
            />
            <div className="container" style={{lineHeight:'1.2rem'}}>
                <p>&ldquo;42&ldquo; がついた クールなメッセージを作成します</p>
                <p>下記のテキストボックスにメッセージを入力して</p>
                <p>完了ボタンを押してください</p>
            </div>
        </div>
    )
}

export default SecAbout