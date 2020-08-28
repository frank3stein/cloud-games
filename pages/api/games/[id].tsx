import { NextApiRequest, NextApiResponse } from "next"

export default async function personHandler({ query: { id } }: NextApiRequest, res: NextApiResponse) {
    try {
    const gameInfo = await fetch(`https://store.steampowered.com/api/appdetails?appids=${id}`).then(result => result.json())
    if (gameInfo) res.status(200).send(JSON.stringify(gameInfo))
    res.status(404)
    } catch(err) {
        console.error(err)
        res.status(404)
    }
}