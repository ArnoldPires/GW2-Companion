document.querySelector('#gw2').addEventListener('click', lookAtAccount)

function lookAtAccount() {

  const apiAccount = fetch(`https://api.guildwars2.com/v2/account?access_token=${process.env.GW_API_KEY_Account}`);
  const apiChar = fetch(`https://api.guildwars2.com/v2/characters?access_token=${process.env.GW_API_KEY_CHAR}`);
  let apiWorld = fetch("https://api.guildwars2.com/v2/worlds?ids=1008")
  let apiGuildOne = fetch("https://api.guildwars2.com/v1/guild_details?guild_id=516E880E-BC84-E911-81AA-D66D0E22CAB6");
  let apiGuildTwo = fetch("https://api.guildwars2.com/v1/guild_details?guild_id=91675510-604A-E611-80D4-E4115BD19D24")
 
  Promise.all([apiAccount, apiWorld, apiGuildOne, apiGuildTwo, apiChar]).then(data => {
    return Promise.all(data.map(r => r.json()))
  }).then(([dataAccount, dataWorld, dataGuildOne, dataGuildTwo, dataChar]) => {
    document.querySelector("#ac").innerText = dataAccount.created;
    document.querySelector("#an").innerText = dataAccount.name;
    document.querySelector("#ea").innerText = dataAccount.access[0] + ", ";
    document.querySelector("#eaTwo").innerText = dataAccount.access[1] + ", ";
    document.querySelector("#eaThree").innerText = dataAccount.access[2];
    document.querySelector("#com").innerText = dataAccount.commander;
    document.querySelector("#fl").innerText = dataAccount.fractal_level;
    document.querySelector("#daily").innerText = dataAccount.daily_ap;
    document.querySelector("#monthly").innerText = dataAccount.monthly_ap;
    document.querySelector("#wvw").innerText = dataAccount.wvw_rank;

    document.querySelector("#world").innerText = "Jade Quarry";
    document.querySelector("#pop").innerText = 'Full'
    document.querySelector("#aa").innerText = '13 Years'
    
    document.querySelector("#gw").innerText = dataGuildOne.guild_name;
    document.querySelector("#tag").innerText = dataGuildOne.tag;

    document.querySelector("#gl").innerText = dataGuildTwo.guild_name;
    document.querySelector("#tagTwo").innerText = dataGuildTwo.tag;

    document.querySelector("#charOne").innerText = dataChar[0]
    document.querySelector("#charTwo").innerText = dataChar[1];
    document.querySelector("#charThree").innerText = dataChar[2];
    document.querySelector("#charFour").innerText = dataChar[3];
    document.querySelector("#charFive").innerText = dataChar[4];
    document.querySelector("#charSix").innerText = dataChar[5];
    document.querySelector("#charSeven").innerText = dataChar[6];
    document.querySelector("#charEight").innerText = dataChar[7];
    document.querySelector("#charNine").innerText = dataChar[8];
    document.querySelector("#charTen").innerText = dataChar[9];
    document.querySelector("#charEleven").innerText = dataChar[10];
    document.querySelector("#charTwelve").innerText = dataChar[11];
    document.querySelector("#charThirteen").innerText = dataChar[12];
    document.querySelector("#charFourteen").innerText = dataChar[13];
    document.querySelector("#charFifteen").innerText = dataChar[14];
    document.querySelector("#charSixteen").innerText = dataChar[15];
  })
  
}