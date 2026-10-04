"use client"



export const Hero = () => {
    return (
        <section className="container mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">

                {/* Left Content */}
                <div className="w-full text-center lg:w-1/2 md:text-left">
                    <span className="text-sm text-gray-600 sm:text-base lg:text-lg">
                        Spot Trading is Available on{" "}
                        <span className="font-semibold text-green-600">
                            Buzzex
                        </span>
                    </span>

                    <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                        Trade Crypto
                        <br className="hidden sm:block" />
                        With Confidence
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-500 sm:text-base md:mx-0">
                        Buy and sell your favorite cryptocurrencies quickly,
                        securely, and effortlessly.
                    </p>
                </div>

                {/* Right Content */}
                <div className="w-full max-w-md lg:w-1/2">
                    <div className="rounded-xl border border-green-600 p-2 shadow-sm">
                        <div className="flex gap-2">
                            <button
                                className="flex-1 rounded-md bg-green-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-green-700 sm:text-base"
                            >
                                Buy
                            </button>

                            <button
                                className="flex-1 rounded-md px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 sm:text-base"
                            >
                                Sell
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

