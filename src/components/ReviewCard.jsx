function ReviewCard({ image, name }) {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center
       space-y-8 w-72 md:justify-center md:items-center"
      >
        <img
          className="rounded-full h-20 w-20 object-cover"
          src={image}
          alt=""
        />
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-center">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          aspernatur quia ratione, alias veniam consequatur"
        </p>
      </div>
    </>
  );
}

export default ReviewCard;
