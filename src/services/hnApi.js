import axios from 'axios';

import { selectFields } from '../selectors/selectFields';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

const _NUM_ARTICLES_DISPLAYED = 30;
const _NUM_TOP_COMMENTERS_DISPLAYED = 10;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`);

    // let commentIds = [];
    // let commentInfoPromises = [];
    // let commentTitles = [];

    // result.data.kids.forEach((commentId) => {
    //   commentIds.push(commentId);
    // });

    // commentIds.forEach((id) => {
    //     commentInfoPromises.push(
    //         axios.get(`${baseUrl()}/item/${id}.json`)
    //     )
    // });

    // axios.all(commentInfoPromises)
    //         .then((comments) => {
    //             comments.forEach((comment) => {
    //                 if (comment.data.title) {
    //                   commentTitles.push(comment.data.title);
    //                 }
    //             });
    //         })
    //         .catch((e) => {
    //             console.error(e);
    //         });

  return selectFields(result.data);
};

export const getStorywithComments = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`);

  return selectFields(result.data);
};

export const getStoryIds = async () => {
  const result = await axios.get(topStoriesUrl);

  return result.data.slice(0, _NUM_ARTICLES_DISPLAYED);
};
