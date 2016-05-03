/*!
 * Dolby Digital Plus Feature Detect v1.1.0 (http://developer.dolby.com)
 * Copyright 2011-2015 Dolby, Inc.
 * Licensed under the MIT license
 *
 * Original Author: Titus Blair
 * Last Update By: Titus Blair
 * Updated: 05/02/2016
 *
 */

var Dolby = Dolby || {};

(function () {

    'use strict';

    Dolby.supportDDPlus = false;

    // create audio element to test Dolby Digital Plus playback
    var audio = new Audio();

    // check to see if EC-3 (Dolby Digital Plus) can be played
    if (audio.canPlayType('audio/mp4;codecs="ec-3"') != '') {

        // iPhone/Pod/Pad iOS 9.3 on Safari 9x Browser     
        if( ( 
                navigator.userAgent.indexOf('CPU iPhone OS 9_3') != -1 
                || navigator.userAgent.indexOf('CPU OS 9_3') != -1 
            )
            && navigator.userAgent.indexOf('Safari') != -1  
            && navigator.userAgent.indexOf('Version/9') != -1 
            ) {

            Dolby.supportDDPlus = true;
        }
 
        // Mac OSX 10_1x Safari 9x Browser
        if( navigator.userAgent.indexOf('Mac OS X 10_1') != -1
            && navigator.userAgent.indexOf('Safari') != -1 
            && navigator.userAgent.indexOf('Version/9') != -1 
            ) {
                // everything checks out so we can play Dolby Digital Plus
                Dolby.supportDDPlus = true;            
        }

        // Microsoft Windows 10 Phone
        if( navigator.userAgent.indexOf('Windows Phone 10') != -1 
            ) {
            Dolby.supportDDPlus = true;
        } 

        // Microsoft Windows 10 EDGE Browser
        if( navigator.userAgent.indexOf('Edge') != -1 
            ) {
            Dolby.supportDDPlus = true;
        } 
    
    }

    // method to return whether Dolby Digital Plus is supported
    Dolby.checkDDPlus = function() {
        return Dolby.supportDDPlus;
    }

}());
