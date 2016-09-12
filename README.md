# Web_Feature_Detection
Version 1.1.0
September 12, 2016

##################################################

This is sample code to help Web Developers feature detect for Dolby Digital Plus support adding a premium level of sound quality and features to their web sites, apps and games.

Step 1
==========================
Add the following script to your html page:

```
<script src="https://s3-us-west-1.amazonaws.com/dolbydeveloper/1.1.0/js/dolby.min.js"></script>
```

Step 2
==========================
Use the following method to check if Dolby Digital Plus is supported.  It will return TRUE if Dolby Digital Plus is supported and FALSE if it is not.

Example code 1:
---------------
```
var ddplus = Dolby.checkDDPlus();
```

Example code 2:
---------------
```
if( Dolby.checkDDPlus() === true ){
	// Dolby Digital Plus supported
	// code dependent on Dolby Digital Plus here
}
```

##################################################

Live Support
==========================
You are invited to join the Dolby Developer private Slack channel.

- You will receive personal support from our developer team at Dolby.
- You can connect with other developers working on cool projects.
- You will receive special invites to exclusive Dolby Developer events.
- Be a part of something that is revolutionizing audio on mobile and the web!
- Get FREE stuff!

JOIN NOW WITH THIS URL -> http://bit.ly/dolbyslack

Email Support
==========================
If you have any questions please feel free to contact us at http://developer.dolby.com/contact.aspx
