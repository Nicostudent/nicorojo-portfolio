import './styles.css';


function App() {
  const audioSource = `https://npr-ice.streamguys1.com/live.mp3`;

  return (
    <div className="flex flex-col justify-between items-center  h-screen">
      <h1 className='m-2 pt-10  h-1/3 font-mono text-3xl font-bold  text-yellow-300 hover:animate-pulse		'>unamultimedia.com</h1>
      <div className='  p-2 h-1/3'>
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
