function calculateResidential(numApts, numFloors) {
    console.log(`floors: ${numFloors} apts: ${numApts}`)
    const numElevs = Math.ceil((Number(numApts) / Number(numFloors)) / 6)
    console.log(`numElevs: ${numElevs}`)
    const numElevBanks = Math.ceil(numFloors / 20)
    console.log(numElevBanks * numElevs)
    return numElevBanks * numElevs
}

console.log(calculateResidential('100', '3'))