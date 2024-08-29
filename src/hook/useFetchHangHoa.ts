import { useEffect, useState } from "react";
import { HangHoa } from "../interface/types";
import { fetchHangHoa } from "../api/getApi";

export function useFetchHangHoa() {
    const [data, setData] = useState<HangHoa[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getHangHoa = async () => {
            try {
                const hangHoa = await fetchHangHoa();
                setData(hangHoa);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        getHangHoa();
    }, []);

    return { data, loading, error };
}