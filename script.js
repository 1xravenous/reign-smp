const kingdoms = {

    valthera: {
        name: "VALTHERA",
        title: "THE GOLDEN DOMINION",
        logo: "images/teams/valthera.jpg",
        description:
            "Within the realm of Reign, Valthera established its territory across rich lands filled with valuable resources. Its capital grew into one of the most prosperous settlements in the realm. The people of Valthera believe that influence is built through wealth, development, and ambition. Their kingdom is known for grand structures, carefully planned settlements, and the desire to become one of the strongest powers among the Seven."
    },

    eldoria: {
        name: "ELDORIA",
        title: "THE ANCIENT REALM",
        logo: "images/teams/eldoria.jpg",
        description:
            "Deep within the forests of Reign lies Eldoria. Its territory contains ancient ruins and places that appear to have existed long before the Seven Kingdoms were founded. Eldoria's people have made the study of these locations part of their kingdom's identity. Their settlements blend with the surrounding wilderness, while their explorers continue searching the realm for clues about Reign's forgotten past."
    },

    veylcrest: {
        name: "VEYLCREST",
        title: "THE SHADOW COURT",
        logo: "images/teams/veylcrest.jpg",
        description:
            "Veylcrest occupies a territory where forests, mountains, and hidden paths provide natural protection. Rather than expanding openly, the kingdom built its influence through information and careful observation. Within Reign, Veylcrest became known for keeping its plans private and watching the movements of neighboring kingdoms."
    },

    aetherion: {
        name: "AETHERION",
        title: "THE SKYBOUND KINGDOM",
        logo: "images/teams/aetherion.jpg",
        description:
            "Aetherion claimed some of the highest and most difficult terrain in Reign. Its builders turned mountains and elevated landscapes into homes, towers, and settlements overlooking the realm. Exploration became central to Aetherion's identity as its people searched for new lands and opportunities."
    },

    dravenfall: {
        name: "DRAVENFALL",
        title: "THE IRON LEGION",
        logo: "images/teams/dravenfall.jpg",
        description:
            "Dravenfall was established in a harsh region of Reign where survival required preparation and determination. Its people responded by building fortified settlements and developing a culture centered around strength and discipline."
    },

    solmire: {
        name: "SOLMIRE",
        title: "THE ASHEN ORDER",
        logo: "images/teams/solmire.jpg",
        description:
            "Solmire's territory lies among some of the harsher lands of Reign. Instead of abandoning the region, its settlers learned to adapt and establish a kingdom there. Its people value survival, resilience, and rebuilding."
    },

    verdantis: {
        name: "VERDANTIS",
        title: "THE VERDANT CROWN",
        logo: "images/teams/verdantis.jpg",
        description:
            "Verdantis built its kingdom among the forests and natural landscapes of Reign. Its people chose to preserve much of the land around their settlements. Their cities incorporate trees, rivers, gardens, and natural formations into their architecture."
    }

};


const people = {

    yushiro: {
        name: "YUSHIRO",
        role: "OWNER",
        pfp: "images/pfp/yushiro.jpg",
        description:
            "Yushiro stands among the founders of Reign SMP. As one of the people who helped establish the realm, Yushiro became part of the story surrounding the Seven Kingdoms. His role as an owner places him at the center of the decisions that shape Reign and its kingdoms."
    },

    lynx: {
        name: "LYNX",
        role: "OWNER & DEVELOPER",
        pfp: "images/pfp/lynx.jpg",
        description:
            "Lynx is one of the founders of Reign SMP and the developer responsible for building and maintaining the systems behind the realm. As both owner and developer, Lynx plays a major role in shaping the future of the Seven Kingdoms."
    },

    kenzeki: {
        name: "KENZEKI",
        role: "OWNER",
        pfp: "images/pfp/kenzeki.jpg",
        description:
            "Kenzeki is one of the founders of Reign SMP and one of the figures responsible for guiding the realm. From the beginning of the Seven Kingdoms, Kenzeki became part of the leadership behind Reign."
    },

    shanie: {
        name: "SHANIE",
        role: "ADMINISTRATOR",
        pfp: "images/pfp/shanie.jpg",
        description:
            "Shanie serves as one of the administrators of Reign. Within the realm, administrators help maintain the world in which the Seven Kingdoms develop."
    },

    yukiyo: {
        name: "YUKIYO",
        role: "ADMINISTRATOR",
        pfp: "images/pfp/yukiyo.jpg",
        description:
            "Yukiyo is one of the administrators entrusted with maintaining Reign SMP. As the Seven Kingdoms continue to grow, Yukiyo forms part of the staff responsible for keeping the realm organized."
    },

    rein: {
        name: "REIN",
        role: "ADMINISTRATOR",
        pfp: "images/pfp/rein.jpg",
        description:
            "Rein serves as an administrator within Reign SMP. Rein helps maintain the environment where the Seven Kingdoms build their settlements, establish their territories, and create their histories."
    },

    kyle: {
        name: "KYLE",
        role: "ADMINISTRATOR",
        pfp: "images/pfp/kyle.jpg",
        description:
            "Kyle is one of the administrators of Reign SMP. As the kingdoms expand throughout the realm, Kyle helps maintain the world and contributes to keeping the SMP organized."
    }

};


/* ==========================================
   SHOW KINGDOM
========================================== */

function showKingdom(id) {

    const kingdom = kingdoms[id];

    if (!kingdom) {
        return;
    }

    const info = document.getElementById("kingdom-info");
    const logo = document.getElementById("kingdom-display-logo");

    document.getElementById("kingdom-name").textContent =
        kingdom.name;

    document.getElementById("kingdom-title").textContent =
        kingdom.title;

    document.getElementById("kingdom-description").textContent =
        kingdom.description;

    logo.src = kingdom.logo;
    logo.alt = kingdom.name + " Logo";

    info.style.display = "none";

    void info.offsetWidth;

    info.style.display = "block";

    info.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* ==========================================
   CLOSE KINGDOM
========================================== */

function closeKingdom() {

    document.getElementById("kingdom-info").style.display =
        "none";
}


/* ==========================================
   SHOW PERSON
========================================== */

function showPerson(id) {

    const person = people[id];

    if (!person) {
        return;
    }

    const info = document.getElementById("person-info");
    const pfp = document.getElementById("person-pfp");

    document.getElementById("person-name").textContent =
        person.name;

    document.getElementById("person-role").textContent =
        person.role;

    document.getElementById("person-description").textContent =
        person.description;

    pfp.src = person.pfp;
    pfp.alt = person.name + " Profile Picture";

    info.style.display = "none";

    void info.offsetWidth;

    info.style.display = "block";

    info.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* ==========================================
   CLOSE PERSON
========================================== */

function closePerson() {

    document.getElementById("person-info").style.display =
        "none";
}


/* ==========================================
   CLICK ANIMATION
========================================== */

document.addEventListener("click", function(event) {

    const target = event.target.closest(
        "a, button, .person-card, .kingdom-card"
    );

    if (!target) {
        return;
    }

    const effect = document.createElement("div");

    effect.className = "click-effect";

    effect.style.left = event.clientX + "px";
    effect.style.top = event.clientY + "px";

    document.body.appendChild(effect);

    setTimeout(function() {
        effect.remove();
    }, 500);

});


/* ==========================================
   NAVIGATION ANIMATION
========================================== */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        this.style.transform = "scale(0.9)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});