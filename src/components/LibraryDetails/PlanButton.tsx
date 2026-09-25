'use client';

import { LibraryContext } from '@/context/LibraryContext';
import { ILIBRARY } from '@/Type/Ilibrary';
import { Plus } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface PlanButtonProps {
    library: ILIBRARY;
}

const PlanButton = ({ library }: PlanButtonProps) => {
    const { PlanData = [], setPlanData } = useContext(LibraryContext);

    const handlePlanButton = () => {
        // ১. Check using find method if the item already exists in PlanData
        const isAlreadyAdded = PlanData.find((item: ILIBRARY) => item.id === library.id);

        // ২. If already exists, show error toast and stop execution
        if (isAlreadyAdded) {
            toast.error(`"${library.name}" is already in today's plan!`);
            return;
        }

        // ৩. If not exists, add to array and show success toast
        setPlanData([...PlanData, library]);
        toast.success(`You selected "${library.name}"`);
    };

    return (
        <div>
            <button 
                onClick={handlePlanButton}
                className="flex-1 bg-[#a3e635] hover:bg-[#8ece28] text-black font-bold py-3.5 px-5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
                <Plus className="w-4 h-4" />
                Add to todays plan
            </button>
        </div>
    );
};

export default PlanButton;