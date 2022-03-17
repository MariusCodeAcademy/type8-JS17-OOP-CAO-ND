class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.addRow();
  }
  addRow() {
    const dest = document.getElementById('tbody');
    const elHTML = `
    <tr>
      <td>${this.name}</td>
      <td>${this.surname}</td>
    </tr>
    `;
    dest.insertAdjacentHTML('beforeend', elHTML);
  }
}
