const years = [{
    "year": 2026, "startsOnWeekDay": 4,
    "monthlenghts": [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31],
    "length": 365
}]


const weekdaynames = [
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
    "Söndag"
]


const monthnames = [
    "januari"
    , "februari"
    , "mars"
    , "april"
    , "maj"
    , "juni"
    , "juli"
    , "augusti"
    , "september"
    , "oktober"
    , "november"
    , "december"
]

const dinghies = ["C55", "Tera", "Feva", "Laser", "E-jolle", "Finnjolle"]

const geosites = {
    "nyn_nhss_jollebod":   {name: "NHSS Jollebod",                  pos: "geo:58.890149,17.943383?z=17"},
    "nyn_nhss_klubbhus":   {name: "NHSS Klubbhus",                  pos: "geo:58.890487,17.943141?z=17"},
    "nyn_nhss_gulavillan": {name: "NHSS Gula Villan",               pos: "geo:58.890138,17.942036?z=17"},
    "nyn_havsbad_ens":     {name: "Enslinje utanför Nynäs havsbad", pos: "geo:58.88945,17.95183?z=16"},
    "nyn_hamn":            {name: "Nynäshamns Hamn",                pos: "geo:58.900383,17.952685?z=17"},
    "dal_askfatshamnen":   {name: "Dalarö Askfatshamnen",           pos: "geo:59.136095,18.403559?z=17"},
    "nyn_nhss_lacka_hamn": {name: "NHSS Klubbholme Lacka, Hamn",    pos: "geo:58.948279,18.085352?z=17"},
}

const seriesbase = {
    nyborjartraning_jolle : {beginning: "", footer: "Ingen extra kostnad för medlem i jolleverksamheten. Medlemskap i jolleverksamheten kostar 600kr per år. Efter deltagande i minst ett seglingsläger ingår årsmedlemskap."},
    bankappsegling_jolle : {beginning: "", footer: "Ingen extra kostnad för medlem i jolleverksamheten. Medlemskap i jolleverksamheten kostar 600kr per år. Efter deltagande i minst ett seglingsläger ingår årsmedlemskap."},
    tekniktraning_jolle : {
        beginning: `Teknikträning med coach för de mest avancerade jolleseglarna. 
        Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning. Men du kan även använda egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle.`, 
        footer: "Ingen extra kostnad för medlem i jolleverksamheten. Medlemskap i jolleverksamheten kostar 600kr per år. Efter deltagande i minst ett seglingsläger ingår årsmedlemskap."},
    tranarlager2026 : {beginning: "", footer: ""},
    seglarlager2026 : {beginning: `NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. 
        Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.`, footer: ""},
    kolbatssegling2026: {beginning: `Kappsegling SRS med egen app (klubbsegling.se). 
        Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.`, 
        footer: "Öppen för alla medlemmar i NHSS"},

}

const users = {
    "eskz": { name: "Eskil Z",     mobile: "070-1234568",  email: "z.eskil@gmail.com",     roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär"] },
    "alvz": { name: "Alva Z",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "nilz": { name: "Nils Z",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare"] },
    "andh": { name: "Andreas H",   mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Kappseglingsfunktionär"] },
    "linh": { name: "Linn H",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Kappseglingsfunktionär"] },
    "bjon": { name: "Björn N",     mobile: "073-370 9503", email: "bjonae@duck.com", roles: ["Seglingsledare", "Kappseglingsfunktionär"] },
    "alvn": { name: "Alvar N",     mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "alfc": { name: "Alfred C",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare", "Dommare", "Kappseglingsfunktionär"] },
    "morn": { name: "Morgan N",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "monn": { name: "Mona N",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare", "Kappseglingsfunktionär"] },
    "alem": { name: "Alexandr M",  mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Kappseglingsfunktionär"] },
    "ivam": { name: "Ivan M",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"] },
    "davc": { name: "David C",     mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"] },
    "illc": { name: "Illinka C",   mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"] },
    "caec": { name: "Caesar C",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"] },
    "camm": { name: "Camelia M",   mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"] },
    "vila": { name: "Vilgot A",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare"] },
    "role": { name: "Rolf E",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär", "Deltagare"] },
    "gore": { name: "Göran E",     mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Kappseglingsfunktionär"] },
    "johh": { name: "John H",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär"] },
    "tuvb": { name: "Tuva B",      mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare"] },
    "leon": { name: "Leo N",       mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare"] },
    "alen": { name: "Alexandra N", mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare"] },
    "annk": { name: "Annika K",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare"] },
    "edvk": { name: "Edvin K",     mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "Deltagare"] },
    "ak"  : { name: "a K",         mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Tränare", "deltagare"] },
    "ordf": { name: "Fredrik N",   mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Admin"] },
    "emes": { name: "Emelie S",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"]},
    "viks": { name: "Viktor S",    mobile: "070-1234568",  email: "abc@nhss.se",     roles: ["Deltagare"]}
}


let events = [
    { dayOfYear:  82, name: "Tävling: Förrådsinventering", scope: "Club", boats: ["Kölbåt"], label: "nssEvent", where: geosites["nyn_nhss_jollebod"], when: "17:00 - 18:00", what: "Tävlingskommitén går igenom inventarier i tävlingsboden inför vårens säsong.", responsible: users.johh },
    { dayOfYear:  83, name: "NSS: Årsmöte", scope: "Club", boats: ["Kölbåt"], label: "nssEvent", where: geosites.nyn_nhss_klubbhus, when: "19:00 - 20:00", what: "NSS årsmöte.", responsible: users.ordf },
    { dayOfYear:  90, name: "Jolle: Uppstartsmöte VT 2026", scope: "Jolle", boats: dinghies, label: "nssEvent", where: geosites.nyn_nhss_klubbhus, when: "19:00 - 20:30", what: "Planeringsmöte för jolle 2026", responsible: users.eskz },
    { dayOfYear: 109, name: "Jolle: Vårbåtsfix", scope: "Jolle", boats: dinghies, label: "nssEvent", where: geosites.nyn_nhss_jollebod, when: "11:00 - 14:30", what: "Vi drar ner hälften av jollarna till jolleplan, tvättar, lagar och ser över materialet. C55-orna tvättas och poleras. Vi grillar korv tillsammans.", responsible: users.bjon },
    
    { dayOfYear: 120, name: "Kölbåt: H-båtsläger dag 1", scope: "Club", boats: ["H-båt"], label: "nssEvent" , where: geosites.nyn_nhss_klubbhus, what: "Uppstart av tävlingssäsongen: H-båts-träning med tränare.", when: "10:00 - 16:00", responsible: users.role},
    { dayOfYear: 121, name: "Kölbåt: H-båtsläger dag 2", scope: "Club", boats: ["H-båt"], label: "nssEvent" , where: geosites.nyn_nhss_klubbhus, what: "Uppstart av tävlingssäsongen: H-båts-träning med tränare.", when: "10:00 - 16:00", responsible: users.role},
    { dayOfYear: 122, name: "Kölbåt: H-båtsläger dag 3", scope: "Club", boats: ["H-båt"], label: "nssEvent" , where: geosites.nyn_nhss_klubbhus, what: "Uppstart av tävlingssäsongen: H-båts-träning med tränare.", when: "10:00 - 16:00", responsible: users.role},
    { dayOfYear: 123, name: "Kölbåt: H-båtsläger dag 4", scope: "Club", boats: ["H-båt"], label: "nssEvent" , where: geosites.nyn_nhss_klubbhus, what: "Uppstart av tävlingssäsongen: H-båts-träning med tränare.", when: "10:00 - 16:00", responsible: users.role},
    
    { dayOfYear: 110, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle. Aprilsegling = Torrdräkt", responsible: users.andh},
    { dayOfYear: 118, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle. Aprilsegling = Torrdräkt", responsible: users.andh},
    { dayOfYear: 125, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle.", responsible: users.andh},
    { dayOfYear: 132, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle.", responsible: users.andh},
    { dayOfYear: 139, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle.", responsible: users.andh},
    { dayOfYear: 146, name: "Jolle: Teknikträning", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna. Du bör ha kappseglingsvana för att klara av denna nivå. Klubben tillhandahåller Feva och Laser för denna träning, eller använd medhavd egen båt såsom exempelvis Laser, OK-jolle, Finnjolle eller E-jolle.", responsible: users.andh},
    
    { dayOfYear: 123, name: "NSS: NSS-Dagen", scope: "Club", boats: [], label: "nssEvent", when: "11:00 - 14:00", where: geosites.nyn_nhss_klubbhus, what: "Marknad och NSS-händelser." , responsible: users.bjon},
    { dayOfYear: 123, name: "NSS: KM E-Segling (prel)", scope: "Club", boats: ["esegling"], label: "nssEvent", when: "11:00 - 14:00", where: geosites.nyn_nhss_klubbhus, what: "Klubbmästerskap i E-Segling", responsible: users.bjon},
    { dayOfYear: 143, name: "NSS: Seglingens Dag i Hamnen", scope: "Club", boats: dinghies, label: "nssEvent", when: "11:00 - 14:00", where: geosites.nyn_hamn, what: "Publikt arrangemang där vi får möjlighet att visa upp vår verksamhet." , responsible: users.bjon},
    { dayOfYear: 144, name: "Dalarö SS: Icebreaker C55-sprint", scope: "Regional", boats: ["C55"], label: "externalEvent", when: "", where: geosites.dal_askfatshamnen,  what: "Grön sprint-tävling med tillhandahållna båtar." , responsible: users.bjon},

    { dayOfYear: 129, name: "Upsala SS: Frog Ocean Sprint Race, dag 1", scope: "Regional", boats: ["Feva"], label: "externalEvent" , responsible: users.eskz},
    { dayOfYear: 130, name: "Upsala SS: Frog Ocean Sprint Race, dag 2", scope: "Regional", boats: ["Feva"], label: "externalEvent" , responsible: users.eskz},

    { dayOfYear: 134, name: "Vigbyholm SS: Gullviverallyt, dag 1", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent", responsible: users.bjon },
    { dayOfYear: 135, name: "Vigbyholm SS: Gullviverallyt, dag 2", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent", responsible: users.bjon },
    { dayOfYear: 136, name: "Vigbyholm SS: Gullviverallyt, dag 3", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent", responsible: users.bjon },
    { dayOfYear: 137, name: "Vigbyholm SS: Gullviverallyt, dag 4", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent", responsible: users.bjon },

    { dayOfYear: 150, name: "Tyresö BK: Ornö Runt", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent", responsible: users.bjon },


    { dayOfYear: 166, name: "Jolle: Ledarläger dag 1",         scope: "Jolle",         boats: dinghies, label: "nssEvent", responsible: users.annk},
    { dayOfYear: 167, name: "Jolle: Ledarläger dag 2",         scope: "Jolle",         boats: dinghies, label: "nssEvent", responsible: users.annk},
    { dayOfYear: 168, name: "Jolle: Ledarläger dag 3",         scope: "Jolle",         boats: dinghies, label: "nssEvent", responsible: users.annk},

    { dayOfYear: 170, name: "Midsommarafton",                  scope: "publicholiday", boats: dinghies, label: "externalEvent" },
    
    { dayOfYear: 173, name: "Seglarläger 1, dag 1",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 174, name: "Seglarläger 1, dag 2",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 175, name: "Seglarläger 1, dag 3",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 176, name: "Seglarläger 1, dag 4",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 177, name: "Seglarläger 1, dag 5",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 180, name: "Seglarläger 2, dag 1",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 181, name: "Seglarläger 2, dag 2",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 182, name: "Seglarläger 2, dag 3",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 183, name: "Seglarläger 2, dag 4",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 184, name: "Seglarläger 2, dag 5",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 215, name: "Seglarläger 3, dag 1",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 216, name: "Seglarläger 3, dag 2",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 217, name: "Seglarläger 3, dag 3",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 218, name: "Seglarläger 3, dag 4",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 219, name: "Seglarläger 3, dag 5",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 222, name: "Seglarläger 4, dag 1",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 223, name: "Seglarläger 4, dag 2",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 224, name: "Seglarläger 4, dag 3",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 225, name: "Seglarläger 4, dag 4",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},
    { dayOfYear: 226, name: "Seglarläger 4, dag 5",            scope: "Jolle",         boats: dinghies, label: "nssEvent", what:"NHSS årliga seglarläger med grupper för alla olika nivåer av seglare. Här kan du både lära dig att segla och bli mer avancerad och börja tävlingssegla.", responsible: users.annk, where: geosites.nyn_nhss_jollebod, when: "9:00 - 16:00"},

    { dayOfYear: 155, name: "Jolle: Bankappsegling 1 (prel)",  scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 162, name: "Jolle: Bankappsegling 2 (prel)",  scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 169, name: "Jolle: Banskappegling 3 (prel)",  scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 232, name: "Jolle: Jollecupen 2026 1 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 239, name: "Jolle: Jollecupen 2026 2 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 246, name: "Jolle: Jollecupen 2026 3 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 253, name: "Jolle: Jollecupen 2026 4 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 260, name: "Jolle: Jollecupen 2026 5 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 267, name: "Jolle: Jollecupen 2026 6 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },
    { dayOfYear: 274, name: "Jolle: Jollecupen 2026 7 (prel)", scope: "Club",          boats: dinghies, when: "17:30 - 20:30", where: geosites.nyn_nhss_jollebod, responsible: users.bjon, what: "Bankappsegling för Jollar med SRS. Seglingsledare och funktionärer lägger olika banor och genomför startförfaranden. Krav för deltagare: Du måste kunna rigga och hantera båt själv på land och i vatten. Du behöver inte kunna bansegla, det lär du dig här.", label: "nssEvent" },

    /*
    { dayOfYear: 158, name: "Jolle: Teraträning 1 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 165, name: "Jolle: Teraträning 2 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 172, name: "Jolle: Teraträning 3 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 179, name: "Jolle: Teraträning 4 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 186, name: "Jolle: Teraträning 5 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 193, name: "Jolle: Teraträning 6 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 200, name: "Jolle: Teraträning 7 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 207, name: "Jolle: Teraträning 8 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 214, name: "Jolle: Teraträning 9 (prel)",     scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    { dayOfYear: 221, name: "Jolle: Teraträning 10 (prel)",    scope: "Club",          boats: ["tera"], when: "14:00 - 16:30", where: geosites.nyn_nhss_jollebod, responsible: users.alem, what: "Träning för Teraseglare. Vi fortsätter att lära oss segla med seglarförbundets seglarmärken. Denna kurs lämpar sig för ungdommar som har lärt sig segla på något av våra seglarläger och vill fortsätta utvecklas inom seglingen. Vi seglar med klubbens RS Teror. Kursen är kostnadsfri för alla som gått något av årets seglarläger. För övriga kostar medlemskap i jolleverksamheten 600kr per år. Vi behöver föräldrar för att kunna genomföra aktiviteten.", label: "nssEvent" },
    */

    { dayOfYear: 126, name: "Kölbåt: onsdagssegling 1",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 133, name: "Kölbåt: onsdagssegling 2",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 140, name: "Kölbåt: onsdagssegling 3",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 147, name: "Kölbåt: onsdagssegling 4",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 154, name: "Kölbåt: onsdagssegling 5",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 161, name: "Kölbåt: onsdagssegling 6",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 168, name: "Kölbåt: onsdagssegling 7",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 175, name: "Kölbåt: onsdagssegling 8",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 182, name: "Kölbåt: onsdagssegling 9",                             scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 189, name: "Kölbåt: onsdagssegling 10",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 196, name: "Kölbåt: onsdagssegling 11",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 203, name: "Kölbåt: onsdagssegling 12",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 210, name: "Kölbåt: onsdagssegling 13",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 217, name: "Kölbåt: onsdagssegling 14",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 224, name: "Kölbåt: onsdagssegling 15",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 231, name: "Kölbåt: onsdagssegling 16",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 238, name: "Kölbåt: onsdagssegling 17",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 245, name: "Kölbåt: onsdagssegling 18",                            scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "18:00 - 21:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt.", label: "nssEvent" },
    { dayOfYear: 256, name: "Kölbåt: söndagsseglingsegling 19",                     scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "11:00 - 15:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt. Bana: Bedarön runt.", label: "nssEvent" },
    { dayOfYear: 263, name: "Kölbåt: söndagsseglingsegling 20",                     scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "11:00 - 15:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt. Bana: Bedarön runt.", label: "nssEvent" },
    { dayOfYear: 270, name: "Kölbåt: söndagsseglingsegling 21 (säsongsavslut)",     scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], when: "11:00 - 15:00", where: geosites.nyn_havsbad_ens, responsible: users.bjon, what: "Kappsegling SRS med egen app (klubbsegling.se). Start- och mållinje: enslinje flagga på NHSS brygga och femknopsskylt. Bana: Bedarön runt.", label: "nssEvent" },


    { dayOfYear: 226, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 1", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent", when: "08:00 - 16:00", where: geosites.nyn_nhss_klubbhus, what: "Vi arrangerar SM. Hjälp till som funktionär eller kom och titta!",  responsible: users.role },
    { dayOfYear: 227, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 2", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent", when: "08:00 - 16:00", where: geosites.nyn_nhss_klubbhus, what: "Vi arrangerar SM. Hjälp till som funktionär eller kom och titta!",  responsible: users.role },
    { dayOfYear: 228, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 3", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent", when: "08:00 - 16:00", where: geosites.nyn_nhss_klubbhus, what: "Vi arrangerar SM. Hjälp till som funktionär eller kom och titta!",  responsible: users.role },

    { dayOfYear: 233, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 1", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent", responsible: users.eskz },
    { dayOfYear: 234, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 2", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent", responsible: users.eskz },
    { dayOfYear: 235, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 3", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent", responsible: users.eskz },


    { dayOfYear: 241, name: "Tävling: Bedarön Runt (alt 1)", scope: "Regional", boats: dinghies, label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 242, name: "Tävling: Bedarön Runt (alt 2)", scope: "Regional", boats: dinghies, label: "nssEvent", responsible: users.bjon },
    
    { dayOfYear: 255, name: "Tävling: Skärgårdsseglingen", scope: "Regional", boats: ["Kölbåt SRS"], label: "nssEvent", responsible: users.role, when: "09:00", where: geosites.nyn_nhss_klubbhus, what: "Skärgårdssegling, ca 25 distans mellan märken, öar och fyrar. Långsammaste båt startar först."},

    { dayOfYear: 248, name: "Tävling: Viper Ocean Sprint Race, Dag 1", scope: "National", boats: ["Feva"], label: "nssEvent", where: geosites.nyn_nhss_jollebod, when: "08:00-16:00", what:"Nationell sprintcup för fevabesättningar. Nu har turen kommit till Nynäshamn. Vi arrangerar med följande uppställning: Tävlingsledare: Eskil, Seglingsledare: Björn, Dommare: Alfred, Funktionärer: Behövs! ", responsible: users.eskz },
    { dayOfYear: 249, name: "Tävling: Viper Ocean Sprint Race, Dag 2", scope: "National", boats: ["Feva"], label: "nssEvent", where: geosites.nyn_nhss_jollebod, when: "08:00-16:00", what:"Nationell sprintcup för fevabesättningar. Nu har turen kommit till Nynäshamn. Vi arrangerar med följande uppställning: Tävlingsledare: Eskil, Seglingsledare: Björn, Dommare: Alfred, Funktionärer: Behövs! ", responsible: users.eskz },
    
    { dayOfYear: 262, name: "Marstrand: Rock Ocean Sprint Race, Dag 1", scope: "National", boats: ["Feva"], label: "externalEvent", where: geosites.mar_jolle, when: "08:00-16:00", what:"Nationell sprintcup för fevabesättningar. Nu har turen kommit till Marsstrand." , responsible: users.eskz },
    { dayOfYear: 263, name: "Marstrand: Rock Ocean Sprint Race, Dag 2", scope: "National", boats: ["Feva"], label: "externalEvent", where: geosites.mar_jolle, when: "08:00-16:00", what:"Nationell sprintcup för fevabesättningar. Nu har turen kommit till Marsstrand." , responsible: users.eskz },


    { dayOfYear: 281, name: "Jolle: Vinterfix Jolle - säsongsavslutning", scope: "Jolle", boats: dinghies, label: "nssEvent", responsible: users.bjon },
   
    { dayOfYear: 288, name: "Jolle: E-segling, Fys och Utbildning 1", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 295, name: "Jolle: E-segling, Fys och Utbildning 2", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 302, name: "Jolle: E-segling, Fys och Utbildning 3", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 309, name: "Jolle: E-segling, Fys och Utbildning 4", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 316, name: "Jolle: E-segling, Fys och Utbildning 5", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 323, name: "Jolle: E-segling, Fys och Utbildning 6", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 330, name: "Jolle: E-segling, Fys och Utbildning 7", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },
    { dayOfYear: 337, name: "Jolle: E-segling, Fys och Utbildning 8", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },    
    { dayOfYear: 344, name: "Jolle: E-segling, Fys och Utbildning 9", scope: "Jolle", when: "18:00 - 20:00", where: geosites.nyn_nhss_klubbhus, what: "Eftersäsongsaktivitet med E-segling, fysträning och seglingsteori. (Prel)", boats: ["E-segling"], label: "nssEvent", responsible: users.bjon },


]

// Ad hoc ids... 
events = initId(events)


function generateDay(yeardata, eventData, dayNumber) {
    let currmonth = 0
    let currday = 0
    let accumDays = yeardata.monthlenghts[0]
    if (dayNumber > yeardata.length) {
        return OverconstrainedError("That day does not exist within this year.")
    }
    while (true) {
        currday += 1
        if (dayNumber > accumDays) {
            currmonth += 1
            accumDays += yeardata.monthlenghts[currmonth]
        }
        if (dayNumber == currday) {
            let todayEvents = []
            for (let ev of eventData) {
                if (ev.dayOfYear == currday) {
                    todayEvents.push(ev)
                }
            }
            return { year: yeardata.year, month: currmonth, day: currday - (accumDays - yeardata.monthlenghts[currmonth]), dayOfWeek: ((currday - 2 + yeardata.startsOnWeekDay) % 7), dayOfYear: dayNumber, events: todayEvents }
        }
    }
    return false
}


function getId(evObj){
    // Bootstrapping id, will be replaced.
    const str1 = btoa(evObj.dayOfYear + evObj.name)
    return str1
}


function initId(eventObjs){
    for (let a of eventObjs){
        if (a.id == undefined){
            a.id = getId(a)
        }
    }
    return eventObjs
}


function getEventById(events, id){
    for (e of events){
        if (e.id == id){
            return e
        }
    }
    console.error("Could not find element with id: " + id);
}


function makeModalParticipants(evId){
    let  partCountLine = document.getElementById('partCountLine')
    // Instantly update so that the user get feedback and don't click twice. 
    partCountLine.innerHTML = "<span id='partCountLineStatus'>...</span>"

    let participantCount = document.createElement("span")
    participantCount.id = "participantCount"
    participantCount.classList.add('participantCounter')
    partCountLine.appendChild(participantCount)

    getRegistrationsForEvent(conn, evId).then(
        function(a){
            const yesCount = a.filter(b => b.willattend == true).length
            const noCount = a.filter(b => b.willattend != true).length
            participantCount.innerHTML = `Deltagare: ${yesCount - noCount}`
            // 1. check registrations. Identities that have more yes than no will be marked as attending.
            let registrations = {}
            for (reg of a){
                if (registrations[reg.useridentity] =! undefined){
                    registrations[reg.useridentity] = 0}
                if (reg.willattend == true){
                    registrations[reg.useridentity] ++
                } else {
                    registrations[reg.useridentity] --
                }
            }
            // 2. Make labels for registrations.
            for (k of Object.keys(registrations)){
                if (registrations[k] > 0) {
                    let us = document.createElement("span")
                    us.classList.add("participantlabel")
                    us.innerHTML = k
                    us.addEventListener("click", 
                        function(evId, userId){
                            return function(ev)
                                {
                                    if(confirm(`Ta bort användare ${userId} från denna aktivitet?`)){
                                        registerForEvent(conn, evId, false, userId)
                                        makeModalParticipants(evId)
                                    }
                                }
                        }(evId, k)
                    )
                    partCountLine.appendChild(us)
                }
            }
            let e = document.getElementById('partCountLineStatus')
            e.innerHTML = ""
        })
} 



function showEventModal(events, id){
    console.debug(`making modal for ${id}`)
    let evt = getEventById(events, id)
    let m = document.getElementById("modal")
    let mc= document.getElementById("modal-content")
    mc.innerHTML = ""
    
    let dateStruct = dateFromDOY(evt.dayOfYear)


    let mtitle = document.createElement("h4")
    mtitle.innerHTML = evt.name
    mc.appendChild(mtitle)

     let closesp = document.createElement("span")
    closesp.addEventListener("click", function(evt){hideEventModal()})
    closesp.innerHTML = "X"
    closesp.classList.add("closebutton")
    mc.appendChild(closesp)
   

    let mwhere = document.createElement("p")
    const isodate = isoStrOfDate(dateStruct[0],dateStruct[1],dateStruct[2])
    mwhere.innerHTML = `${isodate} | ${evt.when} | ${evt.where.name} `
    mc.appendChild(mwhere)

    let mwho = document.createElement("p")
    mwho.innerHTML = `Ansvarig: <a href="mailto:${evt.responsible.email}">${evt.responsible.name}</a> mob: ${evt.responsible.mobile}`
    mc.appendChild(mwho)

    let mwhat = document.createElement("p")
    mwhat.innerHTML = `${evt.what}`
    mc.appendChild(mwhat)

    let partCountLine = document.getElementById("partCountLine")
    //console.debug(`partCountLine: ${JSON.stringify(partCountLine)}`)
    if (partCountLine == null){
        partCountLine = document.createElement("span")
        partCountLine.id = "partCountLine"
        partCountLine.classList.add('participantCountCls')
        mc.appendChild(partCountLine)
    }

    makeModalParticipants(id)

    let butsp = document.createElement("span")
    butsp.classList.add('modal-buttons')

    let attendUserLabel = document.createElement("label")
    attendUserLabel.setAttribute("for", "userId")
    attendUserLabel.innerHTML = "Jag heter: "

    let attendUserInput = document.createElement("input")
    attendUserInput.setAttribute("type", "text")
    attendUserInput.id = "userId"

    butsp.appendChild(attendUserLabel)
    butsp.appendChild(attendUserInput)

    let attendbut = document.createElement("button")
    attendbut.addEventListener("click", function(evt){
        const user = document.getElementById("userId").value
        registerForEvent(conn, id, true, user)
        makeModalParticipants(id)
    })
    attendbut.innerHTML = "Jag kommer"
    butsp.appendChild(attendbut)   

    mc.appendChild(butsp)

    m.classList.remove("hidden")
}


function hideEventModal(){
    let m = document.getElementById("modal")
    m.classList.add("hidden")

}


function dateFromDOY(doy){
    let yeardata = years[0] // 2026
    let month = 0
    let year = yeardata.year
    let dayOfMonth = 0
    for (let i = 0; i < doy; i++){
        dayOfMonth++
        if (dayOfMonth >= yeardata.monthlenghts[month]){
            dayOfMonth = 0
            month++
        }
    }
    return [year, month, dayOfMonth]
}


function isoStrOfDate(year, month, dayOfMonth){
    // zero based month
    let monthstr = ""
    let daystr = ""

    if(month < 10){
        monthstr = `0${month + 1}`
    } else {
        monthstr = `${month + 1}`
    }

    if(dayOfMonth < 10){
        daystr = `0${dayOfMonth}`
    } else {
        daystr = `${dayOfMonth}`
    }
    return `${year}-${monthstr}-${daystr}`
}


function makeDayBrick(dObj) {
    let sp = document.createElement("span")
    sp.classList.add("calday")
    if (dObj.dayOfWeek == 0) {
        sp.classList.add("firstOfWeek")
        let weeknr = document.createElement("span")
        weeknr.classList.add('weeknumber')
        weeknr.innerHTML = `v${(dObj.dayOfYear - (dObj.dayOfYear % 7)) / 7 + 2}`
        sp.appendChild(weeknr)
    }
    if (dObj.day == 1) {
        sp.classList.add("firstOfMonth")
        let a = document.createElement("a")
        let mname = monthnames[dObj.month]
        a.setAttribute("id", "a_" + mname)
        sp.appendChild(a)
        let mnav = document.getElementById("monthsnav")
        let a2 = document.createElement("a")
        a2.setAttribute("href", "#a_" + mname)
        a2.innerHTML = `${mname.substring(0, 3)}`
        a2.classList.add("monthNavMonth")

        mnav.appendChild(a2)
    }
    sp.id = dObj.dayOfYear

    let doySp = document.createElement("span")
    doySp.classList.add("doy")
    doySp.innerHTML = dObj.dayOfYear
    sp.appendChild(doySp)

    let monthSp = document.createElement("span")
    monthSp.classList.add("month")
    monthSp.innerHTML = monthnames[dObj.month]
    sp.appendChild(monthSp)

    let dateSp = document.createElement("span")
    dateSp.classList.add("date")
    dateSp.innerHTML = dObj.day
    sp.appendChild(dateSp)

    let daySp = document.createElement("span")
    daySp.classList.add("day")
    daySp.innerHTML = weekdaynames[dObj.dayOfWeek].substring(0, 3)
    sp.appendChild(daySp)

    let eventsSpan = document.createElement("span")
    eventsSpan.classList.add("eventlist")

    let i = 0
    for (var ev of dObj.events) {
        i++
        let evsp = document.createElement("span")
        evsp.innerHTML = ev.name
        evsp.id = ev.id
        console.debug(`event ${i}/${dObj.events.length} --> id: ${evsp.id}, name: ${evsp.innerHTML}`)
        evsp.classList.add('event')
        evsp.classList.add(ev.label)
        evsp.addEventListener("click", function(events, evId){
            return function(clickevent){
                showEventModal(events, evId)
                //console.debug(clickevent)
            }
        }(dObj.events, ev.id))
        eventsSpan.appendChild(evsp)
    }
    sp.appendChild(eventsSpan)
    return sp
}


function generateDays(yeardata) {
    i = 0
    let days = []
    for (let i = 1; i < yeardata.length; i++) {
        return 1
    }
}

