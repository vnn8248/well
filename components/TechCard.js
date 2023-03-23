import Image from "next/image";

export default function TechCard ({ item }){
    return (
        <div className='card'>
            <h3>{item.node.altText}</h3>
            <Image
                priority
                src={item.node.sourceUrl}
                alttext={item.node.altText}
                height={100}
                width={100}
                className='tech'
            />
        </div>
    )
}