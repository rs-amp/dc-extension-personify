[![Amplience Dynamic Content](media/header.png)](https://amplience.com/dynamic-content)

# dc-extension-personify

![In Action](media/screenshot.png)

This UI extension integrates with Personify's API and can be configured to allow content to be categorized by behaviors and tags or to display a content relevance score. Sample schemas and content types are available in the `sample-content` directory to help get you started.

## Key features:

- Classify content with Personify behaviors and tags
- View an overall 'Content relevance' score to see what percentage of your website's audience the content is relevant to
- View suggestions on how to make content relevant to a wider range of your audience
- View relevance scores for selected behaviors and tags

## Parameters in schema

```json
{
  "apiUrl": "{https://service.url}",
  "type": "{coverage|criteria}"
}
```

- `apiUrl`: The Personify service URL
- `type`: Set to `coverage` to display coverage report or `criteria` to allow tag and behavior selection

## How to install

### Register extension

This extension needs to be [registered](https://amplience.com/docs/development/registeringextensions.html) with a Hub within the Dynamic Content application (Development -> Extensions), for it to be available within that Hub.

![Settings](media/settings.png)

- `Category:` Content Field
- `Label:` Personify extension _(this will appear in the 'add extension' dropdown in the schema editor)_
- `Name`: personify-extension _(needs to be unique within the Hub)_
- `URL`: [https://dc-extension-personify.extensions.content.amplience.net](https://dc-extension-personify.extensions.content.amplience.net) (TBC)
- `Description`: Personify extension _(can be left blank if you wish)_
- `Initial height`: 200

Note: You can use our deployed version of this extension (builds from the 'main' branch) -

[dc-extension-personify.extensions.content.amplience.net](https://dc-extension-personify.extensions.content.amplience.net) (TBC)

_As this is an open source project you're welcome to host your own fork of the project. You can use any standard static hosting service (Netlify, Amplify, Vercel, etc.) if you wish._

### Assign the extension to a schema

- Log in, go to development and create a new schema
- Enter [https://personify.extensions.content.amplience.net/targeted-content.json](https://personify.extensions.content.amplience.net/targeted-content.json) as your ID _(feel free to use another ID)_
- Paste the contents of `sample-content/schemas/schemas/targeted-content-schema.json` _(if you entered a custom schema id, ensure you update the "$id" property to match)_
- Click 'Save and register as content type'
- Repeat the process with `sample-content/schemas/schemas/hero-banner.json`

_Alternatively, you can use the [Dynamic Content CLI](https://github.com/amplience/dc-cli/blob/master/IMPORT_USAGE.md) to import the provided sample schemas and content types from the `sample-content` directory._

## How to run locally

- `npm i`
- `HTTPS=true npm start`
- Visit `https://localhost:3000` in the browser and accept the security risk
- Follow the steps above on how to register an extension and use `https://localhost:3000` as the URL
- Follow the steps above on how to assign an extension to a schema

### Running tests

`npm run test` Launches the test runner in the interactive watch mode.

### Bulding the extension

`npm run build` Builds the app for production to the `build` folder.
