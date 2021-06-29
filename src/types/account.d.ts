interface TornAccount {
    username: string;
    displayName: string;

    placement: number;
    team: number;
    type: string;

    xp: number;
    rank: number;
    elo: number;
    kills: number;
    money: number;
    tech: number;
}

export { TornAccount };
