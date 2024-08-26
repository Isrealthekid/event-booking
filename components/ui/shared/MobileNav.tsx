import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../separator"
import NavItems from "./NavItems"
  

const MobileNav = () => {
  return (
    <nav className="md:hidden">
    <Sheet>
        <SheetTrigger className="align-middle">
            <Image
                src="/assets/icons/menu.svg"
                width={24}
                height={24}
                alt="Menu"
                className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
           <Image
                src="/assets/images/logo.svg"
                alt="Evently logo"
                width={128}
                height={38}
                
           />
           <Separator className="border border-gray-50"/>
           <NavItems />
        </SheetContent>
    </Sheet>

    </nav>
  )
}

export default MobileNav