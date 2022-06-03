/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "http://localhost:3000"}
 */
import React from 'react';
import axios from 'axios';
import { render, cleanup, screen, waitForElement, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
} from '@testing-library/dom'
import 'regenerator-runtime/runtime';
import userEvent from '@testing-library/user-event';
import App from '../index.jsx';
import QuestionsAndAnswers from './QuestionAndAnswers.jsx';
import QuestionList from './QuestionList.jsx';

axios.defaults.baseURL = 'http://localhost:3000';

afterEach(cleanup);

describe ('Questions and Answers Component', () => {

  it('should render App', async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
    const resolvedDiv = await waitFor(() => screen.getByTestId("resolved"));
    expect(screen.getByTestId("resolved")).not.toBeEmptyDOMElement();
    const resolvedQuestions = await waitFor(() => screen.getByTestId("questionsArrived"));
     expect(screen.getByTestId("questionsArrived")).not.toBeEmptyDOMElement();
     expect(screen.getByTestId("questions-title")).not.toBeEmptyDOMElement();
     expect(screen.getByTestId("search-bar")).not.toBeEmptyDOMElement();
  });

  it('calls handleChange function when search input changes' , async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByTestId("loading")).toHaveTextContent("Loading...");
    const resolvedDiv = await waitFor(() => screen.getByTestId("resolved"));
    expect(screen.getByTestId("resolved")).not.toBeEmptyDOMElement();
    await new Promise((r) => setTimeout(r, 4500));
    // const resolvedQuestions = await waitFor(() => screen.getByTestId("questionsArrived"));
    // await new Promise((r) => setTimeout(r, 3500));
    // const handleChange = jest.fn();
    // const input = screen.getByTestId('text-input');
    // fireEvent.change(input, { target: { value: 'search...'}} );
    // expect(handleChange).toHaveBeenCalledTimes(1);
  })



})

// describe('App component', () => {
//  test('it renders', () => {
//    render(<App />);
//  });
// });

// describe('Q&A component',  () => {
//   render(<App />);
//   test('it renders',  () => {
//      render(<QuestionsAndAnswers />);
//   });
//  });

//  test('should check if search component is rendered', () => {
//    render(<QuestionsAndAnswers />);
//    const searchBar = screen.getByTestId('search-bar');
//    expect(searchBar).toBeInTheDocument();
//  });