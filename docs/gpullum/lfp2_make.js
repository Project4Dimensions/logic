/* lfpMake() iterates over an arrray of 360 objects (lfp3_data.js)
 * see output (lfp2_data.js).
 *
 * an escaped n (\n) outputs a new line. */

function lfpMake() {
    "use strict";
    const json = document.getElementById("json");
    json.appendChild(document.createTextNode("const lfp2 = [\n"));
    lfp3.map(function (obj1) {
        json.appendChild(document.createTextNode(
            "    {\n" +
            "        \"a_num\": \"" + obj1.a_num + "\",\n" +
            "        \"e_dateISO\": \"" + obj1.e_dateISO + "\",\n" +
            "        \"f_image\": \"" + obj1.f_image + "\",\n" +
            "        \"g_alt\": \"" + obj1.g_alt + "\",\n" +
            "        \"h_desc\": \"" + obj1.h_desc + "\",\n" +
            "        \"i_page\": \"" + obj1.i_page + "\"\n" +
            "    },\n"
        ));
    });
    json.appendChild(document.createTextNode("];"));
}

/* JSLint edition 2022-07-20 (jslint.com)
 * Options
 *   Env…
 *     browser
 *   imported globals
 *     lfp3
 * Report: Warnings (0)
 *   There are no warnings.
 */
