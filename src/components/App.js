import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import { Div } from './AppStyle';

const App = () => (
  <Div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Div>
);

export default App;
