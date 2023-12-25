const header = document.querySelector(".header");

const headerHTML = ` 
<nav class="navbar navbar-expand-lg bg-danger fixed-top">
      <div class="container-fluid d-flex justify-content-between">
        <div>
          <a class="navbar-brand text-light fw-bold" href="ballina.html">
            <img
              src="./Fotot/logo.png"
              alt="logo"
              class="img-fuid rounded-4 logo-image"
              style="width: 80px"
            />
          </a>
        </div>
        <h1 class="text-light fw-bold">SHPORTA</h1>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item d-flex align-items-center">
              <a
                class="nav-link fs-4 fw-semibold text-light"
                aria-current="page"
                href="#"
                >Ofertat</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="shporta.html"
                ><i class="bi bi-bag fs-1"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;

header.innerHTML = headerHTML;
