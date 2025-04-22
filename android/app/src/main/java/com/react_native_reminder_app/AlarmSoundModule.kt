package com.react_native_reminder_app

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AlarmSoundModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String = "AlarmSoundModule"

    @ReactMethod
    fun stopAlarmSound() {
        AlarmFullscreenActivity.stopAlarmSound()
    }
}
