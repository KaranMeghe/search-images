import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID G1Y7iPN25sC9qfQM2WUAVAIkH38aBT-bXchyHGQjyjY ",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
