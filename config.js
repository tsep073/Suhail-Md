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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_57_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1LFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDYxLFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgMTExLFxuICAgICAgICAzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjExLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc4LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFzVDQzbDBLL1ZlRHZoeFg0WDcydHhpK1pvUDlaTlQvREZ0TjVhTFJTK1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc3MzYyNjc3NjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1NEEzMjhDMUYxNDI5MTZGQzM3M0FGNDQ0OEUzMDM3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkyMTQ2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzM2MjY3NzY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNzkzRjg4NDRFQTAxRDIxQzM0RTNBRjI1RkE5MDk4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk5MjE0NjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUXZqLUNqYXVUOHlIZVc2OTVuQkkyUVwiLFxuICBcInBob25lSWRcIjogXCIxODliZmNiMS00OWZlLTRhZGUtOGYzOS02MTkxMDU4YmU5MmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAzMSxcbiAgICAgIDMxLFxuICAgICAgMTAyLFxuICAgICAgMCxcbiAgICAgIDI0NyxcbiAgICAgIDIwOCxcbiAgICAgIDg2LFxuICAgICAgMTI2LFxuICAgICAgNDcsXG4gICAgICAzMSxcbiAgICAgIDIsXG4gICAgICA1NixcbiAgICAgIDIyMSxcbiAgICAgIDMwLFxuICAgICAgNDksXG4gICAgICA2OSxcbiAgICAgIDE3NCxcbiAgICAgIDE5OCxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDIyNCxcbiAgICAgIDMzLFxuICAgICAgMTgzLFxuICAgICAgMTMxLFxuICAgICAgMTEyLFxuICAgICAgMTk0LFxuICAgICAgMTA5LFxuICAgICAgOSxcbiAgICAgIDEwNSxcbiAgICAgIDU2LFxuICAgICAgNDIsXG4gICAgICAyNDUsXG4gICAgICAyNDMsXG4gICAgICA4MCxcbiAgICAgIDEzNCxcbiAgICAgIDUwLFxuICAgICAgMTQyLFxuICAgICAgNTUsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTQ4RjFEUlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzM2MjY3NzY4OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCUU2xhZGXigJRcIixcbiAgICBcImxpZFwiOiBcIjg4ODIzNjE0OTU4MDc6NTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDJGeEk4RUVLN1dqN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhL1JyV3Q0NFRTTVV5WS9rdktGd0tqVDdEdndKaGFMeWZiTzVqUC9Pc3lRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZTU3B4SHRKb2U5elg5dnNGM0RSYVQ4Q2pMaG5HRDMwYXJ6OGU0MDByTVZNVmJLQloveWdxTW4rMm5tMVFnODNTWHVINjBMNzR2aXBNYXIzRFhiV0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpGcTRFTU01ejVHSGRUQkNCaGQ1ZVRXYnVDVld2K3F4WGNHSjF1dnk1Q0NyQlJLakZwanVZZzlaN3phQVIwU1RKbmlJYVBKWTJySW93V1VaR1h0VkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzM2MjY3NzY4OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTkyMTQ1OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxQR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTFBHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUzN1WDQ2N0JiMkR6bkl1bGc1anR2ZWVzWmZyaXA4RHdTVkRjalVPZHlaTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTA2MzEzOTE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5MjE0NjQxNjdcIn0iCn0="  // PUT your SESSION_ID 


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
