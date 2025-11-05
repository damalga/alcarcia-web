import Other from './Other';
import Design from './Design';
import Releases from './Releases';
import Images from './Images';

function Main() {
  return (
    <main>
      <section className='releases'>
        <Releases/>
      </section>

      <aside className='others'>
        <Other/>
        <Images/>
      </aside>

      <section className='design'>
        <Design/>
      </section>
    </main>
  );
}

export default Main;
