const _0x541dfe=_0x2932;(function(_0x4c0928,_0x17d016){const _0x2ab9e2=_0x2932,_0x28930b=_0x4c0928();while(!![]){try{const _0x31142a=-parseInt(_0x2ab9e2(0x1ed))/0x1+parseInt(_0x2ab9e2(0x1e5))/0x2+parseInt(_0x2ab9e2(0x20d))/0x3+-parseInt(_0x2ab9e2(0x20e))/0x4*(-parseInt(_0x2ab9e2(0x1e7))/0x5)+-parseInt(_0x2ab9e2(0x1fb))/0x6*(-parseInt(_0x2ab9e2(0x1d2))/0x7)+parseInt(_0x2ab9e2(0x1f8))/0x8+-parseInt(_0x2ab9e2(0x1e1))/0x9*(parseInt(_0x2ab9e2(0x1dc))/0xa);if(_0x31142a===_0x17d016)break;else _0x28930b['push'](_0x28930b['shift']());}catch(_0x3c8dec){_0x28930b['push'](_0x28930b['shift']());}}}(_0x54ee,0x26461));const fs=require('fs'),path=require(_0x541dfe(0x1d9)),yaml=require(_0x541dfe(0x203)),{Client,GatewayIntentBits,ActivityType,Collection,Events,REST,Routes}=require(_0x541dfe(0x206)),botConfig=yaml[_0x541dfe(0x1f4)](fs[_0x541dfe(0x1f9)](_0x541dfe(0x20f),_0x541dfe(0x1d1)));function _0x54ee(){const _0x5a37cc=['1659GRGFle','events','error','login','commandName','InteractionCreate','GuildMessageTyping','path','statSync','GuildPresences','10NmJbSE','execute','forEach','log','GuildWebhooks','6264180RcXrcP','Guilds','GuildMessages','No\x20command\x20matching\x20','532366DrweFF','\x20is\x20online!','60TtwBhs','push','commands','GuildBans','once','GuildVoiceStates','272134vpgPDN','GuildMessageReactions','token','endsWith','random','config','slashcommands','load','\x20was\x20found.','AutoModerationExecution','exports','2382752wrXpsF','readFileSync','isCommand','942eOZeUJ','join','GuildIntegrations','DirectMessageReactions','length','statusType','Er\x20is\x20een\x20fout\x20opgetreden,\x20probeer\x20het\x20over\x20enkele\x20seconden\x20opnieuw\x20of\x20vraag\x20om\x20hulp!','setPresence','js-yaml','username','GuildScheduledEvents','discord.js','name','get','readdirSync','reply','welcomeinteraction','GuildEmojisAndStickers','643269TItuFT','103088bLwloh','./config.yml','MessageContent','DirectMessageTyping','utf8'];_0x54ee=function(){return _0x5a37cc;};return _0x54ee();}require(_0x541dfe(0x1d3))['defaultMaxListeners']=0xc8;const client=new Client({'intents':[GatewayIntentBits[_0x541dfe(0x1e2)],GatewayIntentBits['GuildMembers'],GatewayIntentBits[_0x541dfe(0x1ea)],GatewayIntentBits[_0x541dfe(0x20c)],GatewayIntentBits[_0x541dfe(0x1fd)],GatewayIntentBits[_0x541dfe(0x1e0)],GatewayIntentBits['GuildInvites'],GatewayIntentBits[_0x541dfe(0x1ec)],GatewayIntentBits[_0x541dfe(0x1db)],GatewayIntentBits[_0x541dfe(0x1e3)],GatewayIntentBits[_0x541dfe(0x1ee)],GatewayIntentBits[_0x541dfe(0x1d8)],GatewayIntentBits['DirectMessages'],GatewayIntentBits[_0x541dfe(0x1fe)],GatewayIntentBits[_0x541dfe(0x1d0)],GatewayIntentBits[_0x541dfe(0x1cf)],GatewayIntentBits[_0x541dfe(0x205)],GatewayIntentBits['AutoModerationConfiguration'],GatewayIntentBits[_0x541dfe(0x1f6)]]});function _0x2932(_0x191b44,_0x5135c0){const _0x54ee31=_0x54ee();return _0x2932=function(_0x2932dc,_0x4b15be){_0x2932dc=_0x2932dc-0x1cf;let _0x24b93b=_0x54ee31[_0x2932dc];return _0x24b93b;},_0x2932(_0x191b44,_0x5135c0);}module[_0x541dfe(0x1f7)]=client,client[_0x541dfe(0x1f2)]=botConfig;const walkSync=(_0x2fe68a,_0x2d7397=[])=>{const _0x382830=_0x541dfe,_0x545a5d=fs[_0x382830(0x209)](_0x2fe68a);return _0x545a5d[_0x382830(0x1de)](_0x3b5212=>{const _0x40e70b=_0x382830,_0x3f438a=path[_0x40e70b(0x1fc)](_0x2fe68a,_0x3b5212);fs[_0x40e70b(0x1da)](_0x3f438a)['isDirectory']()?walkSync(_0x3f438a,_0x2d7397):_0x2d7397[_0x40e70b(0x1e8)](_0x3f438a);}),_0x2d7397;};client[_0x541dfe(0x1e9)]=new Collection(),client[_0x541dfe(0x1f3)]=new Collection();const eventsDir=path[_0x541dfe(0x1fc)](__dirname,_0x541dfe(0x20b)),eventFiles=walkSync(eventsDir)['filter'](_0x304391=>_0x304391[_0x541dfe(0x1f0)]('.js'));for(const file of eventFiles){const event=require(file);event[_0x541dfe(0x1eb)]?client['once'](event[_0x541dfe(0x207)],(..._0x511deb)=>event['execute'](..._0x511deb)):client['on'](event[_0x541dfe(0x207)],(..._0x519903)=>event['execute'](..._0x519903));}client[_0x541dfe(0x1eb)]('ready',async()=>{const _0x335c7d=_0x541dfe;console[_0x335c7d(0x1df)](client['user'][_0x335c7d(0x204)]+_0x335c7d(0x1e6));const _0x119eb1=async()=>{const _0x261f44=_0x335c7d,_0x478101=botConfig['status'],_0x51ddc4=botConfig[_0x261f44(0x200)],_0x13e47d=[{'type':ActivityType[_0x51ddc4],'name':'Made\x20by\x20liamdavids16.','status':'online'},{'type':ActivityType[_0x51ddc4],'name':''+_0x478101,'status':'online'}];let _0x1d416f=Math['floor'](Math[_0x261f44(0x1f1)]()*_0x13e47d[_0x261f44(0x1ff)]);client['user'][_0x261f44(0x202)]({'activities':[{'name':_0x13e47d[_0x1d416f][_0x261f44(0x207)],'type':_0x13e47d[_0x1d416f]['type']}],'status':_0x13e47d[_0x1d416f]['status']});};setInterval(_0x119eb1,0x927c0),_0x119eb1();}),client['on'](Events[_0x541dfe(0x1d7)],async _0xc15e4e=>{const _0x275037=_0x541dfe;if(!_0xc15e4e[_0x275037(0x1fa)]())return;const _0xbd3a0b=client[_0x275037(0x1f3)][_0x275037(0x208)](_0xc15e4e[_0x275037(0x1d6)]);if(!_0xbd3a0b){console[_0x275037(0x1d4)](_0x275037(0x1e4)+_0xc15e4e[_0x275037(0x1d6)]+_0x275037(0x1f5));return;}try{await _0xbd3a0b[_0x275037(0x1dd)](client,_0xc15e4e);}catch(_0xa52cca){console[_0x275037(0x1d4)](_0xa52cca),await _0xc15e4e[_0x275037(0x20a)]({'content':_0x275037(0x201),'ephemeral':!![]});}}),client[_0x541dfe(0x1d5)](botConfig[_0x541dfe(0x1ef)]);
