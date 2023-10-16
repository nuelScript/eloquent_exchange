import { refreshRoute } from "@/lib/helpers";
import axios from "axios";

const useRefreshToken = () => {
    const refresh = async () => {
        const response = await axios.get(refreshRoute, {
            withCredentials: true
        });
        
    }
}