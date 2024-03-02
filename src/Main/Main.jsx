import CenterBlock from './CenterBlock/CenterBlock';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

function Main() {
  return (
    // <main className="grid-container grid grid-cols-9 gap-2 h-screen" uk-grid>
    <div className="uk-flex uk-grid-column-large" uk-grid>
        <LeftBlock />
        <CenterBlock />
        <RightBlock />
    </div>
  );
}

export default Main;