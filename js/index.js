// Função para adicionar o HTML ao DOM
function adicionarLoginAoDOM() {
    var div = document.createElement("div");
    div.innerHTML = `
    <main>
    <section class="home" id="home">
        <div class="home-text">
            <h1>Food Tasty</h1>
            <h2>The tasty food of <br> your choice</h2>
            <a href="#menu" class="btn">View Menu</a>
        </div>
        <div class="home-img">
            <img src="img/home.png" alt="">
        </div>
    </section>
    <section class="about" id="about">
        <div class="about-img">
            <img src="img/about.jpg" alt="">
        </div>
        <div class="about-text">
            <span>About Us</span>
            <h2>We make good and <br> tasty food</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quo iure rem ducimus tenetur deserunt commodi doloribus, quibusdam vel fuga?</p>
            <a href="#" class="btn">Lear More</a>
        </div>
    </section>
    <section class="menu" id="menu">
        <div class="heading">
            <span>Menu</span>
            <h2>Tasty menu of the week</h2>
        </div>
        <div class="menu-container">
            <div class="box">
                <div class="box-img">
                    <img src="img/menu1.png" alt="">
                </div>
                <h2>Cheese Burger</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <div class="box">
                <div class="box-img">
                    <img src="img/menu2.png" alt="">
                </div>
                <h2>Cheese Burger</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
            <div class="box">
                <div class="box-img">
                    <img src="img/menu3.png" alt="">
                </div>
                <h2>Cheese Burger</h2>
                <h3>Tasty Food</h3>
                <span>$12.05</span>
                <i class='bx bx-cart-alt'></i>
            </div>
        </div>
    </section>
    <section class="services" id="services">
        <div class="heading">
            <span>Services</span>
            <h2>We provide best food services</h2>
        </div>
        <div class="servives-container">
            <div class="s-box">
                <img src="img/order.png" alt="">
                <h3>You Order</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
            <div class="s-box">
                <img src="img/delivery-truck.png" alt="">
                <h3>Shipping</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
            <div class="s-box">
                <img src="img/shipping.png" alt="">
                <h3>Delivered</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ea fugiat esse tempore ipsum temporibus.</p>
            </div>
        </div>
    </section>
    <section class="connect">
        <div class="connect-text">
            <span>Let's Talk</span>
            <h2>Connect now</h2>
        </div>
        <a href="#" class="btn">Contact Us</a>
    </section>
    <div class="copyright">
        <p>&#169; Eduardo S Ferreira All Right Reserved.</p>
    </div>
    </main>
    <!-- Contact -->
    <section class="contact" id="contact">
        <div class="contact-box">
            <h3>Food tasty</h3>
            <span>Connect With Us</span>
            <div class="social">
                <a href="#"><i class='bx bxl-facebook' ></i></a>
                <a href="#"><i class='bx bxl-twitter' ></i></a>
                <a href="#"><i class='bx bxl-instagram' ></i></a>
            </div>
        </div>
        <div class="contact-box">
            <h3>Menu Links</h3>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#contact">Contact</a></li>
        </div>
        <div class="contact-box">
            <h3>Quick Links</h3>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Privacy Policy">Privacy Policy</a></li>
            <li><a href="#Disclaimer">Disclaimer</a></li>
            <li><a href="#Terms Of Use">Terms Of Use</a></li>
        </div>
        <div class="contact-box address">
            <h3>Contact</h3>
            <i class='bx bxs-map' ><span>44 Street New York, USA</span></i>
            <i class='bx bxs-phone' ><span>+1 444 444 4444</span></i>
            <i class='bx bxs-envelope' ><span>Exapmle@email.com</span></i>
        </div>
    </section>
      `;
  
    document.body.appendChild(div);
  }
  
  adicionarLoginAoDOM();