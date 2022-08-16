/* lfpMake() iterates over an arrray of 360 objects (lfp3_data.js)
 * see output (lfp1_data.html).
 *
 * an escaped n (\n) outputs a new line.
 * any text after two forward slashes (//) is a comment */

function lfpMake() {
    "use strict";
    const table = document.getElementById("table");
    table.appendChild(document.createTextNode(
        "<table>\n\n" +
        "  <tr>\n" +
        "    <th>a_num</th>\n" +
        "    <th>b_link</th>\n" +
        "    <th>c_title</th>\n" +
        "    <th>d_date</th>\n" +
        "  </tr>\n\n"
    ));
    lfp3.map(function (obj1) {
        //let br = document.createElement("br");
        table.appendChild(document.createTextNode(
            "  <tr>\n" +
            "    <td>" + obj1.a_num + "</td>\n" +
            "    <td>" + obj1.b_link + "</td>\n" +
            "    <td>" + obj1.c_title + "</td>\n" +
            "    <td>" + obj1.d_dateUK + "</td>\n" +
            "  </tr>\n\n"
            //"  <td>" + temp.g_dateISO + "</tr>\n" +
            //"  <td>" + temp.e_image + "</tr>\n" +
            //"  <td>" + temp.f_alt + "</tr>\n" +
            //"  <td>" + temp.h_desc + "</tr>\n" +
            //"  <td>" + temp.i_page + "</tr>\n" +
            //"  </tr>\n\n"
        ));
    });
    table.appendChild(document.createTextNode("</table>"));
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
