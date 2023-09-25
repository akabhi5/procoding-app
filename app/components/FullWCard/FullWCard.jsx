const FullWCard = () => {
  return (
    <div className="card w-full text-primary-content border rounded-lg mb-5 drop-shadow-md">
      <div className="card-body">
        <h2 className="card-title text-black">Card title!</h2>
        <p className="text-black">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-neutral btn-sm">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FullWCard;
