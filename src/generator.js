//
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile); // WriteFile using promises instead of a callback function
//
// Generate markdown for team roster
//
class Generator {
  // Constructors
  constructor(fileName, roster) {
    this.fileName = fileName;
    this.roster = roster;
  }
  // Methods
  getFileName() {
    //
    return this.fileName;
    //
  }
  //
  getRoster() {
    //
    return this.roster;
    //
  }
  //
  getHeaderHTML() {
    //
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Team Roster</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./css/reset.css" />
        <link rel="stylesheet" href="./css/style.css" />
      </head>
      <body>
        <!-- Header -->
        <header>
          <!-- Menu -->
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#menu"
              aria-controls="menu"
              aria-expanded="false"
              aria-label="Toggle menu"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
              <a class="navbar-brand" href="#">Chocoyo Portfolio</a>
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Employees</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Managers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Engineers</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Interns</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search (coming soon...)"
                  aria-label="Search"
                />
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
          <!-- End of Menu -->
        </header>
        <!-- End of Header -->`;
    //
  }
  //
  getFooterHTML() {
    //
    return ` <!-- JavaScript Libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
      integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
      crossorigin="anonymous"
    ></script>
    <script src="https://unpkg.com/dayjs@1.10.4/dayjs.min.js"></script>
    <script src="https://unpkg.com/dayjs@1.10.4/plugin/advancedFormat.js"></script>
    <script src="https://unpkg.com/dayjs@1.10.4/plugin/weekOfYear.js"></script>
    <script>
      dayjs.extend(window.dayjs_plugin_advancedFormat);
      dayjs.extend(window.dayjs_plugin_weekOfYear);
    </script>
    <script src="./js/script.js"></script>
    <!-- End of JavaScript Libraries -->
  </body>
</html>`;
    //
  }
  //
  getRosterHTML() {
    //
    let rosterHTML = `
    <!-- Main -->
    <main>
      <!-- Header -->
      <h1 class="display-4 text-center">
        My Team Roster
        <!-- <button
          class="btn btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#myTeamRoster"
          aria-expanded="false"
          aria-controls="myTeamRoster"
          id="showMyTeamRoster"
        >
          <i
            class="fas fa-chevron-up"
            aria-hidden="true"
            id="showMyTeamRosterIcon"
          ></i>
        </button> -->
      </h1>
      <!-- End of Header -->
      <div id="myTeamRoster" class="row no-gutters d-flex justify-content-center">`;
    //
    for (let i = 0, emp; i < this.roster.length; i++) {
      //
      // console.log("Emp = ");
      // console.log(emp);
      //
      emp = this.roster[i];
      //
      rosterHTML += `<div class="col-3 card m-1 shadow p-3 mb-5 bg-white rounded">
      <div class="card-header text-white bg-primary">
        <p class="m-0">${emp.getName()}</p>
        <p class="m-0">`;
      //
      if (emp.getRole() === "M") {
        //
        rosterHTML += `
          <i class="fas fa-mug-hot"></i
          >`;
        //
      } else if (emp.getRole() === "E") {
        //
        rosterHTML += `
          <i class="fas fa-glasses"></i
          >`;
        //
      } else if (emp.getRole() === "I") {
        //
        rosterHTML += `
          <i class="fas fa-user-graduate"></i
          >`;
        //
      } else {
        //
        rosterHTML += `
          <i class="fas fa-users-cog"></i
          >`;
        //
      }
      //
      rosterHTML += `<span class="pl-2">${emp.getRoleName()}</span>
        </p>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: <span>${emp.getId()}</span></li>
          <li class="list-group-item">
            Email: <span><a
            href="mailto:${emp.getEmail()}"
            target="_blank"
            class="email"
            >${emp.getEmail()}</a
          ></span>
          </li>
          <li class="list-group-item">`;
      //
      if (emp.getRole() === "M") {
        //
        rosterHTML += `
              Office Number: <span>${emp.getOfficeNumber()}</span>`;
        //
      } else if (emp.getRole() === "E") {
        //
        rosterHTML += `
              GitHub: <span><a
              href="https://github.com/${emp.getGitHub()}"
              target="_blank"
              class="email"
              >${emp.getGitHub()}</a
            ></span>`;
        //
      } else {
        //
        rosterHTML += `
              School: <span>${emp.getSchool()}</span>`;
        //
      }
      //
      rosterHTML += `
        </li>
      </ul>
    </div>
  </div>`;
      //
    }
    //
    rosterHTML += `</div>
    <!-- End of Team Members -->
  </main>
  <!-- End of Main -->`;
    //
    return rosterHTML;
    //
  }
  //
  generateFullHTML() {
    //
    return this.getHeaderHTML() + this.getRosterHTML() + this.getFooterHTML();
    //
  }
  //
  writeToFile() {
    //
    writeFileAsync(this.fileName, this.generateFullHTML())
      .then(() => console.log(`Successfully created file ${this.fileName}.`))
      .catch((err) => console.log(`Error: ${err}`));
    //
  }
  //
  writeToFile2() {
    //
    fs.writeFile(this.fileName, this.generateFullHTML(), (err) =>
      err
        ? console.error(`Error: ${err}`)
        : console.log(`Successfully created file ${this.fileName}.`)
    );
    //
  }
  //
}

module.exports = {
  Generator,
};
