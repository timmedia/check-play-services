package com.timmedia.checkplayservices;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;
import com.google.android.gms.common.GooglePlayServicesUtil;

@CapacitorPlugin(name = "CheckPlayServices")
public class CheckPlayServicesPlugin extends Plugin {

    private CheckPlayServices implementation = new CheckPlayServices();

    @PluginMethod
    public void getAvailability(PluginCall call) {
        GoogleApiAvailability googleApiAvailability = GoogleApiAvailability.getInstance();
        int resultCode = googleApiAvailability.isGooglePlayServicesAvailable(getActivity());

        JSObject ret = new JSObject();
        ret.put("status", resultCode);
        call.resolve(ret);
    }

    @PluginMethod
    public void isAvailable(PluginCall call) {
        GoogleApiAvailability googleApiAvailability = GoogleApiAvailability.getInstance();
        int resultCode = googleApiAvailability.isGooglePlayServicesAvailable(getActivity());

        JSObject ret = new JSObject();
        ret.put("available", resultCode == ConnectionResult.SUCCESS);
        call.resolve(ret);
    }
}
