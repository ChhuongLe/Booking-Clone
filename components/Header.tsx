'use client'

import { Bars3Icon, ChatBubbleLeftIcon, HomeIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  }
]

export default function Header () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
   <header className="bg-[#013894]">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Booking.com</span>
          <Image
            src="https://images.squarespace-cdn.com/content/5bde0f00c3c16aa95581e2e2/1656116234438-NLIQ8XQTV7D805TPUH8X/booking+logo+white.png?format=1500w&content-type=image%2Fpng"
            alt=""
            width={300}
            height={300}
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open Main Menu</span>
          <Bars3Icon className="h-6 w-6 aria-hidden:true"/>
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
            Stays
            <ChevronDownIcon className="h-5 w-5 flex-non text-white" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
             <Popover.Panel
              className="absolute bg-white top-full -left-96 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5"
             >
              <div className="p-4">
                {products.map((item) => (
                  <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                      <item.icon
                        className="h-6 w-6 text-[#013B94] group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-[#013B94]"
                        >
                          {item.name}
                          <span className="absolute inset-0"/>
                        </a>
                        <p className="mt-1 text-[#013B94]">{item.description}</p>
                      </div>
                  </div>
                ))}
              </div>
          </Popover.Panel>
          </Transition>
        </Popover>
      </Popover.Group>
    </nav>
   </header>
  )
}