import api from "@/lib/axios";
import { ApiResponse } from "./auth.service";

export interface Player {
  id: string;
  email: string;
  name: string;
  fullName: string;
  profilePicture: string | null;
  status: string;
  firstName: string;
  lastName: string;
  username: string | null;
  phoneNumber: string;
  countryCode: string;
  rank: string;
  dateOfBirth: string;
  createdAt?: string;
  city: string;
  gender: string;
  gymName: string | null;
}

export interface PlayersData {
  stats: {
    totalPlayers: number;
    activePlayers: number;
    inactivePlayers: number;
  };
  players: Player[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

const PLAYERS = {
  async getPlayers(page: number = 1, search: string = ""): Promise<PlayersData> {
    const params = new URLSearchParams();
    if (page) params.append("page", page.toString());
    if (search) params.append("search", search);
    
    const queryString = params.toString();
    const url = queryString ? `/players?${queryString}` : "/players";
    
    const res = await api.get<ApiResponse<PlayersData>>(url);
    return res.data.data;
  },
};
export default PLAYERS;
