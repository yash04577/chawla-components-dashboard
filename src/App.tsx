import { useEffect, useState } from "react";
// import data from "./data/data.json";
import TableRow from "./components/TableRow";
import { FaBell } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { PiEngineFill } from "react-icons/pi";
import { ImSpinner4 } from "react-icons/im";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import SidebarLink from "./components/SidebarLink";
import { BsStars } from "react-icons/bs";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function App() {
  const [tableData, setTableData] = useState([{id:"", materialName:"", type:"", unit:"", _id:""}]);
  const navigate = useNavigate();

  const fetchData = async() =>{
    const res = await axios.get("http://localhost:3000/material")
    setTableData(res.data.allMaterial);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return <>
      <div className="w-screen h-screen overflow-x-hidden">
        <div className="h-screen mx-auto">
          {/* header */}
          <div className="h-[74px] w-full flex justify-between items-center capitalize px-6 border-b border-[#DEDEDE]">
            <div className="flex gap-2 items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2688_7129)">
                  <path
                    d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM25.1538 21.2825C24.45 22.4075 23.3625 23 22.0088 23C19.4175 23 17.6575 19.8363 15.7938 16.4862C14.4338 14.0413 12.7413 11 11.3263 11C9.77251 11 8.00001 14.61 8.00001 17.7763C8.00001 18.8088 8.18751 19.6513 8.54251 20.2213C8.87501 20.75 9.33501 21 9.99126 21C10.7513 21 11.6813 20.125 12.8338 18.3113C12.9799 18.0962 13.2041 17.9466 13.4588 17.8941C13.7134 17.8416 13.9785 17.8903 14.1978 18.03C14.4172 18.1697 14.5735 18.3892 14.6336 18.6422C14.6937 18.8951 14.653 19.1616 14.52 19.385C12.48 22.5888 11.0275 23 9.99126 23C8.63751 23 7.55001 22.4062 6.84626 21.2825C6.29251 20.3975 6.00001 19.185 6.00001 17.7825C6.02205 15.819 6.49235 13.8865 7.37501 12.1325C8.41751 10.1125 9.82126 9 11.3263 9C13.9175 9 15.6775 12.1637 17.5413 15.5138C18.9013 17.9575 20.5938 21 22.0088 21C22.665 21 23.125 20.75 23.4575 20.2213C23.8125 19.655 24 18.8088 24 17.7763C24 14.61 22.2275 11 20.6738 11C20.2488 11 19.755 11.2887 19.2063 11.86C19.1152 11.9547 19.0064 12.0306 18.8861 12.0832C18.7658 12.1359 18.6362 12.1644 18.5049 12.167C18.3736 12.1696 18.243 12.1463 18.1207 12.0985C17.9983 12.0506 17.8866 11.9791 17.7919 11.8881C17.6972 11.7971 17.6213 11.6883 17.5686 11.568C17.516 11.4476 17.4875 11.3181 17.4849 11.1868C17.4823 11.0554 17.5056 10.9249 17.5534 10.8025C17.6013 10.6802 17.6727 10.5685 17.7638 10.4738C18.7175 9.4825 19.6688 9 20.6738 9C22.1738 9 23.5825 10.1125 24.6263 12.1325C25.508 13.8846 25.9783 15.8149 26.0013 17.7763C26 19.185 25.7075 20.3975 25.1538 21.2825Z"
                    fill="#283093"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2688_7129">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-xl font-medium text-[#283093]">chawla ispat</p>
            </div>
            <div className="flex justify-center items-center gap-4 text-[#757575]">
              <span>
                <FaBell />
              </span>
              <span>
                <FaRegCalendar />
              </span>
              <span className="font-medium">Wed, June 28</span>
            </div>
          </div>

          <div className="h-full flex">
            {/* sidebar */}
            <div className="h-full w-[30%] border-r border-[#DEDEDE]">
              <div className="flex py-4 px-6 flex-col gap-2">
                <SidebarLink icon={<FaTelegramPlane/>} name="work orders" selected={true} />
                <SidebarLink icon={<BsStars/>} name="finished items" selected={false} />
                <SidebarLink icon={<FaCube/>} name="Raw Materials" selected={false} />
                <SidebarLink icon={<IoMdContact/>} name="customers" selected={false} />
                <SidebarLink icon={<PiEngineFill/>} name="machines" selected={false} />
                <SidebarLink icon={<ImSpinner4/>} name="global processes" selected={false} />
                <SidebarLink icon={<FaWarehouse/>} name="godowns" selected={false} />
              </div>

              <div className="flex text-[#283093] font-medium py-3 px-6 gap-2 items-center cursor-pointer">
                <span>
                  <MdOutlineKeyboardReturn />
                </span>
                <span>Return to HR Portal</span>
              </div>

            </div>

            {/* main table */}
            <div className="h-full w-[70%]">
              <div className="w-[90%] flex flex-col gap-5 h-full mx-auto">
                {/* table headind */}
                <div className="flex justify-between pt-8">
                  <p className="text-[24px] font-bold leading-8">
                    Raw Material & BOP
                  </p>
                  <button onClick={()=>navigate("/addmaterial")} className="w-[155px] h-[40px] rounded-lg py-3 px-4 text-[#283093] border justify-center border-[#283093] flex items-center">
                    + New Metrial
                  </button>
                </div>

                {/* table content */}
                <div className="h-[90%] overflow-y-scroll">
                  {/* table fixed row */}
                  <div className="flex sticky top-0 h-[42px] items-center bg-[#ECEDFE] rounded-lg font-medium leading-5 py-4 px-6">
                    <div className="w-[82px]">#</div>
                    <div className="w-[398px]">Name of Material</div>
                    <div className="w-[120px]">Type</div>
                    <div className="w-[77px]">Unit</div>
                  </div>
                  {/* table fetched data  */}

                  {tableData?.map((elem) => (
                    <TableRow
                      id={elem.id}
                      materialName={elem.materialName}
                      type={elem.type}
                      unit={elem.unit}
                      objectId={elem._id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
}

export default App;
