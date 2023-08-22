import axios from "axios";

const addBeer = async (formData: FormData | Object) => {
    console.log('formdata', formData)
    const formResponse = JSON.stringify(formData);
  try {
    const response = await axios.post('http://localhost:3000/api/beer', formResponse, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data

  } catch (error: any) {
    console.error('erro', error.response.data);
    return {
      hasError: true,
      errorMessage: 'An error occurred while creating the post',
    };
  }
};

const getBeers = async () => {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "api.punkapi.com",
  };

  try {
    const response = await fetch(`https://api.punkapi.com/v2/beers`, {
      cache: "force-cache",
    });
    console.log(response)
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
};



export { addBeer, getBeers };
  