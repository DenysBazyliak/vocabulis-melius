'use client';

// Library Imports
import React, { useState, useReducer } from 'react';

// Project Imports
import MainLayout from '@/layout/MainLayout';
import './globals.css';
import WordForm from '@/_components/WordForm';
import SectionPaper from '@/_components/Sections/SectionPaper/SectionPaper';
import { wordsReducer } from '@/reducers/wordsReducer';
import { WordsContext, WordsDispatchContext } from '@/contexts/WordsContext';

// Types
import { WordType} from '@/types/WordTypes';

const InitialWords = [
    {
        word: 'Dictionary',
        translation: 'das Wörterbuch',
        id: 1,

    },
    {
        word: 'Sock',
        translation: 'die Socke',
        id: 2,
    },
    {
        word: 'Gauntlet',
        translation: 'die Stulpe',
        id: 3,
    },
    {
        word: 'Boot',
        translation: 'der Stiefel',
        id: 4,
    },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false);
    const [section, setSection] = useState<boolean>(true);
    const [words, dispatch] = useReducer(wordsReducer, InitialWords)

    function handleAddWord(word: WordType) {
        dispatch({
            type: 'added',
            id: nextId++,
            word,
        });
    }

    function handleChangeWord(word: WordType) {
        dispatch({
            type: 'changed',
            word,
        });
    }

    function handleDeleteWord(wordId: number) {
        dispatch({
            type: 'deleted',
            id: wordId,
        });
    }

    let nextId = 4;


    return (
        <html lang='en'>
        <body className={'h-full bg-gradient-to-r from-[#DA4453] to-[#89216B]'}>
        <div className={'main h-4 w-4'}>
        </div>
        <WordsContext.Provider value={words}>
            <WordsDispatchContext.Provider value={dispatch}>
                <MainLayout setForm={setForm} form={form} />
                <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%]'}>
                    {children}
                    {form ? <WordForm form={form} setForm={setForm} /> : null}
                    {section ? <SectionPaper setSection={setSection} /> :
                        <button onClick={() => setSection(true)}> + </button>}

                </div>
            </WordsDispatchContext.Provider>
        </WordsContext.Provider>
        </body>
        </html>
    );
}