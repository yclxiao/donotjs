import './assets/style/color.css';
import Test from "./test";

(function (name) {
    document.getElementById("root").innerHTML = name;
    console.log(Test('test'));
})('test1112233');