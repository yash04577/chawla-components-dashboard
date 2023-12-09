import React from "react";

type Props = {
    icon: React.ReactNode,
    name: string,
    selected: boolean
};

const SidebarLink = ({icon, name, selected}: Props) => {
  return (
    <div className={`${selected ? 'text-[#283093] bg-[#ECEDFE] rounded-lg' : 'text-[#666666]' } flex py-3 px-4 gap-2 items-center cursor-pointer hover:text-[#283093] hover:bg-[#ECEDFE] rounded-lg`}>
      <span>
        {icon}
      </span>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SidebarLink;
