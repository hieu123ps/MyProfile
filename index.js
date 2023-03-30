import {header} from "./render/header.js";
import {footer} from "./render/footer.js";
import * as main from "./render/main.js";
const ClassMain = new main.Main();
$(window).on("load",
function(){
$("header").append(header)
$("main").append(ClassMain.search)
$("footer").append(footer)
});



