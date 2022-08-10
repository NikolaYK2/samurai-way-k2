import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {addMessageUsers, addMessageUsersChange, addPost, addPostChange, state} from "./components/redux/state";

test('renders learn react link', () => {
  render(<App state={state} addPost={addPost} addMessageUsers={addMessageUsers} addMessageUsersChange={addMessageUsersChange} addPostChange={addPostChange}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
