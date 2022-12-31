const FAQs = () => {
  const mockFacts = [
    {
      question: "Does Union sell user information?",
      answer: "Never!",
    },
    {
      question: "How can I upgrade to Gold or Premium?",
      answer:
        "Upgrade (or cancel) a subscription at anytime in your account settings.",
    },
  ];

  return (
    <div id="faqs" className="grid gap-2 p-4 md:p-6 lg:px-8 lg:py-10">
      <h3 className="text-xl font-bold mb-2 md:mb-4">FAQs</h3>
      {mockFacts.map((fact) => {
        return (
          <FAQ
            key={fact.question}
            question={fact.question}
            answer={fact.answer}
          />
        );
      })}
    </div>
  );
};

export default FAQs;

interface FAQProps {
  question: string;
  answer: string;
}
const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <details className="group rounded-lg dark:bg-zinc-800 bg-zinc-50 p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between cursor-pointer">
        <h2 className="font-medium">{question}</h2>

        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p className="mt-4 leading-relaxed dark:text-zinc-300 text-zinc-700">
        {answer}
      </p>
    </details>
  );
};
