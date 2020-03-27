const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


const client_id = "Iv1.a99f35d4d69f1d53";
const client_secret = "df792822641eb15df68435a152ba8a2cd671e10a";


const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${inputValue.value}?client_id=${client_id}&client_secret=${client_secret}`);
    console.log(inputValue.value);

    const data = await api_call.json();
    return { data }
};

const showData = () => {
    fetchUsers(inputValue.Value).then((res) => {
        console.log(res);
        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;

        reposContainer.innerHTML = `Repos: <span class="main__profile-value">${res.data.public_repos}</span>`;

        urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;

    })
};


searchButton.addEventListener("click", () => {
    showData();
})