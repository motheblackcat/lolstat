import { API_KEY } from "secret/api-key.const";

// TODO: Add interface / type
const express = require('express');
const app = express();
const axios = require('axios').default;
const cors = require('cors');
const port = 3000;

/** CORS package to allow all **/
app.use(cors());

/** ENDPOINTS **/
const getPlayerBySummonerName = (summonerName) =>
  axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`);

const getPlayerMostPlayedChampions = (summonerId) =>
  axios.get(`https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${API_KEY}`);

const getPlayerLeagues = (summonerId) =>
  axios.get(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}?api_key=${API_KEY}`);

// TODO: Check the 'type' parameter
const getPlayerMatchIds = (puuid, type = '', count = 10) =>
  axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?&type=${type}&count=${count}&api_key=${API_KEY}`);

const getPlayerMatchDetails = (matchId) =>
  axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`);

/** ROUTES **/
app.get('/summoner-by-name', (req, res) => {
  const summonerName = req.query.summonerName;

  getPlayerBySummonerName(summonerName).then(summoner => {
    const summonerData = summoner.data;
    const summonerId = summonerData.id;
    const summonerPuuid = summonerData.puuid;

    getPlayerMostPlayedChampions(summonerId).then(championsRes => {
      const champions = championsRes.data.slice(0, 3);

      getPlayerLeagues(summonerId).then(leaguesRes => {
        const leagues = leaguesRes.data;

        getPlayerMatchIds(summonerPuuid).then(matchIds => {
          const matchIdsList: string[] = matchIds.data;
          const matchDetailPromiseArray = matchIdsList.map(matchId => getPlayerMatchDetails(matchId));

          Promise.all(matchDetailPromiseArray).then(matchDetailPromise => {
            const matches = matchDetailPromise.map(v => v.data);

            const player = {
              ...summonerData,
              champions,
              leagues,
              matches
            };

            res.send(player);
          });
        });
      });
    }).catch(error => res.send(error));
  }).catch(error => res.send(error));
});


app.listen(port, () => {
  console.log(`App started on port ${port}!`);
});
