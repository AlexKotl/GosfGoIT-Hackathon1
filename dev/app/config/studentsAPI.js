const config = {
  url: '0.0.0.0',
  port: 3000,
  endPoint: 'api/students/',
  requestUrl: function() {
    return `http://${this.url}:${this.port}/${this.endPoint}`
  }
}

export default config;