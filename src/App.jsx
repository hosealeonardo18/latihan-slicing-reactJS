import './App.css';
import Education from './components/Education';
import Footer from './components/Footer';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <>
      <body className="">
        <div className="w3-content w3-margin-top" style={{ maxWidth: '1400px' }}>
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <Profile />
              </div>
              <br />
            </div>

            <div className="w3-twothird">
              <WorkExperience />
              <Education />
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
}

export default App;
