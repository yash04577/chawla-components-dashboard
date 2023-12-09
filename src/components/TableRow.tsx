import { MdModeEditOutline } from "react-icons/md";

type Props = {
    id: string,
    materialName: string,
    type: string,
    unit: string,
    objectId: string,
    setIsModalOpen: () => void;
};

const TableRow = ({id, materialName, type, unit, objectId, setIsModalOpen}: Props) => {

  const saveMaterial = async() =>{

    localStorage.setItem("material", JSON.stringify({id, materialName, type, unit, objectId}))
  }

  return (
    <div onClick={()=>saveMaterial()} className="flex text-[#2E2E2E] text-[14px] font-normal leading-5 py-4 px-6 hover:text-[#283093] hover:bg-[#ECEDFE] rounded-lg">
      <div className="w-[82px] uppercase">{id}</div>
      <div className="w-[398px] capitalize">
        {materialName}
      </div>
      <div className="w-[120px] uppercase">{type}</div>
      <div className="w-[77px] capitalize">{unit}</div>
      <div className="flex justify-center items-center cursor-pointer" onClick={()=>setIsModalOpen()}><MdModeEditOutline/></div>
    </div>
  );
};

export default TableRow;
