import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-[1600px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <ul className="p-2">
                                <li>
                                    <Link href="/category/processor">
                                        Processor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/motherboard">
                                        Motherboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/ram">RAM</Link>
                                </li>
                                <li>
                                    <Link href="/category/psu">PSU</Link>
                                </li>
                                <li>
                                    <Link href="/category/storage">
                                        Storage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/monitor">
                                        Monitor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/others">Others</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                    </ul>
                </div>
                <Link
                    href="/"
                    className="btn btn-ghost uppercase text-xl text-blue-500 font-extrabold"
                >
                    Build Master
                </Link>
            </div>
            <div className="navbar-center hidden z-[99] lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li>
                                    <Link href="/category/Processor">
                                        Processor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/Motherboard">
                                        Motherboard
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/RAM">RAM</Link>
                                </li>
                                <li>
                                    <Link href="/category/PSU">PSU</Link>
                                </li>
                                <li>
                                    <Link href="/category/Storage">
                                        Storage
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/Monitor">
                                        Monitor
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/Others">Others</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href='/pcbuilder' className="btn">PC Builder</Link>
            </div>
        </div>
    );
};

export default Navbar;
