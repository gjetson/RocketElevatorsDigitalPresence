
//input groups
const numAptsInGrp = document.getElementById('num_apts_in_grp')
const numFlrsInGrp = document.getElementById('num_flrs_in_grp')
const numVtrsInGrp = document.getElementById('num_vtrs_in_grp')
const numOccInGrp = document.getElementById('max_occ_in_grp')

//output groups
const numVtrsOutGrp = document.getElementById('num_vtrs_out_grp')
const pricePerVtrOutGrp = document.getElementById('price_per_vtr_out_grp')
const installFeesOutGrp = document.getElementById('install_fees_out_grp')
const totalCostOutGrp = document.getElementById('total_cost_out_grp')

//input fields
const numAptsIn = document.getElementById("num_apts_in")
const numFlrsIn = document.getElementById("num_flrs_in")
const numVtrsIn = document.getElementById("num_vtrs_in")
const maxOccIn = document.getElementById("max_occ_in")

//output fields
const numVtrsOut = document.getElementById("num_vtrs_out")
const pricePerVtrOut = document.getElementById("price_per_vtr_out")
const installFeesOut = document.getElementById("install_fees_out")
const totalCostOut = document.getElementById("total_cost_out")

//radio buttons out grp
const radioBtnOut = document.getElementById('radio_btns_out')

clearInputFields()
setInputVisibility('none', 'none', 'none', 'none')
setOutputVisibility('none', 'none', 'none', 'none', 'none')

document.getElementById('res_btn').addEventListener('click', () => {
    clearInputFields()
    setInputVisibility('block', 'block', 'none', 'none')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

document.getElementById('comm_btn').addEventListener('click', () => {
    clearInputFields()
    setInputVisibility('none', 'block', 'none', 'block')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

document.getElementById('ind_btn').addEventListener('click', () => {
    clearInputFields()
    setInputVisibility('none', 'none', 'block', 'none')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

numVtrsIn.addEventListener('input', () => {
    numVtrsOut.value = numVtrsIn.value
    setOutputVisibility('block', 'block', 'none', 'none', 'none')
})

numFlrsIn.addEventListener('input', () => {
    if (numAptsIn.value != '') {
        // residential mode
        numVtrsOut.value = calculateResidential(numAptsIn.value, numFlrsIn.value)
        console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    }
    console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
})

numAptsIn.addEventListener('input', () => {
    if (numFlrsIn.value != '') {
        numVtrsOut.value = calculateResidential(numAptsIn.value, numFlrsIn.value)
        console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    }
    console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
})

function setInputVisibility(apts, floors, vators, occ) {
    numAptsInGrp.style.display = apts
    numFlrsInGrp.style.display = floors
    numVtrsInGrp.style.display = vators
    numOccInGrp.style.display = occ
}

function setOutputVisibility(radios, vators, pricePerVtr, fees, cost) {
    radioBtnOut.style.display = radios
    numVtrsOutGrp.style.display = vators
    pricePerVtrOutGrp.style.display = pricePerVtr
    installFeesOutGrp.style.display = fees
    totalCostOutGrp.style.display = cost
}

function calculateCommercial(maxOccupancyPerFloor, numFloors) {
    const floors = Number(numFloors)
    const totalOccupancy = Number(maxOccupancyPerFloor) * floors
    const numElevsPerBank = (Math.ceil(totalOccupancy / 200)) + 1
    const numElevBanks = Math.ceil(floors / 10)
    return numElevBanks * numElevsPerBank
}

function calculateResidential(numApts, numFloors) {
    const numElevs = Math.ceil((Number(numApts) / Number(numFloors)) / 6)
    const numElevBanks = Math.ceil(numFloors / 20)
    console.log(numElevBanks * numElevs)
    return numElevBanks * numElevs
}

function clearInputFields() {
    numAptsIn.value = ''
    numFlrsIn.value = ''
    numVtrsIn.value = ''
    maxOccIn.value = ''
}