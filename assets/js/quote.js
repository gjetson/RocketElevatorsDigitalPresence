const STND_PRICE = 8000
const PREM_PRICE = 12000
const EXCEL_PRICE = 15000
const STND_FEE = .1
const PREM_FEE = .15
const EXCEL_FEE = .2

const currFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const pcntFormatter = new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
});

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

//radio buttons out
const stanBtn = document.getElementById('stan_btn')
const premBtn = document.getElementById('prem_btn')
const excelBtn = document.getElementById('excel_btn')

clearInputFields()
setInputVisibility('none', 'none', 'none', 'none')
setOutputVisibility('none', 'none', 'none', 'none', 'none')

document.getElementById('res_btn').addEventListener('click', () => {
    clearInputFields()
    clearPricingBtns()
    setInputVisibility('block', 'block', 'none', 'none')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

document.getElementById('comm_btn').addEventListener('click', () => {
    clearInputFields()
    clearPricingBtns()
    setInputVisibility('none', 'block', 'none', 'block')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

document.getElementById('ind_btn').addEventListener('click', () => {
    clearInputFields()
    clearPricingBtns()
    setInputVisibility('none', 'none', 'block', 'none')
    setOutputVisibility('none', 'none', 'none', 'none', 'none')
})

stanBtn.addEventListener('click', () => {
    clearOutputFields()
    calculateStandardCost()
    setOutputVisibility('block', 'block', 'block', 'block', 'block')
})

premBtn.addEventListener('click', () => {
    clearOutputFields()
    calculatePremiumCost()
    setOutputVisibility('block', 'block', 'block', 'block', 'block')
})

excelBtn.addEventListener('click', () => {
    clearOutputFields()
    calculateExceliumCost()
    setOutputVisibility('block', 'block', 'block', 'block', 'block')
})

numVtrsIn.addEventListener('input', () => {
    numVtrsOut.value = numVtrsIn.value
    clearPricingBtns()
    setOutputVisibility('block', 'block', 'none', 'none', 'none')
})

numFlrsIn.addEventListener('input', () => {
    if (numAptsIn.value != '') {
        numVtrsOut.value = calculateResidential(numAptsIn.value, numFlrsIn.value)
        console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
        clearPricingBtns()
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    } else if (maxOccIn.value != '') {
        numVtrsOut.value = calculateCommercial(maxOccIn.value, numFlrsIn.value)
        clearPricingBtns()
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    }
})

numAptsIn.addEventListener('input', () => {
    if (numFlrsIn.value != '') {
        numVtrsOut.value = calculateResidential(numAptsIn.value, numFlrsIn.value)
        console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
        clearPricingBtns()
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    }
})

maxOccIn.addEventListener('input', () => {
    if (numFlrsIn.value != '') {
        numVtrsOut.value = calculateCommercial(maxOccIn.value, numFlrsIn.value)
        console.log(`${numAptsIn.value} ${numFlrsIn.value}`)
        clearPricingBtns()
        setOutputVisibility('block', 'block', 'none', 'none', 'none')
    }
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

function calculateStandardCost() {
    const price = STND_PRICE * Number(numVtrsOut.value)
    const fee = price * STND_FEE
    populatePricing(price, STND_PRICE, fee, STND_FEE)
}

function calculatePremiumCost() {
    const price = PREM_PRICE * Number(numVtrsOut.value)
    const fee = price * PREM_FEE
    populatePricing(price, PREM_PRICE, fee, PREM_FEE)
}

function calculateExceliumCost() {
    const price = EXCEL_PRICE * Number(numVtrsOut.value)
    const fee = price * EXCEL_FEE
    populatePricing(price, EXCEL_PRICE, fee, EXCEL_FEE)
}

function populatePricing(price, pricePerVtr, fee, feePcnt) {
    pricePerVtrOut.value = currFormatter.format(pricePerVtr)
    installFeesOut.value = `${pcntFormatter.format(feePcnt)} = ${currFormatter.format(fee)}`
    totalCostOut.value = currFormatter.format(price + fee)
}

function calculateCommercial(maxOccupancyPerFloor, numFloors) {
    const floors = Number(numFloors)
    const totalOccupancy = Number(maxOccupancyPerFloor) * floors
    const numElevsPerBank = (Math.ceil(totalOccupancy / 200)) + 1
    const numElevBanks = Math.ceil(floors / 10)
    return numElevBanks * numElevsPerBank
}

function calculateResidential(numApts, numFloors) {
    const flrs = Number(numFloors)
    let numElevs = 0
    if (flrs > 0) {
        numElevs = Math.ceil((Number(numApts) / flrs) / 6)
    }
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

function clearOutputFields() {
    price_per_vtr_out.value = ''
    install_fees_out.value = ''
    total_cost_out.value = ''
}

function clearPricingBtns() {
    stanBtn.checked = false
    premBtn.checked = false
    excelBtn.checked = false
}