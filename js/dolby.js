/*!
 * Dolby Digital Plus Feature Detect v1.1.0 (http://developer.dolby.com)
 * Copyright 2011-2016 Dolby, Inc.
 * Licensed under the MIT license
 *
 * Original Author: Titus Blair
 * Last Update By: Eric Ang
 * Updated: 09/12/2016
 *
 */

var Dolby = Dolby || {};

(function () {

    'use strict';

    Dolby.supportDDPlus = false;

    // create audio element to test Dolby Digital Plus playback
    var audio = new Audio();

    // check to see if ec-3 (Dolby Digital Plus) can be played
    if (audio.canPlayType('audio/mp4;codecs="ec-3"') != '') {

        // iPhone/Pod/Pad iOS 10 on Safari 10 Browser     
        if( ( 
                navigator.userAgent.indexOf('CPU iPhone OS 10_0') != -1 
                || navigator.userAgent.indexOf('CPU OS 10_0') != -1 
            )
            && navigator.userAgent.indexOf('Safari') != -1  
            && navigator.userAgent.indexOf('Version/10') != -1 
            ) {

            Dolby.supportDDPlus = true;
        }
 
        // Mac macOS 10_12 Safari 10 Browser
		// NOte: OS X 10_11 (El Capitan) and Safari 9 support DD+ too, except there were some issues so we're leaving that combination out
        if( navigator.userAgent.indexOf('Mac OS X 10_12') != -1
            && navigator.userAgent.indexOf('Safari') != -1 
            && navigator.userAgent.indexOf('Version/10') != -1
            ) {
                // everything checks out so we can play Dolby Digital Plus
                Dolby.supportDDPlus = true;            
        }

        // Microsoft Windows 10 EDGE Browser
        if( navigator.userAgent.indexOf('Edge') != -1 
            ) {
            Dolby.supportDDPlus = true;
        } 

        // Microsoft Windows 10 Phone, handle this false positive
        if( navigator.userAgent.indexOf('Windows Phone 10') != -1 
            ) {
            Dolby.supportDDPlus = false;
        } 

    }

    // method to return whether Dolby Digital Plus is supported
    Dolby.checkDDPlus = function() {
        return Dolby.supportDDPlus;
    }

}());
