import Card from "./Card"
import { details1, details2 } from "./data"

export default function Whyus() {
    return (
        <div className="relative">
            <div className="absolute w-full h-1000 bg-[url('/section-orange-bg2.svg')] bg-no-repeat bg-cover z-1">
            </div>
            <div className="relative flex px-40 z-2">
                <div className="flex flex-col justify-center w-1/2 text-white">
                    <h6>WHY CLIENTS CHOOSE US</h6>
                    <h1>Why us?</h1>
                    <p>We believe our customers deserve the best and quality is something we dare not to compromise!<br /><br />

                        We ensure impeccable service right from the second we receive the demand from our valuable customer.<br /><br />

                        Our maintenance and support team would ensure the same even after we deliver the product.</p>
                </div>
                <div className="w-1/4">
                    {
                        details1.map((ele, index) => {
                            return (<Card img={ele.img} title={ele.title} />)
                        })
                    }
                </div>
                <div className="w-1/4 mt-40 ml-20">
                    {
                        details2.map((ele, index) => {
                            return (<Card img={ele.img} title={ele.title} />)
                        })
                    }
                </div>

            </div>
        </div>
    )
}
