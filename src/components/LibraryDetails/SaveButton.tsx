"use client"
import { LibraryContext } from '@/context/LibraryContext';
import { ILIBRARY } from '@/Type/Ilibrary';
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface SaveButtonProps {
    library : ILIBRARY
}
const SaveButton = ({library}: SaveButtonProps) => {
    const {SaveData, setSaveData} = useContext(LibraryContext);
     const HandelSaveButton = () => {
                // ১. Check using find method if the item already exists in PlanData
                const isAlreadyAdded = SaveData.find((item: ILIBRARY) => item.id === library.id);
        
                // ২. If already exists, show error toast and stop execution
                if (isAlreadyAdded) {
                    toast.error(`"${library.name}" is already in today's plan!`);
                    return;
                }
        setSaveData([...SaveData, library])
        toast.success(`You are selected  "${library.name}"`);

    }
    return (
        <div>
            <button 
            onClick={HandelSaveButton}
            className="bg-[#131418] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 font-bold py-3.5 px-5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                <Bookmark className="w-4 h-4" />
                Save for later
            </button> 
        </div>
    );
};

export default SaveButton;

