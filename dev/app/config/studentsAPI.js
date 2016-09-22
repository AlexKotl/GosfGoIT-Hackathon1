const config = {
  url: '0.0.0.0',
  port: 3000,
  requestUrl: function() {
    return `http://${this.url}:${this.port}`
  }
}

export default config;