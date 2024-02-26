import CenterBlock from './CenterBlock/CenterBlock';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

function Main() {
  return (
    <main className="grid-container grid grid-cols-9 gap-2 h-screen">
        <LeftBlock />
        <CenterBlock />
        <RightBlock />
    </main>
  );
}

export default Main;