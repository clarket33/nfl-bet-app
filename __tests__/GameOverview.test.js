import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import GameOverview from '../src/app/components/GameOverview';
import {americanfootball_nfl_team_props} from '../src/app/lib/sampledata/americanfootball_nfl_team_props.js';
import { bookmaker_names, team_codes } from "../src/app/lib/Resources.js";
import chiefs from '../public/Images/TeamImages/americanfootball_nfl_TeamImages/Kansas City Chiefs.png';
import lions from '../public/Images/TeamImages/americanfootball_nfl_TeamImages/Detroit Lions.png';
import nuggets from '../public/Images/TeamImages/basketball_nba_TeamImages/Denver Nuggets.png';
import heat from '../public/Images/TeamImages/basketball_nba_TeamImages/Miami Heat.png';

const upcoming_game_data = americanfootball_nfl_team_props[0];

const images = {
    "americanfootball_nfl_TeamImages/Kansas City Chiefs.png" : chiefs,
    "americanfootball_nfl_TeamImages/Detroit Lions.png" : lions,
    "basketball_nba_TeamImages/Denver Nuggets.png" : nuggets,
    "basketball_nba_TeamImages/Miami Heat.png" : heat
}


describe('Game Overview component, upcoming game', () => {

    const htmlToRender = <GameOverview 
    key={upcoming_game_data.id}
    game_id={upcoming_game_data.id}
    bookie_list={new Set(Object.keys(bookmaker_names))}
    homeTeam={upcoming_game_data.home_team}
    awayTeam={upcoming_game_data.away_team}
    bookmakers={upcoming_game_data.bookmakers}
    startTime={upcoming_game_data.commence_time}
    sport={upcoming_game_data.sport_key}
    teamImages={images}
    checkedBest={false}
    usState={'ny'}
/>

    test('should be 4 images at the top of the game overview (2 per screen size)', () => {
        render(htmlToRender);
        const homeTeamImages = screen.getAllByAltText(upcoming_game_data.home_team);
        const awayTeamImages = screen.getAllByAltText(upcoming_game_data.away_team);
        expect(homeTeamImages).toHaveLength(2);
        expect(awayTeamImages).toHaveLength(2);
        for(const img of homeTeamImages){
            const altImg = img.getAttribute('alt');
            expect(altImg).toBe(upcoming_game_data.home_team);
        }
        for(const img of awayTeamImages){
            const altImg = img.getAttribute('alt');
            expect(altImg).toBe(upcoming_game_data.away_team);
        }  
    });

    test('should have match-up listed as away team @ home team (in team codes) (2 per screen size)', () => {
        render(htmlToRender);
        const awayTeam = screen.getAllByText(team_codes[upcoming_game_data.away_team]);
        const atSymbol = screen.getAllByText('@');
        const homeTeam = screen.getAllByText(team_codes[upcoming_game_data.home_team]);
        expect(awayTeam).toHaveLength(2);
        expect(atSymbol).toHaveLength(2);
        expect(homeTeam).toHaveLength(2);
    });

    test('should have commence time listed in proper format (2 per screen size)', () => {
        render(htmlToRender);
        const startTime = screen.getAllByText(new Date(upcoming_game_data.commence_time).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}));
        expect(startTime).toHaveLength(2);
    });

    test('should have team props and player props buttons', () => {
        render(htmlToRender);
        const team_props_buttons = screen.getAllByText('GameProps');
        const player_props_button = screen.getAllByText('PlayerProps');
        expect(team_props_buttons).not.toBe(null);
        expect(player_props_button).not.toBe(null);
    });

  
});




