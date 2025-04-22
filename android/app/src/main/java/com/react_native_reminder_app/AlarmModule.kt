package com.react_native_reminder_app

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class AlarmModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName() = "AlarmModule"
    
    @ReactMethod
    fun setAlarm(timestamp: Double, taskId: String) {
        val context = reactApplicationContext
        val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        
        // Create the intent for the alarm receiver
        val intent = Intent(context, AlarmReceiver::class.java)
        
        // Add the task ID to the intent extras
        intent.putExtra("taskId", taskId)
        
        Log.d("AlarmModule", "Setting alarm for taskId: $taskId at timestamp: $timestamp")
        
        // Use the taskId hash as the request code to create unique pending intents
        val requestCode = taskId.hashCode()
        
        val pendingIntent = PendingIntent.getBroadcast(
            context, 
            requestCode, 
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
                        PendingIntent.FLAG_IMMUTABLE 
                    else 0
        )
        
        val triggerAt = timestamp.toLong()
        
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            alarmManager.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAt, pendingIntent)
        } else {
            alarmManager.setExact(AlarmManager.RTC_WAKEUP, triggerAt, pendingIntent)
        }
        
        Log.d("AlarmModule", "Alarm set successfully for taskId: $taskId")
    }
    
    @ReactMethod
    fun cancelAlarm(taskId: String) {
        val context = reactApplicationContext
        val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val intent = Intent(context, AlarmReceiver::class.java)
        val requestCode = taskId.hashCode()
        
        val pendingIntent = PendingIntent.getBroadcast(
            context,
            requestCode,
            intent,
            PendingIntent.FLAG_NO_CREATE or
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M)
                        PendingIntent.FLAG_IMMUTABLE 
                    else 0
        )
        
        if (pendingIntent != null) {
            alarmManager.cancel(pendingIntent)
            pendingIntent.cancel()
            Log.d("AlarmModule", "Alarm cancelled for taskId: $taskId")
        }
    }
}