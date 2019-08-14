# Chrome Extension activeTab Permission and webRequest API

The [activeTab documentation](https://developer.chrome.com/extensions/activeTab) says:

> ## What activeTab allows
>
> While the activeTab permission is enabled for a tab, an extension can:
>
> ...
>
> - Intercept network requests in the tab to the tab's main frame origin using the [webRequest](https://developer.chrome.com/extensions/webRequest) API. The extension temporarily gets host permissions for the tab's main frame origin.

This test extension uses only the `activeTab` permission and tries to access the `chrome.webRequest` API. Despite what the documentation, this fails and `chrome.webRequest` is undefined.

Tested on:

- Mac OSX 10.14.6
- Chrome Version 76.0.3809.100
