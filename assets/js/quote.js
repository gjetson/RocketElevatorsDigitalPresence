
document.getElementById('res_btn').addEventListener('click', () => {
    console.log('hello world')
    document.getElementById('num_apts_in_grp').style.display = 'block'
    document.getElementById('num_flrs_in_grp').style.display = 'block'
    document.getElementById('num_vtrs_in_grp').style.display = 'none'
    document.getElementById('max_occ_in_grp').style.display = 'none'
})

document.getElementById('comm_btn').addEventListener('click', () => {
    console.log('hello world')
    document.getElementById('num_apts_in_grp').style.display = 'none'
    document.getElementById('num_flrs_in_grp').style.display = 'block'
    document.getElementById('num_vtrs_in_grp').style.display = 'none'
    document.getElementById('max_occ_in_grp').style.display = 'block'
})

document.getElementById('ind_btn').addEventListener('click', () => {
    console.log('hello world')
    document.getElementById('num_apts_in_grp').style.display = 'none'
    document.getElementById('num_flrs_in_grp').style.display = 'none'
    document.getElementById('num_vtrs_in_grp').style.display = 'block'
    document.getElementById('max_occ_in_grp').style.display = 'none'
})
