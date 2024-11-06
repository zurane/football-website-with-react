import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import CircularProgress from "@mui/joy/CircularProgress";

export default function PlayerProfile() {
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState(null); // Initialize state as null
  // Define the async function to fetch player data
  // Use useEffect to fetch data on component mount

  useEffect(() => {
    async function fetchPlayerData() {
      // Set the loading state
      setLoading(true);
      // Generate a random player ID
      const randomId = Number(
        `${Math.floor(Math.random() * 10)}${Math.floor(
          Math.random() * 10
        )}${Math.floor(Math.random() * 10)}`
      );
      const url = `https://api-football-v1.p.rapidapi.com/v3/players?id=${randomId}&season=2023`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "59050324d3msh9aa879ff6d60292p17881bjsne799aecc4702",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the response as JSON
        setPlayer(result);
        console.log(result); // Set the fetched player data in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching player data:", error);
      }
    }
    fetchPlayerData(); // Fetch player data when the component mounts
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="player-stats container-global">
      <Link to="/" className="back-btn">
        <span className="material-symbols-outlined">arrow_back</span>
        <span>Back</span>
      </Link>
      {player ? (
        <div className="player-top details">
          <div className="player-detail-container rounded">
            <div className="back-cover-image">
              <div className="profile-img">
                <img
                  src={player.response[0].player.photo}
                  alt="player profile"
                  width={120}
                />
              </div>
            </div>
            <div className="details-row">
              <div>
                <h4>
                  {`${
                    player.response[0].player.firstname +
                    " " +
                    player.response[0].player.lastname
                  }`}
                  , <b>{player.response[0].player.age}</b>
                </h4>
              </div>
            </div>
          </div>
          <h6 className="text-sm font-semibold p-2">Player details</h6>
          <div className="player-info my-1 py-3 rounded">
            <div className="grid grid-cols-4 gap-3 text-center m-auto">
              <div>
                <span className="material-symbols-outlined text-purple-700">
                  calendar_month
                </span>
                <h5 className="text-xs font-bold">Date of birth</h5>
                <p className="text-xs">
                  {player.response[0].player.birth.date}
                </p>
              </div>
              <div className="text-center border-l">
                <span className="material-symbols-outlined text-purple-700">
                  flag
                </span>
                <h5 className="text-xs font-bold">Country</h5>
                <p className="text-xs">
                  {player.response[0].player.birth.country}
                </p>
              </div>
              <div className="text-center border-l">
                <span className="material-symbols-outlined text-purple-700">
                  height
                </span>
                <h5 className="text-xs font-bold">Height</h5>
                <p className="text-xs">{player.response[0].player.height}</p>
              </div>
              <div className="text-center border-l">
                <span className="material-symbols-outlined text-purple-700">
                  weight
                </span>
                <h5 className="text-xs font-bold">weight</h5>
                <p className="text-xs">{player.response[0].player.weight}</p>
              </div>
            </div>
          </div>

          <h6 className="text-sm font-semibold p-2">Club</h6>
          <div className="my-1 py-2 px-2 shadow-xs rounded bg-white">
            <div className="flex flex-row items-center gap-2">
              <img
                className="rounded-full border-2"
                src={player.response[0].statistics[0].team.logo}
                alt="team logo"
                width={35}
              />
              <p className="text-xs">
                {player.response[0].statistics[0].team.name}
              </p>
            </div>
          </div>
          <h6 className="text-sm font-semibold p-2">Player statistics</h6>
          <div className="player-stats">
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="rounded bg-white text-left w-full p-3 shadow-xs">
                <h6>Goals</h6>
                <span className="text-6xl font-bold">
                  {player.response[0].statistics[0].goals.total || 0}
                </span>
              </div>
              <div className="rounded bg-white text-left w-full p-3 shadow-xs">
                <h6>Assists</h6>
                <span className="text-6xl font-bold">
                  {player.response[0].statistics[0].goals.assists || 0}
                </span>
              </div>
              <div className="rounded bg-white text-left w-full p-3 shadow-xs">
                <h6>Shots</h6>
                <span className="text-6xl font-bold">
                  {player.response[0].statistics[0].shots.total !== null
                    ? player.response[0].statistics[0].shots.total
                    : 0}
                </span>
              </div>
            </div>
          </div>
          <h6 className="text-sm font-semibold p-2">League Playing Career</h6>
          <div className="bg-white my-2 rounded shadow-xs">
            {player.response[0].statistics && (
              <AccordionGroup>
                {player.response[0].statistics.map((data, index) => (
                  <Accordion key={index}>
                    <AccordionSummary>
                      <div className="flex flex-row items-center justify-between gap-3 py-3">
                        <h4 className="text-purple-900 uppercase font-black text-sm border-r  pr-2">
                          {data.league.season}
                        </h4>
                        <h4 className="text-purple-900 uppercase font-semibold text-sm">
                          {data.league.name}
                        </h4>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Stats Table inside accordion */}
                      <div className="grid grid-cols-1  py-5">
                        <div className="bg-slate-50 border-l border-r border-t border-b flex flex-row justify-between items-center">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Club
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-slate-50 border-l">
                            <span className="text-xs font-medium uppercase">
                              {data.team.name}
                            </span>
                            <img
                              className="shadow-sm rounded"
                              src={data.team.logo}
                              alt="country flag"
                              width={25}
                            />
                          </div>
                        </div>

                        <div className="bg-purple-50 border-l border-r flex flex-row justify-between items-center border-b">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Goals scored
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-purple-50">
                            <span className="text-xs font-medium uppercase">
                              ({data.goals.total || 0})
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-50 border-l border-r flex flex-row justify-between items-center border-b">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Passes completed
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-purple-50">
                            <span className="text-xs font-medium uppercase">
                              ({data.passes.total || 0})
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-50 border-l border-r flex flex-row justify-between items-center border-b">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Shots taken
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-purple-50">
                            <span className="text-xs font-medium uppercase">
                              ({data.shots.total || 0})
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-50 border-l border-r flex flex-row justify-between items-center border-b">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Games Appeared
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-purple-50">
                            <span className="text-xs font-medium uppercase">
                              ({data.games.appearences || 0})
                            </span>
                          </div>
                        </div>
                        <div className="bg-purple-50 border-l border-r flex flex-row justify-between items-center border-b">
                          <div>
                            <h6 className="text-xs uppercase font-extrabold p-2">
                              Minutes Played
                            </h6>
                          </div>
                          <div className="flex flex-row items-center gap-2 p-2 bg-purple-50">
                            <span className="text-xs font-medium uppercase">
                              ({data.games.minutes || 0})
                            </span>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </AccordionGroup>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          {loading && (
            // Show a loading spinner if the API is not do
            <CircularProgress
              thickness={1}
              color="success"
              size="md"
              variant="solid"
            />
          )}
        </div> // Display a loading message
      )}
    </div>
  );
}