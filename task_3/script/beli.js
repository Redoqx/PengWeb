const harga_asli = document.getElementById('harga-asli');
const product = document.getElementById('nama-product');

const query = window.location.href.split('?').pop();

const obj = {};

query.split('&').forEach((val) => {
    const [key, value] = val.split('=');
    if (obj[key]) {
        if (Array.isArray(obj[key])){
            obj[key] = [...obj[key], value];
        }else if(value.split(',').length > 0){
            obj[key] = value.split(',');
        }else{
            obj[key] = [obj[key], value];
        }
    }else{
        obj[key] = value;
    }
})

harga_asli.textContent = obj['price'];
product.textContent = 'Penawaran anda untuk '+obj['barang'].replaceall('%20', ' ');