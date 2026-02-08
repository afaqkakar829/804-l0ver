
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askTheKaptaan = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `You are an expert AI historian and biographer specialized in the life of Imran Khan. 
        Answer questions with dignity, providing facts about his cricket career, his work for Shaukat Khanum, 
        and his political journey. Use a respectful yet objective tone. 
        If asked about controversial politics, provide a balanced view based on public records.
        Keep responses concise and informative. Use Pakistan's historical context where appropriate.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble retrieving that information right now. Please try again later.";
  }
};
