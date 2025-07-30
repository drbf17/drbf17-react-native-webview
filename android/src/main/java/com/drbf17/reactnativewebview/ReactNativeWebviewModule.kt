package com.drbf17.reactnativewebview

import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = ReactNativeWebviewModule.NAME)
class ReactNativeWebviewModule(reactContext: ReactApplicationContext) :
  NativeReactNativeWebviewSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }

  override fun open(url: String) {
    val intent = Intent(reactApplicationContext, WebviewActivity::class.java)
    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    
    // Adicionar a URL ao bundle
    val bundle = Bundle()
    bundle.putString("url", url)
    intent.putExtras(bundle)
    
    reactApplicationContext.startActivity(intent)
  }

  companion object {
    const val NAME = "ReactNativeWebview"
  }
}
