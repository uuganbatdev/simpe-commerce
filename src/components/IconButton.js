export default function IconButton({ src, ...props }) {
  return (
    <div
      //   className="w-10 h-10 shadow-md  hover:opacity-70 rounded-md flex items-center justify-center bg-slate-900"
      //   className="w-10 h-10 cursor-pointer flex items-center justify-center bg-[#ff0404] hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded"
      className="w-10 transition transform hover:shadow-none hover:translate-x-1 hover:translate-y-1 icon-button-shadow h-10 cursor-pointer flex items-center justify-center bg-main "
      {...props}
    >
      <img className="w-5 " src={src} alt="" />
    </div>
  );
}
