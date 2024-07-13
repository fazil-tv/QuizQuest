import { create } from 'zustand';

export type configType = {
    numberOfQuestions: number;
    category: {
        id: number;
        name: string;
    };
    level: string;
    status: string;
    score: number;
};

const defaultConfig: configType = {
    numberOfQuestions: 10,
    category: {
        id: 0,
        name: ""
    },
    level: "",
    status: "",
    score: 0
};

const useQuiz = create((set) => ({
    config: { ...defaultConfig },
    addLevel: (level: string) => set((state) => ({ config: { ...state.config, level: level } })),
    addNumberOfQuestions: (count: number) => set((state) => ({ config: { ...state.config, numberOfQuestions: count } })),
    addCategory: (id: number, name: string) => set((state) => ({ config: { ...state.config, category: { id: id, name: name } } })),
    addStatus: (status: string) => set((state) => ({ config: { ...state.config, status: status } })),
    addScore: (score: number) => set((state) => ({ config: { ...state.config, score: score } })),
    addType: (type: string) => set((state) => ({ config: { ...state.config, type: type } })),
    

}));

export default useQuiz;
