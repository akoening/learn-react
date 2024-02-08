function Scientist({profession, numawards, awards, discovered}) {
  return (
    <section>
      <ul>
        <li><b>Profession: </b> {profession}</li>
        <li><b>Awards: {numawards}</b> {awards}</li>
        <li><b>Discovered: </b>{discovered}</li>
      </ul>
    </section>
  );
  }

  function Profile({scientist}) {
    return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
          className="avatar"
          src={scientist.img}
          alt={scientist.name}
          width={70}
          height={70}
          />
      </section>
    );

  }

  export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile
        scientist={{name: 'Maria Skłodowska-Curie', img: 'https://i.imgur.com/szV5sdGs.jpg'} }
        />
        <Scientist 
        profession= {'physicist and chemist'}
        numawards = {'4'}
        awards= {'(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'}
        discovered = { 'polonium (element)' } />

      <Profile
      scientist={{name: 'Katsuko Saruhashi', img: 'https://i.imgur.com/YfeOqp2s.jpg'}}
      />
      <Scientist
      profession= {'geochemist'}
      numawards = {'2'}
      awards= {'(Miyake Prize for geochemistry, Tanaka Prize)'}
      discovered = { 'a method for measuring carbon dioxide in seawater' } 
      />
    </div>
  );
}
