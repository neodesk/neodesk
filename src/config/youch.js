import Youch from 'youch';

export default (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = new Youch(err, req);

    return errors
      .addLink(({ message }) => {
        const url = `https://stackoverflow.com/search?q=${encodeURIComponent(
          `[express] ${message}`
        )}`;

        return `<a href="${url}" target="_blank" title="Search on stackoverflow"><i class="fab fa-stack-overflow"></i></a>`;
      })
      .addLink(({ message }) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(
          `express ${message}`
        )}`;

        return `<a href="${url}" target="_blank" title="Search on google"><i class="fab fa-google"></i></a>`;
      })
      .toHTML()
      .then((html) => {
        res.writeHead(500, { 'content-type': 'text/html' });
        res.write(html);
        res.end();
      });
  }

  return res.status(500).json({ error: 'Internal server error.' });
};
