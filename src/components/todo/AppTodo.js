import React from 'react'
import Footer from './Footer'
import AddTodo from '../../redux/containers/AddTodo'
import VisibleTodoList from '../../redux/containers/VisibleTodoList'

export const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)