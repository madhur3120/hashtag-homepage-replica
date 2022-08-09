import Image from 'next/image'
import { imagepath } from './imagepath'
export default function Expertise() {
  return (<>
    <p className='text-center'>WE ARE PROFESIONALS</p>
    <div className='text-center'>Our Expertise</div>
    <div className='grid grid-cols-1 gap-5 p-20 md:grid-cols-5'>
      {imagepath.map((ele, index) => {
        return (<div className='flex items-center justify-center p-10'>
          <Image src={`${ele}`} width={170} height={77} />
        </div>
        );
      })}
    </div>
  </>

  )
}
