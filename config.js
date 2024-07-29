const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "South Africa/Eastern Cape";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Powered by Slade" 


global.devs = "27736267768" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :"27736267768";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,277xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,277xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27736267768,277xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_25_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY2LFxuICAgICAgICA4NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNTAxcXAxWnZnRE50MlU2ajRnN09YQVhUSkowVVJURWpaOU1lbGZwRElLUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3J5YmQ0bXZURHluZEdPa21GNzY1QVwiLFxuICBcInBob25lSWRcIjogXCJjMGRhYjZlMS1kMjVlLTQyMTAtYWJmOC05MWRkY2IyNDUzMGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxMDMsXG4gICAgICAyMjgsXG4gICAgICAxNDYsXG4gICAgICAxLFxuICAgICAgMTcyLFxuICAgICAgNzksXG4gICAgICAyNCxcbiAgICAgIDI0MCxcbiAgICAgIDEwOSxcbiAgICAgIDEzMCxcbiAgICAgIDI0MSxcbiAgICAgIDE5OCxcbiAgICAgIDIzMixcbiAgICAgIDIwMyxcbiAgICAgIDIxNyxcbiAgICAgIDEzNSxcbiAgICAgIDMwLFxuICAgICAgMTQ5LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODksXG4gICAgICAyMTksXG4gICAgICAyMTcsXG4gICAgICAxNzEsXG4gICAgICAxMjEsXG4gICAgICA2OSxcbiAgICAgIDIyOSxcbiAgICAgIDUzLFxuICAgICAgOTUsXG4gICAgICAyNixcbiAgICAgIDk2LFxuICAgICAgMTk5LFxuICAgICAgOTMsXG4gICAgICA0LFxuICAgICAgMjI4LFxuICAgICAgMTkwLFxuICAgICAgOTYsXG4gICAgICAxODcsXG4gICAgICAxMjgsXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyS0U0TEVTNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3MzYyNjc3Njg6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigJRUc2Vwb+KAlFwiLFxuICAgIFwibGlkXCI6IFwiODg4MjM2MTQ5NTgwNzo4NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcWc1aDhRcFBXZnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF5RlhvZm0yNENBVFVJK09QaldOZ1BMN0thZU1xQno5OHlYVXBuYUt6UTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQjdkSTMybTA0QUttYXZ0TitIMllzbFE5cUt4QTBwTFhoNXJkalk2WFlLMjZBaFVnRFpydEdZSUd5MVhaVTRjWnhTaEQ2bXRiK1VhclgyV2pXMERlQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXRHV2R2YW5xNTFnYU5KbHlUTENJQVhaK2wxc3VuY0ZzMXdVZ0xDWitrNVY5SmtkNnVZTWtQWStwQ3N1U25VTWhuRTcxNVRMZk5Sa0VlcVJaemZDZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MzYyNjc3Njg6ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODQ3MTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBTEtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFMSy5qc29uIjogIntcImtleURhdGFcIjpcIjN5NzVwODdKcE05Nk1KNVFEQk0vN2xNV3ZPbzQ0NUlWaTFreGlKVXBucHM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY2ODcwOTcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "Powered by Slade" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird",
  botname : process.env.BOT_NAME  || "★Slade★",
  ownername:process.env.OWNER_NAME|| "Tsepo Mohlomi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
