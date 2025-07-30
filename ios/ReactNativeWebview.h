//
//  ReactNativeWebview.h
//  ReactNativeWebview
//
//  Created by Dalmo Braga on 30/07/25.
//

#import <Foundation/Foundation.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <ReactNativeWebviewSpec/ReactNativeWebviewSpec.h>

NS_ASSUME_NONNULL_BEGIN

@interface ReactNativeWebview : NSObject <NativeReactNativeWebviewSpec>
#else
#import <React/RCTBridgeModule.h>

NS_ASSUME_NONNULL_BEGIN

@interface ReactNativeWebview : NSObject <RCTBridgeModule>
#endif

@end

NS_ASSUME_NONNULL_END
