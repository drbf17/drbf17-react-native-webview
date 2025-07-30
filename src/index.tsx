import ReactNativeWebview from './NativeReactNativeWebview';

export function openWebview(url: string): void {
  return ReactNativeWebview.open(url);
}
