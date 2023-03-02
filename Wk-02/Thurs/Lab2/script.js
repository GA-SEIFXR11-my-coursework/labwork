//Exercise 1
function howMuchLand(){
    function _howMuchLand(length, width){
        return(length*width);
    }

    const regex = /^[0-9]*$/i;
    const outputElement = document.getElementById("output_area");

    let input = document.getElementById("input_length").value;
    if(!regex.test(input)){outputElement.value = "Invalid input"; return}
    let length = Number(input);
    
    input = document.getElementById("input_width").value;
    if(!regex.test(input)){outputElement.value = "Invalid input"; return}
    let width = Number(input);

    outputElement.value = `${_howMuchLand(length,width)} sq.m`;
}

//Exercise 2
function buttonDoNotClick(){
    alert("I told you not to click the button!");
}

//Exercise 3
//https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
const marvelCharacters = ['Ant-Man','Abomination (Lam, Chang)','Abraham Cornelius','Abraham Erskine','Adrian Toomes','Agatha Harkness','AIM agents (MODOK\'s servants)','Alpha Dog','Amphibian (Squadron Supreme)','Anaconda (Sitznski, Blanche)','Ancient One','Apocalypse','Arcade (unknown)','Arcanna (Squadron Supreme)','Arnim Zola','Angel (Worthington III, Warren)','Arsenal','Asp (Nefertiti, Cleo)','Assemble','Balder','Banshee (comics) (Sean Cassidy)','Baron Zemo','Baron Strucker','Beetle (unknown)','Ben Parker','Ben Reilly','Betty Brant','Betty Ross','Bishop','Black Bolt','Black Cat (Hardy, Felicia)','Black Jack Tarr','Black Knight (Whitman, Dane)','Black Mamba (Sealy, Tanya)','Black Panther (Udaku, T\'Challa)','Black Talon','Black Widow (Chang, Monica)','Black Widow (Romanoff, Natasha)','Blackheart','Blacklash (Scott, Marc)','Blade (unknown)','Blob (real name Fred J. Dukes)','Blur (Squadron Supreme)','Bolivar Trask','Bombshell','Boomerang (Myers, Fred)','Bucky','Bulldozer','Bullseye (Poindexter, Benjamin)','Bruce Banner','Blastaar','Cable (Future Version of Wolverine)','Callisto','Camellia','Cannonball (Guthrie, Sam)','Captain America (Rogers, Steve)','Captain Atlas','Captain Britain (Braddock, Brian)','Captain France (Etherlinck, Hugo)','Captain Italy (Landi, Umberto)','Captain Spain (Fraile, Carlos)','Captain UK','Carnage','Carol Danvers','Cathrine Mora','Chameleon','The Champion','Chitauri','Ultimate Marvel','The Colonel (Al-Rahman, Abd)','Colossus','Contessa Valentina Allegra di Fontaine','Crossbones (Rumlow, Brock)','Crystal','Cyclops (Scott Summers)','Clint Barton','Dai Thomas','Daniel Toliver','Daredevil (Murdock, Matthew "Matt")','Dario Agger (formwalking CEO)','Dazzler (Blaire, Allison "Ali")','Deacon Frost','Deadpool (Wilson, Wade)','Death Adder (unknown)','Deathlok (Peterson, Michael "Mike")','Deathstrike (Oyama, Yuriko)','Derek Morgan','Detonator (Gibson, Ricky)','Devil Dinosaur','Diablo (Esteban Corazon de Ablo)','Doctor Octopus (Octavius, Otto)','Doctor Strange (Strange, Stephen Sr.)','Doctor Strange (Strange, Stephen Jr.)','Domino','Drake Raven','list of the weakest marvel characters','Doombot','Doctor Spectrum (Squadron Supreme)','Dr. Faustus','Dreadknight (Bram Velsing)','Dreamcatcher','De Lone Wolf (Asim Limbu)','Daisy Johnson','Echo (Maya Lopez)','Ego','Electro (Dillon, Max)','Elektra (Natchios, Elektra)','Emma Frost','Enchantress','Enid Rich','Ellie Camacho(Deadpool)','Falcon (Wilson, Sam)','Fancy Dan (Rubenstein, Dan)','Fandral','Fenris (von Strucker, Andrea and Andreas)','Filament','Fin Casey (Ivory Shadow)','Firepower','Firestar (Allen, Elizabeth "Liz")','Forge (unknown)','Fountain','Franklin "Foggy" Nelson','Franklin Richards','Franklin Storm','Fred "Flash" Thompson','Fury','Gah Lak Tus','Gallowglass','Gambit (LeBeau, Remy)','Gamora','Garrison Kane','Geldoff','Ghost','Ghost Rider','Ghostware','Giant Man / Ant Man / Yellowjacket (Pym, Henry "Hank")','Giant Man (Scott Lang)','Gladiator','Glenn Talbot','Green Goblin (Osborn, Norman)','Gorgon','Grass Hopper','Grizzly','Gregory Stark','Guardian','Gwen Stacy','Gwen Stacy (clone)/Carnage','Groot','Gilgamesh','Hammer (Canty, Eisenhower)','Hammerhead (unknown)','Hard-Drive (unknown)','Havok (Summers, Alexander "Alex")','Hawk-Owl (Danner, Jack)','Hawkeye (Barton, Clint) member of avengers.','Heather Hudson','Heimdall','Hela','Hellcat (Walker, Patsy)','Hobgoblin (Harry Osborn)','Hogun','Howard the Duck','Hulk (Banner, Robert Bruce)','Human Torch (Storm, John "Johnny")','Human Torch (Marvel Zombies)','Hurricane (unknown)','Hyperion (Squadron Supreme)','Iceman (Drake, Robert "Bobby")','Ikaris','Impossible Man','Inertia (Squadron Supreme)','Invisible Woman (Susan Storm)','Iron Fist (Rand, Daniel "Danny")','Iron Man (Stark, Antonio "Tony")','Iron Monger (Obadiah Stane)','Jackal','James Braddock','James Hudson','James Rupert "Jim" Rhodes (War Machine)','James Buchanan "Bucky" Barnes','Jane Foster','Jarvis, Edwin','Jeanne de Wolfe','Jennifer Walters','Jessica Jones','Jimmy Hudson','Jimmy Woo','John Ryker','John Stacy','J. Jonah Jameson','Juggernaut (Marko, Cain)','Justin Hammer','Kaine','Kang the Conqueror','Karen Grant (Jean Grey)','Karma (Mahn, Xi\'an Coy)','Karnak','Ka-Zar','Kenny "King Kong" McFarlane','Kingpin (Fisk, Wilson)','Kraven The Hunter (Kravinoff, Sergei)','Kree','Korg','Kate Bishop','Karen Page','Lady Lark','Layla miller','Lee (first name unknown)','Leech','Leviathan','Lieberman (first name unknown)','Lilandra Neramani','Lizard (Connors, Curtus)','Lockjaw','Loki','Longshot (Centino, Arthur)','Luke Cage','Liberatos','Madame Web','Magician (Boggs, Elliot)','Magneto (Lensherr, Erik)','Marvel Girl (Grey, Jean)','Man-Ape (M\'Baku)','Mandarin','Man-Thing (Sallis, Ted)','Mantis','Mark Raxton','Mary Parker','Mary Jane Watson','Master Menace (Emil Burbank) (Squadron Supreme)','Mastermind (unknown)','Maximus','May Parker','Mephisto','Miles Warren','Miles Bullock "Captain Winter"','Miles Morales','Mister Fantastic/Maker (Richards, Reed)','Mister Fantastic (Richards, Reed) (Marvel zombies)','Mister Nix','Mr. Rose','Ms. Marvel','MODOK (Tarleton, George)','Mojo Adams','Mole Man (Molekevic, Arthur)','Morbius (unknown, but implied to be the son of Vlad Tepes Dracula)','Moira MacTaggert','Morlocks','Montana (Bale, Montana)','Moondragon (Douglas, Heather)','Medusa','Moon Knight (Spector, Marc)','Multiple Man (Madrox, James)','Mysterio (Beck, Quentin)','Mystique (Darkhölme, Raven)','Namor','Nathaniel Richards','Nerd Hulk (Clone of Original Hulk)','Nebula','The New Sentinels','Nightmare','Nightcrawler (Wagner, Kurt)','Nighthawk (Richmond, Kyle)','Nick Fury','Nihil','Northstar (Beaubier, Jean-Paul)','Nova (Rick Jones)','Nuke (Squadron Supreme)','Nuke','Odin','Omega Red (unknown)','The One Above All','Onslaught','Orb Weaver (unknown)','Owl','Ox (Sanchez, Bruno)','Paladin (Marc Spector)','Pandora (Margaret Watson)','Penultimate','Ultimate Marvel','Perun (unknown)','Pete Wisdom','Phil Coulson','Phoenix Force','Phoebe McAllister','Piledriver','Polaris (Dane, Lorna)','Power Man (Cage, Luke)','Power Princess (Squadron Supreme)','Primal Screamer','Princess Python','The Principal (Jones, Larry)','Prowler (Aaron Davis)','Proteus (Xavier, David)','Ultimate Marvel','Psylocke (Braddock, Elisabeth "Betsy")','Pyro (unknown)','Pepper Potts','The Punisher','Peter Parker','Peter Quill','Pietro Maximoff','Quasar','Quicksilver (Lensherr, Pietro)','Rage','Ralph Bohner (Wandavision)','Red Skull','Red Ghost','Red Guardian','Red Wasp (Petra Laskov)','RHINO','Rhona Burchill','Robbie Burchill','Richard Parker','Ringer (Davis, Anthony)','Robbie Robertson','Rocket Raccoon','Rocket Raccoon','Rogue (Anna Marie (surname unknown))','Ronan the Accuser','Ronin (Spector, Marc*','Sabra','Sabretooth (Creed, Victor)','Samual Sterns','Sandman (Marko, Flint)','Sasquatch','Sam Bullit','Scarlet Witch (Lensherr, Wanda)','Schizoid Man (unknown)','Scorpion (clone of Peter Parker)','Sentinels','Sentry','Shadowcat (Pryde, Kitty)','Shang-Chi','Shaman','S.H.I.E.L.D.','Shinobi Shaw','Shape (Squadron Supreme)','Sharon Carter','Ultimate Marvel','Sky-Eater','Skrull','Sebastian Shaw','Spider-Girl (Parker, May)','Spider-Man (Parker, Peter Benjamin)','Spider-Woman (Drew, Jessica)','Shocker','Storm','Star-Lord (Peter Jason Quill)','S.W.O.R.D.','Sylvie/lady Loki','Tandy Bowen','Tarantula','Thaddeus Aloysius Cadwallader "Dum-Dum" Dugan','Thaddeus E. "Thunderbolt" Ross','Thanos','Thing (Grimm, Benjamin J. "Ben")','Thing (Marvel Zombies)','Thor','Thunderball','Tinkerer (Stern, Elijah)','Titanium Man','Toad (unknown)','Tom Thumb (Squadron Supreme)','Trey Langstrom','Triton','Thor','Ultron','Unus (unknown)','Urich, Ben','Unicorn','Valkyrie (Barbara (surname unknown))','Val Cooper','Vanisher (unknown)','Venom (Brock, Eddie Jr.)','Vindicator (Wraith, John)','Vision','Vulture (Drago, Blackie)','Vengeance','Volstagg','Wasp (Pym, Janet)','Whiz Kid (Taki, Matsuya)','Wildpack (Chen, Powell, Quartermain)','Winter Soldier (James "Bucky" Buchanan Barnes)','Wolverine (Howlett, James "Logan")','Woo, Jimmy','Woody (Kipple, Hank)','War Machine#Ultimate Marvel (James Rhodes)','Wong','Whizzer','Wrecker','Wolfsbane (Rahne Sinclair)','Warlock','X-23 (Laura, Kinney)','Xorn (Kuan-Yi)','X-man (from future)','Ymir','Yellowjacket (Darren Cross)','Yondu','Yelena Belova','Zabu','Zero','Zorn (Shen-Yi)','Zemo'];

// create a whole bunch of <a> tags. These get hidden or revealed accoring to the filter
for(character of marvelCharacters){
    let a = document.createElement("a");
    a.href = `#${character}`;
    a.innerText = character;
    document.getElementById("marvelDropdownSearch").appendChild(a);
}

function buttonExercise3(){
    let div = document.getElementById("marvelDropdownSearch");
    ["","none"].includes(div.style.display)
        ? div.style.display = "block"
        : div.style.display = "none"
}

function filterMarvel(){
    let div = document.getElementById("marvelDropdownSearch");
    let anchors = div.getElementsByTagName("a");
    let searchBox_elem = document.getElementById("marvelSearchBox");
    
    let input = searchBox_elem.value;
    if(input.length == 0){
        for(a of anchors){
            a.style.display = "none";
        }
        return;
    }
    
    for(a of anchors){
        let name = a.innerText;
        
        if(name.toUpperCase().includes(input.toUpperCase())){
            a.style.display = "block";
        }else{
            a.style.display = "none";
        }
    }
}

//Exercise 4
function helloIn(language){
    let elem = document.getElementById("ex4output");
    switch(language){
        case "English":
            elem.value = "Hello!";
            break;
        case "German":
            elem.value = "Hallo"
            break;
        case "Chinese":
            elem.value = "你好";
            break;
        case "French":
            elem.value = "Bonjour";
            break;
        case "Latin":
            elem.value = "Sorry, I don't speak Latin."
            break;
        default:
            console.log("invalid language input")
            break;
    }
    return;
}