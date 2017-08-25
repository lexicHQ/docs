# ngrok - Configuration

`recime-cli` enables debugging of your chatbot via secure tunneling to localhost using `ngrok`. The free version works for most cases but it is also possible to use your `subdomain` and pass your own `authtoken` if you have a subscription with `ngrok`

In order to configure `ngrok` with your existing token, include a `ngrok.yml` in your project folder:

```
authtoken: PASTE_YOUR_AUTH_TOKEN
subdomain: PASTE_YOUR_SUBDOMAIN_WITH_NGROK
```

`ngrok` free plan has limitation on number connections can be opened in a minute. For testing your chatbot this could lead to queue and wait time.

