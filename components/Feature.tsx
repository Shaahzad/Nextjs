export const Feature = () => {
    const features = [
        {
            title: "Spot Trading",
            description:
                "Buy and sell cryptocurrencies quickly with a simple and secure trading experience.",
        },
        {
            title: "Secure Trading",
            description:
                "Trade with confidence using a secure platform designed to protect your account and assets.",
        },
        {
            title: "Fast Transactions",
            description:
                "Execute your crypto trades quickly and efficiently whenever the market moves.",
        },
        {
            title: "Multiple Cryptocurrencies",
            description:
                "Access a wide range of popular cryptocurrencies from one convenient platform.",
        },
        {
            title: "Easy to Use",
            description:
                "A clean and intuitive interface makes buying and selling crypto simple for everyone.",
        },
    ];

    return (
        <section aria-labelledby="features-heading" className="container mx-auto max-w-5xl px-4 py-12 sm:py-16 lg:py-20">
            <div className="mb-10 text-center md:text-left">
                <p className="text-sm font-medium text-green-600 sm:text-base">
                    Spot Trading is Available on Buzzex
                </p>
                <h2 id="features-heading" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Everything You Need to Trade Crypto
                </h2>
                <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                    Buy and sell your favorite cryptocurrencies with a fast,
                    secure, and easy-to-use trading experience.
                </p>
            </div>

            <div className="columns-1 gap-6 sm:columns-2">
                {features.map((feature) => (
                    <article key={feature.title} className="mb-6 break-inside-avoid rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};