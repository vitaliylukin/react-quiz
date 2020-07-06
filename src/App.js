import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout'; //импортируем Layout
import {Route, Switch} from 'react-router-dom'; //импортируем компоненты из библиотеки react-router-dom
import Quiz from './containers/Quiz/Quiz'; //импортируем Quiz
import QuizList from './containers/QuizList/QuizList'; //импортируем список
import Auth from './containers/Auth/Auth'; //импортируем страницу авторизации
import QuizCreator from './containers/QuizCreator/QuizCreator'; //импортируем страницу создания формы

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/quiz-creator" component={QuizCreator} />
                    <Route path="/quiz/:id" component={Quiz} />
                    <Route path="/" component={QuizList} />
                </Switch>
            </Layout>
        )
    }
}

export default App;
