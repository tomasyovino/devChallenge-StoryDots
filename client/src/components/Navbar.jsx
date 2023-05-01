import { useState } from 'react';
import { Dialog, Popover } from "@headlessui/react";
import { Close, Menu } from "@mui/icons-material"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='bg-white w-full'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global'>
                <div className='flex lg:flex-1'>
                    <Link to="/" className="-m-1.5 p-1.5">
                        <img className='h-8' src={logo} alt="Nike's logo" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:items-center">
                    <Link to={"/"} className="font-semibold leading-6 ease-in-out duration-300 hover:text-blue-400">
                        Inicio
                    </Link>
                    <Link to="/store" className="font-semibold leading-6 ease-in-out duration-300 hover:text-blue-400">
                        Tienda
                    </Link>
                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            className="-m-1.5 p-1.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Nike's logo"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <Close className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to=""
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                                <Link
                                    to={"/store"}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:text-blue-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Tienda
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;