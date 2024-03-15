import './styles.css';


function App() {
  const audioSource = `https://npr-ice.streamguys1.com/live.mp3`;

  return (
    <div className="flex flex-col justify-between items-center  h-screen">
      <h1 className='mt-10 font-mono text-3xl font-bold  text-yellow-300 animate-pulse	hover:animate-none hover:text-yellow-100 hover:cursor-pointer	'>unamultimedia.com</h1>
      <div className='  p-2 h-2/3  flex justify-center align-middle items-center'>
        <audio controls>
          <source src={audioSource} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className='h-1/3 '></div>
    </div>
  );
}

export default App;
