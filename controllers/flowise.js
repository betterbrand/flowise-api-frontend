export const createPrediction = async (req, res) => {
  const { message } = req.body;
  console.log(message);

  try {
    // Call the Flowise API endpoint here..
    const flowiseData = {
      question: message,
    };
//call the flowise endpoint
    const response = await fetch(
      `${process.env. FLOWISE_URL}/api/v1/prediction/${process.env.FLOW_ID}`,
    //  "http://localhost:3000/api/v1/prediction/51f97528-d8bd-4c40-8db1-e0568bbbcfa9",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.FLOWISE_API_KEY}`      
    },
    body: JSON.stringify(flowiseData),
  }
  );
  const data = await response.json();
  console.log(data);
    

    res.status(200).json({ message: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}