var pixabay_api = 'https://pixabay.com/api/?key=4290320-04f04641b156314869d13b865&q=christmas&image_type=photo&pretty=true';
var inside_preview = document.querySelector('.preview');
var inside_lists = document.querySelector('.lists');
var add_image_ele_to_preview = document.createElement('img');
var add_image_ele_to_lists = document.createElement('img');
add_image_ele_to_preview.style.width = "100%";
add_image_ele_to_preview.style.borderRadius = '10px';
add_image_ele_to_lists.style.width = '100px';
add_image_ele_to_lists.style.borderRadius = '10px';
inside_preview.appendChild(add_image_ele_to_preview);
add_image_ele_to_preview.src = 'https://pixabay.com/get/57e9d2464853a914f6da8c7dda79337c1c3fdde7534c704f752778d1914fc05e_1280.jpg';

fetch(pixabay_api)
    .then(response => response.json())
    .then(json => deal(json))
    .catch(err => alert(err + " Reload page"));
function deal (all_files) {
    for (let i = 0; i < all_files.hits.length; i++){
        add_image_ele_to_lists.src = all_files.hits[i].previewURL;
        inside_lists.appendChild(add_image_ele_to_lists.cloneNode());
    }
    for (var i = 1; i < all_files.hits.length; i++) {
        (function (i) {
            setTimeout(function () {
                add_image_ele_to_preview.src = all_files.hits[i].largeImageURL;
                inside_preview.appendChild(add_image_ele_to_preview);
            }, 15000*i);
        })(i);
    };
}
