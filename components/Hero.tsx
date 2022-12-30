import Image from "next/image";
import people from "../assets/images/DrawKit/people.png";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white flex gap-2 py-4">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 flex-1">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-zinc-900 md:text-3xl">
            Find Someone with Union
          </h2>

          <p className="text-zinc-500 sm:mt-2 md:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <SignupInput />
        </div>
      </div>
      <Image
        className="hidden md:block py-4"
        src={people}
        alt="four people together"
        height={600}
        width={400}
      />
    </section>
  );
};

export default Hero;

function SignupInput() {
  return (
    <form className="mt-6">
      <div className="relative max-w-lg">
        <label className="sr-only" htmlFor="email">
          {" "}
          Email{" "}
        </label>

        <input
          className="w-full rounded-full border-zinc-200 bg-zinc-100 p-4 pr-32 text-sm font-medium"
          id="email"
          type="email"
          placeholder="jackie@doe.com"
        />

        <button
          className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-blue-400 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
          type="button"
        >
          Signup
        </button>
      </div>
    </form>
  );
}
