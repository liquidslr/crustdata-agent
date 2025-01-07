
const sampleQuestions = [
  "Can you give an example of a request to search for people given their current title, current company and location?",
  "How to get weekly and monthly timeseries of employee headcount?",
  "How to search for for company profiles, give an example usage?",
  "What are the rate limits for the API?",
];


function App() {
  return (
    <div className="App">
       <div className="flex flex-col min-h-screen bg-white w-9/12">
        <div className="bg-gray-800 text-white p-2.5 text-center">
          <div className="text-xl font-semibold">Crustdata API </div>
          <div className="text-sm mt-1">Ask your questions about our API below.</div>
        </div>
        <div className="w-full bg-gray-100 flex flex-1 justify-center items-center space-x-4">
          <div className="w-2/3  p-4">
            <div className="text-lg font-medium mb-3">Here are some of sample questions</div>
            <div className="space-y-2">
              {sampleQuestions.map((question, index) => (
                <div
                  key={index}
                  className="w-full text-left px-3 py-2 bg-blue-50 border border-blue-200 rounded"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default App;
