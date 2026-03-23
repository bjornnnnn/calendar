const years = [{"year": 2026, "startsOnWeekDay": 4, 
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
    ,"februari"
    ,"mars"
    ,"april"
    ,"maj"
    ,"juni"
    ,"juli"
    ,"augusti"
    ,"september"
    ,"oktober"
    ,"november"
    ,"december"
]

const dinghies = ["C55", "Tera", "Feva", "Laser", "E-jolle", "Finnjolle"]

const events = [
    {dayOfYear: 82, name: "Tävling: Förrådsinventering", scope: "Club", boats:["Kölbåt"], label:"nssEvent"},
    {dayOfYear: 83, name: "NSS: Årsmöte", scope: "Club", boats:["Kölbåt"], label:"nssEvent"},
    {dayOfYear: 89, name: "Jolle: Uppstartsmöte VT 2026", scope: "Jolle", boats: dinghies, label:"nssEvent"},
    {dayOfYear: 109, name: "Jolle: Vårbåtsfix", scope: "Jolle", boats: dinghies, label:"nssEvent"},
    {dayOfYear: 120, name: "Kölbåt: H-båtsläger dag 1", scope: "Club", boats:["H-båt"], label:"nssEvent"},
    {dayOfYear: 121, name: "Kölbåt: H-båtsläger dag 2", scope: "Club", boats:["H-båt"], label:"nssEvent"},
    {dayOfYear: 122, name: "Kölbåt: H-båtsläger dag 3", scope: "Club", boats:["H-båt"], label:"nssEvent"},
    {dayOfYear: 123, name: "Kölbåt: H-båtsläger dag 4", scope: "Club", boats:["H-båt"], label:"nssEvent"},
    {dayOfYear: 125, name: "Jolle: Teknikträning (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 132, name: "Jolle: Teknikträning (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 139, name: "Jolle: Teknikträning (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 146, name: "Jolle: Teknikträning (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 143, name: "NSS: Seglingens Dag i Hamnen", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 144, name: "Dalarö SS: Icebreaker C55-sprint", scope: "Regional", boats:["C55"], label:"externalEvent"},
    
    {dayOfYear: 129, name: "Upsala SS: Frog Ocean Sprint Race, dag 1", scope: "Regional", boats: ["Feva"], label:"externalEvent"},
    {dayOfYear: 130, name: "Upsala SS: Frog Ocean Sprint Race, dag 2", scope: "Regional", boats: ["Feva"], label:"externalEvent"},
    {dayOfYear: 134, name: "Vigbyholm SS: Gullviverallyt, dag 1", scope: "Regional", boats: ["Kölbåt SRS"], label:"externalEvent"},
    {dayOfYear: 135, name: "Vigbyholm SS: Gullviverallyt, dag 2", scope: "Regional", boats: ["Kölbåt SRS"], label:"externalEvent"},
    {dayOfYear: 136, name: "Vigbyholm SS: Gullviverallyt, dag 3", scope: "Regional", boats: ["Kölbåt SRS"], label:"externalEvent"},
    {dayOfYear: 137, name: "Vigbyholm SS: Gullviverallyt, dag 4", scope: "Regional", boats: ["Kölbåt SRS"], label:"externalEvent"},
    {dayOfYear: 150, name: "Tyresö BK: Ornö Runt", scope: "Regional", boats: ["Kölbåt SRS"], label:"externalEvent"},


    {dayOfYear: 166, name: "Jolle: Ledarläger dag 1", scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 167, name: "Jolle: Ledarläger dag 2", scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 168, name: "Jolle: Ledarläger dag 3", scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 170, name: "Midsommarafton",          scope: "publicholiday", boats:dinghies, label:"externalEvent"},
    {dayOfYear: 173, name: "Seglarläger 1, dag 1",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 174, name: "Seglarläger 1, dag 2",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 175, name: "Seglarläger 1, dag 3",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 176, name: "Seglarläger 1, dag 4",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 177, name: "Seglarläger 1, dag 5",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 180, name: "Seglarläger 2, dag 1",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 181, name: "Seglarläger 2, dag 2",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 182, name: "Seglarläger 2, dag 3",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 183, name: "Seglarläger 2, dag 4",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},
    {dayOfYear: 184, name: "Seglarläger 2, dag 5",    scope: "Jolle",         boats:dinghies, label:"nssEvent"},

    {dayOfYear: 155, name: "Jolle: Bankappsegling 1 (prel)", scope: "Club",  boats:dinghies, label:"nssEvent"},
    {dayOfYear: 162, name: "Jolle: Bankappsegling 2 (prel)", scope: "Club",  boats:dinghies, label:"nssEvent"},
    {dayOfYear: 169, name: "Jolle: Banskappegling 3 (prel)", scope: "Club",  boats:dinghies, label:"nssEvent"},
    {dayOfYear: 218, name: "Jolle: Jollecupen 2026 1 (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 225, name: "Jolle: Jollecupen 2026 2 (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 232, name: "Jolle: Jollecupen 2026 3 (prel)", scope: "Club", boats:dinghies, label:"nssEvent"},

    {dayOfYear: 154, name: "Kölbåt: onsdagssegling 1 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 161, name: "Kölbåt: onsdagssegling 2 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 168, name: "Kölbåt: onsdagssegling 3 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 175, name: "Kölbåt: onsdagssegling 4 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 182, name: "Kölbåt: onsdagssegling 5 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 189, name: "Kölbåt: onsdagssegling 6 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 196, name: "Kölbåt: onsdagssegling 7 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 203, name: "Kölbåt: onsdagssegling 8 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 210, name: "Kölbåt: onsdagssegling 9 (prel)",  scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 217, name: "Kölbåt: onsdagssegling 10 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 224, name: "Kölbåt: onsdagssegling 11 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 231, name: "Kölbåt: onsdagssegling 12 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 238, name: "Kölbåt: onsdagssegling 13 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 245, name: "Kölbåt: onsdagssegling 14 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 252, name: "Kölbåt: onsdagssegling 15 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 259, name: "Kölbåt: onsdagssegling 16 (prel)", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    {dayOfYear: 266, name: "Kölbåt: onsdagssegling 17 (prel) - Säsongsavslutning", scope: "Club", boats:["Kölbåt SRS", "Jolle SRS"], label:"nssEvent"},
    

    {dayOfYear: 226, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 1", scope: "National", boats:["Smaragd", "A22", "M30"], label:"nssEvent"},
    {dayOfYear: 227, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 2", scope: "National", boats:["Smaragd", "A22", "M30"], label:"nssEvent"},
    {dayOfYear: 228, name: "Tävling: SM Smaragd, SM A22, KM M30 Dag 3", scope: "National", boats:["Smaragd", "A22", "M30"], label:"nssEvent"},
    

    {dayOfYear: 241, name: "Tävling: Bedarön Runt (alt 1)", scope: "Regional", boats:dinghies, label:"nssEvent"},
    {dayOfYear: 242, name: "Tävling: Bedarön Runt (alt 2)", scope: "Regional", boats:dinghies, label:"nssEvent"},

    {dayOfYear: 248, name: "Tävling: Viper Ocean Sprint Race, Dag 1", scope: "National", boats:["Feva"], label:"nssEvent"},
    {dayOfYear: 249, name: "Tävling: Viper Ocean Sprint Race, Dag 2", scope: "National", boats:["Feva"], label:"nssEvent"},

    {dayOfYear: 281, name: "Jolle: Vinterfix Jolle - säsongsavslutning", scope: "Jolle", boats:dinghies, label:"nssEvent"},

]


function generateDay(yeardata, eventData,  dayNumber){
    let currmonth = 0
    let currday = 0
    let accumDays = yeardata.monthlenghts[0]
    if (dayNumber > yeardata.length){
        return OverconstrainedError("That day does not exist within this year.")
    }
    while (true) {
        currday += 1
        if (dayNumber > accumDays){
            currmonth += 1
            accumDays += yeardata.monthlenghts[currmonth]
        } 
        if (dayNumber == currday){
            let todayEvents = []
            for (let ev of eventData){
                if (ev.dayOfYear == currday){
                    todayEvents.push(ev)
                }
            }
            return {year: yeardata.year, month: currmonth , day: currday - (accumDays - yeardata.monthlenghts[currmonth]) , dayOfWeek: ((currday - 2 + yeardata.startsOnWeekDay) % 7), dayOfYear: dayNumber, events:todayEvents}
        }
    }
    return false
}

function makeDayBrick(dObj){
    let sp = document.createElement("span")
    sp.classList.add("calday")
    if (dObj.dayOfWeek == 0){
        sp.classList.add("firstOfWeek")
    }
    if (dObj.day == 1){
        sp.classList.add("firstOfMonth")
        let a = document.createElement("a")
        let mname = monthnames[dObj.month]
        a.setAttribute("id", "a_" + mname)
        sp.appendChild(a)
        let mnav = document.getElementById("monthsnav")
        let a2 = document.createElement("a")
        a2.setAttribute("href", "#a_" + mname)
        a2.innerHTML = `${mname.substring(0,3)}`
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
    daySp.innerHTML = weekdaynames[dObj.dayOfWeek]
    sp.appendChild(daySp)

    let eventsSpan = document.createElement("span")
    eventsSpan.classList.add("eventlist")


    for (var ev of dObj.events){
        let evsp = document.createElement("span")
        evsp.innerHTML = ev.name
        evsp.classList.add('event')
        evsp.classList.add(ev.label)
        eventsSpan.appendChild(evsp)
    }
    sp.appendChild(eventsSpan)
    return sp
}


function generateDays(yeardata){
    i = 0
    let days = []
    for (let i = 1; i < yeardata.length; i++){
        return 1
    }
}

