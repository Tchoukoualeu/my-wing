import axios from 'axios';
import { API } from '../api/api';

jest.mock('axios');

describe('fetchData', () => {
  const filters = {
    section: 'hot',
    sort: 'viral',
    window: 'day',
    showViral: true
  };
  const endpoint = "https://euro-aris.glitch.me/euro";
  const page = 0;

  it('fetches successfully data from an API', async () => {
    const response = {
      data: JSON.stringify({
        data: [
          {objectID: '1', title: 'a'},
          {objectID: '2', title: 'b'}
        ],
        success: true
      })
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await expect(API.fetchData(filters)).resolves.toEqual(JSON.parse(response.data));
    expect(axios.post).toHaveBeenCalledWith(
      endpoint,
      {
        ...filters,
        showViral: filters.showViral ? "true" : "false",
        page
      }
    );
  });

  it('fetches successfully data from an API next page', async () => {
    const response = {
      data: JSON.stringify({
        data: [
          {objectID: '1', title: 'a'},
          {objectID: '2', title: 'b'}
        ],
        success: true
      })
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await expect(API.fetchData(filters, page + 1)).resolves.toEqual(JSON.parse(response.data));
    expect(axios.post).toHaveBeenCalledWith(
      endpoint,
      {
        ...filters,
        showViral: filters.showViral ? "true" : "false",
        page: page + 1
      }
    );
  });

  it('fetches successfully data from an API with error', async () => {
    const response = {
      data: JSON.stringify({
        data: {error: 'Error'},
        success: false
      })
    };

    axios.post.mockImplementationOnce(() => Promise.resolve(response));
    await expect(API.fetchData(filters, page)).rejects.toThrowError();
    expect(axios.post).toHaveBeenCalledWith(
      endpoint,
      {
        ...filters,
        showViral: filters.showViral ? "true" : "false",
        page
      }
    );
  });

  it('fetches erroneously data from an API', async () => {
    const response = {
      data: JSON.stringify({
        data: {error: 'Error'},
        success: false
      })
    };

    axios.post.mockImplementationOnce(() => Promise.reject(response));
    await expect(API.fetchData({}, page)).rejects.toThrowError();
    expect(axios.post).toHaveBeenCalledWith(
      endpoint,
      {
        showViral: "false",
        page
      }
    );
  });
});