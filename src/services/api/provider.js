const apiConfig = {
  BASE_URL:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
  APP_ID: 'QHPZf1IIMps3KCQX92JD',

  get booksEndpoint() {
    return `${this.BASE_URL}/apps/${this.APP_ID}/books`;
  },
};

export default apiConfig;
