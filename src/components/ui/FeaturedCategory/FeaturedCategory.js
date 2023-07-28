const FeaturedCategory = ({ categories }) => {
    console.log(categories);
    return (
        <div className="text-center max-w-[1600px] mx-auto">
            <h2 className="text-xl font-bold">Featured Category</h2>
            <p className="capitalize">
                Get your desired product from featured category!
            </p>
            <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-6 mt-3 md:mt-7 lg:w-4/5 mx-auto">
                {categories?.map((category) => (
                    <a
                        href={`/products/${category.title}`}
                        key={category.id}
                        className="w-40 h-40 border bg-green-50 border-gray-300 rounded-lg p-4 flex flex-col justify-center items-center shadow-lg"
                    >
                        <span className="text-xl font-semibold">
                            {category.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
