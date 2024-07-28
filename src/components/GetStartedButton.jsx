function GetStarted({ className, text }) {
  return (
    <div>
      <button
        className={`bg-themeOrange p-2.5 px-6 pt-2 rounded-full hover:opacity-80  ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default GetStarted;
