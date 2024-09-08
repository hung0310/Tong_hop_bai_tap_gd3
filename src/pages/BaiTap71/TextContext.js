import React, { createContext, useState, useContext } from "react";

const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [texts, setTexts] = useState([]);

    const addText = (text) => {
        setTexts([...texts, text]);
    }

    const removeText = (index) => {
        const newTexts = texts.filter((_, i) => i !== index);
        setTexts(newTexts);
    }

    const isDuplicate = (text) => {
        return texts.includes(text);
    }

    return (
        <TextContext.Provider value={{ texts, addText, removeText, isDuplicate }}>
            { children }
        </TextContext.Provider>
    )
}

export const useTextContext = () => useContext(TextContext);