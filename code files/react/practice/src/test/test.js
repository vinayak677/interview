

import {render,screen,waitFor} from '@testing-library/react';

test("loaded test data",async()=>{
   render(<AsyncFile/>)

//    waitFor
   await waitFor(()=>{
    except(screen.getByText('dataloaded' ).toBeInTheDocument())
   })

//    findBy

    const dataElement= await screen.findByText('data loaded');
    expect(dataElement).toBeInTheDocument()
})





// 

Q6: How do you mock API calls in Jest?
//  Method 1: Mock axios

import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('fetches user data', async () => {
  const userData = { id: 1, name: 'John' };
  mockedAxios.get.mockResolvedValue({ data: userData });
  
  render(<UserProfile userId={1} />);
  
  await screen.findByText('John');
  expect(mockedAxios.get).toHaveBeenCalledWith('/users/1');
});

// Method 2: Mock fetch globally
global.fetch = jest.fn();
const mockedFetch = fetch as jest.MockedFunction<typeof fetch>;

beforeEach(() => {
  mockedFetch.mockClear();
});

test('fetches data with fetch', async () => {
  const mockResponse = {
    ok: true,
    json: async () => ({ name: 'John' })
  } as Response;
  
  mockedFetch.mockResolvedValueOnce(mockResponse);
  
  render(<Component />);
  await screen.findByText('John');
  expect(mockedFetch).toHaveBeenCalledWith('/api/user');
});