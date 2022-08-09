import Card from "./card";
import { data } from "./data";

export default function Whatwedo() {
    return (
        <>
            <div className="relative flex flex-wrap items-center justify-center z-2">
                {
                    data.map((ele, index) => {
                        return <Card img={ele.img} title={ele.title} content={ele.content} />
                    })
                }
            </div>

        </>
    )
}
