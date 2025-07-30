# @drbf17/react-native-webview

A React Native TurboModule for opening URLs in a native WebView with modal presentation.

## Features

- ✅ **TurboModule Architecture**: Built using React Native's New Architecture for optimal performance
- ✅ **Cross-Platform**: Works on both iOS and Android
- ✅ **Modal Presentation**: Opens WebView in a modal with native navigation
- ✅ **TypeScript Support**: Full TypeScript definitions included
- ✅ **Simple API**: Easy-to-use single function interface

## Installation

```sh
npm install @drbf17/react-native-webview
```

### iOS Setup

Run pod install for iOS:

```sh
cd ios && pod install
```

### Android Setup

No additional setup required for Android.

## Usage

```ts
import { openWebview } from '@drbf17/react-native-webview';

// Open a URL in a native WebView
openWebview('https://reactnative.dev');
```

### Example

```tsx
import React from 'react';
import { View, Button } from 'react-native';
import { openWebview } from '@drbf17/react-native-webview';

export default function App() {
  const handlePress = () => {
    openWebview('https://github.com');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open GitHub" onPress={handlePress} />
    </View>
  );
}
```

## API

### `openWebview(url: string): void`

Opens the specified URL in a native WebView presented as a modal.

**Parameters:**
- `url` (string): The URL to open in the WebView

**Platform Behavior:**
- **iOS**: Uses `WKWebView` with a modal presentation and navigation bar with close button
- **Android**: Uses `WebView` in a new Activity with JavaScript enabled

## Requirements

- React Native 0.75+
- iOS 11.0+
- Android API 21+
- New Architecture enabled

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
