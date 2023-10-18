const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Extract video file path from request URL, e.g. /video.mp4
  const filePath = __dirname + '/videos' + req.url;

  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error('File not found:', err);
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('File not found');
      return;
    }

    const range = req.headers.range;
    const totalSize = stats.size;

    if (!range) {
      res.writeHead(416, {'Content-Range': `bytes */${totalSize}`});
      return res.end();
    }

    const [startStr, endStr] = range.replace('bytes=', '').split('-');
    const start = parseInt(startStr);
    const end = endStr ? parseInt(endStr) : totalSize - 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${totalSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': end - start + 1,
      'Content-Type': 'video/mp4',
    });

    // Create a stream for the range requested and pipe it to the response
    //fs.createReadStream(filePath, { start, end }).pipe(res);
    const readStream = fs.createReadStream(filePath, {start, end});

    readStream.on('data', (chunk) => {
      console.log(`Received data chunk of ${chunk.length} bytes`);
    });

    readStream.on('open', () => {
      console.log(`Streaming file: ${req.url} from ${start} to ${end}`);
    });

    readStream.on('close', () => {
      console.log(`Finished streaming file: ${req.url}`);
    });

    readStream.on('error', (error) => {
      console.error('Stream error:', error);
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    });

    readStream.pipe(res);
  });
});

server.listen(3000, () => {
  console.log('Video streaming server listening on port 3000');
});
