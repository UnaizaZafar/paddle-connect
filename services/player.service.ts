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
  async getPlayers(): Promise<Player[]> {
    const res = await api.get<ApiResponse<PlayersData>>("/players");
    console.log("res", res.data.data.stats);
    return res.data.data.players;
  },
};
export default PLAYERS;
