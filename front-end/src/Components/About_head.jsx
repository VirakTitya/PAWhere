const HeroSection = () => {
  return (
    <section class="bg-multi-gradient ">
        <div class="grid max-w-screen-xl px-4 py-0 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7 animate__animated animate__fadeInUp">
                <p class="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#f4a905]">About the Collar</p>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">Welcome to our pet collar store! We are dedicated to providing high-quality, stylish, and comfortable collars for your beloved pets. Our mission is to ensure that every pet feels loved and secure with our products.</p>
                <div className='btnn mt-4 flex gap-10 text-white'>
                    <button className='mt-6 bg-[#f4a905] font-bold py-3 px-8 rounded'>Shop Now</button>
                    <button className='mt-6 border-[#f4a905] border-2 font-bold py-2 px-4 rounded'>Learn More</button>
                </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex animate__animated animate__fadeInRight">
                <img src="https://petpace.com/wp-content/uploads/2025/02/Collar-diagonal.webp" alt="mockup" />
            </div>                
        </div>
    </section>
  );
};

export default HeroSection;