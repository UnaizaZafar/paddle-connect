import { keepPreviousData, useQuery } from "@tanstack/react-query";
import PLAYERS, { PlayersData } from "@/services/player.service";

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

export function usePlayersList(page: number = 1, search: string = "") {
  return useQuery<PlayersData>({
    queryKey: ["players", page, search],
    queryFn: () => PLAYERS.getPlayers(page, search),
    placeholderData: keepPreviousData,
  });
}
