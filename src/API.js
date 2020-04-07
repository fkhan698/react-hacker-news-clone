import React from "react";


export const baseURL = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesURL = `${baseURL}newstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
export const topStoriesURL = `${baseURL}topstories.json?print=pretty&orderBy="$key"&limitToFirst=100`;
export const storyURL = `${baseURL}item/`;
export const json = ".json?print=pretty";

export const getTopStoryIds = async () => {
  const response = await fetch(topStoriesURL);
  const data =  response.json();
  return data;
};

export const getNewStoryIds = async () => {
  const response = await fetch(newStoriesURL);
  const data =  response.json();
  return data;
};
export const getStoryTitle = async (storyID) => {
  
    const result = await fetch(`${storyURL + storyID}.json`);
    const data = result.json();
    return data
};