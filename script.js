(function () {
  var display = document.getElementById('relogio');

  function pad(value) {
    return value < 10 ? '0' + value : String(value);
  }

  function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    display.textContent = pad(horas) + ':' + pad(minutos) + ':' + pad(segundos);
  }

  atualizarRelogio();
  setInterval(atualizarRelogio, 1000);
})();
