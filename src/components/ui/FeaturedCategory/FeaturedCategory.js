import Link from "next/link";

const FeaturedCategory = ({ categories }) => {
    return (
        <div className="text-center max-w-[1600px] mx-auto mt-8">
            <h2 className="text-xl font-bold">Featured Category</h2>
            <p className="capitalize">
                Get your desired product from featured category!
            </p>
            <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-6 mt-3 md:mt-7 lg:w-4/5 w-full mx-auto justify-center gap-y-2">
                {categories?.map((category) => (
                    <Link
                        href={`/category/${category.title}`}
                        key={category._id}
                        className="w-40 h-40 border bg-green-50 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center shadow-lg"
                    >
                        <span className="text-xl font-semibold">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
