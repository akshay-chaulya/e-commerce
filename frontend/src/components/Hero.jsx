import { assets } from '@/assets/assets';

const Hero = () => {
  return (
    <div className='border border-gray-400 flex flex-col sm:flex-row '>
        {/* Hero Left Side  */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
            <div className='text-[#414141]'>
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                    <p className="uppercase text-sm font-medium md:text-base">our bestsellers</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className="flex items-center gap-2">
                    <p className="uppercase text-sm font-semibold md:text-base">Shop Now</p>
                    <p className="w-8 md:w-11 h-px bg-[#414141]"></p>
                </div>
            </div>
        </div>
        {/* Hero Right Side  */}
        <img src={assets.hero_img} className='sm:w-2/4' alt="" />
    </div>
  )
}

export default Hero
