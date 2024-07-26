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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_51_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgODMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NixcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCbHpoNzFob1BFS1dVMUE5dFZiNmQ0T0N6SzJJQ2hzaXNWUDBoZHZEUndZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJPSXZlZS1GblFUT3QydTJaMURkNmhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0YmMxMmE1LWYwZjEtNGNmZS04ZDhlLTQ0Nzc4MTMzYmNlNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDI1NCxcbiAgICAgIDExOCxcbiAgICAgIDE1OSxcbiAgICAgIDE2MyxcbiAgICAgIDQzLFxuICAgICAgMTQ2LFxuICAgICAgODMsXG4gICAgICAyMzQsXG4gICAgICA0LFxuICAgICAgMjAwLFxuICAgICAgMjQyLFxuICAgICAgMjgsXG4gICAgICAyMjUsXG4gICAgICAxMSxcbiAgICAgIDE4NixcbiAgICAgIDEyMSxcbiAgICAgIDY2LFxuICAgICAgNjksXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAxNSxcbiAgICAgIDk0LFxuICAgICAgMzYsXG4gICAgICAxOTEsXG4gICAgICAyMyxcbiAgICAgIDMyLFxuICAgICAgNTcsXG4gICAgICAxMCxcbiAgICAgIDEyMSxcbiAgICAgIDE2NSxcbiAgICAgIDE0MyxcbiAgICAgIDgzLFxuICAgICAgNTAsXG4gICAgICA1MixcbiAgICAgIDIyMixcbiAgICAgIDIzOCxcbiAgICAgIDEwMCxcbiAgICAgIDg0LFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxSDJLNVBUR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3MzYyNjc3Njg6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLigJRUc2Vwb+KAlFwiLFxuICAgIFwibGlkXCI6IFwiODg4MjM2MTQ5NTgwNzo4MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQbWc1aDhRNE5PT3RRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF5RlhvZm0yNENBVFVJK09QaldOZ1BMN0thZU1xQno5OHlYVXBuYUt6UTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiektpejI2bzB0OFFNNW80ekQ2WjI2cUVTalZCQ0VVRmlqQmkvRWpOV2FLZWVnRnZzNUNteEpWVFA2ZlJkNyt0cW1mUDFFRHhVSGQ4dHVhb2VWbERUQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNVBDUjRoazNWNkFpRUlXeWx3UFZ6ejVuT2RYcWQ2NW1XcVdiZVNVZ2FmN3cyRHBuaGthaVdhTS9IZUJORHZWU0VmRndMd0MveFNiTkxBRkJ1eC9DQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MzYyNjc3Njg6ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMDE4OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBTENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFMQy5qc29uIjogIntcImtleURhdGFcIjpcIk5Ec1dRTWNid2hlTjBvWkJCYU5sZ1BuS3VvZTZ2TDRzTVdrc2R1cGVVZzQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY2ODcwOTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
