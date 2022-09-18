import logo from './logo.svg';
import './App.css';

import ProfileSection from './containers/ProfileSection';
import SkillsContainer from './containers/SkillsContainer';
import PastJobs from './containers/PastJobs';
import Portfolio from './containers/Portfolio';
import ResumeDownloader from './containers/ResumeDownloader';

function App() {
  return (
    <div className="App">
      <ProfileSection />
      <SkillsContainer />
      <PastJobs />
      <Portfolio />
      <ResumeDownloader />
    </div>
  );
}

export default App;
