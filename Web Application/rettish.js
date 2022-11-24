const getRandomUserData = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then((data) => data.json())
    .then((data) => generateCards(data));
};

const generateCards = (data) => {
     data.results.map((data) => {
        const userCard = `
       <tbody>
        <tr>
            <td> <img src="${data.picture.medium}"</td>
            <td> ${data.name.first}</td>
            <td> ${data.name.last}</td>
            <td> ${data.email}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
      </tbody>
  </table>
        `;

    document.getElementById("table").innerHTML += userCard;
     });
    
    };

    getRandomUserData()

    $('#table').append($('<tr>')
  .append($('<td>').append(${data.name.first}))
  .append($('<td>').append(${data.name.last}))
  .append($('<td>').append(${data.email}))
  .append($('<td>').append(${data.name.first}))
)