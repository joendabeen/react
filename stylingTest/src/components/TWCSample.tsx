export default function TWCSample() {
  const handleClick = () => {
    alert("버튼 클릭");
  };
  return (
    <div className="flex items-center gap-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 my-10 rounded"
        onClick={handleClick}
      >
        버튼
      </button>
      <button className="bg-red-500 text-white w-40 flex justify-center">
        <span>TEST</span>
      </button>
    </div>
  );
}
