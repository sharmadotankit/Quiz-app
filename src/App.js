import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Footer from './Components/Footer/Footer';
import QuizTest from "./Components/QuizTest/QuizTest";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register"
import Report from './Components/Report/Report';
import { Component } from 'react';
import Subject from './Components/Subject/Subject';
import background from "./asset/background.webp";


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      testInfo: {
        subject: '',
        level: '',
      },
      score: 0,
    }
  }


  onRouteChange = (route) => {
    if (route === 'home' || route === 'report') {
      this.setState({ isSignedIn: true })
    }
    else if (route === 'signin' || route === 'register') {
      this.setState({ isSignedIn: false })
    }

    this.setState({ route: route });
  }

  goToResult = (score) => {
    this.setState({ score: score })
    this.onRouteChange('report')
  }


  setTestInfo = (testInfoReceived) => {
    this.setState(
      {
        testInfo: {
          subject: testInfoReceived.subject,
          level: testInfoReceived.level,
        }
      })
  }




  render() {
    return (
      <div className="App">
        <header>
          <NavigationBar onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        </header>

        <section className="marginForNav">
          {this.state.route === 'home' ? <Subject onRouteChange={this.onRouteChange} setTestInfo={this.setTestInfo} />
            : this.state.route === 'signin' ? <SignIn onRouteChange={this.onRouteChange} />
              : this.state.route === 'register' ? <Register onRouteChange={this.onRouteChange} />
                : this.state.route === 'quizTest' ? <QuizTest goToResult={this.goToResult} testInfo={this.state.testInfo}  onRouteChange={this.onRouteChange} />
                  : <Report score={this.state.score} testInfo={this.state.testInfo} />}
        </section>
        <footer>
          <Footer/>
        </footer>

      
      </div>
    );
  }
}

export default App;
