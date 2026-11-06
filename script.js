
// ========================================
// PIXORA 3.0 - IMAGE GALLERY
// Code Alpha Internship Project
// Created by Aditi Mishra
// ========================================

const images = [

    // PEOPLE - 7
    { title: "Portrait Beauty", category: "People", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800" },
    { title: "Classic Portrait", category: "People", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800" },
    { title: "Creative Portrait", category: "People", url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800" },
    { title: "Urban Portrait", category: "People", url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800" },
    { title: "Natural Beauty", category: "People", url: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800" },
    { title: "Creative Expression", category: "People", url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800" },
    { title: "Lifestyle Portrait", category: "People", url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900" },

    // ANIMALS - 7
    { title: "Wild Lion", category: "Animals", url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800" },
    { title: "Cute Cat", category: "Animals", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800" },
    { title: "Beautiful Dog", category: "Animals", url: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800" },
    { title: "Elephant", category: "Animals", url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800" },
    { title: "Wild Tiger", category: "Animals", url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800" },
    { title: "Colorful Bird", category: "Animals", url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=800" },

    // VEHICLES - 7
    { title: "Luxury Sports Car", category: "Vehicles", url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800" },
    { title: "Classic Car", category: "Vehicles", url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800" },
    { title: "Motorcycle", category: "Vehicles", url: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800" },
    { title: "Beautiful Bicycle", category: "Vehicles", url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800" },
    { title: "Luxury Automobile", category: "Vehicles", url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800" },
    { title: "Supercar", category: "Vehicles", url: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800" },
    { title: "Adventure Motorcycle", category: "Vehicles", url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800" },

    // NATURE - 7
    { title: "Mountain Paradise", category: "Nature", url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800" },
    { title: "Green Forest", category: "Nature", url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800" },
    { title: "Mountain Peaks", category: "Nature", url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
    { title: "Waterfall Paradise", category: "Nature", url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800" },
    { title: "Ocean Waves", category: "Nature", url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800" },
    { title: "Sunset Landscape", category: "Nature", url: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800" },
    { title: "Flower Garden", category: "Nature", url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800" },

    // FASHION - 7
    { title: "Fashion Style", category: "Fashion", url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800" },
    { title: "Street Fashion", category: "Fashion", url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800" },
    { title: "Fashion Editorial", category: "Fashion", url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800" },
    { title: "Modern Outfit", category: "Fashion", url: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=800" },
    { title: "Fashion Model", category: "Fashion", url: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800" },
    { title: "Streetwear", category: "Fashion", url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800" },
    { title: "Style Collection", category: "Fashion", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800" },

    // SPORTS - 7
    { title: "Football", category: "Sports", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800" },
    { title: "Basketball", category: "Sports", url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800" },
    { title: "Running Athlete", category: "Sports", url: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800" },
    { title: "Tennis Match", category: "Sports", url: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800" },
    { title: "Cycling Adventure", category: "Sports", url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800" },
    { title: "Fitness Training", category: "Sports", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800" },
    { title: "Swimming", category: "Sports", url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800" },

    // TECHNOLOGY - 7
    { title: "Modern Technology", category: "Technology", url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800" },
    { title: "Laptop Workspace", category: "Technology", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800" },
    { title: "Gaming Setup", category: "Technology", url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800" },
    { title: "Computer Hardware", category: "Technology", url: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800" },
    { title: "Smartphone", category: "Technology", url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" },
    { title: "Digital Workspace", category: "Technology", url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900" },
    { title: "Modern Electronics", category: "Technology", url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" },

    // FOOD - 7
    { title: "Delicious Dessert", category: "Food", url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800" },
    { title: "Healthy Breakfast", category: "Food", url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800" },
    { title: "Italian Pizza", category: "Food", url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800" },
    { title: "Fresh Burger", category: "Food", url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" },
    { title: "Sweet Pancakes", category: "Food", url: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800" },
    { title: "Fresh Salad", category: "Food", url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800" },
    { title: "Coffee Time", category: "Food", url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800" },

    // TRAVEL - 7
    { title: "Tropical Beach", category: "Travel", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
    { title: "Beautiful Italy", category: "Travel", url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800" },
    { title: "Paris Adventure", category: "Travel", url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800" },
    { title: "Desert Journey", category: "Travel", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800" },
    { title: "Snow Mountains", category: "Travel", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800" },
    { title: "Tropical Island", category: "Travel", url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
    { title: "City Exploration", category: "Travel", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800" },

    // ARCHITECTURE - 7
    { title: "Modern Architecture", category: "Architecture", url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800" },
    { title: "City Buildings", category: "Architecture", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800" },
    { title: "Modern House", category: "Architecture", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800" },
    { title: "Urban Architecture", category: "Architecture", url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800" },
    { title: "Beautiful Interior", category: "Architecture", url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" },
    { title: "City Skyline", category: "Architecture", url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=900" },
    { title: "Contemporary Design", category: "Architecture", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800" },

    // ART - 7
    { title: "Creative Art", category: "Art", url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800" },
    { title: "Colorful Painting", category: "Art", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800" },
    { title: "Abstract Artwork", category: "Art", url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800" },
    { title: "Creative Colors", category: "Art", url: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800" },
    { title: "Artistic Painting", category: "Art", url: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800" },
    { title: "Colorful Creativity", category: "Art", url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900" },
    { title: "Modern Art", category: "Art", url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900" }

];


// 2. HTML ELEMENTS

const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");
const resultInfo = document.getElementById("resultInfo");
const clearSearch = document.getElementById("clearSearch");

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const closeModal = document.getElementById("closeModal");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const downloadImage = document.getElementById("downloadImage");


// 3. APP VARIABLES

let selectedCategory = "All";
let currentImages = [...images];
let currentIndex = 0;


// 4. DISPLAY IMAGES

function displayImages(data) {

    galleryGrid.innerHTML = "";

    resultInfo.textContent = `${data.length} images found`;

    noResults.style.display =
        data.length === 0 ? "block" : "none";

    data.forEach((image, index) => {

        const card = document.createElement("div");
        card.className = "gallery-card";

        const img = document.createElement("img");
        img.src = image.url;
        img.alt = image.title;
        img.loading = "lazy";

        img.onerror = function () {
            card.innerHTML = `
                <div style="
                    height:100%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#eee7f5;
                    color:#7655e8;
                    font-size:14px;">
                    Image unavailable
                </div>
            `;
        };

        const overlay = document.createElement("div");
        overlay.className = "card-overlay";

        const title = document.createElement("h3");
        title.textContent = image.title;

        const category = document.createElement("span");
        category.textContent = image.category;

        overlay.appendChild(title);
        overlay.appendChild(category);

        card.appendChild(img);
        card.appendChild(overlay);

        card.addEventListener("click", () => {
            openModal(index);
        });

        galleryGrid.appendChild(card);
    });

    currentImages = data;
}


// 5. SEARCH AND FILTER

function filterImages() {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const filteredImages = images.filter(image => {

        const matchesCategory =
            selectedCategory === "All" ||
            image.category === selectedCategory;

        const matchesSearch =
            image.title.toLowerCase().includes(searchText) ||
            image.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    displayImages(filteredImages);
}


// 6. CATEGORY BUTTONS

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        filterImages();
    });
});


// 7. SEARCH

searchInput.addEventListener("input", filterImages);


// 8. CLEAR SEARCH

clearSearch.addEventListener("click", () => {

    searchInput.value = "";

    filterImages();

    searchInput.focus();
});


// 9. OPEN MODAL

function openModal(index) {

    if (!currentImages.length) return;

    currentIndex = index;

    updateModal();

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}


// 10. UPDATE MODAL

function updateModal() {

    const image = currentImages[currentIndex];

    modalImage.src = image.url;
    modalImage.alt = image.title;

    modalTitle.textContent = image.title;

    modalCategory.textContent =
        `Category: ${image.category}`;

    downloadImage.href = image.url;
    downloadImage.download =
        image.title.replace(/\s+/g, "-").toLowerCase() + ".jpg";
}


// 11. CLOSE MODAL

function hideModal() {

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

closeModal.addEventListener("click", hideModal);


// 12. NEXT IMAGE

nextImage.addEventListener("click", () => {

    if (!currentImages.length) return;

    currentIndex =
        (currentIndex + 1) % currentImages.length;

    updateModal();
});


// 13. PREVIOUS IMAGE

prevImage.addEventListener("click", () => {

    if (!currentImages.length) return;

    currentIndex =
        (currentIndex - 1 + currentImages.length) %
        currentImages.length;

    updateModal();
});


// 14. CLICK OUTSIDE MODAL

modal.addEventListener("click", event => {

    if (event.target === modal) {
        hideModal();
    }
});


// 15. KEYBOARD CONTROLS

document.addEventListener("keydown", event => {

    if (!modal.classList.contains("show")) return;

    if (event.key === "Escape") {
        hideModal();
    }

    if (event.key === "ArrowRight") {
        nextImage.click();
    }

    if (event.key === "ArrowLeft") {
        prevImage.click();
    }
});


// 16. CATEGORY COUNT VALIDATION

const categories = [
    "People", "Animals", "Vehicles", "Nature",
    "Fashion", "Sports", "Technology", "Food",
    "Travel", "Architecture", "Art"
];

console.log("PIXORA CATEGORY REPORT");

categories.forEach(category => {

    const count = images.filter(
        image => image.category === category
    ).length;

    console.log(`${category}: ${count} images`);
});


// 17. INITIALIZE

document.getElementById("totalPhotos").textContent =
    images.length;

displayImages(images);

console.log("PIXORA initialized successfully!");
console.log("Total image entries:", images.length);
console.log("Total categories:", categories.length);
