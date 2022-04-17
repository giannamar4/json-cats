let cats = `{
    "title": "Cat Families",
    "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
    "cats": [
      {
        "name": "Lindy",
        "breed": "Cymric",
        "color": "white",
        "kittens": [
          {
            "name": "Percy",
            "gender": "m"
          },
          {
            "name": "Thea",
            "gender": "f"
          },
          {
            "name": "Annis",
            "gender": "f"
          }
        ]
      },
      {
        "name": "Mina",
        "breed": "Aphrodite Giant",
        "color": "ginger",
        "kittens": [
          {
            "name": "Doris",
            "gender": "f"
          },
          {
            "name": "Pickle",
            "gender": "f"
          },
          {
            "name": "Max",
            "gender": "m"
          }
        ]
      },
      {
        "name": "Antonia",
        "breed": "Ocicat",
        "color": "leopard spotted",
        "kittens": [
          {
            "name": "Bridget",
            "gender": "f"
          },
          {
            "name": "Randolph",
            "gender": "m"
          }
        ]
      }
    ]
 }`
 
cats = JSON.parse(cats)
 document.getElementById("app").innerHTML = `
 <h1 class="title">${cats.title}</h1>
 <h3 class="title">${cats.intro}</h3>

 <div class="cat1">
 <h2>Cat 1: ${cats.cats[0]["name"]}</h2>
 <p> Breed: ${cats.cats[0]["breed"]}</p>
<p> Color: ${cats.cats[0]["color"]}</p>
<h4>Kittens:</h2>
<ul>
<li>${cats.cats[0]["kittens"][0]["name"]}</li>
<ul>
<li> gender: ${cats.cats[0]["kittens"][0]["gender"]}</li>
</ul>
<li>${cats.cats[0]["kittens"][1]["name"]}</li>
<ul>
<li> gender: ${cats.cats[0]["kittens"][1]["gender"]}</li>
</ul>
<li>${cats.cats[0]["kittens"][2]["name"]}</li>
<ul>
<li> gender: ${cats.cats[0]["kittens"][2]["gender"]}</li>
</ul>
</ul>
</div>

<div class="cat1">
 <h2>Cat 1: ${cats.cats[1]["name"]}</h2>
 <p> Breed: ${cats.cats[1]["breed"]}</p>
<p> Color: ${cats.cats[1]["color"]}</p>
<h4>Kittens:</h2>
<ul>
<li>${cats.cats[1]["kittens"][0]["name"]}</li>
<ul>
<li> gender: ${cats.cats[1]["kittens"][0]["gender"]}</li>
</ul>
<li>${cats.cats[1]["kittens"][1]["name"]}</li>
<ul>
<li> gender: ${cats.cats[1]["kittens"][1]["gender"]}</li>
</ul>
<li>${cats.cats[1]["kittens"][2]["name"]}</li>
<ul>
<li> gender: ${cats.cats[1]["kittens"][2]["gender"]}</li>
</ul>
</ul>
</div>

<div class="cat1">
 <h2>Cat 1: ${cats.cats[2]["name"]}</h2>
 <p> Breed: ${cats.cats[2]["breed"]}</p>
<p> Color: ${cats.cats[2]["color"]}</p>
<h4>Kittens:</h2>
<ul>
<li>${cats.cats[2]["kittens"][0]["name"]}</li>
<ul>
<li> gender: ${cats.cats[2]["kittens"][0]["gender"]}</li>
</ul>
<li>${cats.cats[2]["kittens"][1]["name"]}</li>
<ul>
<li> gender: ${cats.cats[2]["kittens"][1]["gender"]}</li>
</ul>

</ul>
</div>
 `