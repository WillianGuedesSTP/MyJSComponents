/*  -> Description: Função cuja a funcionalidade é capturar o valor digitado pelo usuario, e filtrar 
a lista de acordo com as ocorrencias. 
    
    -> Rules: A tag deve possuir o title como o valor do campo e uma classe que diga 
    que a mesma é elegivel ("elegibleSearch").
    No SCSS deve conter as duas classes isVisible e isHidden, apenas para fazer 
    a customização do componente quando o mesmo desaparecer e aparecer.
    Para a inicialização deve ser passado o evento do input/clique/focus.

    @param: searchText (String) - Valor que foi digitado no campo.

  */
 function searchInList (searchLabel){
    searchLabel = searchLabel.replace(/ /g, '');
    searchLabel = searchLabel.toUpperCase();
    currentFind = document.getElementsByClassName("elegibleSearch");

    for(var counter = 0; counter < currentFind.length; counter++){
      if(currentFind[counter].title.includes(searchLabel)){
        currentFind[counter].classList.add("isVisible");
        currentFind[counter].classList.remove("isHidden");
      }else{
        currentFind[counter].classList.add("isHidden");
        currentFind[counter].classList.remove("isVisible");
      }
    }
  }
