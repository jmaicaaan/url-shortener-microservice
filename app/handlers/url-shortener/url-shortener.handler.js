import URL from 'url-parse';
import { isUri } from 'valid-url';
import { addUrl, UrlService } from '../../services/url.service';

const urlService = new UrlService();

function urlShortenerHandler(req, res) {
  let url = req.query.url;
  if (url && isUri(url)) {
    return urlService.addUrl(url)
      .then((data) => {
        res.send({ shortendUrl: shortenUrl(req, data.id), url: data.original_url });
      });
  } else {
    return res.status(500)
      .send({ error: 'Given URL is invalid. Please try again with a valid URL' });
  }
}

function redirectUrlHandler(req, res) {
  let urlId = req.params.id;
  return urlService.findUrlById(urlId)
    .then((data) => {
      return res.redirect(data.original_url);
    })
    .catch((err) => {
      return res.send(err);
    });
}

function shortenUrl(req, id) {
  let host = req.headers.host || req.headers.origin;
  return [host, 'url', id].join('/')
}

export { urlShortenerHandler, redirectUrlHandler } 