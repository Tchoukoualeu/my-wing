import * as axios from 'axios';

export const API = {
  fetchData(filters, page = 0) {
    return axios
      .post(
        'https://euro-aris.glitch.me/euro',
        {
          ...filters,
          showViral: filters.showViral ? "true" : "false",
          page: page
        }
      )
      .then(response => {
        const res = JSON.parse(response.data);

        if (!res.success) {
          throw new Error(res.data.error);
        }

        return res;
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};
