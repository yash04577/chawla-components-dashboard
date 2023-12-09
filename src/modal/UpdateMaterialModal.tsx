import { IoMdSettings } from "react-icons/io";
import { useState, useEffect} from "react";
import axios from "axios";

type Props = {
    setIsModalOpen: () => void
}


const UpdateMaterialModal = ({setIsModalOpen}: Props) => {

    const [material, setMaterial] = useState({id:"",materialName:"",type:"",unit:""});

    const changeHandler = (e) =>{

        const { name, value } = e.target;
        setMaterial(prevState => ({...prevState,[name]: value}));
    }

    const updateHandler = async() =>{

        console.log(material);

        const res = await axios.put(`http://localhost:3000/material?objectid=${material.objectId}`, {
            id: material.id,
            materialName: material.materialName,
            type: material.type,
            unit: material.unit
        })

        console.log("res ", res)
    }

    useEffect(() => {
      setMaterial(JSON.parse(localStorage.getItem("material")))
    },[])
  return (
    <div className='w-screen h-screen bg-slate-300 flex justify-center items-center'>

        <div className='w-[50%] h-[70%] flex flex-col gap-3 bg-white py-6 px-8'>

            {/* heading */}
            <div className='flex items-center gap-2 py-2 text-[18px] font-medium text-[#2A3143] border-b border-[#DEDEDE]'>
                <span><IoMdSettings /></span>
                <span>Edit Material</span>
            </div>

            {/* inputs fields */}
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Material ID</label>
                    <input type="text" onChange={changeHandler} value={material?.id} name="id" className='border border-[#DEDEDE] rounded-md px-3 py-1' placeholder='eg. MS Wire'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Name of Material</label>
                    <input type="text" onChange={changeHandler} value={material.materialName} name="materialName" className='border border-[#DEDEDE] rounded-md px-3 py-1' placeholder='eg. MS Wire'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Material Type</label>
                    <input type="text" onChange={changeHandler} value={material.type} name="type" className='border border-[#DEDEDE] rounded-md px-3 py-1' placeholder='eg. MS Wire'/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="">Material Unit</label>
                    <input type="text" onChange={changeHandler} value={material.unit} name="unit" className='border border-[#DEDEDE] rounded-md px-3 py-1' placeholder='eg. MS Wire'/>
                </div>
            </div>

            {/* submit buttons */}
            <div className='flex justify-end'>
                <div className='flex gap-4'>
                    <button className='px-4 py-2 rounded-lg border border-[#666666] text-[#666666]' onClick={setIsModalOpen}>Cancel</button>
                    <button onClick={updateHandler} className='bg-[#283093] text-white rounded-lg px-4 py-2'>Update Material</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default UpdateMaterialModal