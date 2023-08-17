document.addEventListener("DOMContentLoaded", function () {
  const luasButton = document.getElementById("luasButton");
  const kelilingButton = document.getElementById("kelilingButton");
  const luasContent = document.getElementById("luasContent");
  const kelilingContent = document.getElementById("kelilingContent");

  luasButton.addEventListener("click", function () {
    luasContent.style.display = "block";
    kelilingContent.style.display = "none";
    luasButton.classList.add("active");
    kelilingButton.classList.remove("active");
  });

  kelilingButton.addEventListener("click", function () {
    kelilingContent.style.display = "block";
    luasContent.style.display = "none";
    kelilingButton.classList.add("active");
    luasButton.classList.remove("active");
  });

  const hitungLuasButton = document.getElementById("hitungLuas");
  const resetLuasButton = document.getElementById("resetLuas");
  const alasSegitigaInput = document.getElementById("alasSegitiga");
  const tinggiSegitigaInput = document.getElementById("tinggiSegitiga");
  const rumusLuas = document.getElementById("rumusLuas");
  const hasilLuas = document.getElementById("hasilLuas");

  hitungLuasButton.addEventListener("click", function () {
    const alas = parseFloat(alasSegitigaInput.value);
    const tinggi = parseFloat(tinggiSegitigaInput.value);

    if (isNaN(alas) || isNaN(tinggi)) {
      hasilLuas.textContent = "Mohon isi semua input dengan angka!";
    } else {
      const luas = 0.5 * alas * tinggi;
      const tampilanRumusLuas = `L = 1/2 * ${alas} * ${tinggi}`;
      document.getElementById("rumusLuas").textContent = tampilanRumusLuas;
      document.getElementById("hasilLuas").textContent = `L = ${luas}`;
    }
  });

  resetLuasButton.addEventListener("click", function () {
    alasSegitigaInput.value = "";
    tinggiSegitigaInput.value = "";
    rumusLuas.textContent = "";
    hasilLuas.textContent = "";
  });

  const hitungKelilingButton = document.getElementById("hitungKeliling");
  const resetKelilingButton = document.getElementById("resetKeliling");
  const sisi1Input = document.getElementById("sisi1");
  const sisi2Input = document.getElementById("sisi2");
  const sisi3Input = document.getElementById("sisi3");
  const rumusKeliling = document.getElementById("rumusKeliling");
  const hasilKeliling = document.getElementById("hasilKeliling");

  hitungKelilingButton.addEventListener("click", function () {
    const sisi1 = parseFloat(sisi1Input.value);
    const sisi2 = parseFloat(sisi2Input.value);
    const sisi3 = parseFloat(sisi3Input.value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
      hasilKeliling.textContent = "Mohon isi semua input dengan angka!";
    } else {
      const keliling = sisi1 + sisi2 + sisi3;
      const tampilanRumusKeliling = `K = ${sisi1} + ${sisi2} + ${sisi3}`;
      document.getElementById("rumusKeliling").textContent =
        tampilanRumusKeliling;
      document.getElementById("hasilKeliling").textContent = `K = ${keliling}`;
    }
  });

  resetKelilingButton.addEventListener("click", function () {
    sisi1Input.value = "";
    sisi2Input.value = "";
    sisi3Input.value = "";
    rumusKeliling.textContent = "";
    hasilKeliling.textContent = "";
  });
});
