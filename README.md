# How to use ConfigCat's public API to conduct integration tests

#### [Read the blog post here](https://configcat.com/blog/2023/06/26/public-api-guide/)

This is a companion code repository for the blog article as titled above. The article guides the reader step by step on how to use ConfigCat's Public API to conduct an integration test.

If you wish to code along with me, you can check out the `starter-code` branch. Getting stuck? feel free to view the complete code on the `main` branch.

## Build & Run

1. Clone this repository.

2. Run the following command to installed the required npm packages:

```sh
npm install
```

3. Add your credentials to `utils/axios/axios-instance.js`;

```js
// ...
const axiosInstance = axios.create({
  baseURL: 'https://api.configcat.com/v1/',
  headers: {
    'X-CONFIGCAT-SDKKEY': 'YOUR-CONFIGCAT-SDKKEY'
  },
  auth: {
    username: 'YOUR-AUTH-USERNAME',
    password: 'YOUR-AUTH-PASSWORD'
  }
});
// ...
```

4. Run the integration test with the following command.

```js
npm run test
```

If errors are uncovered, they will be thrown and displayed in the console.

## Learn more

Useful links to technical resources.

- [ConfigCat Public API Documentation](https://configcat.com/docs/advanced/public-api/) - learn about ConfigCat's public API and how to use it.
- [JEST Testing Framework](https://jestjs.io/) - Learn about JEST and how to use it.

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[Chavez Harris](https://github.com/codedbychavez)

## Contributions

Contributions are welcome!
