"use client"
import { ILIBRARY } from '@/Type/Ilibrary';
import React, { createContext, ReactNode, useState } from 'react';

interface ILIbaryContext {
    PlanData: ILIBRARY[];
    setPlanData: React.Dispatch<React.SetStateAction<ILIBRARY[]>>;
    SaveData: ILIBRARY[];
    setSaveData: React.Dispatch<React.SetStateAction<ILIBRARY[]>>;
}

export const LibraryContext = createContext<ILIbaryContext>({
    PlanData: [],
    setPlanData: () => { },
    SaveData: [],
    setSaveData: () => { },
});
const LibraryProvider = ({ children }: { children: ReactNode }) => {
    const [PlanData, setPlanData] = useState<ILIBRARY[]>([]);
    const [SaveData, setSaveData] = useState<ILIBRARY[]>([]);

    const sharedData = {
        PlanData,
        setPlanData,
        SaveData,
        setSaveData,
    };
    return (
        <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;