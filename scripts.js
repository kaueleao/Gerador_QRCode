function GerarQRCode()		
{
  var url = 'http://10.10.1.254/glpi/front/computer.form.php?id='
  conteudo = document.getElementById('conteudoQRCode').value; /*Essa variável deve ser global para passarmos o ID como nome*/
  var GoogleCharts = 'https://chart.googleapis.com/chart?chs=250x200&cht=qr&chl=';
  imagemQRCode = GoogleCharts + url + conteudo; /*Essa variável deve ser global para passarmos a URL como parâmetro*/
  document.getElementById('imageQRCode').src = imagemQRCode;
}

function downloadImage(url, filename) {
  url = imagemQRCode; /*Aqui Recebemos a URL montada*/
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';

  xhr.onload = function () {
    var a = document.createElement('a');
    a.href = window.URL.createObjectURL(xhr.response);
    a.download = filename || `id_${conteudo}`; /*Aqui indicamos o nome recebendo como parâmetro o conteudo (ID)*/
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  xhr.open('GET', url);
  xhr.send();
}

function limpar(){
    location.reload();
}


//Função para retornar o id
function mostrarId (){
    id = document.getElementById('conteudoQRCode').value;
    document.getElementById('retornoId').value = id;
}

function imprimir(){
    document.getElementById('btn').onclick = function() {
        var parametro1 = document.getElementById('area-qrcode').innerHTML;

        var dados = "" + parametro1 + "<br> > > > >  Patrimônio / ID: " + conteudo + " < < < < <";
        
        tela_impressao = window.open('about:blank');
     
        
        tela_impressao.document.write(dados);
        tela_impressao.window.print();

        tela_impressao.window.close();
    }
}