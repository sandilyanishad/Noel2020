var pixabay_api = 'https://pixabay.com/api/?key=4290320-04f04641b156314869d13b865&q=christmas&image_type=photo&pretty=true';
var inside_preview = document.querySelector('.preview');
let inside_lists = document.querySelector('.lists');
var add_image_ele_to_preview = document.createElement('img');
var add_image_ele_to_lists = document.createElement('img');
var s1 = document.getElementById('s1');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
add_image_ele_to_preview.style.width = "100%";
add_image_ele_to_preview.style.borderRadius = '10px';
add_image_ele_to_lists.style.width = '100px';
add_image_ele_to_lists.style.borderRadius = '10px';
inside_preview.appendChild(add_image_ele_to_preview);
// add_image_ele_to_preview.src = 'https://pixabay.com/get/57e9d2464853a914f6da8c7dda79337c1c3fdde7534c704f752778d1914fc05e_1280.jpg';
let all_final_data;
let address;
let got_what;
let si;
let counter = 0;
fetch_data(pixabay_api);
b1.addEventListener('click', () => {
    counter = 0;
    inside_lists.remove();
    inside_lists = document.createElement('div');
    inside_lists.setAttribute('class', 'lists');
    document.querySelector('.pixabay_images').appendChild(inside_lists);
    got_what = s1.value;
    got_what = got_what.replace(/ /g, '+');
    address = 'https://pixabay.com/api/?key=4290320-04f04641b156314869d13b865&q=' + got_what + '&image_type=photo&pretty=true';
    fetch_data(address);
});
function loops() {
    si=setInterval(() => {
        add_image_ele_to_preview.src = all_final_data.hits[counter++].webformatURL;
        if (counter > all_final_data.hits.length - 1) {
            clearInterval(si);
            counter = 0;
        }
    }, 3000);
}
b3.addEventListener('click', () => {
    clearInterval(si);
});
b4.addEventListener('click', () => {
    counter = 0;
    add_image_ele_to_preview.src = all_final_data.hits[0].webformatURL;
});
b2.addEventListener('click', () => {
    loops();
});
function fetch_data(info) {
    fetch(info)
        .then(data_first => data_first.json())
        .then(data_second => {
            all_final_data = data_second;
            add_image_ele_to_preview.src = all_final_data.hits[(Math.floor(Math.random()*10000))%all_final_data.hits.length].webformatURL;
            for (let i = 0; i < all_final_data.hits.length; i++){
                add_image_ele_to_lists.src = all_final_data.hits[i].previewURL;
                inside_lists.appendChild(add_image_ele_to_lists.cloneNode());
            }
        })
        .catch(err => alert(err + " Please reload the page"));
}
