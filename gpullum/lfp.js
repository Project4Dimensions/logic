/* see lfp_comments.html */

function lfpList() {
    "use strict";
    lfp3.map(function (obj) {
        let posts = document.getElementById("lfPosts");
        let dCard = document.createElement("div");
        let dCardH = document.createElement("div");
        let dCol2 = document.createElement("div");
        let img = document.createElement("img");
        let dCol10 = document.createElement("div");
        let pTitle = document.createElement("p");
        let aTitle = document.createElement("a");
        let pDesc = document.createElement("p");
        let pPage = document.createElement("p");
        let aPage = document.createElement("a");

        dCard.setAttribute("class", "card mb-2 shadow-sm");
        dCardH.setAttribute("class", "card-header d-flex align-items-top");
        dCol2.setAttribute("class", "col-2");
        img.setAttribute("class", "img-fluid img-thumbnail");
        img.setAttribute("alt", obj.g_alt);
        img.setAttribute("src", obj.f_image);
        dCol10.setAttribute("class", "col-10 ps-3");
        pTitle.setAttribute("class", "card-text mb-1 small text-secondary");
        aTitle.setAttribute("class", "text-secondary");
        aTitle.setAttribute("href", obj.b_link);
        pDesc.setAttribute("class", "card-text mb-1 lh-1 small text-secondary");
        pPage.setAttribute("class", "card-text small text-secondary");
        aPage.setAttribute("class", " text-secondary");
        aPage.setAttribute("href", obj.i_page);

        aTitle.appendChild(document.createTextNode(obj.c_title));

        pTitle.appendChild(aTitle);
        pTitle.appendChild(document.createElement("br"));
        pTitle.appendChild(document.createTextNode(
            "Geoffrey K. Pullum · " + obj.d_dateUK + " · № " + obj.a_num
        ));

        pDesc.appendChild(document.createTextNode(obj.h_desc));

        aPage.appendChild(document.createTextNode(obj.i_page));

        pPage.appendChild(aPage);

        dCol2.appendChild(img);

        dCol10.appendChild(pTitle);
        dCol10.appendChild(pDesc);
        dCol10.appendChild(pPage);

        dCardH.appendChild(dCol2);
        dCardH.appendChild(dCol10);

        dCard.appendChild(dCardH);
        posts.appendChild(dCard);
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
