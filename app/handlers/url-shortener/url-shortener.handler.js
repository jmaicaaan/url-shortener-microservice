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
      res.send(err);
    });
}

function shortenUrl(req, id) {
  let ip = getIPAddress(req);
  return [ip, id].join('/')
}

function getIPAddress(req) {
  if (!req) {
    throw 'No request object found';
  }
  let headers = req.headers;
  if (headers['x-forwarded-for']) {
    return headers['x-forwarded-for'].split(',').pop();
  } else {
    return req.connection.remoteAddress || req.socket.remoteAddress;
  }
}

export { urlShortenerHandler, redirectUrlHandler } 