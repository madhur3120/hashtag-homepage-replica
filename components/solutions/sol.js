import Image from 'next/image'
import { AiOutlineRight } from 'react-icons/ai'
export default function Sol() {
    return (
        <div className='relative'>

            <div className=" w-full h-[140vh]   xl:bg-[url('/section-one-bg.png')] bg-[url('/home-mobile-banner4.png')] bg-no-repeat bg-fillimg absolute z-1" style={{ backgroundPosition: "100% 0" }}>
            </div>
            <div className="relative flex flex-col items-center w-full h-screen p-10 pt-40 xl:justify-center md:justify-start xl:pt-0 xl:items-start z-2">
                <h5 className="xl:text-[#7f8284] text-white xl:text-[18px] text-[16px] font-semibold not-italic leading-[32px]">A Full stack development company</h5>
                <h1 className=" not-italic font-bold xl:text-[70px] text-[32px] tracking-[-.05em] xl:text-[#ff7a00] text-white" >Solutions on</h1>
                <h1 className=" not-italic font-bold xl:text-[70px] text-[32px] tracking-[-.05em] xl:text-[#434343] text-white">Web, Mobile & Cloud</h1>
                <h5 className="not-italic font-bold text-[18px] tracking-[-.05em] text-[#ff7a00] hidden"># Full Stack Development # Blockchain Development # FileMaker Development</h5><br /><br />
                <div className='flex h-20 p-2 w-[250px] rounded-2xl bg-white relative'>
                    <button className='  text-[12px] font-semibold flex justify-center items-center pl-10'>
                        <div>
                            LEARN MORE
                        </div>

                    </button>
                    <button className='bg-[#ff7a00] px-5 rounded-2xl ml-5 absolute right-2 h-16'>
                        <AiOutlineRight size={28} color="white" />
                    </button>
                </div>

            </div>
            <div className="relative flex h-screen z-2 lg:mt-[-15vh] mt-[40vh]">
                <div className='hidden w-1/4 h-full lg:block'>
                    <img src="/section-2-bg.webp" style={{ height: "100%", width: "100%" }} />
                </div>
                <div className='flex md:flex-row  flex-col w-full pt-20 lg:w-3/4 lg:pl-[10%] px-10'>
                    <div className='w-full lg:w-1/5'>
                        <h5 className="text-[#7f8284] text-[12px] font-semibold not-italic leading-[32px]">SHORTLY ABOUT US</h5>
                        <h1 className=" not-italic font-bold text-[56px] tracking-[-.05em] text-[#ff7a00]">Who<br /> we are</h1>
                    </div>
                    <div className='w-full lg:w-3/5'>
                        <h3 className='text-[#434343] text-[21px] font-bold not-italic leading-[32px]'>Hashtag Systems Inc, an international Software development and outsourcing company with its headquarters in Sunnyvale, California and development centers in California & Kochi</h3>
                        <h6 className="text-[#434343] text-[16px] font-normal not-italic leading-[32px] mt-10">Our team is set to chase innovation in every stride and revolutionize the world of software in order to deliver the best to our clients worldwide.
                            We deliver custom software development projects geared to surpass the expectations of our clients. Lets create responsive applications that adapt to your customers’ habits</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}
