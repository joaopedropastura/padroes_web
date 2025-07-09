const data = [
  {
    platforms: { text: "WordPress", value: "WordPress" },
    release: { text: "2003", value: 2003 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.4 (9,166)", value: 4.4 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Shopify", value: "Shopify" },
    release: { text: "2006", value: 2006 },
    writtenIn: { text: "Liquid, JS, CSS", value: "Liquid, JS, CSS" },
    ratings: { text: "4.4 (4,578)", value: 4.4 },
    price: { text: "$29/mo", value: 29 },
  },
  {
    platforms: { text: "Wix", value: "Wix" },
    release: { text: "2006", value: 2006 },
    writtenIn: { text: "Velo", value: "Velo" },
    ratings: { text: "4.2 (1,676)", value: 4.2 },
    price: { text: "$14/mo", value: 14 },
  },
  {
    platforms: { text: "Squarespace", value: "Squarespace" },
    release: { text: "2003", value: 2003 },
    writtenIn: { text: "Ruby, PHP, Java", value: "Ruby, PHP, Java" },
    ratings: { text: "4.4 (1,070)", value: 4.4 },
    price: { text: "$18/mo", value: 18 },
  },
  {
    platforms: { text: "Joomla", value: "Joomla" },
    release: { text: "2005", value: 2005 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "5.0 (382)", value: 5.0 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Drupal", value: "Drupal" },
    release: { text: "2007", value: 2007 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "3.8 (317)", value: 3.8 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Magento", value: "Magento" },
    release: { text: "2008", value: 2008 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.0 (236)", value: 4.0 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Webflow", value: "Webflow" },
    release: { text: "2012", value: 2012 },
    writtenIn: {
      text: "HTML, CSS, JavaScript",
      value: "HTML, CSS, JavaScript",
    },
    ratings: { text: "4.4 (588)", value: 4.4 },
    price: { text: "Free or $14/mo", value: 14 },
  },
  {
    platforms: { text: "PrestaShop", value: "PrestaShop" },
    release: { text: "2007", value: 2007 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.3 (153)", value: 4.3 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "OpenCart", value: "OpenCart" },
    release: { text: "2005", value: 2005 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.3 (104)", value: 4.3 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Weebly", value: "Weebly" },
    release: { text: "2009", value: 2009 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.2 (473)", value: 4.2 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "Typo3", value: "Typo3" },
    release: { text: "2004", value: 2004 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "3.9 (34)", value: 3.9 },
    price: { text: "Free", value: 0 },
  },
  {
    platforms: { text: "HubSpot CMS", value: "HubSpot CMS" },
    release: { text: "2006", value: 2006 },
    writtenIn: { text: "HUML, CSS, HTML", value: "HUML, CSS, HTML" },
    ratings: { text: "4.5 (1,751)", value: 4.5 },
    price: { text: "Free or $25/mo", value: 25 },
  },
  {
    platforms: { text: "BigCommerce", value: "BigCommerce" },
    release: { text: "2009", value: 2009 },
    writtenIn: {
      text: "Ruby, PHP, Java, Python",
      value: "Ruby, PHP, Java, Python",
    },
    ratings: { text: "4.2 (528)", value: 4.2 },
    price: { text: "$29/mo", value: 29 },
  },
  {
    platforms: { text: "Shopware", value: "Shopware" },
    release: { text: "2000", value: 2000 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.1 (150)", value: 4.1 },
    price: { text: "$600/mo", value: 600 },
  },
  {
    platforms: { text: "October CMS", value: "October CMS" },
    release: { text: "2014", value: 2014 },
    writtenIn: { text: "PHP", value: "PHP" },
    ratings: { text: "4.5 (4)", value: 4.5 },
    price: { text: "Free or $29/license", value: 29 },
  },
];

let sortAsc = true;
let lastSortedCol = "";

function renderTable(sortedData) {
  const tbody = document.getElementById("cmsBody");
  tbody.innerHTML = "";

  if (lastSortedCol === "release" || lastSortedCol === "writtenIn") {
    const grouped = {};

    sortedData.forEach((row) => {
      const key = row[lastSortedCol].value;
      if (!grouped[key]) {
        grouped[key] = {
          platforms: [],
          release: row.release.text,
          writtenIn: new Set(),
          ratings: [],
          prices: [],
        };
      }

      grouped[key].platforms.push(row.platforms.text);
      row.writtenIn.text
        .split(", ")
        .forEach((lang) => grouped[key].writtenIn.add(lang));
      grouped[key].ratings.push(row.ratings.text);
      grouped[key].prices.push(row.price.text);
    });

    console.log("grouped data: ", grouped);

    const  tempEntries = Object.entries(grouped);
    console.log("grouped data entries: ", tempEntries);

    const temp = Object.entries(grouped)
      .sort(([a], [b]) => (sortAsc ? a - b : b - a))

    console.log("sorted grouped data: ", temp);
    
    

    Object.entries(grouped)
      .sort(([a], [b]) => (sortAsc ? a - b : b - a))
      .forEach(([_, group]) => {
        const tr = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = group.platforms.join(", ");
        nameCell.classList.add("left");
        tr.appendChild(nameCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = group.release;
        yearCell.classList.add("right");
        tr.appendChild(yearCell);

        const langCell = document.createElement("td");
        langCell.textContent = Array.from(group.writtenIn).join(", ");
        langCell.classList.add("left");
        tr.appendChild(langCell);

        const ratingCell = document.createElement("td");
        ratingCell.textContent = group.ratings.join(", ");
        ratingCell.classList.add("right");
        tr.appendChild(ratingCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = group.prices.join(", ");
        priceCell.classList.add("left");
        tr.appendChild(priceCell);

        tbody.appendChild(tr);
      });
  } 
  
  else {
    sortedData.forEach((row) => {
      const tr = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = row.platforms.text;
      nameCell.classList.add("left");
      tr.appendChild(nameCell);

      const yearCell = document.createElement("td");
      yearCell.textContent = row.release.text;
      yearCell.classList.add("right");
      tr.appendChild(yearCell);

      const langCell = document.createElement("td");
      langCell.textContent = row.writtenIn.text;
      langCell.classList.add("left");
      tr.appendChild(langCell);

      const ratingCell = document.createElement("td");
      ratingCell.textContent = row.ratings.text;
      ratingCell.classList.add("right");
      tr.appendChild(ratingCell);

      const priceCell = document.createElement("td");
      priceCell.textContent = row.price.text;
      priceCell.classList.add("left");
      tr.appendChild(priceCell);

      tbody.appendChild(tr);
    });
  }
}

function sortTable(colIndex) {
  const colMap = ["platforms", "release", "writtenIn", "ratings", "price"];
  const key = colMap[colIndex];

  if (lastSortedCol === key) 
    sortAsc = !sortAsc;
  else 
    sortAsc = true;

  lastSortedCol = key;

  const sort = [...data].sort((a, b) => {
    console.log("Sorting by a: ", a);
    console.log("Sorting by b: ", b);
    if (typeof valA === "number") 
        return sortAsc ? valA - valB : valB - valA;
  })

  console.log("sort data: ",sort);

  const sorted = [...data].sort((a, b) => {
    const valA = a[key].value;
    const valB = b[key].value;

    if (typeof valA === "number") 
        return sortAsc ? valA - valB : valB - valA;
    return sortAsc
      ? valA.toString().localeCompare(valB.toString())
      : valB.toString().localeCompare(valA.toString());
  });

  renderTable(sorted);
}

function filterTable() {
  const input = document.getElementById("filterInput");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("cmsTable");

  console.log(
    "count rows: ",
    table.getElementsByTagName("tbody")
  );

  const rows = table
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");
  console.log(
    "row item: ",
    table
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")
  );
  console.log(
    "row text: ",
    table
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr")[0]
      .getElementsByTagName("td")[0].innerHTML
  );

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let match = false;

    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].innerText;
      if (cellText.toLowerCase().includes(filter)) {
        match = true;
        break;
      }
    }

    console.log("row style", rows[i]);

    rows[i].style.display = match ? "" : "none";
  }
}

function clearFilter() {
  const input = document.getElementById("filterInput");
  input.value = "";
  filterTable();
}

renderTable(data);
