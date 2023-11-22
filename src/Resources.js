export const player_prop_markets = [
    { 
      player_markets: "player_pass_tds,player_pass_yds,player_pass_completions,player_pass_attempts,player_pass_interceptions,player_pass_longest_completion,player_rush_yds,player_rush_attempts,player_rush_longest,player_receptions,player_reception_yds,player_reception_longest,player_kicking_points,player_field_goals,player_tackles_assists,player_1st_td,player_last_td,player_anytime_td",
      team_markets:"alternate_spreads,h2h_q1,h2h_q2,h2h_q3,h2h_q4,h2h_h1,h2h_h2,spreads_q1,spreads_q2,spreads_q3,spreads_q4,spreads_h1,spreads_h2,totals_q1,totals_q2,totals_q3,totals_q4,totals_h1,totals_h2,",
      label: "americanfootball_nfl"
    },
    { 
      player_markets: "player_pass_tds,player_pass_yds,player_pass_completions,player_pass_attempts,player_pass_interceptions,player_pass_longest_completion,player_rush_yds,player_rush_attempts,player_rush_longest,player_receptions,player_reception_yds,player_reception_longest,player_kicking_points,player_field_goals,player_tackles_assists,player_1st_td,player_last_td,player_anytime_td",
      team_markets:"alternate_spreads,h2h_q1,h2h_q2,h2h_q3,h2h_q4,h2h_h1,h2h_h2,spreads_q1,spreads_q2,spreads_q3,spreads_q4,spreads_h1,spreads_h2,totals_q1,totals_q2,totals_q3,totals_q4,totals_h1,totals_h2,",
      label: "americanfootball_ncaaf"
    },
    {
      player_markets: "player_points,player_rebounds,player_assists,player_threes,player_double_double,player_blocks,player_steals,player_turnovers,player_points_rebounds_assists,player_points_rebounds,player_points_assists,player_rebounds_assists",
      team_markets: "alternate_spreads,h2h_q1,h2h_q2,h2h_q3,h2h_q4,h2h_h1,h2h_h2,spreads_q1,spreads_q2,spreads_q3,spreads_q4,spreads_h1,spreads_h2,totals_q1,totals_q2,totals_q3,totals_q4,totals_h1,totals_h2,",
      label: "basketball_nba"
    },
    {
      player_markets: "batter_home_runs,batter_hits,batter_total_bases,batter_rbis,batter_runs_scored,batter_hits_runs_rbis,batter_singles,batter_doubles,batter_triples,batter_walks,batter_strikeouts,batter_stolen_bases,pitcher_strikeouts,pitcher_record_a_win,pitcher_hits_allowed,pitcher_walks,pitcher_earned_runs,pitcher_outs",
      team_markets: "alternate_spreads,h2h_1st_1_innings,h2h_1st_3_innings,h2h_1st_5_innings,h2h_1st_7_innings,spreads_1st_1_innings,spreads_1st_3_innings,spreads_1st_5_innings,spreads_1st_7_innings,totals_1st_1_innings,totals_1st_3_innings,totals_1st_5_innings,totals_1st_7_innings,",
      label: "baseball_mlb"
    },
    {
      player_markets: "player_points,player_power_play_points,player_assists,player_blocked_shots,player_shots_on_goal,player_total_saves,player_goal_scorer_first,player_goal_scorer_last,player_goal_scorer_anytime",
      team_markets: "alternate_spreads,h2h_p1,h2h_p2,h2h_p3,spreads_p1,spreads_p2,spreads_p3,totals_p1,totals_p2,totals_p3,",
      label: "icehockey_nhl"
    }
]

export const additional_team_props = new Set(["alternate_spreads","h2h_q1","h2h_q2","h2h_q3","h2h_q4","h2h_h1","h2h_h2","spreads_q1","spreads_q2","spreads_q3","spreads_q4","spreads_h1","spreads_h2","totals_q1","totals_q2","totals_q3","totals_q4","totals_h1","totals_h2","h2h_1st_1_innings","h2h_1st_3_innings","h2h_1st_5_innings","h2h_1st_7_innings","spreads_1st_1_innings","spreads_1st_3_innings","spreads_1st_5_innings","spreads_1st_7_innings","totals_1st_1_innings","totals_1st_3_innings","totals_1st_5_innings","totals_1st_7_innings",
                                              "h2h_p1","h2h_p2","h2h_p3","spreads_p1","spreads_p2","spreads_p3","totals_p1","totals_p2","totals_p3"]);
export const all_player_props = new Set(["player_pass_tds","player_pass_yds","player_pass_completions","player_pass_attempts","player_pass_interceptions","player_pass_longest_completion","player_rush_yds","player_rush_attempts","player_rush_longest","player_receptions","player_reception_yds","player_reception_longest","player_kicking_points","player_field_goals","player_tackles_assists","player_1st_td","player_last_td","player_anytime_td","player_points","player_rebounds","player_assists","player_threes","player_double_double",
                                          "player_blocks","player_steals","player_turnovers","player_points_rebounds_assists","player_points_rebounds","player_points_assists","player_rebounds_assists","batter_home_runs","batter_hits","batter_total_bases","batter_rbis","batter_runs_scored","batter_hits_runs_rbis","batter_singles","batter_doubles","batter_triples","batter_walks","batter_strikeouts","batter_stolen_bases","pitcher_strikeouts",
                                          "pitcher_record_a_win","pitcher_hits_allowed","pitcher_walks","pitcher_earned_runs","pitcher_outs","player_power_play_points","player_blocked_shots","player_shots_on_goal","player_total_saves","player_goal_scorer_first","player_goal_scorer_last","player_goal_scorer_anytime"])

export const league_titles = {
  "americanfootball_nfl":"NFL",
  "americanfootball_ncaaf":"NCAAF",
  "baseball_mlb":"MLB",
  "icehockey_nhl":"NHL",
  "basketball_nba":"NBA",
}

export const player_prop_choices = {
  //football
  "player_pass_tds":"Pass Touchdowns",
  "player_pass_yds":"Pass Yards",
  "player_pass_completions":"Pass Completions",
  "player_pass_attempts":"Pass Attempts",
  "player_pass_interceptions":"Pass Interceptions",
  "player_pass_longest_completion":"Pass Longest Completion",
  "player_rush_yds":"Rush Yards",
  "player_rush_attempts":"Rush Attempts",
  "player_rush_longest":"Longest Rush",
  "player_receptions":"Receptions",
  "player_reception_yds":"Reception Yards",
  "player_reception_longest":"Longest Reception",
  "player_kicking_points":"Kicking Points",
  "player_field_goals":"Field Goals",
  "player_tackles_assists":"Tackles + Assists",
  "player_1st_td":"First Touchdown Scorer",
  "player_last_td":"Last Touchdown Scorer",
  "player_anytime_td":"Anytime Touchdown Scorer",
  //basketball
  "player_points":"Points", //also covers hockey
  "player_rebounds":"Rebounds",
  "player_assists":"Assists", //also covers hockey
  "player_threes":"Threes",
  "player_double_double":"Double Double",
  "player_blocks":"Blocks",
  "player_steals":"Steals",
  "player_turnovers":"Turnovers",
  "player_points_rebounds_assists":"Points + Rebounds + Assists",
  "player_points_rebounds":"Points + Rebounds",
  "player_points_assists":"Points + Assists",
  "player_rebounds_assists":"Rebounds + Assists",
  //baseball
  "batter_home_runs":"Batter Home Runs",
  "batter_hits":"Batter Hits",
  "batter_total_bases":"Batter Total Bases",
  "batter_rbis":"Batter RBIs",
  "batter_runs_scored":"Batter Runs Scored",
  "batter_hits_runs_rbis":"Batter Hits + Runs + RBIs",
  "batter_singles":"Batter Singles",
  "batter_doubles":"Batter Doubles",
  "batter_triples":"Batter Triples",
  "batter_walks":"Batter Walks",
  "batter_strikeouts":"Batter Strikeouts",
  "batter_stolen_bases":"Batter Stolen Bases",
  "pitcher_strikeouts":"Pitcher Strikeouts",
  "pitcher_record_a_win":"Pitcher to Record a Win",
  "pitcher_hits_allowed":"Pitcher Hits Allowed",
  "pitcher_walks":"Pitcher Walks",
  "pitcher_earned_runs":"Pitcher Earned Runs",
  "pitcher_outs":"Pitcher Outs",
  //hockey
  "player_power_play_points":"Power Play Points",
  "player_blocked_shots":"Blocked Shots",
  "player_shots_on_goal":"Shots on Goal",
  "player_total_saves":"Total Saves",
  "player_goal_scorer_first":"First Goal Scorer",
  "player_goal_scorer_last":"Last Goal Scorer",
  "player_goal_scorer_anytime":"Anytime Goal Scorer"

}

export const additional_team_prop_titles={ 
  "totals":"Full Game",
  "spreads":"Full Game",
  "h2h":"Full Game",
  "h2h_q1":"1st Quarter",
  "h2h_q2":"2nd Quarter",
  "h2h_q3":"3rd Quarter",
  "h2h_q4":"4th Quarter",
  "h2h_h1":"1st Half",
  "h2h_h2":"2nd Half",
  "spreads_q1":"1st Quarter",
  "spreads_q2":"2nd Quarter",
  "spreads_q3":"3rd Quarter",
  "spreads_q4":"4th Quarter",
  "spreads_h1":"1st Half",
  "spreads_h2":"2nd Half",
  "totals_q1":"1st Quarter",
  "totals_q2":"2nd Quarter",
  "totals_q3":"3rd Quarter",
  "totals_q4":"4th Quarter",
  "totals_h1":"1st Half",
  "totals_h2":"2nd Half",
  "h2h_1st_1_innings":"1st Inning",
  "h2h_1st_3_innings":"1st 3 Innings",
  "h2h_1st_5_innings":"1st 5 Innings",
  "h2h_1st_7_innings":"1st 7 Innings",
  "spreads_1st_1_innings":"1st Inning",
  "spreads_1st_3_innings":"1st 3 Innings",
  "spreads_1st_5_innings":"1st 5 Innings",
  "spreads_1st_7_innings":"1st 7 Innings",
  "totals_1st_1_innings":"1st Inning",
  "totals_1st_3_innings":"1st 3 Innings",
  "totals_1st_5_innings":"1st 5 Innings",
  "totals_1st_7_innings":"1st 7 Innings",
  "h2h_p1":"1st Period",
  "h2h_p2":"2nd Period",
  "h2h_p3":"3rd Period",
  "spreads_p1":"1st Period",
  "spreads_p2":"2nd Period",
  "spreads_p3":"3rd Period",
  "totals_p1":"1st Period",
  "totals_p2":"2nd Period",
  "totals_p3":"3rd Period",
}

export const team_prop_titles={ 
    "totals":"Total",
    "spreads":"Spread",
    "h2h":"Moneyline",
    "alternate_spreads":"Alternate Spreads",
  }

  export const state_bookmakers = {
    "All": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "Arizona": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "Colorado": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us", "wynnbet"]),
    "Connecticut": new Set(["betrivers", "draftkings", "fanduel"]),
    "Illinois": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us"]),
    "Indiana": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "unibet_us", "williamhill_us", "wynnbet"]),
    "Iowa": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Kansas": new Set(["barstool", "betmgm", "draftkings", "fanduel", "pointsbetus", "williamhill_us"]),
    "Louisiana": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Maryland": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Massachusetts": new Set(["barstool", "betmgm", "draftkings", "fanduel", "williamhill_us", "wynnbet"]),
    "Michigan": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Mississippi": new Set(["betmgm"]),
    "Nevada": new Set(["superbook", "williamhill_us"]),
    "New Hampshire": new Set(["draftkings"]),
    "New Jersey": new Set(["barstool", "betfair", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "unibet_us", "williamhill_us", "wynnbet"]),
    "New York": new Set(["betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Ohio": new Set(["betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "superbook", "williamhill_us"]),
    "Oregon": new Set(["draftkings"]),
    "Pennsylvania": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "unibet_us", "williamhill_us"]),
    "Tennessee": new Set(["barstool", "betmgm", "draftkings", "fanduel", "superbook", "williamhill_us", "wynnbet"]),
    "Virginia": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "unibet_us", "williamhill_us", "wynnbet"]),
    "Washington DC": new Set(["betmgm", "williamhill_us"]),
    "West Virginia": new Set(["barstool", "betmgm", "betrivers", "draftkings", "fanduel", "pointsbetus", "williamhill_us", "wynnbet"]),
    "Wyoming": new Set(["betmgm", "draftkings", "fanduel", "williamhill_us"])
  };

export const bookmaker_links={ 
  "barstool":"https://www.barstoolsportsbook.com/",
  "betmgm":"https://sports.betmgm.com/en/sports",
  "betrivers":"https://betrivers.com/?page=landing#home",
  "draftkings":"https://www.draftkings.com/",
  "fanduel":"https://sportsbook.fanduel.com/",
  "pointsbetus":"https://pointsbet.com/",
  "superbook":"https://co.superbook.com/sports",
  "unibet_us":"https://unibet.com/",
  "williamhill_us":"https://www.williamhill.com/us/nj/bet/",
  "wynnbet":"https://www.wynnbet.com/"
}

export const bookmaker_names={ 
    "barstool":"Barstool",
    "betmgm":"BetMGM",
    "betrivers":"BetRivers",
    "draftkings":"DraftKings",
    "fanduel":"FanDuel",
    "pointsbetus":"PointsBet",
    "superbook":"Superbook",
    "unibet_us":"Unibet",
    "williamhill_us":"Caesars",
    "wynnbet":"WynnBET"
}

export const team_codes={
    "Over":"O",
    "Under":"U",
    //mlb
    "National League":"NL",
    "American League":"AL",
    "Arizona Diamondbacks":"ARI",
    "Atlanta Braves":"ATL",
    "Baltimore Orioles":"BAL",
    "Boston Red Sox":"BOS",
    "Chicago Cubs":"CHC",
    "Chicago White Sox":"CHW",
    "Cincinnati Reds":"CIN",
    "Cleveland Guardians":"CLE",
    "Colorado Rockies":"COL",
    "Detroit Tigers":"DET",
    "Houston Astros":"HOU",
    "Kansas City Royals":"KC",
    "Los Angeles Angels":"LAA",
    "Los Angeles Dodgers":"LAD",
    "Miami Marlins":"MIA",
    "Milwaukee Brewers":"MIL",
    "Minnesota Twins":"MIN",
    "New York Mets":"NYM",
    "New York Yankees":"NYY",
    "Oakland Athletics":"OAK",
    "Philadelphia Phillies":"PHI",
    "Pittsburgh Pirates":"PIT",
    "San Diego Padres":"SD",
    "San Francisco Giants":"SF",
    "Seattle Mariners":"SEA",
    "St. Louis Cardinals":"STL",
    "Tampa Bay Rays":"TB",
    "Texas Rangers":"TEX",
    "Toronto Blue Jays":"TOR",
    "Washington Nationals":"WSH",
    //nba
    "Atlanta Hawks":"ATL",
    "Boston Celtics":"BOS",
    "Brooklyn Nets":"BKN",
    "Charlotte Hornets":"CHA",
    "Chicago Bulls":"CHI",
    "Cleveland Cavaliers":"CLE",
    "Dallas Mavericks":"DAL",
    "Denver Nuggets":"DEN",
    "Detroit Pistons":"DET",
    "Golden State Warriors":"GSW",
    "Houston Rockets":"HOU",
    "Indiana Pacers":"IND",
    "Los Angeles Clippers":"LAC",
    "Los Angeles Lakers":"LAL",
    "Memphis Grizzlies":"MEM",
    "Miami Heat":"MIA",
    "Milwaukee Bucks":"MIL",
    "Minnesota Timberwolves":"MIN",
    "New Orleans Pelicans":"NOP",
    "New York Knicks":"NYK",
    "Oklahoma City Thunder":"OKC",
    "Orlando Magic":"ORL",
    "Philadelphia 76ers":"PHI",
    "Phoenix Suns":"PHX",
    "Portland Trail Blazers":"POR",
    "Sacramento Kings":"SAC",
    "San Antonio Spurs":"SAS",
    "Toronto Raptors":"TOR",
    "Utah Jazz":"UTA",
    "Washington Wizards":"WAS",
    //nhl
    "Anaheim Ducks":"ANA",
    "Arizona Coyotes":"ARI",
    "Boston Bruins":"BOS",
    "Buffalo Sabres":"BUF",
    "Calgary Flames":"CGY",
    "Carolina Hurricanes":"CAR",
    "Chicago Blackhawks":"CHI",
    "Colorado Avalanche":"COL",
    "Columbus Blue Jackets":"CBJ",
    "Dallas Stars":"DAL",
    "Detriot Red Wings":"DET",
    "Edmonton Oilers":"EDM",
    "Florida Panthers":"FLA",
    "Los Angeles Kings":"LA",
    "Minnesota Wild":"MIN",
    "Montréal Canadiens":"MTL",
    "Nashville Predators":"NSH",
    "New Jersey Devils":"NJ",
    "New York Islanders":"NYI",
    "New York Rangers":"NYR",
    "Ottawa Senators":"OTT",
    "Philadelphia Flyers":"PHI",
    "Pittsburgh Penguins":"PIT",
    "San Jose Sharks":"SJ",
    "Seattle Kraken":"SEA",
    "St Louis Blues":"STL",
    "Tampa Bay Lightning":"TB",
    "Toronto Maple Leafs":"TOR",
    "Vancouver Canucks":"VAN",
    "Vegas Golden Knights":"VGK",
    "Washington Capitals":"WSH",
    "Winnipeg Jets":"WPG",
    //nfl
    "Arizona Cardinals":"ARI",
    "Atlanta Falcons":"ATL",
    "Baltimore Ravens":"BAL",
    "Buffalo Bills":"BUF",
    "Carolina Panthers":"CAR",
    "Chicago Bears":"CHI",
    "Cincinnati Bengals":"CIN",
    "Cleveland Browns":"CLE",
    "Dallas Cowboys":"DAL",
    "Denver Broncos":"DEN",
    "Detroit Lions":"DET",
    "Green Bay Packers":"GB",
    "Houston Texans":"HOU",
    "Indianapolis Colts":"IND",
    "Jacksonville Jaguars":"JAX",
    "Kansas City Chiefs":"KC",
    "Las Vegas Raiders":"LV",
    "Los Angeles Chargers":"LAC",
    "Los Angeles Rams":"LAR",
    "Miami Dolphins":"MIA",
    "Minnesota Vikings":"MIN",
    "New England Patriots":"NE",
    "New Orleans Saints":"NO",
    "New York Giants":"NYG",
    "New York Jets":"NYJ",
    "Philadelphia Eagles":"PHI",
    "Pittsburgh Steelers":"PIT",
    "San Francisco 49ers":"SF",
    "Seattle Seahawks":"SEA",
    "Tampa Bay Buccaneers":"TB",
    "Tennessee Titans":"TEN",
    "Washington Commanders":"WAS",
    //NCAAF
    "Air Force Falcons":"AIR",
    "Akron Zips":"AKRON",
    "Alabama Crimson Tide":"BAMA",
    "Appalachian State Mountaineers":"APPST",
    "Arizona State Sun Devils":"ASU",
    "Arizona Wildcats":"ARZ",
    "Arkansas Razorbacks":"ARK",
    "Arkansas State Red Wolves":"ARKST",
    "Army Black Knights":"ARMY",
    "Auburn Tigers":"AUB",
    "Ball State Cardinals":"BALL",
    "Baylor Bears":"BAYL",
    "Boise State Broncos":"BOISE",
    "Boston College Eagles":"BC",
    "Bowling Green Falcons":"BOWL",
    "Buffalo Bulls":"BUF",
    "BYU Cougars":"BYU",
    "California Golden Bears":"CALI",
    "Central Michigan Chippewas":"CMICH",
    "Charlotte 49ers":"CHAR",
    "Cincinnati Bearcats":"CIN",
    "Clemson Tigers":"CLEM",
    "Coastal Carolina Chanticleers":"COAST",
    "Colorado Buffaloes":"COL",
    "Colorado State Rams":"COLST",
    "Duke Blue Devils":"DUKE",
    "East Carolina Pirates":"ECU",
    "Eastern Michigan Eagles":"EMICH",
    "Florida Atlantic Owls":"FAU",
    "Florida Gators":"UFL",
    "Florida International Panthers":"FIU",
    "Florida State Seminoles":"FSU",
    "Fresno State Bulldogs":"FRES",
    "Georgia Bulldogs":"UGA",
    "Georgia Southern Eagles":"GAS",
    "Georgia State Panthers":"GAST",
    "Georgia Tech Yellow Jackets":"GTECH",
    "Hawaii Rainbow Warriors":"HWI",
    "Houston Cougars":"HOU",
    "Howard Bison":"HWRD",
    "Illinois Fighting Illini":"ILL",
    "Indiana Hoosiers":"INDU",
    "Iowa Hawkeyes":"IOWA",
    "Iowa State Cyclones":"IAST",
    "Jacksonville State Gamecocks":"JSU",
    "James Madison Dukes":"JMU",
    "Kansas Jayhawks":"KU",
    "Kansas State Wildcats":"KSU",
    "Kent State Golden Flashes":"KENT",
    "Kentucky Wildcats":"UK",
    "Liberty Flames":"LIB",
    "Louisiana Ragin Cajuns":"UL",
    "Louisiana Tech Bulldogs":"LTECH",
    "Louisville Cardinals":"LOU",
    "LSU Tigers":"LSU",
    "Marshall Thundering Herd":"MARSH",
    "Maryland Terrapins":"MARY",
    "Memphis Tigers":"MEM",
    "Miami (OH) RedHawks":"MIAOH",
    "Miami Hurricanes":"MIA",
    "Michigan State Spartans":"MSU",
    "Michigan Wolverines":"MICH",
    "Middle Tennessee Blue Raiders":"MTNST",
    "Minnesota Golden Gophers":"MIN",
    "Mississippi State Bulldogs":"MISST",
    "Missouri Tigers":"MIZZ",
    "Navy Midshipmen":"NAVY",
    "NC State Wolfpack":"NCSU",
    "Nebraska Cornhuskers":"NEB",
    "Nevada Wolf Pack":"NEVA",
    "New Mexico Lobos":"NMEX",
    "New Mexico State Aggies":"NMXST",
    "North Carolina Tar Heels":"UNC",
    "North Texas Mean Green":"NTX",
    "Northern Illinois Huskies":"NIU",
    "Northwestern Wildcats":"NWU",
    "Notre Dame Fighting Irish":"ND",
    "Ohio Bobcats":"OHIO",
    "Ohio State Buckeyes":"OSU",
    "Oklahoma Sooners":"OU",
    "Oklahoma State Cowboys":"OKST",
    "Old Dominion Monarchs":"OLD",
    "Ole Miss Rebels":"OLE",
    "Oregon Ducks":"ORE",
    "Oregon State Beavers":"OREST",
    "Penn State Nittany Lions":"PSU",
    "Pittsburgh Panthers":"PITT",
    "Purdue Boilermakers":"PUR",
    "Rice Owls":"RICE",
    "Rutgers Scarlet Knights":"RUTG",
    "Sam Houston State Bearkats":"SMHO",
    "San Diego State Aztecs":"SDSU",
    "San Jose State Spartans":"SJSU",
    "SMU Mustangs":"SMU",
    "South Alabama Jaguars":"SALA",
    "South Carolina Gamecocks":"SC",
    "South Florida Bulls":"USF",
    "Southern Mississippi Golden Eagles":"SOMIS",
    "Stanford Cardinal":"STAN",
    "Syracuse Orange":"SYR",
    "TCU Horned Frogs":"TCU",
    "Temple Owls":"TEMP",
    "Tennessee Volunteers":"TENN",
    "Texas A&M Aggies":"A&M",
    "Texas Longhorns":"TEX",
    "Texas State Bobcats":"TXST",
    "Texas Tech Red Raiders":"TTU",
    "Toledo Rockets":"TOL",
    "Troy Trojans":"TROY",
    "Tulane Green Wave":"TUL",
    "Tulsa Golden Hurricane":"TULSA",
    "UAB Blazers":"UAB",
    "UCF Knights":"UCF",
    "UCLA Bruins":"UCLA",
    "UConn Huskies":"UCONN",
    "UL Monroe Warhawks":"ULMON",
    "UMass Minutemen":"UMAS",
    "UNLV Rebels":"UNLV",
    "USC Trojans":"USC",
    "Utah State Aggies":"USU",
    "Utah Tech Trailblazers":"UTECH",
    "Utah Utes":"UTAH",
    "UTEP Miners":"UTEP",
    "UTSA Roadrunners":"UTSA",
    "Vanderbilt Commodores":"VND",
    "Virginia Cavaliers":"VIR",
    "Virginia Tech Hokies":"VTECH",
    "Wagner Seahawks":"WAG",
    "Wake Forest Demon Deacons":"WAKE",
    "Washington Huskies":"WASH",
    "Washington State Cougars":"WSU",
    "West Virginia Mountaineers":"WVU",
    "Western Kentucky Hilltoppers":"WKY",
    "Western Michigan Broncos":"WMICH",
    "William and Mary Tribe":"W&M",
    "Wisconsin Badgers":"WISC",
    "Wyoming Cowboys":"WYOM",


}


export const team_titles={
  //mlb
  "National League":"NL",
  "American League":"AL",
  "Arizona Diamondbacks":"ARI",
  "Atlanta Braves":"ATL",
  "Baltimore Orioles":"BAL",
  "Boston Red Sox":"BOS",
  "Chicago Cubs":"CHC",
  "Chicago White Sox":"CHW",
  "Cincinnati Reds":"CIN",
  "Cleveland Guardians":"CLE",
  "Colorado Rockies":"COL",
  "Detroit Tigers":"DET",
  "Houston Astros":"HOU",
  "Kansas City Royals":"KC",
  "Los Angeles Angels":"LAA",
  "Los Angeles Dodgers":"LAD",
  "Miami Marlins":"MIA",
  "Milwaukee Brewers":"MIL",
  "Minnesota Twins":"MIN",
  "New York Mets":"NYM",
  "New York Yankees":"NYY",
  "Oakland Athletics":"OAK",
  "Philadelphia Phillies":"PHI",
  "Pittsburgh Pirates":"PIT",
  "San Diego Padres":"SD",
  "San Francisco Giants":"SF",
  "Seattle Mariners":"SEA",
  "St. Louis Cardinals":"STL",
  "Tampa Bay Rays":"TB",
  "Texas Rangers":"TEX",
  "Toronto Blue Jays":"TOR",
  "Washington Nationals":"WSH",
  //nba
  "Atlanta Hawks":"ATL",
  "Boston Celtics":"BOS",
  "Brooklyn Nets":"BKN",
  "Charlotte Hornets":"CHA",
  "Chicago Bulls":"CHI",
  "Cleveland Cavaliers":"CLE",
  "Dallas Mavericks":"DAL",
  "Denver Nuggets":"DEN",
  "Detroit Pistons":"DET",
  "Golden State Warriors":"GSW",
  "Houston Rockets":"HOU",
  "Indiana Pacers":"IND",
  "Los Angeles Clippers":"LAC",
  "Los Angeles Lakers":"LAL",
  "Memphis Grizzlies":"MEM",
  "Miami Heat":"MIA",
  "Milwaukee Bucks":"MIL",
  "Minnesota Timberwolves":"MIN",
  "New Orleans Pelicans":"NOP",
  "New York Knicks":"NYK",
  "Oklahoma City Thunder":"OKC",
  "Orlando Magic":"ORL",
  "Philadelphia 76ers":"PHI",
  "Phoenix Suns":"PHX",
  "Portland Trail Blazers":"POR",
  "Sacramento Kings":"SAC",
  "San Antonio Spurs":"SAS",
  "Toronto Raptors":"TOR",
  "Utah Jazz":"UTA",
  "Washington Wizards":"WAS",
  //nhl
  "Anaheim Ducks":"ANA",
  "Arizona Coyotes":"ARI",
  "Boston Bruins":"BOS",
  "Buffalo Sabres":"BUF",
  "Calgary Flames":"CGY",
  "Carolina Hurricanes":"CAR",
  "Chicago Blackhawks":"CHI",
  "Colorado Avalanche":"COL",
  "Columbus Blue Jackets":"CBJ",
  "Dallas Stars":"DAL",
  "Detriot Red Wings":"DET",
  "Edmonton Oilers":"EDM",
  "Florida Panthers":"FLA",
  "Los Angeles Kings":"LA",
  "Minnesota Wild":"MIN",
  "Montréal Canadiens":"MTL",
  "Nashville Predators":"NSH",
  "New Jersey Devils":"NJ",
  "New York Islanders":"NYI",
  "New York Rangers":"NYR",
  "Ottawa Senators":"OTT",
  "Philadelphia Flyers":"PHI",
  "Pittsburgh Penguins":"PIT",
  "San Jose Sharks":"SJ",
  "Seattle Kraken":"SEA",
  "St Louis Blues":"STL",
  "Tampa Bay Lightning":"TB",
  "Toronto Maple Leafs":"TOR",
  "Vancouver Canucks":"VAN",
  "Vegas Golden Knights":"VGK",
  "Washington Capitals":"WSH",
  "Winnipeg Jets":"WPG",
  //nfl
  "Arizona Cardinals":"ARI",
  "Atlanta Falcons":"ATL",
  "Baltimore Ravens":"BAL",
  "Buffalo Bills":"BUF",
  "Carolina Panthers":"CAR",
  "Chicago Bears":"CHI",
  "Cincinnati Bengals":"CIN",
  "Cleveland Browns":"CLE",
  "Dallas Cowboys":"DAL",
  "Denver Broncos":"DEN",
  "Detroit Lions":"DET",
  "Green Bay Packers":"GB",
  "Houston Texans":"HOU",
  "Indianapolis Colts":"IND",
  "Jacksonville Jaguars":"JAX",
  "Kansas City Chiefs":"KC",
  "Las Vegas Raiders":"LV",
  "Los Angeles Chargers":"LAC",
  "Los Angeles Rams":"LAR",
  "Miami Dolphins":"MIA",
  "Minnesota Vikings":"MIN",
  "New England Patriots":"NE",
  "New Orleans Saints":"NO",
  "New York Giants":"NYG",
  "New York Jets":"NYJ",
  "Philadelphia Eagles":"PHI",
  "Pittsburgh Steelers":"PIT",
  "San Francisco 49ers":"SF",
  "Seattle Seahawks":"SEA",
  "Tampa Bay Buccaneers":"TB",
  "Tennessee Titans":"TEN",
  "Washington Commanders":"WAS",
  //NCAAF
  "Air Force Falcons":"Air Force",
  "Akron Zips":"Akron",
  "Alabama Crimson Tide":"Alabama",
  "Appalachian State Mountaineers":"Appalachian St",
  "Arizona State Sun Devils":"Arizona State",
  "Arizona Wildcats":"Arizona",
  "Arkansas Razorbacks":"Arkansas",
  "Arkansas State Red Wolves":"Arkansas State",
  "Army Black Knights":"Army",
  "Auburn Tigers":"Auburn",
  "Ball State Cardinals":"Ball State",
  "Baylor Bears":"Baylor",
  "Boise State Broncos":"Boise State",
  "Boston College Eagles":"Boston College",
  "Bowling Green Falcons":"Bowling Green",
  "Buffalo Bulls":"Buffalo",
  "BYU Cougars":"BYU",
  "California Golden Bears":"California",
  "Central Michigan Chippewas":"Central Michigan",
  "Charlotte 49ers":"Charlotte",
  "Cincinnati Bearcats":"Cincinnati",
  "Clemson Tigers":"Clemson",
  "Coastal Carolina Chanticleers":"Coastal Carolina",
  "Colorado Buffaloes":"Colorado",
  "Colorado State Rams":"Colorado State",
  "Duke Blue Devils":"Duke",
  "East Carolina Pirates":"East Carolina",
  "Eastern Michigan Eagles":"Eastern Michigan",
  "Florida Atlantic Owls":"Florida Atlantic",
  "Florida Gators":"Florida",
  "Florida International Panthers":"FIU",
  "Florida State Seminoles":"Florida State",
  "Fresno State Bulldogs":"Fresno State",
  "Georgia Bulldogs":"Georgia",
  "Georgia Southern Eagles":"Georgia Southern",
  "Georgia State Panthers":"Georgia State",
  "Georgia Tech Yellow Jackets":"Georgia Tech",
  "Hawaii Rainbow Warriors":"Hawaii",
  "Houston Cougars":"Houston",
  "Howard Bison":"Howard",
  "Illinois Fighting Illini":"Illinois",
  "Indiana Hoosiers":"Indiana",
  "Iowa Hawkeyes":"Iowa",
  "Iowa State Cyclones":"Iowa State",
  "Jacksonville State Gamecocks":"Jacksonville State",
  "James Madison Dukes":"James Madison",
  "Kansas Jayhawks":"Kansas",
  "Kansas State Wildcats":"Kansas State",
  "Kent State Golden Flashes":"Kent State",
  "Kentucky Wildcats":"Kentucky",
  "Liberty Flames":"Liberty",
  "Louisiana Ragin Cajuns":"UL Lafayette",
  "Louisiana Tech Bulldogs":"Louisiana Tech",
  "Louisville Cardinals":"Louisville",
  "LSU Tigers":"LSU",
  "Marshall Thundering Herd":"Marshall",
  "Maryland Terrapins":"Maryland",
  "Memphis Tigers":"Memphis",
  "Miami (OH) RedHawks":"Miami (OH)",
  "Miami Hurricanes":"Miami Florida",
  "Michigan State Spartans":"Michigan State",
  "Michigan Wolverines":"Michigan",
  "Middle Tennessee Blue Raiders":"Middle Tennessee",
  "Minnesota Golden Gophers":"Minnesota",
  "Mississippi State Bulldogs":"Mississippi St",
  "Missouri Tigers":"Missouri",
  "Navy Midshipmen":"Navy",
  "NC State Wolfpack":"NC State",
  "Nebraska Cornhuskers":"Nebraska",
  "Nevada Wolf Pack":"Nevada",
  "New Mexico Lobos":"New Mexico",
  "New Mexico State Aggies":"New Mexico State",
  "North Carolina Tar Heels":"UNC",
  "North Texas Mean Green":"North Texas",
  "Northern Illinois Huskies":"Northern Illinois",
  "Northwestern Wildcats":"Northwestern",
  "Notre Dame Fighting Irish":"Notre Dame",
  "Ohio Bobcats":"Ohio",
  "Ohio State Buckeyes":"Ohio State",
  "Oklahoma Sooners":"Oklahoma",
  "Oklahoma State Cowboys":"Oklahoma State",
  "Old Dominion Monarchs":"Old Dominion",
  "Ole Miss Rebels":"Ole Miss",
  "Oregon Ducks":"Oregon",
  "Oregon State Beavers":"Oregon State",
  "Penn State Nittany Lions":"Penn State",
  "Pittsburgh Panthers":"Pittsburgh",
  "Purdue Boilermakers":"Purdue",
  "Rice Owls":"Rice",
  "Rutgers Scarlet Knights":"Rutgers",
  "Sam Houston State Bearkats":"Sam Houston State",
  "San Diego State Aztecs":"San Diego State",
  "San Jose State Spartans":"San Jose State",
  "SMU Mustangs":"SMU",
  "South Alabama Jaguars":"South Alabama",
  "South Carolina Gamecocks":"South Carolina",
  "South Florida Bulls":"South Florida",
  "Southern Mississippi Golden Eagles":"Southern Miss",
  "Stanford Cardinal":"Stanford",
  "Syracuse Orange":"Syracuse",
  "TCU Horned Frogs":"TCU",
  "Temple Owls":"Temple",
  "Tennessee Volunteers":"Tennessee",
  "Texas A&M Aggies":"Texas A&M",
  "Texas Longhorns":"Texas",
  "Texas State Bobcats":"Texas State",
  "Texas Tech Red Raiders":"Texas Tech",
  "Toledo Rockets":"Toledo",
  "Troy Trojans":"Troy",
  "Tulane Green Wave":"Tulane",
  "Tulsa Golden Hurricane":"Tulsa",
  "UAB Blazers":"UAB",
  "UCF Knights":"Central Florida",
  "UCLA Bruins":"UCLA",
  "UConn Huskies":"Connecticut",
  "UL Monroe Warhawks":"UL Monroe",
  "UMass Minutemen":"Massachusetts",
  "UNLV Rebels":"UNLV",
  "USC Trojans":"USC",
  "Utah State Aggies":"Utah State",
  "Utah Tech Trailblazers":"Utah Tech",
  "Utah Utes":"Utah",
  "UTEP Miners":"UTEP",
  "UTSA Roadrunners":"UTSA",
  "Vanderbilt Commodores":"Vanderbilt",
  "Virginia Cavaliers":"Virginia",
  "Virginia Tech Hokies":"Virginia Tech",
  "Wagner Seahawks":"Wagner",
  "Wake Forest Demon Deacons":"Wake Forest",
  "Washington Huskies":"Washington",
  "Washington State Cougars":"Washington State",
  "West Virginia Mountaineers":"WV Mountaineers",
  "Western Kentucky Hilltoppers":"Western Kentucky",
  "Western Michigan Broncos":"Western Michigan",
  "William and Mary Tribe":"William & Mary",
  "Wisconsin Badgers":"Wisconsin",
  "Wyoming Cowboys":"Wyoming",




}


