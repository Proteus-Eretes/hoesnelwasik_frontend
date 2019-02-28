export class Service {
  /**
   * @param {string} baseUrl - Url where the IRIS system is running.
   */
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this.regattas = null;
  }

  /**
   * @param {string} url to fetch url
   * @protected
   */
  _fetch(url) {
    return fetch(this._baseUrl + url).then(response => {
      if (response.status !== 200) {
        return null;
      }
      return response.json();
    });
  }

  async getRetgattas() {
    if (this.regattas === null) {
      this.regattas = (await this._fetch("/")).regattas;
    }

    return this.regattas;
  }
}
