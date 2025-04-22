package com.react_native_reminder_app

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.util.Log

class AlarmReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        val taskId = intent.getStringExtra("taskId")
        Log.d("AlarmReceiver", "onReceive called with taskId: $taskId")

        if (taskId != null) {
            val launchIntent = Intent(context, AlarmFullscreenActivity::class.java).apply {
                putExtra("taskId", taskId)
                flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP
            }
            context.startActivity(launchIntent)
        } else {
            Log.w("AlarmReceiver", "Received alarm but taskId was null!")
        }
    }
}
