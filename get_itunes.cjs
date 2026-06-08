const fetch = require('node-fetch');
fetch('https://itunes.apple.com/search?term=Sia+Unstoppable&entity=song&limit=1')
  .then(res => res.json())
  .then(data => console.log(data.results[0].previewUrl))
  .catch(err => console.error(err));
