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


global.devs = "27780478735" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :"27780478735";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_05_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NixcbiAgICAgICAgMTAwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY1LFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrdEh6bUR4TzZEdHVjZ0Q2WWxxNUp0aGxyL01tRm9BQzlMVXRocHl5bEJZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzgwNDc4NzM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFOUEzNjMxMDQ1RDhGNjIxMEFFODYwNThCMUNDMzE4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIzNTkxNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzc4MDQ3ODczNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDlBMDQ0MjU5NjQ1NkE0OTYwM0E3MzIyMkQ1NEUyRTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMzU5MTQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd5b1kwQzgtVFM2U3dDalRCZFdsRHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTA4YTgxMjktY2JmOC00ODlmLWI4ZDYtMmI3MTBjMmIyNGIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDM3LFxuICAgICAgOTQsXG4gICAgICAyLFxuICAgICAgODksXG4gICAgICA0LFxuICAgICAgMTEyLFxuICAgICAgMjIzLFxuICAgICAgMjA1LFxuICAgICAgMTM4LFxuICAgICAgMjQ2LFxuICAgICAgMTgxLFxuICAgICAgMTkwLFxuICAgICAgNTMsXG4gICAgICA4NCxcbiAgICAgIDEwNyxcbiAgICAgIDE4OSxcbiAgICAgIDI0NSxcbiAgICAgIDExOCxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDYzLFxuICAgICAgMjQxLFxuICAgICAgNzEsXG4gICAgICAxMCxcbiAgICAgIDIsXG4gICAgICAyNDMsXG4gICAgICA5MyxcbiAgICAgIDE5MCxcbiAgICAgIDEzLFxuICAgICAgODIsXG4gICAgICA2MyxcbiAgICAgIDcyLFxuICAgICAgMjksXG4gICAgICA0NCxcbiAgICAgIDEwNCxcbiAgICAgIDg5LFxuICAgICAgMjE4LFxuICAgICAgNDIsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1pLMUJMTVNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzgwNDc4NzM1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQyNTE1ODgxMzE2NDMyOjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4oCiXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3liOThVQkVPSzZwTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZMGdmOWRqbHg4N1dpbTA3dW51ZUplcUtEcmhlMzkvdlpLc3k1aEQwelcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxoTXhNeW1lVUxSMGdMU2pBSkZTc1BGRXI2UnJEQW16N0ZKSEZhbmZIVkNnTDRLNmVFWjJsamZlVXZXeEJnMXR3aWFmbTcxbFkzbVBIdlZqTkhFV0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZjMURXUWhGZ2RaS1E3S1lDc25GaFI3bjRIR3VGMGhQR2lKU2lwRTNjcXhaMVpRemtKWlRuVkZod1ljOXBoejB0RXVkaWdjTVNrcS9SVFc1TnIzSEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzgwNDc4NzM1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNTkxNDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJbERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlsRC5qc29uIjogIntcImtleURhdGFcIjpcInBiUWMwNy9rejdSWis5eDlFZTNqV1d2VTg1WmhDMWNGbWg0Q3JkUTRrR1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDE1MDkyMTQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIzNTkxNDQxMDhcIn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "Powered by Slade" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Boogeyman",
  packname: process.env.PACK_NAME || "Boogey is being weird",
  botname : process.env.BOT_NAME  || "★Boogeyman★",
  ownername:process.env.OWNER_NAME|| "Luhle Ngamlana",


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
