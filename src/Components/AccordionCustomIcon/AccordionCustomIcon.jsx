import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="flex flex-col gap-2 rounded-lg bg-black p-5 text-white">
    <div
      className="flex cursor-pointer items-center justify-between"
      onClick={onClick}
    >
      <span className="text-lg font-semibold">{title}</span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        className={`h-2 w-3 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        alt="Toggle"
      />
    </div>
    <div
      className={`transition-all duration-500 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-sm text-gray-300">{content}</p>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What is the best time to travel Kashmir ?",
      content:
        "Summer (early May to late August) offers warm and pleasant temperatures, perfect for exploring the lush green meadows of Gulmarg, Pahalgam, and Sonamarg, enjoying activities like gondola rides and shikara rides. While summer is the peak season with more crowds, the overall experience of Kashmir's beauty during these months is often considered the most rewarding. For those interested in autumn colors, September to November is also a good time to visit",
    },
    {
      title: "What kind  of clothes I need to carry while travelling",
      content:
        "For your April trip to Kashmir, pack light layers like t-shirts, long sleeves, and a light jacket for the pleasant daytime and cooler evenings. Comfortable trousers or jeans are ideal, along with essential walking shoes. Include a light woolen shawl for extra warmth and modest clothing options for religious sites. Don't forget sunglasses, a hat, sunscreen for sun protection, and a light raincoat or umbrella for occasional showers.",
    },
    {
      title: "Is payment through online platforms are excepted in Kashmir ?",
      content:
        "Yes,credit card payments and online transaction  are accepted in hotels, restaurants, and shops. Visa and Master Cards are widely accepted , while some places also accept American Express, besides other types of cards."
    },
  ];

  return (
    <>
     <hr class="border-t-2 border-gray-300 mx-[10vw] mt-[12vh]" />

<div class="h-full w-full">
  <h1 class="text-5xl font-bold text-sky-900 playfair-display flex mx-[10vw] mt-[12vh]">
    Frequently Asked Questions
  </h1>

  {/* Flex container for side-by-side layout */}
  <div class="flex w-full mt-[8vh] px-[10vw]">
    {/* Paragraph section */}
    <div class="w-[40%]">
      <p class="text-3xl font-bold text-sky-900 playfair-display">
        Some frequently asked questions about India tourism & holiday packages.
      </p>
      <button className="rounded-full bg-orange-600 hover:bg-orange-500 text-lg text-white px-10 py-3 mt-[2vh]">
      Get Support
      </button>
    </div>

    {/* Accordion section */}
    <div class="w-[60%] space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default Accordion;
