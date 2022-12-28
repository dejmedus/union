import Image from 'next/image'
import Button from './Button';
import people from '../assets/images/DrawKit/people.png'
import { Chivo_Mono } from "@next/font/google";

const headerFont = Chivo_Mono({
  variable: "--inter-font",
});

const Hero = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2
            className={`text-2xl font-bold text-gray-900 md:text-3xl ${headerFont.variable}`}
          >
            Find Someone with Union
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <Button content="Signup" />
        </div>
      </div>

      {/* <Image
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="violin"
        height={280}
        width={400}
      /> */}
      <Image src={people} alt="four people together" height={600} width={400} />
    </section>
  );
}

export default Hero