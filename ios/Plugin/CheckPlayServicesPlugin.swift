import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CheckPlayServicesPlugin)
public class CheckPlayServicesPlugin: CAPPlugin {
    private let implementation = CheckPlayServices()
    
    @objc func getAvailability(_ call: CAPPluginCall) {
        call.unavailable("Method nonsensical on iOS.")
    }
    
    @objc func isAvailable(_ call: CAPPluginCall) {
        call.unavailable("Method nonsensical on iOS.")
    }
}
