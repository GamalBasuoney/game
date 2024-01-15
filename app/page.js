export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Gaming</title>
      </head>

      <body>
        <nav>
          <div>
            <input type="search" placeholder="Search Product" />
            <h2>
              Gaming<span>.</span>
            </h2>
            <ul class="icons">
              {/* i love use svg image like this */}
              <svg
                width="150"
                height="180"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 9.81818C4.27834 9.81818 1.66667 12.3824 1.66667 15.5455V17.1818C1.66667 17.6337 1.29357 18 0.833333 18C0.373096 18 0 17.6337 0 17.1818V15.5455C0 11.4786 3.35786 8.18182 7.5 8.18182C11.6421 8.18182 15 11.4786 15 15.5455V17.1818C15 17.6337 14.6269 18 14.1667 18C13.7064 18 13.3333 17.6337 13.3333 17.1818V15.5455C13.3333 12.3824 10.7217 9.81818 7.5 9.81818Z"
                  fill="#545454"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.5 8.18182C9.34095 8.18182 10.8333 6.71657 10.8333 4.90909C10.8333 3.10161 9.34095 1.63636 7.5 1.63636C5.65905 1.63636 4.16667 3.10161 4.16667 4.90909C4.16667 6.71657 5.65905 8.18182 7.5 8.18182ZM7.5 9.81818C10.2614 9.81818 12.5 7.62031 12.5 4.90909C12.5 2.19787 10.2614 0 7.5 0C4.73858 0 2.5 2.19787 2.5 4.90909C2.5 7.62031 4.73858 9.81818 7.5 9.81818Z"
                  fill="#545454"
                />
              </svg>
              []
              <li>
                {" "}
                <img src="huser.svg" />
              </li>
              <li>
                {" "}
                <img src="../public/hwishlist.svg" />
              </li>
              <li>
                {" "}
                <img src="../public/hcart.svg.svg" />
              </li>
            </ul>
          </div>

          <div>
            <span>New Accessories -30% Off. More</span>
            <ul>
              <li>Warcraft</li>
              <li>Gaming PCs</li>
              <li>Online Games</li>
              <li>Gaming Accessories</li>
              <li>Gaming Chairs</li>
              <li>Gaming Consoles</li>
            </ul>
          </div>
        </nav>
      </body>
    </html>
  );
}
