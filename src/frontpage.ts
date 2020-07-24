export default `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DEVRIK API v1.0.0</title>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
        />
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Roboto', sans-serif;
            }
            body {
                background-color: #282a36;
                color: rgb(187, 187, 187);
                padding: 2rem;
            }
            .header {
                margin-top: 2rem;
                font-size: 3rem;
                text-align: center;
            }
            .ep {
                font-size: 1.5rem;
                margin: 1rem 0;
                text-align: center;
            }
            .url {
                display: flex;
                flex-direction: row;
                gap: 10px;
            }
            .endpoint {
                background-color: #3b3e50;
                padding: 1rem;
                max-width: 600px;
                margin: auto;
                margin-bottom: 1rem;
            }
            .method {
                color: greenyellow;
            }
            .path {
                color: aqua;
            }
            .description {
                margin-top: 0.5rem;
            }
            .container {
                width: 100%;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <div class="header">DEVRIK API v1.0.0</div>
        <main>
            <div class="ep">Public endpoints:</div>
            <div class="container">
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/projects</div>
                    </div>
                    <div class="description">Lists all of the minified projects.</div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/projects/:id</div>
                    </div>
                    <div class="description">Returns a specific minified project.</div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/project-pages</div>
                    </div>
                    <div class="description">
                        Lists all of projects in a "page-builder" format.
                    </div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/project-pages/:id</div>
                    </div>
                    <div class="description">
                        Returns a specific project page.
                    </div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/project-page/:id</div>
                    </div>
                    <div class="description">
                        Returns a specific project page by it's connection id.
                    </div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/skills</div>
                    </div>
                    <div class="description">Lists all of the skills.</div>
                </div>
                <div class="endpoint">
                    <div class="url">
                        <div class="method">GET</div>
                        <div class="path">/skills/:id</div>
                    </div>
                    <div class="description">Returns a specific skill.</div>
                </div>
            </div>
        </main>
    </body>
</html>
`;
