//Entry.js: Entrypoint of Academia frontend tests
import $ from "jquery";

//Mocha package directory
const MOCHA_PKG_DIR = "./node_modules/mocha";
//Test modules
const TEST_MODULES = [
    "index_test",
    "login_test",
    "note_upload_test",
    // "paper_content_test",
    // "paper_detail_test",
    // "paper_upload_test",
    "register_test",
    "userspace_test"
];

//Mocha CSS
$("<link />")
    .attr("rel", "stylesheet")
    .attr("href", `${MOCHA_PKG_DIR}/mocha.css`)
    .appendTo("head");
//Test result area
$("<div />")
    .attr("id", "mocha")
    .appendTo("body");


//Load mocha and run tests
$.getScript(`${MOCHA_PKG_DIR}/mocha.js`).then(() => {
  console.log("fuck");

    //Set up test environment
    mocha.setup("bdd");
    //Load tests
    for (let module of TEST_MODULES)
        require("./"+module);
    //Run tests
    mocha.run();

});
