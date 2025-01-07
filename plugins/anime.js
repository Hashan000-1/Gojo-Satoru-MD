/* Coded by Dinuka Himsara 
   Don't use this code without permission */

   const axios = require('axios');
   const cheerio = require('cheerio');
   const { cmd } = require('../command');
   const fs = require('fs');
   
   // Base URL for afabra.store
   const BASE_URL = 'https://afabra.store';
   
   // Command to download anime
   cmd({
       pattern: "anime",
       desc: "Download anime from afabra.store",
       category: "main",
       filename: __filename
   }, async (GojoBotInc, mek, m, { reply, args, q }) => {
       try {
           // Check if anime name is provided
           if (!q) {
               return reply("Please provide the name of the anime to search for.");
           }
   
           // Search for anime on afabra.store
           const searchUrl = `${BASE_URL}/search?q=${encodeURIComponent(q)}`;
           reply(`Searching for anime "${q}" on afabra.store...`);
           
           const searchResponse = await axios.get(searchUrl);
           const $ = cheerio.load(searchResponse.data);
   
           // Parse search results
           const results = [];
           $('.anime-list .anime-item a').each((index, element) => {
               const title = $(element).attr('title');
               const url = $(element).attr('href');
               results.push({ title, url: `${BASE_URL}${url}` });
           });
   
           // If no results found
           if (results.length === 0) {
               return reply("No anime found. Please try with a different name.");
           }
   
           // Select the first result for simplicity
           const selectedAnime = results[0];
           reply(`Found: ${selectedAnime.title}\nFetching episodes...`);
   
           // Fetch episodes for the selected anime
           const animeResponse = await axios.get(selectedAnime.url);
           const $$ = cheerio.load(animeResponse.data);
           const episodes = [];
           $$('.episode-list a').each((index, element) => {
               const episodeTitle = $$(element).text().trim();
               const episodeUrl = $$(element).attr('href');
               episodes.push({ episodeTitle, url: `${BASE_URL}${episodeUrl}` });
           });
   
           // If no episodes found
           if (episodes.length === 0) {
               return reply("No episodes found for the selected anime.");
           }
   
           // Select the first episode for simplicity
           const selectedEpisode = episodes[0];
           reply(`Downloading: ${selectedEpisode.episodeTitle}`);
   
           // Fetch the download link
           const episodeResponse = await axios.get(selectedEpisode.url);
           const $$$ = cheerio.load(episodeResponse.data);
           const downloadLink = $$$('a.download-btn').attr('href'); // Adjust selector as per website structure
   
           if (!downloadLink) {
               return reply("Unable to find a download link for the episode.");
           }
   
           // Download the episode
           const fileName = `${selectedEpisode.episodeTitle}.mp4`;
           const writer = fs.createWriteStream(fileName);
   
           const downloadResponse = await axios({
               url: downloadLink,
               method: 'GET',
               responseType: 'stream'
           });
   
           downloadResponse.data.pipe(writer);
   
           writer.on('finish', () => {
               reply(`Download complete: ${fileName}`);
           });
   
           writer.on('error', (err) => {
               console.error("Error downloading file:", err);
               reply("Failed to download the episode.");
           });
   
       } catch (error) {
           console.error("Error:", error);
           reply("An error occurred while fetching or downloading anime.");
       }
   });
   