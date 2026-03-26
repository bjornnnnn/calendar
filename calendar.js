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
    "nyn_nhss_jollebod":   {name: "NHSS Jollebod",    pos: "geo:58.890149,17.943383?z=17"},
    "nyn_nhss_klubbhus":   {name: "NHSS Klubbhus",    pos: "geo:58.890487,17.943141?z=17"},
    "nyn_nhss_gulavillan": {name: "NHSS Gula Villan", pos: "geo:58.890138,17.942036?z=17"},
    "nyn_havsbad_ens":     {name: "Enslinje utanför Nynäs havsbad", pos:"geo:58.88945,17.95183?z=16"},
    "nyn_hamn":            {name: "Nynäshamns Hamn",  pos: "geo:58.900383,17.952685?z=17"},
    "dal_askfatshamnen":   {name: "Dalarö Askfatshamnen", pos: "geo:59.136095,18.403559?z=17"},
    "nyn_nhss_lacka_hamn": {name: "NHSS Klubbholme Lacka, Hamn", pos:"geo:58.948279,18.085352?z=17"}
}

const users = {
    "eskz": { name: "Eskil Z", roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär"] },
    "alvz": { name: "Alva Z", roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "nilz": { name: "Nils Z", roles: ["Tränare", "Deltagare"] },
    "andh": { name: "Andreas H", roles: ["Tränare", "Kappseglingsfunktionär"] },
    "linh": { name: "Linn H", roles: ["Tränare", "Kappseglingsfunktionär"] },
    "bjon": { name: "Björn N", roles: ["Seglingsledare", "Kappseglingsfunktionär"] },
    "alvn": { name: "Alvar N", roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "morn": { name: "Morgan N", roles: ["Tränare", "Deltagare", "Kappseglingsfunktionär"] },
    "monn": { name: "Mona N", roles: ["Deltagare", "Kappseglingsfunktionär"] },
    "alem": { name: "Alexandr M", roles: ["Tränare", "Kappseglingsfunktionär"] },
    "ivam": { name: "Ivan M", roles: ["Deltagare"] },
    "davc": { name: "David C", roles: ["Deltagare"] },
    "illc": { name: "Illinka C", roles: ["Deltagare"] },
    "caec": { name: "Caesar C", roles: ["Deltagare"] },
    "vila": { name: "Vilgot A", roles: ["Deltagare"] },
    "role": { name: "Rolf E", roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär", "Deltagare"] },
    "gora": { name: "Göran", roles: ["Kappseglingsfunktionär"] },
    "johh": { name: "John H", roles: ["Tävlingsledare", "Seglingsledare", "Kappseglingsfunktionär"] },
    "tuvb": { name: "Tuva B", roles: ["Tränare", "Deltagare"] },
    "leon": { name: "Leo N", roles: ["Tränare"] },
    "alen": { name: "Alexandra N", roles: ["Tränare"] },
    "annk": { name: "Annika K", roles: ["Tränare", "Deltagare"] },
    "edvk": { name: "Edvin K", roles: ["Tränare", "Deltagare"] },
    "ak": { name: "a K", roles: ["Tränare", "deltagare"] },
    "ordf": { name: "Fredrik N", roles: ["Admin"] },
    "emes": {name: "Emelie S", roles: ["Deltagare"]},
    "viks": {name: "Viktor S", roles: ["Deltagare"]}
}

const events = [
    { dayOfYear: 82, name: "Tävling: Förrådsinventering", scope: "Club", boats: ["Kölbåt"], label: "nssEvent", where: geosites.nyn_nss_jollebod, when: "17:00 - 18:00", what: "Tävlingskommitén går igenom inventarier i tävlingsboden inför vårens säsong.", responsible: users.johh },
    { dayOfYear: 83, name: "NSS: Årsmöte", scope: "Club", boats: ["Kölbåt"], label: "nssEvent", where: geosites.nyn_nss_klubbhus, when: "19:00 - 20:00", what: "NSS årsmöte.", responsible: users.ordf },
    { dayOfYear: 90, name: "Jolle: Uppstartsmöte VT 2026", scope: "Jolle", boats: dinghies, label: "nssEvent", where: geosites.nyn_nss_jollebod, when: "19:00 - 20:30", what: "Planeringsmöte för jolle 2026", responsible: users.eskz },
    { dayOfYear: 109, name: "Jolle: Vårbåtsfix", scope: "Jolle", boats: dinghies, label: "nssEvent", where: geosites.nyn_nss_jollebod, when: "11:00 - 14:30", what: "Vi drar ner hälften av jollarna till jolleplan, tvättar, lagar och ser över materialet. C55orna tvättas och poleras.", responsible: users.bjon },
    { dayOfYear: 120, name: "Kölbåt: H-båtsläger dag 1", scope: "Club", boats: ["H-båt"], label: "nssEvent" },
    { dayOfYear: 121, name: "Kölbåt: H-båtsläger dag 2", scope: "Club", boats: ["H-båt"], label: "nssEvent" },
    { dayOfYear: 122, name: "Kölbåt: H-båtsläger dag 3", scope: "Club", boats: ["H-båt"], label: "nssEvent" },
    { dayOfYear: 123, name: "Kölbåt: H-båtsläger dag 4", scope: "Club", boats: ["H-båt"], label: "nssEvent" },
    { dayOfYear: 125, name: "Jolle: Teknikträning (prel)", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna." },
    { dayOfYear: 132, name: "Jolle: Teknikträning (prel)", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna." },
    { dayOfYear: 139, name: "Jolle: Teknikträning (prel)", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna." },
    { dayOfYear: 146, name: "Jolle: Teknikträning (prel)", scope: "Club", boats: dinghies, label: "nssEvent", when: "17:30 - 20:00", where: geosites.nyn_nhss_jollebod, what: "Teknikträning med coach för de mest avancerade jolleseglarna." },
    
    { dayOfYear: 143, name: "NSS: Seglingens Dag i Hamnen", scope: "Club", boats: dinghies, label: "nssEvent", when: "11:00 - 14:00", where: geosites.nyn_hamn, what: "Publikt arrangemang där vi får möjlighet att visa upp vår verksamhet." },
    { dayOfYear: 144, name: "Dalarö SS: Icebreaker C55-sprint", scope: "Regional", boats: ["C55"], label: "externalEvent", when: "", where: geosites.dal_askfatshamnen,  what: "Grön sprint-tävling med tillhandahållna båtar." },

    { dayOfYear: 129, name: "Upsala SS: Frog Ocean Sprint Race, dag 1", scope: "Regional", boats: ["Feva"], label: "externalEvent" },
    { dayOfYear: 130, name: "Upsala SS: Frog Ocean Sprint Race, dag 2", scope: "Regional", boats: ["Feva"], label: "externalEvent" },

    { dayOfYear: 134, name: "Vigbyholm SS: Gullviverallyt, dag 1", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent" },
    { dayOfYear: 135, name: "Vigbyholm SS: Gullviverallyt, dag 2", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent" },
    { dayOfYear: 136, name: "Vigbyholm SS: Gullviverallyt, dag 3", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent" },
    { dayOfYear: 137, name: "Vigbyholm SS: Gullviverallyt, dag 4", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent" },

    { dayOfYear: 150, name: "Tyresö BK: Ornö Runt", scope: "Regional", boats: ["Kölbåt SRS"], label: "externalEvent" },


    { dayOfYear: 166, name: "Jolle: Ledarläger dag 1", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 167, name: "Jolle: Ledarläger dag 2", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 168, name: "Jolle: Ledarläger dag 3", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 170, name: "Midsommarafton", scope: "publicholiday", boats: dinghies, label: "externalEvent" },
    { dayOfYear: 173, name: "Seglarläger 1, dag 1", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 174, name: "Seglarläger 1, dag 2", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 175, name: "Seglarläger 1, dag 3", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 176, name: "Seglarläger 1, dag 4", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 177, name: "Seglarläger 1, dag 5", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 180, name: "Seglarläger 2, dag 1", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 181, name: "Seglarläger 2, dag 2", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 182, name: "Seglarläger 2, dag 3", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 183, name: "Seglarläger 2, dag 4", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 184, name: "Seglarläger 2, dag 5", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 215, name: "Seglarläger 3, dag 1", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 216, name: "Seglarläger 3, dag 2", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 217, name: "Seglarläger 3, dag 3", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 218, name: "Seglarläger 3, dag 4", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 219, name: "Seglarläger 3, dag 5", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 222, name: "Seglarläger 4, dag 1", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 223, name: "Seglarläger 4, dag 2", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 224, name: "Seglarläger 4, dag 3", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 225, name: "Seglarläger 4, dag 4", scope: "Jolle", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 226, name: "Seglarläger 4, dag 5", scope: "Jolle", boats: dinghies, label: "nssEvent" },

    { dayOfYear: 155, name: "Jolle: Bankappsegling 1 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 162, name: "Jolle: Bankappsegling 2 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 169, name: "Jolle: Banskappegling 3 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 232, name: "Jolle: Jollecupen 2026 1 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 239, name: "Jolle: Jollecupen 2026 2 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 246, name: "Jolle: Jollecupen 2026 3 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 253, name: "Jolle: Jollecupen 2026 4 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 260, name: "Jolle: Jollecupen 2026 5 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 267, name: "Jolle: Jollecupen 2026 6 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 274, name: "Jolle: Jollecupen 2026 7 (prel)", scope: "Club", boats: dinghies, label: "nssEvent" },

    { dayOfYear: 154, name: "Kölbåt: onsdagssegling 1 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 161, name: "Kölbåt: onsdagssegling 2 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 168, name: "Kölbåt: onsdagssegling 3 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 175, name: "Kölbåt: onsdagssegling 4 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 182, name: "Kölbåt: onsdagssegling 5 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 189, name: "Kölbåt: onsdagssegling 6 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 196, name: "Kölbåt: onsdagssegling 7 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 203, name: "Kölbåt: onsdagssegling 8 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 210, name: "Kölbåt: onsdagssegling 9 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 217, name: "Kölbåt: onsdagssegling 10 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 224, name: "Kölbåt: onsdagssegling 11 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 231, name: "Kölbåt: onsdagssegling 12 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 238, name: "Kölbåt: onsdagssegling 13 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 245, name: "Kölbåt: onsdagssegling 14 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 252, name: "Kölbåt: onsdagssegling 15 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 259, name: "Kölbåt: onsdagssegling 16 (prel)", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },
    { dayOfYear: 266, name: "Kölbåt: onsdagssegling 17 (prel) - Säsongsavslutning", scope: "Club", boats: ["Kölbåt SRS", "Jolle SRS"], label: "nssEvent" },


    { dayOfYear: 226, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 1", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent" },
    { dayOfYear: 227, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 2", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent" },
    { dayOfYear: 228, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 3", scope: "National", boats: ["Smaragd", "A22", "M30"], label: "nssEvent" },

    { dayOfYear: 233, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 1", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent" },
    { dayOfYear: 234, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 2", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent" },
    { dayOfYear: 235, name: "Torshälla SS: JSM Feva, Tera, mm. Dag 3", scope: "National", boats: ["Feva", "Tera"], label: "externalEvent" },


    { dayOfYear: 241, name: "Tävling: Bedarön Runt (alt 1)", scope: "Regional", boats: dinghies, label: "nssEvent" },
    { dayOfYear: 242, name: "Tävling: Bedarön Runt (alt 2)", scope: "Regional", boats: dinghies, label: "nssEvent" },

    { dayOfYear: 248, name: "Tävling: Viper Ocean Sprint Race, Dag 1", scope: "National", boats: ["Feva"], label: "nssEvent" },
    { dayOfYear: 249, name: "Tävling: Viper Ocean Sprint Race, Dag 2", scope: "National", boats: ["Feva"], label: "nssEvent" },

    { dayOfYear: 281, name: "Jolle: Vinterfix Jolle - säsongsavslutning", scope: "Jolle", boats: dinghies, label: "nssEvent" },

]


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

function showEvent(evObj){

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


    for (var ev of dObj.events) {
        let evsp = document.createElement("span")
        evsp.innerHTML = ev.name
        evsp.classList.add('event')
        evsp.classList.add(ev.label)
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
