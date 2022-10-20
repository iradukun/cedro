import Home from './Home';
import BasicInfo from './components/BasicInfo';
import DamageInfo from './components/DamageInfo';
import PhotoInput from './components/PhotoInput';

function App() {
  return (
    <div className="bg-white">
      <div className='flex bg-white w-full'>
        <Home/>
        <div className='flex bg-[#F8F8F8] flex-col gap-2'>
          <BasicInfo/>
          <DamageInfo/>
          <PhotoInput/>
        </div>
      </div>
    </div>
  );
}

export default App;
