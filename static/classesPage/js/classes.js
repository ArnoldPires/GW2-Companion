//Core Specs
document.getElementById('guardian').onclick = gwGuard
function gwGuard() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/guardianBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('.coreName').innerHTML = "Guardian";
  document.getElementById('coreVideo').src = "../video/characters/leonilda.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#8AF7F5";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='guardColors'>" + "Guardians" + "</span> are devoted fighters who protect their allies and smite their enemies by drawing from the power of their virtues. True <span class='guardColors'>" + "Guardians" + "</span> are brilliant tacticians and selfless defenders who know how to empower their allies to achieve victory.";
  document.getElementById('coreTwoP').innerHTML = "<span class='guardColors'>" + "Guardians" + "</span> are devoted fighters. Their profession mechanic are their virtues, which passively provide benefits to the <span class='guardColors'>" + "Guardian" + "</span>, and can be activated to lose the passive bonus and provide a more powerful effect to nearby allies. <span class='guardColors'>" + "Guardians" + "</span> act with conviction when smiting their foes and supporting their allies with their unshakeable faith. As a soldier profession, <span class='guardColors'>" + "Guardians" + "</span> wear heavy armor.";
  document.getElementById('coreThreeP').innerText = "";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='guardColors'>" + "Two-handed Greatsword" + "</span> — Offensive melee weapon for dealing high area damage, pulling multiple foes and enhancing allies.";
  document.getElementById('corewTwo').innerHTML = "<span class='guardColors'>" + "Two-handed Hammer" + "</span> — Defensive melee weapon capable of protecting allies with area damage, protection and enemy-warding.";
  document.getElementById('corewThree').innerHTML = "<span class='guardColors'>" + "Two-handed Staff" + "</span> — Supportive weapon that can be used to heal and enhance allies, or ward away enemies.";
  document.getElementById('corewFour').innerHTML = "<span class='guardColors'>" + "Main-hand Mace" + "</span> — Supportive melee weapon for healing allies and blocking attacks.";
  document.getElementById('corewFive').innerHTML = "<span class='guardColors'>" + "Main-hand Scepter" + "</span> — Offensive long-range weapon used to smite and immobilize foes.";
  document.getElementById('corewSix').innerHTML = "<span class='guardColors'>" + "Main-hand Sword" + "</span> — Balanced melee weapon with mobility and projectile defense options.";
  document.getElementById('corewSeven').innerHTML = "<span class='guardColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense.";
  document.getElementById('corewEight').innerHTML = "<span class='guardColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection.";
  document.getElementById('corewNine').innerHTML = "<span class='guardColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies.";
  document.getElementById('corewTen').innerHTML = "<span class='guardColors'>" + "Spear" + "</span> — Offensive mid-range weapon used to pull enemies and deal area damage.";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='guardColors'>" + "Zeal" + "</span> — Focuses on increasing damage and applying vulnerability. Enhances greatsword, scepter, and spirit weapon skills.";
  document.getElementById('stTwo').innerHTML = "<span class='guardColors'>" + "Radiance" + "</span> — Focuses on burning, critical hits, and resolution; based on Virtue of Justice. Enhances sword, torch, and signet skills.";
  document.getElementById('stThree').innerHTML = "<span class='guardColors'>" + "Valor" + "</span> — Focuses on blocking and toughness; based on Virtue of Courage. Enhances focus, shield, and meditation skills.";
  document.getElementById('stFour').innerHTML = "<span class='guardColors'>" + "Honor" + "</span> — Focuses on dodging, healing, and protection; based on Virtue of Resolve. Enhances mace, staff, and symbol and shout skills.";
  document.getElementById('stFive').innerHTML = "<span class='guardColors'>" + "Virtues" + "</span> — Focuses on virtues and resolution. Enhances hammer, consecration, and virtue skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Dragonhunter";
  document.getElementById('hotVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"I will set my trap and wait for them to come."';
  document.getElementById('hotTwoP').innerHTML = "The <span class='guardColors'>" + "Dragonhunter" + "</span> is a ranged, methodical hunter that uses various traps to ensnare their prey while picking them off with arrows of light. Their virtue skills become corporeal and more powerful in exchange for a longer casting time.";
  document.getElementById('hotThreeP').innerHTML = "<span class='guardColors'>" + "Traps" + "</span> — Traps placed on the ground that activate when a target walks over them.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='guardColors'>" + "Two-handed Longbow" + "</span> — Offensive long-range weapon, used to enhance allies or burn and control enemies (<span class='guardColors'>" + "Dragonhunter" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='guardColors'>" + "Dragonhunter" + "</span> — Gains access to longbows, a set of trap skills, and replaces the active virtues with ones that manifest in a physical form.";
  //POF
  document.querySelector('.pofName').innerHTML = "Firebrand";
  document.getElementById('pofVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Let the ancient magics of Vabbi burn away our foes."';
  document.getElementById('pofTwoP').innerHTML = "<span class='guardColors'>" + "Firebrands" + "</span> harness the power of ancient Vabbian tomes to burn away impurities and conquer their foes. Each tome contains raw, powerful magic and must be used with patience and care.";
  document.getElementById('pofThreeP').innerHTML = "<span class='guardColors'>" + "Mantra" + "</span> — Mantras are skills that cast instantly to hinder enemies or aid allies. Mantras have charges and recharge over time.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='guardColors'>" + "Main-hand Axe" + "</span> — Offensive melee weapon that can pull enemies and inflict conditions on foes. (<span class='guardColors'>" + "Firebrand" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='guardColors'>" + "Firebrand" + "</span> — Gains access to axes, a set of mantra skills, and replaces the active virtues with Tomes.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Willbender";
  document.getElementById('eodVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"I will silence the threat before it can fester."';
  document.getElementById('eodTwoP').innerHTML = "<span class='guardColors'>" + "Willbenders" + "</span> are protectors of the Canthan throne and fated <span class='guardColors'>" + "Guardians" + "</span> to the Weh no Su. Their sword arm is as strong as their loyalty—unflinching and ruthless. They are known for a swift hand and unmatched swordplay, striking before their foe has time to react.";
  document.getElementById('eodThreeP').innerHTML = "<span class='guardColors'>" + "Physical" + "</span> — Mobility skills that focus on damage and crowd control.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='guardColors'>" + "Off-hand Sword" + "</span> — Melee weapon with mobility. (<span class='guardColors'>" + "Willbender" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='guardColors'>" + "Willbender" + "</span> — Gains access to off hand swords, a set of physical skills, and replaces the virtues with ones that have no passive effect, but provide movement abilities when activated.";
}
document.getElementById('revenant').onclick = gwRev;
function gwRev() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/revenantBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('.coreName').innerHTML = "Revenant";
  document.getElementById('coreVideo').src = "../../video/characters/alissa.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#b50000";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "Heavily armored and equipped with the otherworldly powers of the Mists, <span class='RevColors'>" + "Revenants" + "</span> channel Tyria’s legends to slaughter foes, unleash chaos on the battlefield, and support their allies. This profession is exclusive to Guild Wars 2: Heart of Thorns™, Guild Wars 2: Path of Fire™, and Guild Wars 2: End of Dragons.";
  document.getElementById('coreTwoP').innerHTML = "<span class='RevColors'>" + "Revenants" + "</span> channel the power of the Mists. Their profession mechanic are their Legends, they commune with deceased legendary heroes and villains from Tyria's past, which aid them in battle. <span class='RevColors'>" + "Revenants" + "</span> commune with two legends, chanelling only one at a time, swapping between the two while in combat. Addtionally, <span class='RevColors'>" + "Revenant" + "</span> skills cost energy, a resource that replenishes over time or when switching legends.";
  document.getElementById('coreThreeP').innerHTML = "As a soldier profession, <span class='RevColors'>" + "Revenants" + "</span> wear heavy armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='RevColors'>" + "Main-hand Mace" + "</span> — Inflict various conditions on foes at a medium-close range. Works well with Legendary Demon Stance.";
  document.getElementById('corewTwo').innerHTML = "<span class='RevColors'>" + "Main-hand Sword" + "</span> — Quick and lethal strikes, grants high mobility during combat. Works well with Legendary Assassin Stance.";
  document.getElementById('corewThree').innerHTML = "<span class='RevColors'>" + "Off-hand Axe" + "</span> — Focuses on applying conditions and hindering enemy movement. Works well with Legendary Demon Stance.";
  document.getElementById('corewFour').innerHTML = "<span class='RevColors'>" + "Off-hand Sword" + "</span> — Delivers high burst damage, along with immobilize, chill, and slow. Works well with Legendary Assassin Stance.";
  document.getElementById('corewFive').innerHTML = "<span class='RevColors'>" + "Two-handed Hammer" + "</span> — Functions as a ranged weapon, good for ranged combat, area damage and projectile block. Works well with Legendary Dwarf Stance.";
  document.getElementById('corewSix').innerHTML = "<span class='RevColors'>" + "Two-handed Staff" + "</span> — Supportive weapon with close combat attacks, healing and crowd control. Works well with Legendary Centaur Stance.";
  document.getElementById('corewSeven').innerHTML = "<span class='RevColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense.";
  document.getElementById('corewEight').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection.";
  document.getElementById('corewNine').innerHTML = "<span class='RevColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies.";
  document.getElementById('corewTen').innerHTML = "<span class='RevColors'>" + "Underwater Spear" + "</span> — Hybrid approach weapon with varied ranged attacks, can be used as physical and condition-damage. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance.";
  document.getElementById('corewEleven').innerHTML = "<span class='RevColors'>" + "Underwater Trident" + "</span> — Ranged weapon that inflicts various conditions based on the wielder's legendary stance. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance.";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='RevColors'>" + "Corruption" + "</span> — Associated with Legendary Demon Stance. Focuses on applying condition damage (torment) and resisting condition damage. Benefits mace.";
  document.getElementById('stTwo').innerHTML = "<span class='RevColors'>" + "Retribution" + "</span> — Associated with Legendary Dwarf Stance. Focuses on reducing incoming strike and condition damage (resolution), and endurance recovery (vigor). Benefits dodging.";
  document.getElementById('stThree').innerHTML = "<span class='RevColors'>" + "Salvation" + "</span> — Associated with Legendary Centaur Stance. Focuses on healing and support. Benefits staff.";
  document.getElementById('stFour').innerHTML = "<span class='RevColors'>" + "Invocation" + "</span> — Focuses on critical strike chance (fury) and invoking legends."
  document.getElementById('stFive').innerHTML = "<span class='RevColors'>" + "Devastation" + "</span> — Associated with Legendary Assassin Stance. Focuses on improving damage to enemies and stealing health (Battle Scars). Benefits dual-wielding.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Herald";
  document.getElementById('hotVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"You have a destiny to fulfill."';
  document.getElementById('hotTwoP').innerHTML = "The <span class='RevColors'>" + "Herald" + "</span> invokes the legendary dragon Glint, gaining abilities that allow them to channel restorative energies in order to bolster their allies. These abilities can be maintained indefinitely as long as they have sufficient energy, and they can be stacked to gain multiple effects.";
  document.getElementById('hotThreeP').innerHTML = ""
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon used to help survivability for you and your allies. Works well with Legendary Dragon Stance. (<span class='RevColors'>" + "Herald" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='RevColors'>" + "Herald" + "</span> — Focuses on boon sharing based on the facets of Glint. Gains access to shields and the Legendary Dragon Stance.";
  //POF
  document.querySelector('.pofName').innerHTML = "Renegade";
  document.getElementById('pofVideo').src = "../../video/characters/alissa.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Legions, fall in!"';
  document.getElementById('pofTwoP').innerHTML = "The <span class='RevColors'>" + "Renegade" + "</span> channels the power of the legendary charr Kalla Scorchrazor, gaining abilities that help them control the battlefield. Summon warband members from the Mists to bolster your allies or crush your enemies.";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='RevColors'>" + "Two-handed Short bow" + "</span> — Inflict conditions and damage on foes at long-medium range. Works well with Legendary <span class='RevColors'>" + "Renegade" + "</span> Stance. (<span class='RevColors'>" + "Renegade" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='RevColors'>" + "Renegade" + "</span> — Commands members of the warband of Kalla Scorchrazor. Gains access to short bows and the Legendary <span class='RevColors'>" + "Renegade" + "</span> Stance.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Vindicator";
  document.getElementById('eodVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Once, we fought each other... Now we unite against a common enemy."'
  document.getElementById('eodTwoP').innerText = "Channel the Luxon and Kurzick heroes Archemorus and Saint Viktor to assault your enemies and protect your allies. Instead of dodging, you leap high into the air, crashing down to devastate your foes."
   document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='RevColors'>" + "Two-handed Greatsword" + "</span> — Delivers high damage to multiple targets, with vulnerability and chill. Works well with Legendary Alliance Stance. (<span class='RevColors'>" + "Vindicator" + "</span> specialization only)"
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='RevColors'>" + "Vindicator" + "</span> — Uses the twin legends for the Legendary Alliance Stance, and wields a Greatsword. Has only one dodge."
}
document.getElementById('warrior').onclick = gwWar
function gwWar() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/warriorBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('.coreName').innerHTML = "Warrior"
  document.getElementById('coreVideo').src="../../video/characters/dieselVan.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#c2a056";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='warColors'>" + "Warriors" + "</span> are masters of weaponry who rely on speed, strength, toughness, and heavy armor to survive in battle. Adrenaline fuels their offensive power—the longer <span class='warColors'>" + "Warriors" + "</span> stay in a fight, the more dangerous they become."
  document.getElementById('coreTwoP').innerHTML = "<span class='warColors'>" + "Warriors" + "</span> are masters of physical combat. Their profession mechanic is adrenaline, a resource gained through the glory of combat that <span class='warColors'>" + "Warriors" + "</span> then use to fuel a powerful burst attack unique to each of the plethora of weapons that they can wield."
  document.getElementById('coreThreeP').innerHTML = "These masters of arms face their enemies head on, their formidable battle presence inspires their allies, while they are always looking for the next enemy to pound into dust. Like other soldier professions, <span class='warColors'>" + "Warriors" + "</span> wear heavy armor."
  document.getElementById('coreFourP').innerHTML = "<span class='warColors'>" + "Warriors" + "</span> also have the highest selection of weapons to choose from compared to other professions, giving a good variety of play-styles to choose from."
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='warColors'>" + "Two-handed Greatsword" + "</span> — Sweeping, brutal attacks that carry the greatsword's momentum from foe to foe."
  document.getElementById('corewTwo').innerHTML = "<span class='warColors'>" + "Two-handed Hammer" + "</span> — Pound the ground with area of effect attacks that can stagger a group of enemies."
  document.getElementById('corewThree').innerHTML = "<span class='warColors'>" + "Two-handed Longbow" + "</span> — Massive fire damage used to keep hordes of enemies at bay from afar."
  document.getElementById('corewFour').innerHTML = "<span class='warColors'>" + "Two-handed Rifle" + "</span> — Unleash powerful ranged attacks against a single target."
  document.getElementById('corewFive').innerHTML = "<span class='warColors'>" + "Main-hand Axe" + "</span> — Able to quickly build up adrenaline and deliver powerful, high-damage attacks."
  document.getElementById('corewSix').innerHTML = "<span class='warColors'>" + "Main-hand Mace" + "</span> — Mainly a defensive weapon, the mace can also leave enemies vulnerable to further blows."
  document.getElementById('corewSeven').innerHTML = "<span class='warColors'>" + "Main-hand Sword" + "</span> — Quick and mobile attacks, with many opportunities to cause bleeding."
  document.getElementById('corewEight').innerHTML = "<span class='warColors'>" + "Off-hand Axe" + "</span> — Can be used to strike with both weapons simultaneously or storm with a whirling attack."
  document.getElementById('corewNine').innerHTML = "<span class='warColors'>" + "Off-hand Mace" + "</span> — Used to crush the armor of a foe or stun several enemies in front of you by slamming it on the ground."
  document.getElementById('corewTen').innerHTML = "<span class='warColors'>" + "Off-hand Shield" + "</span> — Used to bash foes or block incoming attacks."
  document.getElementById('corewEleven').innerHTML = "<span class='warColors'>" + "Off-hand Sword" + "</span> — Can be thrown at enemies or used to block and retaliate."
  document.getElementById('corewTwelve').innerHTML = "<span class='warColors'>" + "Off-hand Warhorn" + "</span> — Grants boons to allies, facilitating mobility."
  document.getElementById('corewThirteen').innerHTML = "<span class='warColors'>" + "Harpoon gun" + "</span> — Long-range mechanical weapon that inflicts various conditions."
  document.getElementById('corewFourteen').innerHTML = "<span class='warColors'>" + "Spear" + "</span> — Close-range aquatic weapon with several multi-hit attacks."
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='warColors'>" + "Strength" + "</span> — Focuses on dodging, physical (utility) skills and brute force. Enhances greatsword, hammer and physical skills."
  document.getElementById('stTwo').innerHTML = "<span class='warColors'>" + "Arms" + "</span> — Focused on critical hits and condition damage. Enhances sword and signet skills, as well as dual-wielding (i.e. off-hand)."
  document.getElementById('stThree').innerHTML = "<span class='warColors'>" + "Defense" + "</span> — Focuses on damage mitigation, stability and crowd control. Enhances shield, mace and stance skills."
  document.getElementById('stFour').innerHTML = "<span class='warColors'>" + "Tactics" + "</span> — Specializes in supporting allies via burst and shout abilities. Enhances warhorn and shout skills."
  document.getElementById('stFive').innerHTML = "<span class='warColors'>" + "Discipline" + "</span> — Focuses on improving adrenaline gain and weapon swapping. Enhances axe, longbow, rifle, harpoon gun, banners and burst skills."
  //HOT
  document.querySelector('.hotName').innerHTML = "Berserker"
  document.getElementById('hotVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('hotOneP').innerText = '"Rage. Fire. Destruction!"'
  document.getElementById('hotTwoP').innerHTML = "Embrace your primal side and enter <span class='warColors'>" + "Berserk" + "</span> mode to become an avatar of fire and destruction. Deal high damage but be careful that your recklessness doesn't result in an early grave."
  document.getElementById('hotThreeP').innerHTML = "<span class='warColors'>" + "Rage" + "</span> — Utility skills that deal direct damage and control and increase the duration of the <span class='warColors'>" + "Berserker's" + "</span> profession mechanic, <span class='warColors'>" + "Berserk" + "</span> mode."
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='warColors'>" + "Off-hand Torch" + "</span> — Reckless weapon of destruction; can even light warriors themselves ablaze, to become mobile fire fields. (<span class='warColors'>" + "Berserker" + "</span> specialization only)"
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='warColors'>" + "Berserker" + "</span> — Gains access to torches, a set of rage skills and <span class='warColors'>" + "Berserk" + "</span> mode, which replaces the standard burst skills with primal bursts."
  //POF
  document.querySelector('.pofName').innerHTML = "Spellbreaker"
  document.getElementById('pofVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('pofOneP').innerText = '"I counter your magics!"'
  document.getElementById('pofTwoP').innerText = "Act with precision and intent to strike at the very weave of magic to cut down your foe's enchantments while disrupting their ability to cast spells. Utilize the Full Counter skill to absorb attacks and retaliate with devastating force."
  document.getElementById('pofThreeP').innerHTML = "<span class='warColors'>" + "Meditations" + "</span> — Focus on crowd control, supporting the spellbreaker, and removing boons from enemies."
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='warColors'>" + "Main-hand Dagger" + "</span> — Fast attacks to take down your enemies, slow them or disable them. (<span class='warColors'>" + "Spellbreaker" + "</span> specialization only)"
  document.getElementById('pofWTwo').innerHTML = "<span class='warColors'>" + "Off-hand Dagger" + "</span> — Strike your enemies when they are off guard or reflect incoming projectiles. (<span class='warColors'>" + "Spellbreaker" + "</span> specialization only)"
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='warColors'>" + "Spellbreaker" + "</span> — Gains ability to wield double daggers, a set of meditation skills and the class mechanic Full Counter."
  //EOD
  document.querySelector('.eodName').innerHTML = "Bladesworn"
  document.getElementById('eodVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('eodOneP').innerText = '"Concentrate and execute."'
  document.getElementById('eodTwoP').innerHTML = "Dedicated to the art of wielding the dangerous Canthan gunsaber, <span class='warColors'>" + "Bladesworn" + "</span> employ the meditative Dragon Trigger technique to strike down their foes with devastating slashes and point-blank blasts."
  document.getElementById('eodThreeP').innerHTML = "<span class='warColors'>" + "Armament" + "</span> — Focus on recharges Ammunition skill, supporting <span class='warColors'>" + "Bladesworn's" + "</span> Dragon Trigger and flow."
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='warColors'>" + "Off-hand Pistol" + "</span> — Quick close combat shots that revolve around ammunition management. (<span class='warColors'>" + "Bladesworn" + "</span> specialization only)"
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='warColors'>" + "Bladesworn" + "</span> — Gains access to off-hand pistols, a set of armament skills and the class mechanic Dragon Slash."
}
document.getElementById('engineer').onclick = gwEngi;
function gwEngi() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/engineerBackground2.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Engineer";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/rambro.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ce7f4b";
    }
  document.getElementById('coreOneP').innerHTML = "<span class='engiColors'>" + "Engineers" + "</span> are technological and alchemical masterminds. Their profession mechanic is their tool belt, a second set of skills providing <span class='engiColors'>" + "Engineers" + "</span> with a plethora of options ensuring they always have the right tool for the job.";
  document.getElementById('coreTwoP').innerText = "They employ turrets, grenades, elixirs, gadgets and even wield their own Engineering Kits as weapons to overcome their enemies. ";
  document.getElementById('coreThreeP').innerHTML = "<span class='engiColors'>" + "Engineer" + "</span> don't have access to weapon swap during combat, instead they can freely swap between kits with no cooldown. Depending on which kit you swap too, determinds what kind of skills you will have access too.";
  document.getElementById('coreFourP').innerHTML = "As an adventurer profession, <span class='engiColors'>" + "Engineer" + "</span> wear medium armor.";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='engiColors'>" + "Two-handed Rifle" + "</span> — Blast foes out of the way or jump on them with a powerful jump attack. Rifles provide the engineer with the ability to manipulate their position as well as the opponent. With a quick interrupt, piercing ranged shots and a short-ranged bleed to deter foes who come too close, this weapon best suits the <span class='engiColors'>" + "Engineer" + "</span> who prefers to stay mobile.";
  document.getElementById('corewTwo').innerHTML = "<span class='engiColors'>" + "Main-hand Pistol" + "</span> — Poison, bleed or confuse enemies with variety of ranged shots. Pistols allow the <span class='engiColors'>" + "Engineer" + "</span> to quickly stack a variety of damaging conditions in a short amount of time. This weapon is ideal for <span class='engiColors'>" + "Engineers" + "</span> who like to focus on condition damage.";
  document.getElementById('corewThree').innerHTML = "<span class='engiColors'>" + "Off-hand Pistol" + "</span> — Spread sticky glue on the ground or fire a jet of flames from your pistol, providing further condition damage and the option of immobilizing foes.";
  document.getElementById('corewFour').innerHTML = "<span class='engiColors'>" + "Off-hand Shield" + "</span> — Provides protection from ranged and melee attacks and can be used to push foes back with a magnetic pulse. Can also be thrown like a boomerang for a 2-hit ranged attack. Good for <span class='engiColors'>" + "Engineers" + "</span> who value defense over pure offense while wielding a pistol, sword, or mace";
  document.getElementById('corewFive').innerHTML = "<span class='engiColors'>" + "Under water Harpoon gun" + "</span> — Ranged weapon suitable for controlling foes.";
  document.getElementById('corewSix').innerHTML = "";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='engiColors'>" + "Explosives" + "</span> — Focuses on damage increase, dodging, vulnerability, and Explosions, including bombs, grenades, and mines. May enhance the Bomb Kit and the Grenade Kit.";
  document.getElementById('stTwo').innerHTML = "<span class='engiColors'>" + "Firearms" + "</span> — Focuses on critical hits and conditions, especially bleeding and burning. May enhance pistol, rifle, harpoon gun, and Flamethrower skills.";
  document.getElementById('stThree').innerHTML = "<span class='engiColors'>" + "Inventions" + "</span> — Focuses on healing, defense, and cleansing conditions. May enhance shield and turret skills.";
  document.getElementById('stFour').innerHTML = "<span class='engiColors'>" + "Alchemy" + "</span> — Focuses on gaining boons and support. May enhance elixir and Med Kit skills.";
  document.getElementById('stFive').innerHTML = "<span class='engiColors'>" + "Tools" + "</span> — Focuses on tool belt skills and endurance. May enhance gadget and Tool Kit skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Scrapper";
  document.getElementById('hotVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('hotOneP').innerText = "'I'll patch you right on up'";
  document.getElementById('hotTwoP').innerText = "You can aid multiple allies in large-scale battles with massive area-of-effect skills, healing and providing superspeed and other necessary boons. They are also adept at crowd control.";
  document.getElementById('hotThreeP').innerHTML = "<span class='engiColors'>" + "Wells" + "</span> — Scrappers can use gyros to surround themselves with mobile wells that follow them around, either aiding allies or harming enemies.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='engiColors'>" + "Two-handed Hammer" + "</span> — Focuses on aoe damage, can reflect projectiles, evade, block, and disrupt opponents, perfect for a bruiser playstyle. (<span class='engiColors'>" + "Scrapper" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='engiColors'>" + "Scrapper" + "</span> — Focuses on combat durability through barrier, gives access to hammer, wells, and replaces the fifth tool belt skill with Function Gyro, which can revive allies and finish foes on its own.";
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='engiColors'>" + "Holosmith" + "</span>";
  document.getElementById('pofVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('pofOneP').innerText = "'Burnin' up!'";
  document.getElementById('pofTwoP').innerText = "Use your Photon Forge to generate weapons of pure, blinding light, cauterizing your enemies—but be careful not to use these weapons for too long, or you'll overheat.";
  document.getElementById('pofThreeP').innerHTML = "<span class='engiColors'>" + "Exceed" + "</span> — Powerful holographic weapons and tools created using solidified sunlight, or hard light, that benefit from the amount of accumulated heat in the Photon Forge.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='engiColors'>" + "Main-hand Sword" + "</span> — Cut through enemies' defenses, launch blades of concentrated light that bleed them, or jump at them with the speed of light while gaining quickness. Sword skills gain bonus effects based on your current heat level. (<span class='engiColors'>" + "Holosmith" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='engiColors'>" + "Holosmith" + "</span> — Enables the Photon Forge, which replaces the fifth tool belt skill and harnesses sunlight to create holographic weapons to cauterize enemies while storing Heat. Gives access to mainhand sword and Exceed skills, both benefiting from stored Heat.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Mechanist";
  document.getElementById('eodVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"All systems go. Mech cleared for launch!"';
  document.getElementById('eodTwoP').innerHTML = "The <span class='engiColors'>" + "Engineer" + "</span> is an innovator and master of jade tech, battling alongside a mech of their own creation. Customize your mech and use it to crush your enemies—together, you're unstoppable";
  document.getElementById('eodThreeP').innerHTML = "<span class='engiColors'>" + "Signets" + "</span> — grant passive effects while equipped, and produce a powerful effect at the <span class='engiColors'>" + "Mechanists" + "</span> or the mechs location when activated. The passive effect is lost while the signet recharges.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='engiColors'>" + "Main-hand Mace" + "</span> — Smash your targets with heavy blows confusing them and applying barrier to allies, leap towards your foes, or launch a exploding fist that stuns the first target it hits. (Mechanist specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='engiColors'>" + "Mechanist" + "</span> — Enables the Jade Mech CJ-1 with Mech Commands which replace tool belt skills, gives access to mace and signets.";
}
document.getElementById('ranger').onclick = gwRan;
function gwRan() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/rangerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Ranger";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/noire.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#94c34a";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='rangeColors'>" + "Rangers" + "</span> are defenders of nature. Their profession mechanic is their loyal pets, animal companions that <span class='rangeColors'>" + "Rangers" + "</span> tame and train. ";
  document.getElementById('coreTwoP').innerHTML = "<span class='rangeColors'>" + "Rangers" + "</span> and their pets fight as one, wielding the power of nature to empower their allies, enduring combat with their wilderness survival skills, concealing traps anticipating fights, and overwhelming their enemies with the strength of the pack.";
  document.getElementById('coreThreeP').innerHTML = "As an adventurer profession, <span class='rangeColors'>" + "Rangers" + "</span> wear medium armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='rangeColors'>" + "Two-handed Greatsword" + "</span>— A brute force, heavy-damage weapon with emphasis on countering and evasion.";
  document.getElementById('corewTwo').innerHTML = "<span class='rangeColors'>" + "Two-handed Longbow" + "</span> — Powerful, long-range weapon used for Rapid Fire strikes and AoE barrages.";
  document.getElementById('corewThree').innerHTML = "<span class='rangeColors'>" + "Two-handed Shortbow" + "</span> — Quick skirmishing weapon relying on movement, positioning, and conditions for quick kills.";
  document.getElementById('corewFour').innerHTML = "<span class='rangeColors'>" + "Main-hand Axe" + "</span>— Medium ranged throwing weapon which can ricochet off a target or can toss a cluster of axes.";
  document.getElementById('corewFive').innerHTML = "<span class='rangeColors'>" + "Main-hand Sword" + "</span> — Mobile melee strikes which can be used to distance the <span class='rangeColors'>" + "Ranger" + "</span> from the target or surprise them from behind.";
  document.getElementById('corewSix').innerHTML = "<span class='rangeColors'>" + "Off-hand Axe" + "</span> — Enter a stance to reflect incoming strikes or throw the axe for a boomerang effect.";
  document.getElementById('corewSeven').innerHTML = "<span class='rangeColors'>" + "Off-hand Dagger" + "</span> — Used as a crippling ranged attack, or a quick poisonous stab for melee.";
  document.getElementById('corewEight').innerHTML = "<span class='rangeColors'>" + "Off-hand Torch" + "</span> — Throw the torch at enemies for burning damage, or light areas on fire";
  document.getElementById('corewNine').innerHTML = "<span class='rangeColors'>" + "Off-hand Warhorn" + "</span> — Used to deal damage over time or buff allies.";
  document.getElementById('corewTen').innerHTML = "<span class='rangeColors'>" + "Under water Harpoon Gun" + "</span> — Use ranged attacks to strike multiple foes and makes use of the underwater environment.";
  document.getElementById('corewEleven').innerHTML = "<span class='rangeColors'>" + "Under water spear" + "</span>— Keep foes at bay with close range spear stabs and swipes.";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='rangeColors'>" + "Marksmanship" + "</span> — Focuses on power damage and starting fights with burst damage. May enhance longbow and harpoon gun, and signet skills.";
  document.getElementById('stTwo').innerHTML = "<span class='rangeColors'>" + "Skirmishing" + "</span> — Focuses on critical hits for both power and condition damage, and enhances weapon swapping. May enhance sword, short bow, and trap skills.";
  document.getElementById('stThree').innerHTML = "<span class='rangeColors'>" + "Wilderness Survival" + "</span> — Focuses on defence, protection from conditions, and inflicting conditions. May enhance torch and dagger, and survival skills.";
  document.getElementById('stFour').innerHTML = "<span class='rangeColors'>" + "Nature Magic" + "</span> — Focuses on support through healing and boon generation. May enhance warhorn and spirit skills.";
  document.getElementById('stFive').innerHTML = "<span class='rangeColors'>" + "Beastmastery" + "</span> — Focuses on improving your pets, their beast skill, and pet swapping. May enhance greatsword, axe, and command skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Druid";
  document.getElementById('hotVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"The stars, earth, and sky above will heal us"';
  document.getElementById('hotTwoP').innerHTML = "<span class='rangeColors'>" + "Druids" + "</span> utilize the power of nature and the stars above to heal their allies, using glyph skills to channel powerful boons and protective utilities. By generating your astral force, you can channel your Celestial Avatar form.";
  document.getElementById('hotThreeP').innerHTML = "<span class='rangeColors'>" + "Glyph" + "</span> — Double-faced skills focused on support that interact with the <span class='rangeColors'>" + "Druids" + "</span> profession mechanic of Celestial Avatar.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='rangeColors'>" + "Two-handed Staff" + "</span> — A support oriented long range weapon. (<span class='rangeColors'>" + "Druid's" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='rangeColors'>" + "Druid" + "</span> — Focuses on support, gives access to staff, glyph skills, and the ability to transform into a Celestial Avatar.";
  //POF
  document.querySelector('.pofName').innerHTML = "Soulbeast";
  document.getElementById('pofVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Two hearts fighting as one"';
  document.getElementById('pofTwoP').innerHTML = "<span class='rangeColors'>" + "Soulbeasts" + "</span> gain the ability to merge with their pet, channeling their power and the ability to use their beast skills. One with your pet, you are fierce in melee-focused combat.";
  document.getElementById('pofThreeP').innerHTML = "<span class='rangeColors'>" + "Stance" + "</span> — Skills that grant the <span class='rangeColors'>" + "Soulbeast" + "</span> positive effects over a few seconds, inspired by the strengths of the depicted animals.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='rangeColors'>" + "Main-hand Dagger" + "</span> — A swift melee weapon designed to overwhelm with conditions. (<span class='rangeColors'>" + "Soulbeast" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='rangeColors'>" + "Druid" + "</span> is an elite specialization for the <span class='rangeColors'>" + "Ranger" + "</span> that focuses on glyph skills and adds a new astral force mechanic that allows them to become a celestial avatar. It also allows the <span class='rangeColors'>" + "Ranger" + "</span> to use a staff.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Untamed";
  document.getElementById('eodVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Unleashed, unbound—the rage of the Echovald Forest lives in us."';
  document.getElementById('eodTwoP').innerHTML = "The <span class='rangeColors'>" + "Untamed" + "</span> share a primal bond with nature through their pet, juggling control of raw power back and forth to defeat foes—your pet uses debilitating nature-based skills to weaken enemies, then relinquishes that power to you for the final strike.";
  document.getElementById('eodThreeP').innerHTML = "<span class='rangeColors'>" + "Cantrip" + "</span> — Skills that focus on survivability and crowd control. They provide offensive boons when the <span class='rangeColors'>" + "Ranger" + "</span> is unleashed, and defensive when the pet is unleashed.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='rangeColors'>" + "Two-handed Hammer" + "</span> — A melee weapon, made to control the enemies. (<span class='rangeColors'>" + "Untamed" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='rangeColors'>" + "Untamed" + "</span> — Focuses on greater pet control, gives access to hammer, cantrip skills, and the ability to enter Unleashed.";
}
document.getElementById('thief').onclick = gwThief
function gwThief() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/thiefBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Thief";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/eveingaura.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#974550";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='thiefColors'>" + "Thieves" + "</span> are masters of shadows and assassination. Their profession mechanics are Steal and initiative.";
  document.getElementById('coreTwoP').innerText = "With Steal, thieves teleport to their target and create a makeshift weapon inspired by that enemy to gain the upper hand. Initiative, on the other hand, makes their weapon skills have no recharge whatsoever and instead each skill costs a certain amount of initiative to cast.";
  document.getElementById('coreThreeP').innerHTML = "<span class='thiefColors'>" + "Thieves" + "</span> are elusive and hard to catch, teleporting through the shadows by shadowstepping.";
  document.getElementById('coreFourP').innerHTML = "They are experts in stealth, becoming fully invisible to then surprise their enemies with a powerful Stealth Attack unique to each of their weapons. As an adventurer profession, <span class='thiefColors'>" + "Thieves" + "</span> wear medium armor.";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='thiefColors'>" + "Two-handed Shortbow" + "</span> — Ranged mobile weapon with AoE attacks and shadow step ability.";
  document.getElementById('corewTwo').innerHTML = "<span class='thiefColors'>" + "Main-hand Dagger" + "</span> — Jump on a foe, attack quickly and inflict many conditions on them.";
  document.getElementById('corewThree').innerHTML = "<span class='thiefColors'>" + "Main-hand Pistol" + "</span> — Ranged shots from pistols leave enemies vulnerable to following attacks.";
  document.getElementById('corewFour').innerHTML = "<span class='thiefColors'>" + "Main-hand Sword" + "</span> — Flanking sword attacks provide extra evasiveness and control enemy movement.";
  document.getElementById('corewFive').innerHTML = "<span class='thiefColors'>" + "Off-hand Dagger" + "</span> — Gives access to skills that allow quick escape by crippling the enemy or vanishing from sight.";
  document.getElementById('corewSix').innerHTML = "<span class='thiefColors'>" + "Off-hand Pistol" + "</span> — Ranged weapon used to quickly retreat or to daze the target by a shot to the head or a pistol whip.";
  document.getElementById('corewSeven').innerHTML = "<span class='thiefColors'>" + "Under water Harpoon Gun" + "</span> — Bombard enemy with ranged attacks - good for kiting with several attacks that cause movement impairment.";
  document.getElementById('corewEight').innerHTML = "<span class='thiefColors'>" + "Under water Spear" + "</span> — Rapid melee counterattacks spiced up with the usual thief tricks.";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='thiefColors'>" + "Deadly Arts" + "</span> — Focuses on use of poisoned, and exploiting enemies with low health. Enhances dagger skills.";
  document.getElementById('stTwo').innerHTML = "<span class='thiefColors'>" + "Critical Strikes" + "</span> — Focuses on critical hits and critical damage. Enhances pistol, harpoon gun, and signet skills.";
  document.getElementById('stThree').innerHTML = "<span class='thiefColors'>" + "Shadow Arts" + "</span> — Focuses on stealth and blinding enemies. Enhances venom and deception skills.";
  document.getElementById('stFour').innerHTML = "<span class='thiefColors'>" + "Acrobatics" + "</span> — Focuses on dodging, mobility, and healing. Enhances sword and spear.";
  document.getElementById('stFive').innerHTML = "<span class='thiefColors'>" + "Trickery" + "</span> — Focuses on stealing and managing initiative. Enhances trick and steal skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Daredevil";
  document.getElementById('hotVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"Try keepin up with this!"';
  document.getElementById('hotTwoP').innerHTML = "The <span class='thiefColors'>" + "Daredevil" + "</span> is a master of maneuverability and mobility. Gaining an additional endurance bar and the ability to customize their dodge roll, the <span class='thiefColors'>" + "Daredevil" + "</span> has the tools to become a melee whirlwind of destruction.";
  document.getElementById('hotThreeP').innerHTML = "<span class='thiefColors'>" + "Physical" + "</span> — Skills that focus on damage and crowd control.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='thiefColors'>" + "Two-handed Staff" + "</span> — Gain access to regular area-of-effect melee damage. (<span class='thiefColors'>" + "Daredevil" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='thiefColors'>" + "Daredevil" + "</span> — Gains access to staves, a set of physical skills, replace the steal mechanic with swipe, increased endurance bar, and additional dodge mechanics.";
  //POF
  document.querySelector('.pofName').innerHTML = "Deadeye";
  document.getElementById('pofVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"One shot, one kill."';
  document.getElementById('pofTwoP').innerHTML = "Take aim with your rifle and mark your enemies for assassination. The <span class='thiefColors'>" + "Deadeye" + "</span> specializes in long-range combat and picking off enemies before they can get close. By marking your target, you gain increased damage against them as you wear them down before taking the final shot.";
  document.getElementById('pofThreeP').innerHTML = "<span class='thiefColors'>" + "Cantrip" + "</span> — Skills that interact with the <span class='thiefColors'>" + "Deadeye's" + "</span> profession mechanic, <span class='thiefColors'>" + "Deadeye's" + "</span> Mark, to crowd control enemies, and provide mobility and stealth to the <span class='thiefColors'>" + "Deadeye" + "</span>.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='thiefColors'>" + "Two-handed Rifle" + "</span> — Long ranged sniper that rewards carefully calculated shots with a powerful burst. (<span class='thiefColors'>" + "Deadeye" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='thiefColors'>" + "Deadeye" + "</span> — Gains access to rifles, a set of cantrips, and replace the steal mechanic with <span class='thiefColors'>" + "Deadeye's" + "</span> marks.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Specter";
  document.getElementById('eodVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Join me—the darkness is our ally."';
  document.getElementById('eodTwoP').innerHTML = "The <span class='thiefColors'>" + "Specter" + "</span> harnesses the power of shadow magic to debilitate enemies and preserve the health of allies. Enter Shadow Shroud to link with friends and fuel the destruction of your foes.";
  document.getElementById('eodThreeP').innerHTML = "<span class='thiefColors'>" + "Wells" + "</span> — Skills that focus on debilitating enemies or supporting allies. All these skills also shadowstep.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='thiefColors'>" + "Main-hand Scepter" + "</span> — Support an ally with boons and barrier or inflict conditions on an enemy. (<span class='thiefColors'>" + "Specter" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='thiefColors'>" + "Specter" + "</span> — Gains access to scepters, a set of wells, replace the steal mechanic with siphon, and gain shadow shroud.";
}
document.getElementById('elementalist').onclick = gwEle
function gwEle() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/elementalistBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Elementalist";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/rayden.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#f77a84";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='eleColors'>" + "Elementalists" + "</span> are master spell casters. Their profession mechanic are their four attunements: Fire, Water, Air, and Earth. They wield each of these elements to defeat their foes and aid their allies.";
  document.getElementById('coreTwoP').innerHTML = "Albeit lacking in defense, <span class='eleColors'>" + "Elementalists" + "</span> are very versatile and have access to a plethora of skills, as attuning to the different elements also changes their skills.";
  document.getElementById('coreThreeP').innerHTML = "<span class='eleColors'>" + "Elementalists" + "</span> can also manifest the elements as conjured weapons with their own set of skills, or as allied elementals to aid them in combat. As a scholar profession, <span class='eleColors'>" + "Elementalists" + "</span> wear light armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='eleColors'>" + "Two-handed Staff" + "</span> — Can cast different area effect spells with direct or lasting effects.";
  document.getElementById('corewTwo').innerHTML = "<span class='eleColors'>" + "Main-hand Dagger" + "</span> — Emphasizes close range, heavy damage spells.";
  document.getElementById('corewThree').innerHTML = "<span class='eleColors'>" + "Main-hand Scepter" + "</span> — Casts various single and multiple target, medium range spells.";
  document.getElementById('corewFour').innerHTML = "<span class='eleColors'>" + "Off-hand Dagger" + "</span> — Provides powerful close range abilities suitable for offense as well as abilities designed for defense.";
  document.getElementById('corewFive').innerHTML = "<span class='eleColors'>" + "Off-hand Focus" + "</span> — Provides supportive spells in form of energy shields, disabling snares and defensive area effects.";
  document.getElementById('corewSix').innerHTML = "<span class='eleColors'>" + "Under water Trident" + "</span> — Long range magical weapon for manipulating attuned elements underwater.";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='eleColors'>" + "Fire" + "</span> — Focuses on fire magic, increased damage, and burning. Enhances fire weapon skills and may enhance conjured weapon skills.";
  document.getElementById('stTwo').innerHTML = "<span class='eleColors'>" + "Air" + "</span> — Focuses on air magic, movement speed, critical hits, and critical damage. Enhances air weapon skills and may enhance glyph skills.";
  document.getElementById('stThree').innerHTML = "<span class='eleColors'>" + "Earth" + "</span> — Focuses on earth magic, defense, and bleeding. Enhances earth weapon skills and may enhance signet skills.";
  document.getElementById('stFour').innerHTML = "<span class='eleColors'>" + "Water" + "</span> — Focuses on water magic, healing, and exploiting Vulnerability on foes. Enhances water weapon skills and may enhance cantrip skills.";
  document.getElementById('stFive').innerHTML = "<span class='eleColors'>" + "Arcane" + "</span> — Focuses on boons and switching attunements. May enhance arcane skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Tempest";
  document.getElementById('hotVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"My power, coming to a peak!"';
  document.getElementById('hotTwoP').innerHTML = "Overload your attunements to become a powerful singularity of elemental power, shouting at your foes and calling upon your allies. The <span class='eleColors'>" + "Tempest" + "</span> specialization offers superior area-of-effect abilities in exchange for a slower attunement rotation.";
  document.getElementById('hotThreeP').innerHTML = "<span class='eleColors'>" + "Shout" + "</span> — Skills that take effect in an area around the tempest, dealing damage while also giving an aura to the <span class='eleColors'>" + "Tempest" + "</span> and nearby allies.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='eleColors'>" + "Off-hand Warhorn" + "</span> — Provides assistance to you in both supporting your allies and creating disruptive areas for enemies. (<span class='eleColors'>" + "Tempest" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='eleColors'>" + "Tempest" + "</span> — Gain access to warhorns, a set of shout skills, and the ability to overload attunements for powerful effects.";
  //POF
  document.querySelector('.pofName').innerHTML = "Weaver";
  document.getElementById('pofVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"The elements are twisting, turning—melding as one."';
  document.getElementById('pofTwoP').innerHTML = "The <span class='eleColors'>" + "Weaver" + "</span> gains the ability to combine two different elements and wield them simultaneously. Rapidly combine elements to create a fast and dynamic fighting style that dances in and out of combat.";
  document.getElementById('pofThreeP').innerHTML = "<span class='eleColors'>" + "Stance" + "</span> — Skills that provide positive effects for the <span class='eleColors'>" + "Weaver" + "</span>, or do damage to nearby enemies.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='eleColors'>" + "Main-hand Sword" + "</span> — Melee brawling weapon that channels various elements through its blade. (<span class='eleColors'>" + "Weaver" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='eleColors'>" + "Weaver" + "</span> — Gain access to swords, a set of stance skills, and the ability to wield dual attunements.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Catalyst";
  document.getElementById('eodVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"My power shapes and bends the world."';
  document.getElementById('eodTwoP').innerText = "Master cutting-edge Canthan technology to wield nature's forces with scientific precision. Imbue the elements into your jade-tech Sphere, creating wells of immense power.";
  document.getElementById('eodThreeP').innerHTML = "<span class='eleColors'>" + "Augment" + "</span> — Skills that interact with <span class='eleColors'>" + "Catalyst's" + "</span> profession mechanic, Jade Sphere, providing positive effects to the <span class='eleColors'>" + "Catalyst" + "</span>.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='eleColors'>" + "Two-handed Hammer" + "</span> — Focuses on juggling between close ranged and medium ranged attacks. Built around using Grand Finale. (<span class='eleColors'>" + "Catalyst" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='eleColors'>" + "Catalyst" + "</span> — Gain access to hammers, a set of augment skills, and the ability to use jade spheres that grant boons to allies.";
}
document.getElementById('mesmer').onclick = gwMes
function gwMes() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/mesmerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Mesmer";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/thugMagic.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#d532ff";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='mesColors'>" + "Mesmer" + "</span> are masters of deception and misdirection. Their profession mechanic are Illusions, ethereal creations that look like the mesmer employed to both fool their enemies and attack them.";
  document.getElementById('coreTwoP').innerHTML = "<span class='mesColors'>" + "Mesmer" + "</span> then shatter their illusions in the blink of an eye to annihilate their dumbfounded enemies. As a scholar profession, <span class='mesColors'>" + "Mesmers" + "</span> wear light armor.";
  document.getElementById('coreThreeP').innerHTML = "As masters of misdirection, <span class='mesColors'>" + "Mesmers" + "</span> create Illusions to help them in combat. They come in two types: Phantasms and clones.";
  document.getElementById('coreFourP').innerHTML = "<span class='mesColors'>" + "Phantasms:" + "</span> phantasm are semi-transparent ethereal creations focused on doing damage. <span class='mesColors'>" + "Clones:" + "</span> clones are perfect copies of the <span class='mesColors'>" + "Mesmer" + "</span> whose main function is to confuse enemies, who will not be able to differentiate the <span class='mesColors'>" + "Mesmer" + "</span> from their clones. ";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='mesColors'>" + "Two-handed Greatsword" + "</span> — Long-ranged weapon with powerful area damage. Its clones and phantasms will be summoned at target's position to distract the enemies.";
  document.getElementById('corewTwo').innerHTML = "<span class='mesColors'>" + "Two-handed Staff" + "</span> — Long-ranged weapon mainly for defense that randomly grants conditions to foes and boons to allies. Its clones and phantasms will be summoned at the <span class='mesColors'>" + "Mesmer's" + "</span> position and attack from range.";
  document.getElementById('corewThree').innerHTML = "<span class='mesColors'>" + "Main-hand Scepter" + "</span> — Medium-ranged weapon that creates clones quickly, blocks enemy attacks, and inflicts various damaging conditions.";
  document.getElementById('corewFour').innerHTML = "<span class='mesColors'>" + "Main-hand Sword" + "</span> — Melee weapon that engages fights quickly and evasively.";
  document.getElementById('corewFive').innerHTML = "<span class='mesColors'>" + "Off-hand Focus" + "</span> — Improves your movement speed and impedes the enemies'. Its phantasm has a powerful multi-hit whirl that also protects from projectiles.";
  document.getElementById('corewSix').innerHTML = "<span class='mesColors'>" + "Off-hand Pistol" + "</span> — Disable multiple enemies at once. Its phantasm causes high multi-hit damage against a target.";
  document.getElementById('corewSeven').innerHTML = "<span class='mesColors'>" + "Off-hand Sword" + "</span> — Blocks enemy attacks. Its phantasm deals very high damage to enemies in melee range.";
  document.getElementById('corewEight').innerHTML = "<span class='mesColors'>" + "Off-hand Torch" + "</span> — Gives an area blind and burn attack which also makes you briefly stealthed. Its phantasm burns, confuses, and interrupts enemies.";
  document.getElementById('corewNine').innerHTML = "<span class='mesColors'>" + "Under water Spear" + "</span> — Melee weapon that maneuvers yourself and the enemies.";
  document.getElementById('corewTen').innerHTML = "<span class='mesColors'>" + "Under water Trident" + "</span> — Long-ranged weapon that applies various conditions and boons.";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='mesColors'>" + "Domination" + "</span> — Focuses on removing boons, applying vulnerability, and interrupting targets. May enhance greatsword and phantasm skills.";
  document.getElementById('stTwo').innerHTML = "<span class='mesColors'>" + "Dueling" + "</span> — Focuses on critical hits. May increase the <span class='mesColors'>" + "Mesmer's" + "</span> elusiveness, and enhance pistol and sword skills.";
  document.getElementById('stThree').innerHTML = "<span class='mesColors'>" + "Chaos" + "</span> — Focuses on defense, gaining boons, and increasing boon duration and condition duration. May enhance staff and trident, and manipulation skills.";
  document.getElementById('stFour').innerHTML = "<span class='mesColors'>" + "Inspiration" + "</span> — Focuses on defense, support, and healing. May enhance focus, signet, and mantra skills.";
  document.getElementById('stFive').innerHTML = "<span class='mesColors'>" + "Illusions" + "</span> — Focuses on creating and shattering clones, reduces the recharge of shatter skills. May enhance Shatter, Phantasm, scepter and torch skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Chronomancer";
  document.getElementById('hotVideo').src = "../../video/characters/thugMagic.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"And once more..."';
  document.getElementById('hotTwoP').innerHTML = "<span class='mesColors'>" + "Chronomancers" + "</span> manipulate the battlefield through the use of wells, creating brief ripples in time that give their allies various boons and slowing your enemies. They also have access to the powerful alacrity boon, reducing skill cooldowns.";
  document.getElementById('hotThreeP').innerHTML = "<span class='mesColors'>" + "Wells" + "</span> — Wells are placed on the ground and tick down to provide positive effects to allies, or negatives to enemies, before exploding to create a more powerful effect.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='mesColors'>" + "Off-hand Shield" + "</span> — Offers alacrity, quickness, and stuns. Its phantasm slows foes and provides protection to nearby allies. (<span class='mesColors'>" + "Chronomancer" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='mesColors'>" + "Chronomancer" + "</span> — Focuses on time control through alacrity, quickness, and slow. Gives access to shield, well skills, and replaces Shatter skills with <span class='mesColors'>" + "Chronomancer" + "</span> shatters, including replacing Distortion with Continuum Split, enabling the <span class='mesColors'>" + "Chronomancer" + "</span> to travel back in time.";
  //POF
  document.querySelector('.pofName').innerHTML = "Mirage";
  document.getElementById('pofVideo').src = "../../video/characters/thugMagic.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"A ripple in the sand, you see me no more"';
  document.getElementById('pofTwoP').innerText = "Cloaking themselves in rich desert sands, the mirage can execute skills and strike their foes while simultaneously dodging incoming attacks. You dance between your illusions, taking their place and deceiving your enemies.";
  document.getElementById('pofThreeP').innerHTML = "<span class='mesColors'>" + "Deception" + "</span> — Deceptions focus on making the mirage even more elusive and confounding enemies.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='mesColors'>" + "Main-hand Axe" + "</span> — Melee weapon that inflicts various damaging conditions, and allows you to retarget your clones. (<span class='mesColors'>" + "Mirage" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='mesColors'>" + "Mirage" + "</span> — Focuses on condition damage and elusiveness. Gives access to mainhand axe, deception skills, and replaces dodge with access to Mirage Cloak, during which ambush skills may be used.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Virtuoso";
  document.getElementById('eodVideo').src = "../../video/characters/thugMagic.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"I imagine blades, you bleed."';
  document.getElementById('eodTwoP').innerHTML = "The <span class='mesColors'>" + "Virtuoso" + "</span> forgoes traditional illusions in favor of psychic daggers, wielded by the sheer power of the mind. Unleash a volley of sharp blades, then outwit your foes with a sharp mind.";
  document.getElementById('eodThreeP').innerHTML = "<span class='mesColors'>" + "Psionic" + "</span> — focus on damage dealing and <span class='mesColors'>" + "Virtuoso's" + "</span> blade.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='mesColors'>" + "Main-hand Dagger" + "</span> — Long ranged weapon. (<span class='mesColors'>" + "Virtuoso" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='mesColors'>" + "Virtuoso" + "</span> — Replaces clones with blades, and shatters with bladesongs that fire the blades. Gives access to mainhand dagger and psionic skills.";
}
document.getElementById('necromancer').onclick = gwNecro
function gwNecro() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/necromancerBackground.jpg)"; 
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Necromancer";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/lordNecomongr.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#2C9D5D";
    }
  //Description
  document.getElementById('coreOneP').innerHTML = "<span class='necroColors'>" + "Necromancers" + "</span> are masters of the dark arts. They absorb life force from nearby deaths to fuel their profession mechanic, Death Shroud, where they endure incoming attacks while striking their enemies, ensuring they always outlive their foes.";
  document.getElementById('coreTwoP').innerHTML = "<span class='necroColors'>" + "Necromancers" + "</span> command over death itself, they can summon undead minions to fight for them, overwhelm their enemies in conditions, corrupt their boons, drink their blood, rip their skin and soul, and steal their life.";
  document.getElementById('coreThreeP').innerHTML = "As a scholar profession, <span class='necroColors'>" + "Necromancers" + "</span> wear light armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='necroColors'>" + "Two-handed Staff" + "</span> — Long range spellcasting weapon which emphasizes AoE support via use of marks.";
  document.getElementById('corewTwo').innerHTML = "<span class='necroColors'>" + "Main-hand Axe" + "</span>Main-hand Axe — Use powerful attacks to tear enemies at medium range.";
  document.getElementById('corewThree').innerHTML = "<span class='necroColors'>" + "Main-hand Dagger" + "</span> — Steal an enemy's health or life force at close range.";
  document.getElementById('corewFour').innerHTML = "<span class='necroColors'>" + "Main-hand Scepter" + "</span> — Inflict various conditions on foes at a long range.";
  document.getElementById('corewFive').innerHTML = "<span class='necroColors'>" + "Off-hand Dagger" + "</span> — Weaken foes or transfer conditions to them.";
  document.getElementById('corewSix').innerHTML = "<span class='necroColors'>" + "Off-hand Focus" + "</span> — Make the enemy vulnerable or chill them, while removing boons.";
  document.getElementById('corewSeven').innerHTML = "<span class='necroColors'>" + "Off-hand Warhorn" + "</span> — Summon a swarm of locusts or fear enemies with the wail of the horn.";
  document.getElementById('corewEight').innerHTML = "<span class='necroColors'>" + "Under water Spear" + "</span> — Reap enemies with close range attacks or terrorize them by summoning vampiric shrimp.";
  document.getElementById('corewNine').innerHTML = "<span class='necroColors'>" + "Under water Trident" + "</span> — Thwart the enemy with offensive support and sink them into the abyss.";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='necroColors'>" + "Spite" + "</span> — Focuses on improving power damage, might generation, and applying vulnerability on enemies. May enhance focus, axe, and signet skills.";
  document.getElementById('stTwo').innerHTML = "<span class='necroColors'>" + "Curses" + "</span> — Focuses on applying conditions, improving condition damage, and benefiting from critical hits. May enhance scepter, and corruption skills.";
  document.getElementById('stThree').innerHTML = "<span class='necroColors'>" + "Death Magic" + "</span> — Focuses on defence by granting toughness and protection against conditions. May enhance minions.";
  document.getElementById('stFour').innerHTML = "<span class='necroColors'>" + "Blood Magic" + "</span> — Focuses on support through healing, life stealing, and reviving allies. May enhance dagger, and warhorn skills.";
  document.getElementById('stFive').innerHTML = "<span class='necroColors'>" + "Soul Reaping" + "</span> — Focuses on improving Death Shroud and life force generation. May enhance marks from staff skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Reaper";
  document.getElementById('hotVideo').src = "../../video/characters/lordNecomongr.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"My scythe, it thirsts..."';
  document.getElementById('hotTwoP').innerHTML = "The <span class='necroColors'>" + "Reaper" + "</span> is a harbinger of death, cleaving through multiple foes at once. Utilize your <span class='necroColors'>" + "Reaper's" + "</span> Shroud, chilling your foes gaining access to a spectral scythe to cut down all who stand in your way.";
  document.getElementById('hotThreeP').innerHTML = "<span class='necroColors'>" + "Shout" + "</span> — Skills that damage enemies around the reaper, becoming more powerful the more enemies they hit.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='necroColors'>" + "Two-handed Greatsword" + "</span> — Slow attacks with massive damage, focusing in close combat and chill. (<span class='necroColors'>" + "Reaper" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='necroColors'>" + "Reaper" + "</span> — Focuses on melee combat, gives access to greatsword, shout skills, and replaces Death Shroud with the more offensive <span class='necroColors'>" + "Reaper's" + "</span> Shroud.";
  //POF
  document.querySelector('.pofName').innerHTML = "Scourge";
  document.getElementById('pofVideo').src = "../../video/characters/lordNecomongr.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Sink into a sea of sand."';
  document.getElementById('pofTwoP').innerHTML = "The <span class='necroColors'>" + "Scourge" + "</span> harnesses the power of the desert to summon sand shades onto the battlefield. While they lose many of the protective benefits of death shroud, they control the battlefield by afflicting foes while bolstering allies and granting barrier.";
  document.getElementById('pofThreeP').innerHTML = "<span class='necroColors'>" + "Punishment" + "</span> — Skills that focus on providing boons to allies and conditions to enemies, while corrupting boons on enemies.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='necroColors'>" + "Off-hand Torch" + "</span> — Torment and burn your enemies while empowering your allies. (<span class='necroColors'>" + "Scourge" + "</span> specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='necroColors'>" + "Scourge" + "</span> — Focuses on support, condition damage, and boon corruption. Gives access to torch, punishment skills to corrupt boons, and replaces Death Shroud with the ability to create Sand Shades and use shade skills, most notoriously Desert Shroud.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Harbinger";
  document.getElementById('eodVideo').src = "../../video/characters/lordNecomongr.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Volatile powers, all at my fingertips.."';
  document.getElementById('eodTwoP').innerHTML = "The <span class='necroColors'>" + "Harbinger" + "</span> is a gunslinger and an alchemist, empowering their pistol and utilizing elixirs imbued with dark energies. But strength comes at a cost, and the <span class='necroColors'>" + "Harbinger" + "</span> must balance on a knife's edge between power and corruption.";
  document.getElementById('eodThreeP').innerHTML = "<span class='necroColors'>" + "Elixir" + "</span> — Skills that focus on support by providing boons and then splash dangerous effects on enemies in the area. The splash effect can be aimed on the <span class='necroColors'>" + "Harbinger" + "</span> as well to inflict Blight and used to remove Blight to amplify their negative effects.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='necroColors'>" + "Main-hand Pistol" + "</span> — Torments, poisons, and weakens your enemies at range. (<span class='necroColors'>" + "Harbinger" + "</span> specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='necroColors'>" + "Harbinger" + "</span> — Versatile specialization, possessing powerful potential, at the cost of their own life due to Blight. Gives access to a mainhand pistol, Elixirs for boons, and replaces Death Shroud with the more offensive <span class='necroColors'>" + "Harbinger" + "</span> Shroud.";
}