import React, { useState } from 'react'
import PlayerPropDisplay from "./PlayerPropDisplay";
import TeamPropDisplay from './TeamPropDisplay';
import { DataProvider } from './DataContext';
import TeamImageDisplay from './TeamImageDisplay';
import {bookmaker_names, team_titles} from '../lib/Resources.js';
import {
    Card,
    CardBody,
    Typography,
    Button
  } from "@material-tailwind/react";
  

const GameOverview = (game) => {
    const [showTeamProps,setShowTeamProps] = useState(window.sessionStorage.getItem('team_prop_clicked_' + game.game_id) === 'true' ? true : false);
    const [showPlayerProps, setShowPlayerProps] = useState(window.sessionStorage.getItem('player_prop_clicked_' + game.game_id) === 'true' ? true : false);
    const [eitherPropClicked, setPlayerPropsClicked] = useState(window.sessionStorage.getItem('player_prop_clicked_' + game.game_id) === 'true' || window.sessionStorage.getItem('team_prop_clicked_' + game.game_id) === 'true' ? true : false);
    const gameStart = new Date(game.startTime);
    const today = process.env.JEST_WORKER_ID ? new Date('2024-09-23T00:20:00Z') : new Date();
    const daysTilStart = (gameStart - today) / (1000 * 3600 * 24)
    const stringifiedGameStart = gameStart.toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    const collegeSports = ["americanfootball_ncaaf", "basketball_ncaab"];

    return (
                
            
        <Card className="w-80" color="transparent" variant="gradient">
            <CardBody className="text-center">
                <div className="lg:hidden">
                    <div className={!collegeSports.includes(game.sport) ? "h-24 mb-1"  : "h-24 mb-3" }>
                        <div className={!collegeSports.includes(game.sport) ? "h-16 flex mb-1" : "h-16 flex w-10/12 m-auto mb-1"}>
                            <div className={!collegeSports.includes(game.sport) ? "w-6/12" : "w-5/12"}>
                                <TeamImageDisplay className={!collegeSports.includes(game.sport) ? "w-16 h-16 opacity-80 ml-auto":"w-16 h-16 opacity-80 m-auto"} height={64} width={64} src={`/Images/TeamImages/${game.sport}_TeamImages/${game.awayTeam.replaceAll(" ","_")}.png`} alt={game.awayTeam} sport={game.sport}/>
                            </div>
                            <div className={!collegeSports.includes(game.sport) ? "w-1/12 mt-10" : "w-2/12 mt-10"}><Typography variant="h6" color="gray">@</Typography></div>
                            <div className={!collegeSports.includes(game.sport) ? "w-6/12" : "w-5/12"}>
                                <TeamImageDisplay className={!collegeSports.includes(game.sport) ? "w-16 h-16 transform -scale-x-100 opacity-80 mr-auto":"w-16 h-16 transform -scale-x-100 opacity-80 m-auto"} height={64} width={64} src={`/Images/TeamImages/${game.sport}_TeamImages/${game.homeTeam.replaceAll(" ","_")}.png`} alt={game.homeTeam} sport={game.sport}/>
                            </div>
                        </div>
                        <div className="h-8 align-top">
                            
                            <div className={!collegeSports.includes(game.sport) ? "flex w-6/12 m-auto": "flex w-11/12 m-auto"}>
                                <div className={!collegeSports.includes(game.sport) ? "w-4/12 text-center m-auto" : "w-5/12 text-center m-auto overflow-hidden text-ellipsis line-clamp-2"}>
                                    <Typography variant={!collegeSports.includes(game.sport) ? "h6":"small"} color="blue-gray" className="font-semibold">
                                        {team_titles[game.awayTeam] || (!collegeSports.includes(game.sport) ? game.awayTeam.substring(0,3).toUpperCase() : game.awayTeam)}
                                    </Typography>
                                </div>
                                <div className={!collegeSports.includes(game.sport) ? "w-4/12 text-center m-auto" : "w-2/12 text-center m-auto"}></div>
                                <div className={!collegeSports.includes(game.sport) ? "w-4/12 text-center m-auto" : "w-5/12 text-center m-auto overflow-hidden text-ellipsis line-clamp-2"}>
                                    <Typography variant={!collegeSports.includes(game.sport) ? "h6":"small"} color="blue-gray" className="font-semibold">
                                        {team_titles[game.homeTeam] || (!collegeSports.includes(game.sport) ? game.homeTeam.substring(0,3).toUpperCase() : game.homeTeam)}
                                    </Typography>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                     
                    
                   
        
                        <Typography  variant="small" color="blue-gray" className="font-medium" textGradient>
                            <span>{stringifiedGameStart}</span>
                        </Typography>
                    
                    {withinDayThreshold() && !collegeSports.includes(game.sport) ?
                    <div className="h-18 w-48 mx-auto mt-4 flex justify-center items-center">
                        {showTeamProps===true?<Button variant="text" className="w-1/2 border-r-2 font-bold" color="blue" size="sm" onClick={() => teamPress()}><span className='text-miniscule'>Game<br></br>Props</span></Button>
                        :<Button variant="text" className="w-1/2 border-r-2" color="blue-gray" size="sm" onClick={() => teamPress()}><span className='text-miniscule'>Game<br></br>Props</span></Button>}
                        {showPlayerProps===true?<Button variant="text" className="w-1/2 border-l-2 font-bold" color="blue" size="sm" onClick={() => playerPress()}><span className='text-miniscule'>Player<br></br>Props</span></Button>
                        :<Button variant="text" className="w-1/2 border-l-2" color="blue-gray" size="sm" onClick={() => playerPress()}><span className='text-miniscule'>Player<br></br>Props</span></Button>}
                    </div>
                    : 
                    <div className="h-18 w-24 mx-auto mt-4 flex justify-center items-center">
                        {showTeamProps===true?<Button variant="text" className="border-l-2 border-r-2 font-bold" color="blue" size="sm" onClick={() => teamPress()}><span className='text-miniscule'>Game<br></br>Props</span></Button>
                        :<Button variant="text" className="border-l-2 border-r-2" color="blue-gray" size="sm" onClick={() => teamPress()}><span className='text-miniscule'>Game<br></br>Props</span></Button>}
                    </div>
                    }
                    {showPlayerProps || showTeamProps ? <br></br>:<></>}
                </div>
                <div className="hidden lg:block">
                    <div className="h-36 mb-1">
                        <div className="h-24 flex">
                            <div className="w-6/12 text-right">
                                <TeamImageDisplay className="opacity-80 ml-auto" height={96} width={96} src={`/Images/TeamImages/${game.sport}_TeamImages/${game.awayTeam.replaceAll(" ","_")}.png`} alt={game.awayTeam} sport={game.sport}/>
                            </div>
                            <div className="w-1/12 mt-16"><Typography variant="h5" color="gray">@</Typography></div>
                            <div className="w-6/12 text-left">  
                                <TeamImageDisplay className="transform -scale-x-100 opacity-80 mr-auto" height={96} width={96} src={`/Images/TeamImages/${game.sport}_TeamImages/${game.homeTeam.replaceAll(" ","_")}.png`} alt={game.homeTeam} sport={game.sport}/>
                            </div>
                        </div>
                        <div className="h-12 align-top">
                            
                            <div className={!collegeSports.includes(game.sport) ? "flex w-8/12 m-auto" : "flex"}>
                                <div className={!collegeSports.includes(game.sport) ? "w-4/12 text-center m-auto" : "w-5/12 text-center m-auto overflow-hidden text-ellipsis line-clamp-2"}>
                                    <Typography variant={!collegeSports.includes(game.sport) ? "h5":"h6"} color="blue-gray">
                                        {team_titles[game.awayTeam] || (!collegeSports.includes(game.sport) ? game.awayTeam.substring(0,3).toUpperCase() : game.awayTeam)}
                                    </Typography>
                                </div>
                                {!collegeSports.includes(game.sport) ? <div className="w-4/12 text-center m-auto"></div> : <div className="w-2/12 text-center m-auto"></div>}
                                <div className={!collegeSports.includes(game.sport) ? "w-4/12 text-center m-auto" : "w-5/12 text-center m-auto overflow-hidden text-ellipsis line-clamp-2"}>
                                    <Typography variant={!collegeSports.includes(game.sport) ? "h5":"h6"} color="blue-gray">
                                        {team_titles[game.homeTeam] || (!collegeSports.includes(game.sport) ? game.homeTeam.substring(0,3).toUpperCase() : game.homeTeam)}
                                    </Typography>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                     
                    
                     
                    <Typography  variant="h6" color="blue-gray" className="font-medium" textGradient>
                        <span>{stringifiedGameStart}</span> 
                    </Typography>
                    {withinDayThreshold() && !collegeSports.includes(game.sport) ?
                    <div className="h-24 w-48 mx-auto flex justify-center items-center">
                        {showTeamProps===true?<Button variant="text" className="w-1/2 border-r-2 font-bold" color="blue" onClick={() => teamPress()}>Game<br></br>Props</Button>
                        :<Button variant="text" className="w-1/2 border-r-2" color="blue-gray" onClick={() => teamPress()}>Game<br></br>Props</Button>}
                        {showPlayerProps===true?<Button variant="text" className="w-1/2 border-l-2 font-bold" color="blue" onClick={() => playerPress()}>Player<br></br>Props</Button>
                        :<Button variant="text" className="w-1/2 border-l-2" color="blue-gray" onClick={() => playerPress()}>Player<br></br>Props</Button>}
                    </div>
                    : 
                    <div className="h-24 w-24 mx-auto flex justify-center items-center">
                        {showTeamProps===true?<Button variant="text" className="border-l-2 border-r-2 font-bold" color="blue" onClick={() => teamPress()}>Game<br></br>Props</Button>
                        :<Button variant="text" className="border-l-2 border-r-2" color="blue-gray" onClick={() => teamPress()}>Game<br></br>Props</Button>}
                    </div>
                    }
                </div>
                
                {!withinDayThreshold() ? showTeamProps ? 
                    <TeamPropDisplay
                        key={"team-prop-" + game.game_id}
                        game_id={game.game_id}
                        away_team={game.awayTeam}
                        home_team={game.homeTeam}
                        bookmakers={game.bookmakers}
                        sport={game.sport}
                        bookies={game.bookie_list}
                        withinRange={false}
                        usState={game.usState}
                    ></TeamPropDisplay> :<></> :
                eitherPropClicked ? <DataProvider game_id={game.game_id} sport={game.sport} showChild={showTeamProps}>
                    <TeamPropDisplay
                        key={"team-prop-" + game.game_id}
                        game_id={game.game_id}
                        away_team={game.awayTeam}
                        home_team={game.homeTeam}
                        bookmakers={game.bookmakers}
                        sport={game.sport}
                        bookies={game.bookie_list}
                        withinRange={true}
                        usState={game.usState}
                    ></TeamPropDisplay>
                    </DataProvider>:<></>
                }
                {withinDayThreshold() && !collegeSports.includes(game.sport) && eitherPropClicked ? <DataProvider game_id={game.game_id} sport={game.sport} showChild={showPlayerProps}>
                        <PlayerPropDisplay
                            key={"player-prop-" + game.game_id}
                            game_id={game.game_id}
                            sport={game.sport}
                            bookies={game.bookie_list}
                            usState={game.usState}
                        ></PlayerPropDisplay>
                    
                    </DataProvider> : <></>
                }


            </CardBody>

            
        </Card>
        
    )

    function withinDayThreshold(){
        if(["americanfootball_nfl","americanfootball_ncaaf"].includes(game.sport)){
            if(game.sport === "americanfootball_nfl" && today.getMonth()+1 === 2) return daysTilStart <= 14;
            return daysTilStart <= 4;
        }
        else{
            return daysTilStart <= 2;
        }
    }

    function playerPress(){
        if(eitherPropClicked === false) setPlayerPropsClicked(true);
        setShowPlayerProps(!showPlayerProps);
        setShowTeamProps(false);
        window.sessionStorage.setItem('player_prop_clicked_' + game.game_id, !showPlayerProps);
        window.sessionStorage.setItem('team_prop_clicked_' + game.game_id, false);
    }

    function teamPress(){
        if(eitherPropClicked === false) setPlayerPropsClicked(true);
        setShowTeamProps(!showTeamProps);
        setShowPlayerProps(false);
        window.sessionStorage.setItem('team_prop_clicked_' + game.game_id, !showTeamProps);
        window.sessionStorage.setItem('player_prop_clicked_' + game.game_id, false);
    }
}

export function propSortByLabel(sorter){
    return function(a,b) {
        let lineValA = Math.abs(a.line.pointA || a.line.pointB);
        let lineValB = Math.abs(b.line.pointA || b.line.pointB);

        let priceValA;
        let priceValB;

        if(sorter === a.line.labelA || sorter === b.line.labelA){
            priceValA = a.line.priceA;
            priceValB = b.line.priceA;
        }
        else{
            priceValA = a.line.priceB;
            priceValB = b.line.priceB;
        }

        if(lineValA && !lineValB) return -1;
        if(!lineValA && lineValB) return 1;

        if(lineValA < lineValB) return -1;
        if(lineValA === lineValB || (!lineValA && !lineValB)){
            if(priceValA && !priceValB) return -1;
            if(!priceValA && priceValB) return 1;

            if(priceValA > priceValB) return -1;
            else if(priceValA === priceValB){
                if(bookmaker_names[a.bookmaker] < bookmaker_names[b.bookmaker]) return -1;
            }
        }
        return 1;
        
    }
}

export default GameOverview