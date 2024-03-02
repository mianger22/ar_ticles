import CenterBlock from './CenterBlock/CenterBlock';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';

function Main() {
  return (
    <main className="uk-flex uk-grid-column-large uk-child-width-auto" uk-grid>
        <LeftBlock />
        <CenterBlock />
        <RightBlock />
    </main>
  );
}

export default Main;