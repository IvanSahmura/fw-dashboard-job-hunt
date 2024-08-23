import { Button } from "@/components/ui/button"
import { AiOutlineHome , AiOutlineLogout } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { FC } from "react"

interface SideBarProps{

}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                    Dashboard
                </h2>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <AiOutlineHome className="mr-2 text-lg"/>
                        Home
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <TbMessage2  className="mr-2 text-lg"/>
                        Messages
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <BsBuilding className="mr-2 text-lg"/>
                        Company Profile
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <FaRegUser className="mr-2 text-lg"/>
                        All Applicants
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <HiOutlineDocumentDuplicate className="mr-2 text-lg"/>
                        Job Listing
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <FaRegCalendarAlt  className="mr-2 text-lg"/>
                        My Schedule
                    </Button>
                </div>
            </div>
        </div>
        <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                    Settings
                </h2> 
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full justify-start rounded-none hover:text-primary">
                        <BsGear className="mr-2 text-lg"/>
                        Settings
                    </Button>
                </div>
                <div className="space-y-3">
                    <Button variant={'ghost'} className="w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none">
                        <AiOutlineLogout className="mr-2 text-lg"/>
                        Logout
                    </Button>
                </div>     
                </div>
            </div>
    </div>
  )
}

export default SideBar