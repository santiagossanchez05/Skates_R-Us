const jobs = [
  {
    title: "Nike Shoe",
    image: "https://i.ebayimg.com/images/g/DKgAAOSwdWNkayw4/s-l1200.webp",
    details:"",

    link: "#",
  },
  {
    title: "Vans",
    image: "https://i.pinimg.com/736x/d1/36/2c/d1362cdff7c28b813780a1a29c7b9621.jpg",
    details:"",
   
    link: "#",
  },
  {
    title: "idfk",
    image: "https://i.pinimg.com/736x/b8/f7/20/b8f720d952fb7dbe36f1a4e4f1f7091c.jpg",
    details:"",

    link: "#",
  },
  {
    title: "idfk",
    image: "https://i.pinimg.com/736x/b8/f7/20/b8f720d952fb7dbe36f1a4e4f1f7091c.jpg",
    details:"",

    link: "#",
  },
  {
    title: "idfk",
    image: "https://i.pinimg.com/736x/b8/f7/20/b8f720d952fb7dbe36f1a4e4f1f7091c.jpg",
    details:"",

    link: "#",
  },
  {
    title: "idfk",
    image: "https://i.pinimg.com/736x/b8/f7/20/b8f720d952fb7dbe36f1a4e4f1f7091c.jpg",
    details:"",

    link: "#",
  },
  {
    title: "idfk",
    image: "https://i.pinimg.com/736x/b8/f7/20/b8f720d952fb7dbe36f1a4e4f1f7091c.jpg",
    details:"",

    link: "#",
  },

];
function test(){/* THIS IS WHAT IM TRYING TO DO, in post.htm post has a test() action on click im tryuing to get the info from the post ur listing shit to create a new array element.
  var postname = document.getElementById("name").value;
  var desc = document.getElementById("description").value;
  var img = document.getElementById("picture").files[0];


  var post = localStorage.setItem("postname", postname);
  var info = localStorage.setItem("description", desc);
  var pic = localStorage.setItem("picture", img);

  var post = localStorage.getItem("postname", postname);
  var info = localStorage.getItem("description", desc);
  var pic = localStorage.getItem("picture", img);


  const jobs = document.getElementById("job-title")

  const titl = document.createElement("} something")
  
  let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = img;

      let title = document.createElement("h3");
      title.innerHTML = postname;
      title.classList.add("job-title");

      

      let detailsBtn = document.createElement("a");
      detailsBtn.href = link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

  
  jobCard.appendChild(img);
  jobCard.appendChild(postname);
  jobCard.appendChild(desc);
  jobCard.appendChild(detailsBtn);

  jobsContainer.appendChild(jobCard);
  */
}
const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let details = document.createElement("div");
      details.innerHTML = job.details;
      details.classList.add("details");

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(details);
      jobCard.appendChild(detailsBtn);
      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;

  createJobListingCards();
});




