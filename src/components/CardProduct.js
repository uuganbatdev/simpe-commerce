export default function CardProduct() {
  return (
    <div class="relative flex  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img class="object-cover w-full" src="car-1.jpg" alt="product image" />
      </div>
      <div class="mt-4 px-5 pb-5">
        <h5 class="text-lg font-bold tracking-tight text-slate-900">
          Bugatti Veyron
        </h5>
        <h5 class="text-md font-medium tracking-tight text-slate-900">
          1300 ширхэг хэсэг, 36см, удирдлага, машины гэрэл, хайрцаг.
        </h5>
        <div class="mt-2 mb-5 flex items-center justify-between"></div>
        <div class="flex select-none flex-col  opacity-60 items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <span class="text-lg font-bold white">₮150,000</span>
          <span class="white ml-2">Сагсанд нэмэх (дууссан)</span>
        </div>

        <div class="flex cursor-pointer icon-button-shadow transition transform hover:shadow-none hover:translate-x-1 hover:translate-y-1 bg-main flex-col select-none mt-2  items-center justify-center rounded  px-5 py-2.5 text-center text-sm font-medium text-white  ">
          <div className="flex items-center space-x-2">
            <span class="text-xs font-bold white line-through">₮150,000</span>
            <span class="text-lg font-bold white ">₮100,000</span>
          </div>
          <span class="white ">Захиалах ( 7-10 хоног )</span>
        </div>
      </div>
    </div>
  );
}
