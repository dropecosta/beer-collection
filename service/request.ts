const getBeers = async () => {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "api.punkapi.com",
  };

  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers?per_page=80`, {
      headers: headers,  
      cache: "force-cache",
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};



export { getBeers };
  