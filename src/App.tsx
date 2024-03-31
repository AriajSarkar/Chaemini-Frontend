import Interface from './components/Ui/Interface/Interface';
import SideBar from './components/Ui/SideBar/SideBar';
import Logo from './components/Ui/Interface/Logo';

const App: React.FC = () => {
  return (
    <div>
      <div className='flex justify-between gap-2'>
      <Logo />
      <SideBar />
      </div>
      <Interface />
    </div>
  );
}

export default App;