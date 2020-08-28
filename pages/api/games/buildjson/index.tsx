import { NextApiRequest, NextApiResponse } from "next"


export default async function personHandler(req: NextApiRequest, res: NextApiResponse) {
    // const geforcenow = JSON.parse(fs.readFileSync( 'geforcenow.json', 'utf-8'))
    // Promise.all(geforcenow.map(async game => {
    //     if (game.store === 'Steam'){
    //         const steamId = game?.steamUrl?.split('/')[4];
    //         try{ 
    //             let  gameInfo = await fetch(`https://store.steampowered.com/api/appdetails?appids=${steamId}`)
    //             gameInfo = await gameInfo.json()
    //             console.log(gameInfo)
    //             if(steamId && !game['gameInfo']) game['gameInfo'] = gameInfo[steamId].data;

    //         } catch(err) {
    //             console.log(err)
    //             return game;
    //         }
    //     }
    //     return game;
    // })).then((gameInfo) => {
    //     fs.writeFileSync('gameInfo.json', JSON.stringify(gameInfo));

    //     res.status(200).send(JSON.stringify(gameInfo))
    // })
}