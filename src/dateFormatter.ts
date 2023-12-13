export default function dateFormatter(string) {
    let fullDate = string.toLowerCase().split(' ', 6)
    let d = fullDate[1]
    let m = fullDate[3]
    let y = fullDate[5]
    if(fullDate[1] === undefined){
        fullDate = string.split('/', 3);
        d = fullDate[0]
        y = fullDate[2]
    }
    
    if(m == 'janeiro'){
        m = 1
    }else if(m == 'fevereiro'){
        m = 2
    }else if(m == 'março'){
        m = 3
    }else if(m == 'abril'){
        m = 4
    }else if(m == 'maio'){
        m = 5
    }else if(m == 'junho'){
        m = 6
    }else if(m == 'julho'){
        m = 7
    }else if(m == 'agosto'){
        m = 8
    }else if(m == 'setembro'){
        m = 9
    }else if(m == 'outubro'){
        m = 10
    }else if(m == 'novembro'){
        m = 11
    }else if(m == 'dezembro'){
        m = 12
    }else{
        //Essa parte do código só é usada para filtro.
        m = fullDate[1]
    }

    const date = new Date(m+'/'+d+'/'+y);
    const formatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric'})
    return {
        'string': formatter.format(date),
        'date': date
    };
    
}