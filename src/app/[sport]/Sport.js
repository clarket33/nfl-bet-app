'use client'

import GameOverview from "../components/GameOverview";
import PopupComponent from "../components/PopupComponent";
import '../Main.css';
//import CookieConsent from "react-cookie-consent";
import { bookmaker_names, league_titles, team_titles } from "../lib/Resources.js";
import { 
  Spinner,
  Alert
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";

import {americanfootball_nfl_team_props} from '../lib/sampledata/americanfootball_nfl_team_props.js';
import {icehockey_nhl_team_props} from '../lib/sampledata/hockey_nhl_team_props.js';
import {baseball_mlb_team_props} from '../lib/sampledata/baseball_mlb_team_props.js';
import {basketball_nba_team_props} from '../lib/sampledata/basketball_nba_team_props.js';
import {americanfootball_ncaaf_team_props} from '../lib/sampledata/americanfootball_ncaaf_team_props.js';
import {basketball_ncaab_team_props} from '../lib/sampledata/basketball_ncaab_team_props.js';



export default function Sport({params}) {
    const sport = params.sport;
    return <span>{sport}</span>


    const fetchData = async () => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        let odds;
        if(sport === 'americanfootball_nfl'){
            odds = americanfootball_nfl_team_props;
        }else if(sport === 'baseball_mlb') {
            odds = baseball_mlb_team_props;
        }else if(sport === 'basketball_nba') {
            odds = basketball_nba_team_props;
        }else if(sport === 'icehockey_nhl') {
            odds = icehockey_nhl_team_props;
        }else if(sport === 'americanfootball_ncaaf') {
            odds = americanfootball_ncaaf_team_props;
        }else if(sport === 'basketball_ncaab') {
            odds = basketball_ncaab_team_props;
        }
        let today = new Date();
        return odds.filter((game) => today < new Date(game.commence_time) );
        } else {
        let today = new Date();
        let daysInAdvance = today.getMonth()+1 === 2 && sport === 'americanfootball_nfl' ? 14 : 8;
        let getGamesUpTo = new Date(today.getFullYear(), today.getMonth(), today.getDate()+daysInAdvance).toISOString().substring(0, 19) + 'Z';
        const url = 'https://' + process.env.NEXT_PUBLIC_AWS_API_ID + '.execute-api.' + process.env.NEXT_PUBLIC_AWS_API_REGION + '.amazonaws.com/default/game-data-fetch?sport=' + sport + '&commenceTimeTo=' + getGamesUpTo;
        const gameData = await fetch(url, {
            method: 'GET'
        });
        if (!gameData.ok) {
            throw new Error(gameData.status, gameData.statusText);
        }
        const odds = await gameData.json();
        return odds.filter((game) => today < new Date(game.commence_time) );
        }
    };
    const { data: games, status } = useQuery([sport], fetchData,
        {
            staleTime: 60000,
            refetchOnWindowFocus: true,
            retry: 2
        }
    );

    return (
        <div>
        
            {status === "loading" || status === "error" ?
                <div className="flex flex-wrap justify-center items-center mt-8 mb-8">
                    {status === "loading" ? <Spinner color="blue" className="h-12 w-12" />:
                    status === "error" ? <span className="text-red-500 font-bold text-sm text-center">An unexpected error has occurred. Please try again later</span>:<></> }
                </div> : 
                <div>
                    <div className="mx-auto max-w-screen-xl mb-16 mt-8">
                        <div className="flex flex-wrap justify-center items-center mb-16 gap-4">
                            {games.length > 0 ? games.map((game) => (
                            game.bookmakers?
                            <GameOverview
                                key={game.id}
                                game_id={game.id}
                                bookie_list={bookies}
                                homeTeam={game.home_team}
                                awayTeam={game.away_team}
                                bookmakers={game.bookmakers.filter((bk) => bookies.has(bk.key))}
                                startTime={game.commence_time}
                                sport={game.sport_key}
                            />:<></>
                            )): <span className="text-gray-500 font-bold drop-shadow-lg text-5xl text-center">No Upcoming Games</span>}
                        </div>
                    </div>
                </div>}
        </div>
    );
}
