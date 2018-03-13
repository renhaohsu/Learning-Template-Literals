const petsData = [
  {
    name: "清燉皮卡丘",
    species: "電氣鼠",
    favFoods: ["樹果", "番茄醬", "蘋果"],
    photo: "https://s1.52poke.wiki/wiki/thumb/0/0d/025Pikachu.png/260px-025Pikachu.png"
  },
  {
    name: " 醬燒唐揚妙蛙種子",
    species: "長的像二齒獸或蟾蜍背著類似百合、大蒜或洋蔥等鱗莖的草屬性和毒屬性種子寶可夢，專家們仍未能肯定他是植物類還是動物類",
    favFoods: ["以葉綠素自行生成能量"],
    photo: "https://s1.52poke.wiki/wiki/thumb/1/1b/%E5%B0%8F%E9%81%A5_%E5%A6%99%E8%9B%99%E7%A7%8D%E5%AD%90.png/120px-%E5%B0%8F%E9%81%A5_%E5%A6%99%E8%9B%99%E7%A7%8D%E5%AD%90.png"
  },
  {
    name: "焗烤奶油白酒味噌龍蝦小兵",
    species: "像是某種淡水龍蝦[克氏原螯蝦]，來自外國的水屬性寶可夢。就算是在被污染的河流中也會不斷繁殖，生命力很強的傢伙。",
    favFoods: ["淡水生物", "神奇寶貝飼料", "神奇糖果"],
    photo: "https://s1.52poke.wiki/wiki/thumb/4/43/341Corphish_Dream.png/120px-341Corphish_Dream.png"
  }
];



function foods(foods) {
  return `
<h4>飲食</h4>
<ul class="foods-list">
${foods.map(food => `<li>${food}</li>`).join("")}
</ul>
`;
}

function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    
    ${pet.favFoods ? foods(pet.favFoods) : ""}
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">這${petsData.length}個寵物資料已經被加進來了喔喔喔喔喔
` 
