const SURL = "https://zhmkkxpjbueqxsjpqnzl.supabase.co"
const SKEY = "sb_publishable_21nLI0ocVhxOGF3x91f-6g_sedjL14m"
// Create a single supabase client for interacting with your database
const conn = supabase.createClient(SURL, SKEY)


async function getRegistrationsForEvent(conn, eventId) {
    const { data, error } = await conn
        .from('presence')
        .select()
        .eq('resource', eventId)
    if (error) {
        console.error(error)
        return error
    }
    return data
}


async function registerForEvent(conn, eventId, willAttend, userId = undefined) {
    const { error, data } = await conn
        .from('presence')
        .insert({ useridentity: userId, useridentity2: 'null', resource: eventId, willattend: willAttend })
        .select()
    if (error) {
        console.error(error)
        return error
    }
    return data
}


function test1() {

    const evId = "ev1234"
    let resp = registerForEvent(conn, evId, "true", "user1")
    resp.then((a) => console.info(`registerForEvent resp: ${JSON.stringify(a)}`))

    let r2 = getRegistrationsForEvent(conn, evId)
    r2.then((a) => console.info(`getRegistrationForEvent resp: ${JSON.stringify(a)}`))
}
