class MyForm {
    repoName;
    fullName;
    date1;

    constructor(repoName, fullName, date1) {
        repoName = repoName;
        fullName = fullName;
        date1 = date1;
    }

    rederToHTML() {
        let div = document.createElement("div");
        let text = document.createTextNode(this.repoName);
    }
}
