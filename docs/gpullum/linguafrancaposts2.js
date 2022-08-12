function lfpList() {
    "use strict";
    const posts = document.getElementById("lfPosts");
    lfp3.map(function (obj) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let aTitle = document.createElement("a");

        aTitle.setAttribute("href", obj.b_link);

        td1.appendChild(document.createTextNode(obj.a_num));
        aTitle.appendChild(document.createTextNode(obj.c_title));
        td2.appendChild(aTitle);
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
 *   imported globals
 *     lfp3
 * Report: Warnings (0)
 *   There are no warnings. */
