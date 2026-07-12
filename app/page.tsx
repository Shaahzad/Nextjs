export default async function Page() {
  return (
    <div className="min-h-screen flex lg:flex-row flex-col">
      <div className="flex-1 flex items-center justify-center">
          <h1 className="lg:text-[60px] text-[20px] font-semibold">Buy And Sell USDT</h1>
      </div>
      <div className="flex-1 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md min-h-[500px] rounded-xl shadow-2xl p-8">
        <div className="flex justify-between">
          <span>Buy</span>
          <span>Sell</span>
        </div>
        </div>
      </div>
    </div>
  )
}