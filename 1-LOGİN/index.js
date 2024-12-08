var images = ['https://cdn.motor1.com/images/mgl/88Xjq/s1/lamborghini-sc20.webp', 'https://static.wikia.nocookie.net/dccu/images/7/7c/Flash_DCEU_-_The_Flash.jpg/revision/latest/scale-to-width-down/1200?cb=20230830142924', 'https://sm.ign.com/ign_tr/screenshot/default/hbo-4-1611776655203_qskv.jpg', 'https://media-cdn.t24.com.tr/media/library/2021/12/1639315486157-713756-396520714.jpg', 'https://neizledik.com/wp-content/uploads/2018/09/wp2028638.jpg', 'https://www.guvenliweb.org.tr/dosya/betuD.jpg'];
var currentIndex = 0;

function changeBackground() {
    var body = document.querySelector('body');
    currentIndex = (currentIndex + 1) % images.length;
    var imageURL = images[currentIndex];
    body.style.backgroundImage = "url('" + imageURL + "')";
}

function şifre() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-danger alert-dismissible fade show";
    alertDiv.setAttribute("role", "alert");

    var strong = document.createElement("strong");
    strong.innerText = "Session Message ! ";

    var message = document.createTextNode("");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn-close";
    button.setAttribute("data-bs-dismiss", "alert");
    button.setAttribute("aria-label", "Close");

    alertDiv.appendChild(strong);
    alertDiv.appendChild(message);
    alertDiv.appendChild(button);

    var alertContainer = document.getElementById("alertContainer");
    alertContainer.appendChild(alertDiv);
}
function kayıt() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning alert-dismissible fade show";
    alertDiv.setAttribute("role", "alert");

    var strong = document.createElement("strong");
    strong.innerText = "Login page for frontend purposes  : Frontend Amaçlıdır bu tasarım ";

    var message = document.createTextNode("");

    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn-close";
    button.setAttribute("data-bs-dismiss", "alert");
    button.setAttribute("aria-label", "Close");

    alertDiv.appendChild(strong);
    alertDiv.appendChild(message);
    alertDiv.appendChild(button);

    var alertContainer = document.getElementById("alertContainer");
    alertContainer.appendChild(alertDiv);
}