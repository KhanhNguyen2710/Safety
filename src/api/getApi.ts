// src/api.ts
import axios from "axios";
import { HangHoa } from "../interface/types";

export const fetchHangHoa = async (): Promise<HangHoa[]> => {
    const response = await axios.get<HangHoa[]>('http://localhost:5056/api/AntiHero');
    return response.data;
};
