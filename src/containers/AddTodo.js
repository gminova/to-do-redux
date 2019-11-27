import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Form } from '../styles/AppTodoStyle';
import { Button } from '../styles/ButtonStyle';
import { Input } from '../styles/InputStyle';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <Input ref={node => (input = node)} />
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
