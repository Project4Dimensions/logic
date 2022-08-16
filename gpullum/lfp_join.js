/* lfpJoin() iterates over an arrray of 360 objects (lfp1_data.js)
 * and joins it with a second arrray of 360 objects (lfp2_data.js);
 * see output (lfp3_data.js).
 *
 * an escaped double quotation mark (\") outputs a double quotation
 * mark ("); an escaped n (\n) outputs a new line. */

function lfpJoin() {
    "use strict";
    const json = document.getElementById("json");
    json.appendChild(document.createTextNode("const lfp3 = [\n"));
    lfp1.map(function (obj1) {
        let temp = lfp2.find((obj2) => obj2.a_num === obj1.a_num);
        json.appendChild(document.createTextNode(
            "    {\n" +
            "        \"a_num\": \"" + obj1.a_num + "\",\n" +
            "        \"b_link\": \"" + obj1.b_link + "\",\n" +
            "        \"c_title\": \"" + obj1.c_title + "\",\n" +
            "        \"d_dateUK\": \"" + obj1.d_dateUK + "\",\n" +
            "        \"e_dateISO\": \"" + temp.e_dateISO + "\",\n" +
            "        \"f_image\": \"" + temp.f_image + "\",\n" +
            "        \"g_alt\": \"" + temp.g_alt + "\",\n" +
            "        \"h_desc\": \"" + temp.h_desc + "\",\n" +
            "        \"i_page\": \"" + temp.i_page + "\"\n" +
            "    },\n"
        ));
    });
    json.appendChild(document.createTextNode("];"));
}

/* Reference:
 *
 * Javascript map over two arrays of objects - Stack Overflow
 * https://stackoverflow.com/questions/53647473
 *
 *  const lfCapta1 = [
 *      {"a_num": 360, "d_dateUK": "18 Dec 2018"},
 *      {"a_num": 359, "d_dateUK": "13 Dec 2018"}
 *  ];
 *  const lfPosts = [
 *      {"a_num": 360, "f_alt": "typewriter", "g_dateISO": "2018-12-18"},
 *      {"a_num": 359, "f_alt": "orwell", "g_dateISO": "2018-12-13"}
 *  ];
 * let op = lfCapta1.map(function (obj1) {
 *     let temp = lfPosts.find((obj2) => obj2.a_num === obj1.a_num);
 *     if (temp.f_alt) {
 *         obj1.f_alt = temp.f_alt;
 *     }
 *     return obj1;
 * });
 */

/* JSLint edition 2022-07-20 (jslint.com)
 * Options
 *   Env…
 *     browser
 *   imported globals
 *     lfp1 lfp2
 * Report: Warnings (0)
 *   There are no warnings.
 */

