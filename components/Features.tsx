import Button from "@/components/Buttons";

const Features = () => {
  return (
    <section
      id="about"
      className="bg-zinc-800 text-white mx-2 sm:mx-4 md:mx-6 rounded-2xl"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Know Thyself</h2>

          <p className="mt-4 text-zinc-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            header="Wow"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <FeatureCard
            header="Wow"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <FeatureCard
            header="Wow"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          />
        </div> */}

        <div className="mt-12 text-center">
          <Button content="Get Started" path="/signup" />
        </div>
      </div>
    </section>
  );
};

export default Features;

interface FeatureCardProps {
  header: string;
  body: string;
}

function FeatureCard({ header, body }: FeatureCardProps) {
  return (
    <div className="group block h-56">
      <div className="relative flex h-full items-end rounded-3xl border-4 bg-zinc-50 border-violet-400 text-black p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#a78bfa]">
        <div className="lg:group-hover:absolute lg:group-hover:opacity-0">
          <span className="text-3xl sm:text-4xl" role="img" aria-hidden="true">
            📆
          </span>
          <p className="mt-4 text-xl font-bold sm:text-2xl">{header}</p>
        </div>

        <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
          <h3 className="text-2xl font-bold">{header}</h3>

          <p className="mt-4 text-lg font-medium leading-relaxed text-black">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
