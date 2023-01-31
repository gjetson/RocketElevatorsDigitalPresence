
setInputVisibility('none', 'none', 'none', 'none')
setOutputVisibility('none', 'none', 'none', 'none', 'none')

//input fields
const numAptsIn = document.getElementById("num_apts_in")
const numFlrsIn = document.getElementById("num_flrs_in")
const numVtrsIn = document.getElementById("num_vtrs_in")

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
    populateNumVatorsOut(numVtrsIn.value)
    setOutputVisibility('block', 'block', 'none', 'none', 'none')
})

function setInputVisibility(apts, floors, vators, occ) {
    document.getElementById('num_apts_in_grp').style.display = apts
    document.getElementById('num_flrs_in_grp').style.display = floors
    document.getElementById('num_vtrs_in_grp').style.display = vators
    document.getElementById('max_occ_in_grp').style.display = occ
}

function setOutputVisibility(radios, vators, pricePerVtr, fees, cost) {
    document.getElementById('radio_btns_out').style.display = radios
    document.getElementById('num_vtrs_out_grp').style.display = vators
    document.getElementById('price_per_vtr_grp').style.display = pricePerVtr
    document.getElementById('install_fees_grp').style.display = fees
    document.getElementById('total_cost_grp').style.display = cost
}

function populateNumVatorsOut(numElevs) {
    const numVtrsOut = document.getElementById('num_vtrs_out')
    numVtrsOut.value = numElevs
}

function calculateCommercial(maxOccupancyPerFloor, numFloors) {
    const floors = Number(numFloors)
    const totalOccupancy = Number(maxOccupancyPerFloor) * floors
    const numElevsPerBank = (Math.ceil(totalOccupancy / 200)) + 1
    const numElevBanks = Math.ceil(floors / 10)
    populateNumVatorsOut(numElevBanks * numElevsPerBank)
}

function calculateResidential(numApts, numFloors, populateNumVatorsOut) {
    const numElevs = Math.ceil((Number(numApts) * Number(numFloors)) / 6)
    const numElevBanks = Math.ceil(numFloors / 20)
    populateNumVatorsOut(numElevBanks * numElevs)
}

function clearInputFields() {
    numAptsIn.value = ''
    numFlrsIn.value = ''
    numVtrsIn.value = ''
}