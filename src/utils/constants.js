const GOOGLE_API_KEY = "AIzaSyCVvYkFKVDQfnMFaMENOn9H51O0k3e_W-g";

export const YUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key="+GOOGLE_API_KEY+"&type=video&q=";


export const LIVE_CHAT_LIMIT=5;




const aaj_tak_video_id="Nq2wYlWFucg";
export const LIVECHATIDFINDER="https://youtube.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=Nq2wYlWFucg&key="+GOOGLE_API_KEY;
export const LIVE_COMMENTS_API="https://youtube.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&key="+GOOGLE_API_KEY+"&liveChatId=";




export const commentsdata = [
  {
    name: "Virat",
    text: "This is comment made by me. I liked this video!",
    replies: [],
  },
  {
    name: "Rohit",
    text: "This is comment made by me. I liked this video!",
    replies: [
      {
        name: "KL Rahul",
        text: "This is comment made by me. I liked this video!",
        replies: [
          {
            name: "SGill",
            text: "This is comment made by me. I liked this video!",
            replies: [
              {
                name: "RPant",
                text: "This is comment made by me. I liked this video!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shammi",
    text: "This is comment made by me. I liked this video!",
    replies: [
      {
        name: "Bumrah",
        text: "This is comment made by me. I liked this video!",
        replies: [],
      },
    ],
  },
  {
    name: "Ponting",
    text: "This is comment made by me. I liked this video!",
    replies: [],
  },
  {
    name: "Smith",
    text: "This is comment made by me. I liked this video!",
    replies: [],
  },
  {
    name: "Bavuma",
    text: "This is comment made by me. I liked this video!",
    replies: [],
  },
];
