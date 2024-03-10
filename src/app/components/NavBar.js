'use client'

import SportsBookCustomize from "./SportsBookCustomize";
import SportSelector from "./SportSelector";
import { bookmaker_names, league_titles, team_titles } from "../lib/Resources.js";
import React,{ useEffect, useState, useMemo, useCallback } from "react";
import { Bars3Icon, XMarkIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { 
    Collapse,
    Input,
    Navbar,
    Typography,
    IconButton
} from "@material-tailwind/react";

export default function NavBar() {
    const [bookies, setBookies] = useState(new Set(Object.keys(bookmaker_names))) ;
    const [openNav, setOpenNav] = useState(false);
    const [sport, setSport] = useState('americanfootball_nfl');
    const [filterText, setFilterText] = useState("");
    
    const filterGames = useCallback(
        ({ target }) => {
          setFilterText(target.value);
        },
        [sport],
      );

    const pull_user_books = (data) => {
        setBookies(data);
    }

    const sportChange = (sportChoice) => {
        setOpenNav(false);
        setSport(sportChoice);
    }

    const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
     
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);

    const InputInHeader = useMemo(() => {
        return (
          <div className="relative flex w-full">
            <Input
                      color="blue-gray"
                      label="Search"
                      value={filterText}
                      onChange={filterGames}
                      className="pr-20 w-full"
                      containerProps={{
                        className: "min-w-[60px]",
                      }}
                    />
            {filterText && (
              <span className="absolute right-0 top-1.5 mr-2">
                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                onClick={() => (filterGames({target: {value:""}}))}
              >
                    <XMarkIcon color="gray" className="h-5 w-5" strokeWidth={4} />
                </IconButton>
              </span>
              )}
          </div>
        );
      }, [filterText]);
    
    return (<Navbar className="sticky z-10 lg:px-8 lg:py-4 mx-auto max-w-screen-2xl">
                <div className="flex flex-wrap items-center justify-between text-blue-700">
                <Typography
                    color="blue"
                    variant="h6"
                    className="mr-4 cursor-pointer text-inherit py-1.5"
                >
                    Shop the Line
                </Typography>
                <div className="hidden lg:block">
                    <SportSelector func={sportChange} sport={sport}></SportSelector>
                </div>
                <div className="hidden lg:block">
                    <div className="min-w-[450px] grid grid-cols-2 gap-2">
                    <SportsBookCustomize func={pull_user_books} bookies={bookies}></SportsBookCustomize>
                    <div>{InputInHeader}</div>
                    </div>
                </div>
                {!openNav ?
                <div className="lg:hidden absolute right-20 text-blue-700 opacity-70">
                    <Typography variant="small">
                        <span className="flex items-center justify-center font-semibold">{league_titles[sport]}
                        <Image className="object-cover ml-1" width={16} height={16} src={`/Images/Sports/${sport}.png`} alt={league_titles[sport]} /></span>
                    </Typography>
                </div>:<></>}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                    <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                    <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )} 
                </IconButton>
                </div>
                <Collapse open={openNav}>
                    <SportSelector func={sportChange} sport={sport}></SportSelector>
                </Collapse>
                <div className="relative flex w-full gap-2 pt-3 
                lg:hidden">
                    <SportsBookCustomize func={pull_user_books} bookies={bookies}></SportsBookCustomize>
                    {InputInHeader}
                </div>
            </Navbar>);
}


