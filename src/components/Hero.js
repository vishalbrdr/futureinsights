import React from 'react'

function Hero() {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Who We Are?
      </h1>
      <p class="mb-8 leading-relaxed">Future Insights is a web development and result oriented digital marketing company in Bangalore, India. Whether you're a small business or a large enterprise, we offer steller web design and digital marketing services just for you. Our team of creative experts can take your online business from good to best and best to brilliant before you know it!</p>

      <p class="mb-8 leading-relaxed">Our Affordable Digital Marketing, Web Design & Web Development services can help you with your website so that you get to focus on your business operations better. Our Web Development & Digital Marketing Services are 100% result driven and are completely based on client's objective.</p>

      <p class="mb-8 leading-relaxed">We offer Web Development & Digital Marketing Services where we have a professional team of developers, designers, marketers, and brand managers who help you with every step of your time with us. We believe in quality and provide valuable insights into the future of your online business. Our Best Digital Marketing Company in Bangalore, India is all you need today!

</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Read more</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://futureinsights.in/img/What-is-a-Digital-Marketing-Strategy.png"/>
    </div>
  </div>
</section>
  )
}

export default Hero