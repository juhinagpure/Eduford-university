
import '../App.css';
const Facilities = () => {
  return (
    <>
      <section className="facilities">
        <h1>Our facilities</h1>
        <p>Our university boasts state-of-the-art facilities equipped with cutting-edge technology</p>
        <div className="row">
          <div className="facilities-col car">
            <img src="src/assets/library.png" alt="Library" />
            <h3>World Class Library</h3>
            <p>Our world-class library offers a vast collection of books, journals, and digital resources from around the globe, providing a sanctuary for learning.</p>
          </div>
          <div className="facilities-col car">
            <img src="src/assets/basketball.png" alt="Basketball" />
            <h3>Athletic Excellence</h3>
            <p>Our premier basketball playground, featuring state-of-art facilities, fosters athletic prowess and sportsmanship and fostering a love for the game.</p>
          </div>
          <div className="facilities-col car">
            <img src="src/assets/cafeteria.png" alt="Cafeteria" />
            <h3>Culinary Oasis of Diversity</h3>
            <p>Our cafeteria offers a diverse range of global cuisines, fostering a welcoming atmosphere that nourishes both body and spirit.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facilities