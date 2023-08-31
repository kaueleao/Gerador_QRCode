//Função para gerar o QRcode
function gerarQrcode() {
  var url = 'http://10.10.1.254/glpi/front/computer.form.php?id=' /*Aqui deve ser informado a URL que será inserida no QRcode */
  infoId =
    document.getElementById(
      'informacaoId'
    ).value /* infoID: Essa variável deve ser global para usarmos em outras funções*/
  var GoogleCharts =
    'https://chart.googleapis.com/chart?chs=250x200&cht=qr&chl=';
  imagemQrcode =
    GoogleCharts +
    url +
    infoId /* imagemQrcode: Essa variável deve ser global para usarmos em outras funções */
  document.getElementById('imagemQrcode').src = imagemQrcode
}

//Função para realizar o Download do QRcode
function downloadImage(url, filename) {
  url = imagemQrcode /* Aqui Recebemos a URL montada */
  var xhr = new XMLHttpRequest()
  xhr.responseType = 'blob'

  xhr.onload = function () {
    var a = document.createElement('a')
    a.href = window.URL.createObjectURL(xhr.response)
    a.download =
      filename ||
      `id_${infoId}` /* Indicamos o nome que o arquivo. Usamos como parâmetro o infoId (ID) no nome */
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  xhr.open('GET', url)
  xhr.send()
}

//Função para limpar os dados e recarregar a tela
function limpar() {
  location.reload()
}

//Função para retornar o id
function mostrarId() {
  id = document.getElementById('informacaoId').value
  document.getElementById('retornoId').value = id
}

//Função para imprimir o QRcode e o id
function imprimir() {
  var parametro1 = document.getElementById('area-qrcode').innerHTML

  /* Montagem dos dados para Impressão */
  var dados =
    '' +
    parametro1 +
    '<br> > > > >  Patrimônio / ID: ' +
    infoId +
    ' < < < <'

  tela_impressao = window.open('about:blank')

  /* Escrita dos dados (QRcode e ID) */
  tela_impressao.document.write(dados)
  tela_impressao.document.close()

  /* Chamada da tela de impressão */
  tela_impressao.window.print()
  tela_impressao.window.close()
}
