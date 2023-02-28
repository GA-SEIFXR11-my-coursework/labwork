function exercise(str_exerciseNum){
    switch(str_exerciseNum){
        case "1":
            exercise_1();
            break;
        case "2":
            exercise_2();
            break;
        case "3":
            exercise_3();
            break;
        default:
            console.log("invalid exerise number");
            break;
    }

}

function exercise_1(){
    // Exercise 1 of 3 - Gender neutral titles for Ministers of Parliament
    const mps = ["Hon Anthony Albanese MP","Mr John Alexander OAM, MP","Dr Katie Allen MP","Dr Anne Aly MP","Hon Karen Andrews MP","Hon Kevin Andrews MP","Mrs Bridget Archer MP","Mr Adam Bandt MP","Ms Angie Bell MP","Hon Sharon Bird MP","Hon Chris Bowen MP","Mr Russell Broadbent MP","Hon Scott Buchholz MP","Hon Tony Burke MP","Hon Linda Burney MP","Mr Josh Burns MP","Hon Mark Butler MP","Ms Terri Butler MP","Hon Anthony Byrne MP","Dr Jim Chalmers MP","Mr Nick Champion MP","Hon Darren Chester MP","Ms Lisa Chesters MP","Mr George Christensen MP","Hon Jason Clare MP","Ms Sharon Claydon MP","Ms Libby Coker MP","Hon David Coleman MP","Hon Julie Collins MP","Mr Pat Conaghan MP","Mr Vince Connelly MP","Mr Pat Conroy MP","Hon Mark Coulton MP","Mr Milton Dick MP","Hon Mark Dreyfus QC, MP","Hon Damian Drum MP","Hon Peter Dutton MP","Hon Justine Elliot MP","Hon Warren Entsch MP","Hon Trevor Evans MP","Mr Jason Falinski MP","Hon Joel Fitzgibbon MP","Hon Paul Fletcher MP","Ms Nicolle Flint MP","Dr Mike Freelander MP","Hon Josh Frydenberg MP","Hon Andrew Gee MP","Mr Steve Georganas MP","Mr Andrew Giles MP","Hon Dr David Gillespie MP","Mr Ian Goodenough MP","Mr Patrick Gorman MP","Mr Luke Gosling OAM, MP","Dr Helen Haines MP","Mr Garth Hamilton MP","Ms Celia Hammond MP","Hon Andrew Hastie MP","Hon Alex Hawke MP","Mr Chris Hayes MP","Mr Julian Hill MP","Hon Kevin Hogan MP","Hon Luke Howarth MP","Hon Greg Hunt MP","Hon Ed Husic MP","Hon Steve Irons MP","Mr Stephen Jones MP","Hon Barnaby Joyce MP","Hon Bob Katter MP","Ms Ged Kearney MP","Mr Craig Kelly MP","Mr Matt Keogh MP","Mr Peter Khalil MP","Hon Catherine King MP","Ms Madeleine King MP","Mr Andrew Laming MP","Hon Michelle Landry MP","Mr Julian Leeser MP","Hon Dr Andrew Leigh MP","Hon Sussan Ley MP","Hon David Littleproud MP","Ms Gladys Liu MP","Hon Nola Marino MP","Hon Richard Marles MP","Dr Fiona Martin MP","Ms Kristy McBain MP","Ms Emma McBride MP","Hon Michael McCormack MP","Mrs Melissa McIntosh MP","Mr Brian Mitchell MP","Mr Rob Mitchell MP","Hon Scott Morrison MP","Hon Ben Morton MP","Dr Daniel Mulino MP","Ms Peta Murphy MP","Hon Shayne Neumann MP","Mr Ted O'Brien MP","Mr Llew O'Brien MP","Hon Brendan O'Connor MP","Mr Ken O'Dowd MP","Ms Clare O'Neil MP","Ms Julie Owens MP","Mr Tony Pasin MP","Ms Alicia Payne MP","Mr Gavin Pearce MP","Mr Graham Perrett MP","Mrs Fiona Phillips MP","Hon Keith Pitt MP","Hon Tanya Plibersek MP","Hon Christian Porter MP","Hon Melissa Price MP","Mr Rowan Ramsey MP","Hon Amanda Rishworth MP","Hon Stuart Robert MP","Ms Michelle Rowland MP","Ms Joanne Ryan MP","Ms Rebekha Sharkie MP","Mr Dave Sharma MP","Hon Bill Shorten MP","Mr Julian Simmonds MP","Hon Tony Smith MP","Mr David Smith MP","Hon Warren Snowdon MP","Ms Anne Stanley MP","Ms Zali Steggall OAM, MP","Mr James Stevens MP","Hon Michael Sukkar MP","Ms Meryl Swanson MP","Hon Angus Taylor MP","Hon Dan Tehan MP","Ms Susan Templeman MP","Hon Matt Thistlethwaite MP","Mr Phillip Thompson OAM, MP","Ms Kate Thwaites MP","Hon Alan Tudge MP","Ms Maria Vamvakinou MP","Mr Bert van Manen MP","Mr Ross Vasta MP","Hon Andrew Wallace MP","Mr Tim Watts MP","Dr Anne Webster MP","Ms Anika Wells MP","Mrs Lucy Wicks MP","Mr Andrew Wilkie MP","Mr Josh Wilson MP","Mr Rick Wilson MP","Hon Tim Wilson MP","Hon Jason Wood MP","Hon Ken Wyatt AM, MP","Mr Terry Young MP","Mr Tony Zappia MP","Mr Trent Zimmerman MP"];
    const genderedTitles = [
        "Mr",
        "Mrs",
        "Ms",
    ];
    let neutrallyTitledMps = [];
    for(let name of mps){
        let hasGenderedTitle = false;
        for(let title of genderedTitles){
            if(name.includes(title)){
                hasGenderedTitle = true;
                break;
            }
        }
        if(!hasGenderedTitle){
            neutrallyTitledMps.push(name);
        }
    }
    console.log(neutrallyTitledMps);
    return;
}

function exercise_2(){
    //Exercise 2 or 3- Marvel men
    const marvelCharacters = ['Ant-Man','Abomination (Lam, Chang)','Abraham Cornelius','Abraham Erskine','Adrian Toomes','Agatha Harkness','AIM agents (MODOK\'s servants)','Alpha Dog','Amphibian (Squadron Supreme)','Anaconda (Sitznski, Blanche)','Ancient One','Apocalypse','Arcade (unknown)','Arcanna (Squadron Supreme)','Arnim Zola','Angel (Worthington III, Warren)','Arsenal','Asp (Nefertiti, Cleo)','Assemble','Balder','Banshee (comics) (Sean Cassidy)','Baron Zemo','Baron Strucker','Beetle (unknown)','Ben Parker','Ben Reilly','Betty Brant','Betty Ross','Bishop','Black Bolt','Black Cat (Hardy, Felicia)','Black Jack Tarr','Black Knight (Whitman, Dane)','Black Mamba (Sealy, Tanya)','Black Panther (Udaku, T\'Challa)','Black Talon','Black Widow (Chang, Monica)','Black Widow (Romanoff, Natasha)','Blackheart','Blacklash (Scott, Marc)','Blade (unknown)','Blob (real name Fred J. Dukes)','Blur (Squadron Supreme)','Bolivar Trask','Bombshell','Boomerang (Myers, Fred)','Bucky','Bulldozer','Bullseye (Poindexter, Benjamin)','Bruce Banner','Blastaar','Cable (Future Version of Wolverine)','Callisto','Camellia','Cannonball (Guthrie, Sam)','Captain America (Rogers, Steve)','Captain Atlas','Captain Britain (Braddock, Brian)','Captain France (Etherlinck, Hugo)','Captain Italy (Landi, Umberto)','Captain Spain (Fraile, Carlos)','Captain UK','Carnage','Carol Danvers','Cathrine Mora','Chameleon','The Champion','Chitauri','Ultimate Marvel','The Colonel (Al-Rahman, Abd)','Colossus','Contessa Valentina Allegra di Fontaine','Crossbones (Rumlow, Brock)','Crystal','Cyclops (Scott Summers)','Clint Barton','Dai Thomas','Daniel Toliver','Daredevil (Murdock, Matthew "Matt")','Dario Agger (formwalking CEO)','Dazzler (Blaire, Allison "Ali")','Deacon Frost','Deadpool (Wilson, Wade)','Death Adder (unknown)','Deathlok (Peterson, Michael "Mike")','Deathstrike (Oyama, Yuriko)','Derek Morgan','Detonator (Gibson, Ricky)','Devil Dinosaur','Diablo (Esteban Corazon de Ablo)','Doctor Octopus (Octavius, Otto)','Doctor Strange (Strange, Stephen Sr.)','Doctor Strange (Strange, Stephen Jr.)','Domino','Drake Raven','list of the weakest marvel characters','Doombot','Doctor Spectrum (Squadron Supreme)','Dr. Faustus','Dreadknight (Bram Velsing)','Dreamcatcher','De Lone Wolf (Asim Limbu)','Daisy Johnson','Echo (Maya Lopez)','Ego','Electro (Dillon, Max)','Elektra (Natchios, Elektra)','Emma Frost','Enchantress','Enid Rich','Ellie Camacho(Deadpool)','Falcon (Wilson, Sam)','Fancy Dan (Rubenstein, Dan)','Fandral','Fenris (von Strucker, Andrea and Andreas)','Filament','Fin Casey (Ivory Shadow)','Firepower','Firestar (Allen, Elizabeth "Liz")','Forge (unknown)','Fountain','Franklin "Foggy" Nelson','Franklin Richards','Franklin Storm','Fred "Flash" Thompson','Fury','Gah Lak Tus','Gallowglass','Gambit (LeBeau, Remy)','Gamora','Garrison Kane','Geldoff','Ghost','Ghost Rider','Ghostware','Giant Man / Ant Man / Yellowjacket (Pym, Henry "Hank")','Giant Man (Scott Lang)','Gladiator','Glenn Talbot','Green Goblin (Osborn, Norman)','Gorgon','Grass Hopper','Grizzly','Gregory Stark','Guardian','Gwen Stacy','Gwen Stacy (clone)/Carnage','Groot','Gilgamesh','Hammer (Canty, Eisenhower)','Hammerhead (unknown)','Hard-Drive (unknown)','Havok (Summers, Alexander "Alex")','Hawk-Owl (Danner, Jack)','Hawkeye (Barton, Clint) member of avengers.','Heather Hudson','Heimdall','Hela','Hellcat (Walker, Patsy)','Hobgoblin (Harry Osborn)','Hogun','Howard the Duck','Hulk (Banner, Robert Bruce)','Human Torch (Storm, John "Johnny")','Human Torch (Marvel Zombies)','Hurricane (unknown)','Hyperion (Squadron Supreme)','Iceman (Drake, Robert "Bobby")','Ikaris','Impossible Man','Inertia (Squadron Supreme)','Invisible Woman (Susan Storm)','Iron Fist (Rand, Daniel "Danny")','Iron Man (Stark, Antonio "Tony")','Iron Monger (Obadiah Stane)','Jackal','James Braddock','James Hudson','James Rupert "Jim" Rhodes (War Machine)','James Buchanan "Bucky" Barnes','Jane Foster','Jarvis, Edwin','Jeanne de Wolfe','Jennifer Walters','Jessica Jones','Jimmy Hudson','Jimmy Woo','John Ryker','John Stacy','J. Jonah Jameson','Juggernaut (Marko, Cain)','Justin Hammer','Kaine','Kang the Conqueror','Karen Grant (Jean Grey)','Karma (Mahn, Xi\'an Coy)','Karnak','Ka-Zar','Kenny "King Kong" McFarlane','Kingpin (Fisk, Wilson)','Kraven The Hunter (Kravinoff, Sergei)','Kree','Korg','Kate Bishop','Karen Page','Lady Lark','Layla miller','Lee (first name unknown)','Leech','Leviathan','Lieberman (first name unknown)','Lilandra Neramani','Lizard (Connors, Curtus)','Lockjaw','Loki','Longshot (Centino, Arthur)','Luke Cage','Liberatos','Madame Web','Magician (Boggs, Elliot)','Magneto (Lensherr, Erik)','Marvel Girl (Grey, Jean)','Man-Ape (M\'Baku)','Mandarin','Man-Thing (Sallis, Ted)','Mantis','Mark Raxton','Mary Parker','Mary Jane Watson','Master Menace (Emil Burbank) (Squadron Supreme)','Mastermind (unknown)','Maximus','May Parker','Mephisto','Miles Warren','Miles Bullock "Captain Winter"','Miles Morales','Mister Fantastic/Maker (Richards, Reed)','Mister Fantastic (Richards, Reed) (Marvel zombies)','Mister Nix','Mr. Rose','Ms. Marvel','MODOK (Tarleton, George)','Mojo Adams','Mole Man (Molekevic, Arthur)','Morbius (unknown, but implied to be the son of Vlad Tepes Dracula)','Moira MacTaggert','Morlocks','Montana (Bale, Montana)','Moondragon (Douglas, Heather)','Medusa','Moon Knight (Spector, Marc)','Multiple Man (Madrox, James)','Mysterio (Beck, Quentin)','Mystique (Darkhölme, Raven)','Namor','Nathaniel Richards','Nerd Hulk (Clone of Original Hulk)','Nebula','The New Sentinels','Nightmare','Nightcrawler (Wagner, Kurt)','Nighthawk (Richmond, Kyle)','Nick Fury','Nihil','Northstar (Beaubier, Jean-Paul)','Nova (Rick Jones)','Nuke (Squadron Supreme)','Nuke','Odin','Omega Red (unknown)','The One Above All','Onslaught','Orb Weaver (unknown)','Owl','Ox (Sanchez, Bruno)','Paladin (Marc Spector)','Pandora (Margaret Watson)','Penultimate','Ultimate Marvel','Perun (unknown)','Pete Wisdom','Phil Coulson','Phoenix Force','Phoebe McAllister','Piledriver','Polaris (Dane, Lorna)','Power Man (Cage, Luke)','Power Princess (Squadron Supreme)','Primal Screamer','Princess Python','The Principal (Jones, Larry)','Prowler (Aaron Davis)','Proteus (Xavier, David)','Ultimate Marvel','Psylocke (Braddock, Elisabeth "Betsy")','Pyro (unknown)','Pepper Potts','The Punisher','Peter Parker','Peter Quill','Pietro Maximoff','Quasar','Quicksilver (Lensherr, Pietro)','Rage','Ralph Bohner (Wandavision)','Red Skull','Red Ghost','Red Guardian','Red Wasp (Petra Laskov)','RHINO','Rhona Burchill','Robbie Burchill','Richard Parker','Ringer (Davis, Anthony)','Robbie Robertson','Rocket Raccoon','Rocket Raccoon','Rogue (Anna Marie (surname unknown))','Ronan the Accuser','Ronin (Spector, Marc*','Sabra','Sabretooth (Creed, Victor)','Samual Sterns','Sandman (Marko, Flint)','Sasquatch','Sam Bullit','Scarlet Witch (Lensherr, Wanda)','Schizoid Man (unknown)','Scorpion (clone of Peter Parker)','Sentinels','Sentry','Shadowcat (Pryde, Kitty)','Shang-Chi','Shaman','S.H.I.E.L.D.','Shinobi Shaw','Shape (Squadron Supreme)','Sharon Carter','Ultimate Marvel','Sky-Eater','Skrull','Sebastian Shaw','Spider-Girl (Parker, May)','Spider-Man (Parker, Peter Benjamin)','Spider-Woman (Drew, Jessica)','Shocker','Storm','Star-Lord (Peter Jason Quill)','S.W.O.R.D.','Sylvie/lady Loki','Tandy Bowen','Tarantula','Thaddeus Aloysius Cadwallader "Dum-Dum" Dugan','Thaddeus E. "Thunderbolt" Ross','Thanos','Thing (Grimm, Benjamin J. "Ben")','Thing (Marvel Zombies)','Thor','Thunderball','Tinkerer (Stern, Elijah)','Titanium Man','Toad (unknown)','Tom Thumb (Squadron Supreme)','Trey Langstrom','Triton','Thor','Ultron','Unus (unknown)','Urich, Ben','Unicorn','Valkyrie (Barbara (surname unknown))','Val Cooper','Vanisher (unknown)','Venom (Brock, Eddie Jr.)','Vindicator (Wraith, John)','Vision','Vulture (Drago, Blackie)','Vengeance','Volstagg','Wasp (Pym, Janet)','Whiz Kid (Taki, Matsuya)','Wildpack (Chen, Powell, Quartermain)','Winter Soldier (James "Bucky" Buchanan Barnes)','Wolverine (Howlett, James "Logan")','Woo, Jimmy','Woody (Kipple, Hank)','War Machine#Ultimate Marvel (James Rhodes)','Wong','Whizzer','Wrecker','Wolfsbane (Rahne Sinclair)','Warlock','X-23 (Laura, Kinney)','Xorn (Kuan-Yi)','X-man (from future)','Ymir','Yellowjacket (Darren Cross)','Yondu','Yelena Belova','Zabu','Zero','Zorn (Shen-Yi)','Zemo'];
    let filteredCharacters = [];
    for(let name of marvelCharacters){
        if((!name.toLowerCase().includes("woman")) && name.toLowerCase().includes("man")){
            filteredCharacters.push(name);
        }
    }
    console.log(filteredCharacters);
    return;
}

function exercise_3(){
// Exercise 3 - Nut allergy
let flavors = [
    "Mango with nuts", 
    "Cheery with nuts", 
    "Apple with nuts", 
    "Chocolate with nuts", 
    "Mango without nuts", 
    "Cheery without nuts", 
    "Apple without nuts", 
    "Chocolate without nuts", 
    ]

    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    let nutAllergy = false;
    let userInput = prompt("Are you allergic to nuts? \"yes\" or \"no\" only");
    if(userInput.toLowerCase().includes("yes")){
        nutAllergy = true;
    }else if(userInput.toLowerCase().includes("no")){
        nutAllergy = false;
    }

    let regex = /with nut/i;

    for(let flavour of flavors){
        if(!(nutAllergy && flavour.match(regex))){
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(flavour));
            ul.appendChild(li);
        }        
    }
    return;
}


exercise(prompt("Which exerise number?"));