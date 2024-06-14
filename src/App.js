import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route, HashRouter, Navigate, BrowserRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/App-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/Redax-store";
import {compose} from "redux";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const LoginPage = React.lazy(() => import("./components/Login/Login"));

class App extends React.Component {

    catchAllUnhandleErrors = (reason, promise) => {
        alert("Some error occurred");
        console.log(reason, promise);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/"
                                   element={<Navigate to="/profile" />} />
                            <Route path='/profile/:userId?'
                                   element={<ProfileContainer/>}/>
                            <Route path='/dialogs'
                                   element={<DialogsContainer/>}/>
                            <Route path='/users'
                                   element={<UsersContainer/>}/>
                            <Route path='/news'
                                   element={<News/>}/>
                            <Route path='/music'
                                   element={<Music/>}/>
                            <Route path='/settings'
                                   element={<Settings/>}/>
                            <Route path='/login'
                                   element={<LoginPage/>}/>
                            <Route path='*'
                                   element={<div>404 Not Found</div>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp

