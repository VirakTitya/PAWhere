import Hero from '../Components/About_head.jsx';
import ani1 from '../Assets/Data.gif';
import pic2 from '../Assets/main.png';
export default function About() {
  return (
    <div className='About-head'>
      <div>
        <> <Hero /> </>
      </div>
      <div class="bg-multi-gradient-2 flex items-center justify-around bg-black py-5 mx-auto mt-20">
        <div>
          <p class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#f4a905]">About the Collar</p>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">Welcome to our pet collar store! We are dedicated to providing high-quality, stylish, and comfortable collars for your beloved pets. Our mission is to ensure that every pet feels loved and secure with our products.</p>
        </div>
        <div>
          <img src={ani1} alt="animation" className='w-96 h-96' />
        </div>
      </div>
      <div className='relative w-full h-96 mt-20'>
        <img src={pic2} alt="main" className='w-full h-96 object-cover absolute' />
        <div className='relative w-full h-96 text-white flex flex-col justify-center ml-30'>
          <p class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#f5d797]">Our Story</p>
          <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black">Founded by a team of passionate pet lovers, our store was born out of a desire to create collars that not only look great but also provide comfort and safety for pets. We believe that every pet deserves the best, and we strive to deliver that through our carefully curated selection of collars.</p>
        </div>
      </div>
    </div>
    

  );
}