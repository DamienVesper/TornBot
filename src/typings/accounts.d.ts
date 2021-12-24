interface TornAccount {
    spot: number
    team: number

    xp: number
    elo: number
    tech: number

    kills: number
    money: number
    rank: number
}

interface LBAccount {
    name: string
    team: string
    spot: number

    xp: number
    elo: number
    tech: number

    money: number
    kills: number
    rank: number
}

export {
    TornAccount,
    LBAccount
};
