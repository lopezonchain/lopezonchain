const AnimatedHeaderDescription = ({ text }) => {
    const words = text.split(" ");
    return (
      <p className="text-2xl mb-8 text-gray-300">
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block transition-all duration-500 hover:text-blue-500 hover:scale-110 cursor-default mr-3"
          >
            {word + " "}
          </span>
        ))}
      </p>
    );
  };
  
  export default AnimatedHeaderDescription;
  