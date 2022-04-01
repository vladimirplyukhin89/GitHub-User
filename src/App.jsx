import GitHubUser from './GithubUser';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="app_border">
        <h1>Hello User</h1>
        <GitHubUser login='vladimirplyukhin89' />
      </div>
    </div>
  );
}

export default App;
