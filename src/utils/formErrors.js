export const throwInputError = (parentNodeId, message) => {
    // Checking if error already exist
    if (document.querySelector("#" + parentNodeId + " + .wrong-login")) {
        const span = document.querySelector(
            "#" + parentNodeId + " + .wrong-login"
        );
        span.innerText = message;
    } else {
        const span = document.createElement("span");
        span.classList.add("wrong-login");
        span.innerText = message;
        const parentNode = document.getElementById(parentNodeId);
        parentNode.insertAdjacentElement("afterend", span);
    }
    document.querySelector("input#" + parentNodeId)?.classList.add("error");
};

export const cancelInputError = (parentNodeId) => {
    const span = document.querySelector("#" + parentNodeId + " + .wrong-login") || document.querySelector("#" + parentNodeId + " > .wrong-login");
    if (span) span.innerText = "";
};

export const removeError = (e) => {
    e.target.classList.remove("error");
};

export const calculateAge = (birthday) => {
    let today = new Date();
    let ageInMilliseconds = today - birthday;
    let ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365.25;
    return Math.floor(ageInYears);
};
