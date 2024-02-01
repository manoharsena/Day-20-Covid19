let container = document.getElementById("container");

let div = document.createElement("div");
div.setAttribute("id", "corona");
container.append(div);

let p = document.createElement("p");
p.innerText = "Government of Tamilnadu - Covid-19 Report";
p.classList.add("title");
div.append(p);

let div1 = document.createElement("div");
div1.setAttribute("id", "data");
div.append(div1);

const API_URL = "https://data.covid19india.org/v4/min/data.min.json";

const covidDetail = async (url) => {
  const res = await fetch(url);
  const result = await res.json();
  
  let district = result.TN.districts;
  console.log(district);
  console.log(district.Madurai);

  let obj = Object.keys(district);
  console.log(obj);

  for (let i of obj) {
    let div2 = document.createElement("div");
    div1.append(div2);
    let h3 = document.createElement("h3");
    h3.innerHTML = i;
    div2.append(h3);

    let totalData = district[i].total;

    for (let j of Object.keys(totalData)) {
      console.log(j + " : " + totalData[j]);
      let p1 = document.createElement("p");
      p1.innerHTML = `${j} : ${totalData[j]}`;
      div2.append(p1);
    }
  }
};

covidDetail(API_URL);
