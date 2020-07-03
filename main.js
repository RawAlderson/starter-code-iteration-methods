// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const activeUsers = users.filter(user => user.isActive === true)
printKata('Kata 1', activeUsers)

const userEmails = users.map(user => user.email)
printKata('Kata 2', userEmails)

const ovationUsers = users.some(user => user.company === 'OVATION')
printKata('Kata 3', ovationUsers)

const userAge38 = users.find(user => user.age > 38)
printKata('Kata 4', userAge38)

const activeAge38 = users.filter(user => user.age > 38)
const age38Active = activeAge38.find(user => user.isActive === true)
printKata('Kata 5', age38Active)

const zencoUser = users.filter(user => user.company === 'ZENCO')
const zencoBalance = zencoUser.map(user => user.balance)
printKata('Kata 6', zencoBalance)

const myTags = users.filter(user => user.tags.includes('fugiat'))
const fugiatUsers = myTags.map(user => user.age)
printKata('Kata 7', fugiatUsers)