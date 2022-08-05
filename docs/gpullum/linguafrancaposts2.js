function lfpList() {
    "use strict";
    lfp3.map(function (obj) {
        let posts = document.getElementById("lfPosts");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let font = document.createElement("font");
        let aTitle = document.createElement("a");

        td1.setAttribute("valign", "top");
        td2.setAttribute("valign", "top");
        td3.setAttribute("valign", "top");
        font.setAttribute("size", "+1");
        aTitle.setAttribute("href", obj.b_link);

        td1.appendChild(document.createTextNode(obj.a_num));
        aTitle.appendChild(document.createTextNode(obj.c_title));
        font.appendChild(aTitle);
        td2.appendChild(font);
        td3.appendChild(document.createTextNode(obj.d_dateUK));

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        posts.appendChild(tr);
    });
}

/* JSLint edition 2022-07-20 (jslint.com)
 * Options
 *   Env…
 *     browser
 *     devel
 *   imported globals
 *     lfp3
 * Report: Warnings (0)
 *   There are no warnings. */
