let favoriteTransportation: Array<[transport: string, brand: string]> = []

favoriteTransportation.push(["motorcycle","Honda"])
favoriteTransportation.push(["car","Toyota"])
favoriteTransportation.push(["bicycle","Morgan"])

//console.log(favoriteTransportation)
//using for each loop

favoriteTransportation.forEach(([transport, brand]) =>
{console.log(`I would like to own a ${brand} ${transport}.z`)}
)

