//container-div
let div=document.createElement("div")
div.setAttribute("class","container")
document.body.append(div);
//row div
let row=document.createElement("div");
row.setAttribute("class","row");
div.append(row);

let restUrl = "https://restcountries.com/v3.1/all";
let rest = fetch(restUrl);
rest
  .then((response) => {

    return response.json(); 
  })
  .then((data) => {
    data.forEach((country) => {
        let countryName=country.name.common;
        let img=country.flags.png
        let capital=country.capital;
        let region=country.region;
        let countryCode=country.fifa;
        let newDiv = document.createElement('div');
      newDiv.classList.add('col-lg-4');
      newDiv.innerHTML = `
        <div class="card" style="width: 18rem">
          <h5 class="card-header">${countryName}</h5>
          <img src="${img}" class="card-img-top" alt="image" />
          <div class="card-body">
            <p class="card-text">Capital: ${capital}</p>
            <p class="card-text">Region: ${region}</p>
            <p class="card-text">Country Code: ${countryCode}</p>
            <a href="#" class="btn btn-primary">Click for Weather</a>
          </div>
        </div>
      `;
      row.appendChild(newDiv);
    });
  })


//append dynamic element
{/* <div class="col-lg-4">
          <div class="card" style="width: 18rem">
            <h5 class="card-header">Card title</h5>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Capital :</p>
              <p class="card-text">Region :</p>
              <p class="card-text">Country Code:</p>
              <a href="#" class="btn btn-primary">Click for Weather</a>
            </div>
          </div>
        </div> */}