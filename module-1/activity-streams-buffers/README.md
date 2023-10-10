### Step-by-step Guide to Run the Video Streaming Server Example

#### Prerequisites:
- Have Node.js installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).
- Have a video file (for example, `sample.mp4`) that you want to stream using the server.

#### Step 1: Set Up Your Project
1. Create a new directory for your project and navigate into it:
   ```sh
   mkdir video-streaming-server && cd video-streaming-server
   ```
2. Initialize a new Node.js project. This will create a `package.json` file:
   ```sh
   npm init -y
   ```
   
#### Step 2: Create the Video Streaming Server
1. Create a new JavaScript file for your server, for example, `server.js`:
   ```sh
   touch server.js
   ```
2. Open `server.js` with your preferred code editor and copy-paste the provided video streaming server code into this file.

#### Step 3: Place the Video File
1. Place the `sample.mp4` (or your preferred video file) in the project directory.

#### Step 4: Run the Server
1. Open a terminal and navigate to your project directory:
   ```sh
   cd path_to_your_project/video-streaming-server
   ```
2. Run the server using Node.js:
   ```sh
   node server.js
   ```
   You should see the output: "Video streaming server listening on port 3000".

#### Step 5: Access the Video Stream
1. Open your web browser and navigate to `http://localhost:3000/sample.mp4`.
   
   Note: This won't display the video in a player. It's just exposing the file to be accessed via HTTP. To view the video, you might need to use an HTML page with a video player or use software that can stream video from a URL.

#### Bonus: HTML Video Player
To view the video in your browser, create an HTML file with a video player:

1. Create a file named `index.html` and place the following code inside:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Video Streaming</title>
   </head>
   <body>
       <video width="640" height="360" controls>
           <source src="http://localhost:3000/sample.mp4" type="video/mp4">
           Your browser does not support the video tag.
       </video>
   </body>
   </html>
   ```
2. Open `index.html` in your browser. You should see a video player. When you play the video, it will be streamed from your Node.js server.

#### Notes:
- Ensure your firewall allows connections to port 3000.
- This example serves as a basic demonstration. A production video streaming server would require additional considerations for performance, security, and error handling.