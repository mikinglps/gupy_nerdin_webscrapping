import { app } from './app';

const port = 3000

/*
app.get('/refresh', async (req, res) => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    const listaVagas = [];
    await page.goto('https://www.nerdin.com.br/vagas');

    await page.waitForSelector("#divListaVagas")

    const links = await page.$$eval("#divListaVagas > .container > div:nth-of-type(1) > a", el => el.map(link => link.href));
    
    for(const link of links){
        await page.goto(link)

        await page.waitForSelector(".container > #divListaVagas > div:nth-of-type(2)");

        const title = await page.$eval('#divListaVagas > div:nth-of-type(2) > h1 > a', el => el.innerText)
        const postVagas = await page.$eval('#divListaVagas > div:nth-of-type(2) > div > span > div > span', el => el.innerText)
        const dados = postVagas.split('\n', 4);
        const data = dados[1].split('-', 2)[0];
        const dataFormatar = data.split('/', 3)
        const dataBackend = new Date(dataFormatar[1]+'/'+dataFormatar[0]+'/'+dataFormatar[2])
        const vagas = dados[1].split('-', 2)[1];
        const local = dados[2].split(':', 2)[1];
        const empresa = dados[3].split(':', 2)[1];
        const descricao = await page.$eval('#divListaVagas > div:nth-of-type(2) > div > span', el => el.innerText);
        const descricaoInicio = descricao.split('Descrição\n', 2)[1]
        const descricaoDados = descricaoInicio.split('A Empresa e Benefícios\n', 2)[0]
        const obj = {
        'titulo': title, 
        'postagem': data,
        'dataBackend': dataBackend,
        'numVagas': vagas, 
        'local': local, 
        'empresa': empresa, 
        'descricao': descricaoDados, 
        'link': link
        }
        listaVagas.push(obj)
    }
    

    await page.goto('https://portal.gupy.io/job-search/term=Desenvolvedor')
    await page.waitForSelector('main')

    const linksGupy = await page.$$eval('main > ul > li > div > a', el => el.map(link => link.href));
    for(const link of linksGupy){
        page.goto(link);
        await page.waitForSelector('main');
        const title = await page.$eval('main > div > div > div:nth-of-type(2) > h1', el => el.innerText)
        await page.waitForSelector('main > div > div > div:nth-of-type(2) > div:first-of-type > p')
        const data = await page.$eval('main > div > div > div:nth-of-type(2) > div:first-of-type > p', el => el.innerText)
        const dataParser = data.split('Publicada em', 2)[1];
        const dataFormatada = dateFormatter(dataParser).string
        const dataOrganizar = dateFormatter(dataParser).date
        let local = '';
        if(await page.$eval('main > div > div > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1) > img', el => el.src) == '/images/place.svg'){
            local = await page.$eval('main > div > div > div:nth-of-type(2) > div:nth-of-type(3) > p:nth-of-type(1) > span', el => el.innerText)
        }else{
            local = 'Remoto'
        }
        const vagas = 'Desconhecido'
        const linkEmpresa = link;
        const empresa = linkEmpresa.split('.', 2)[0]
        const empresaNome = empresa.split('//', 2)[1];
        const descricao = await page.$eval('main > div > section > div:nth-of-type(1)', el => el.innerText) + '\n'
        const descricaoMetade = await page.$eval('main > div > section > div:nth-of-type(2)', el => el.innerText) + '\n'
        const descricaoFinal = await page.$eval('main > div > section > div:nth-of-type(3)', el => el.innerText) + '\n'
        const descricaoFull = descricao + descricaoMetade + descricaoFinal
        const obj = {
            'titulo': title,
            'postagem': dataFormatada,
            'dataBackend': dataOrganizar,
            'numVagas': vagas,
            'local': local,
            'empresa': empresaNome,
            'descricao': descricaoFull,
            'link': linkEmpresa
        }

        listaVagas.push(obj)
    }



    const jsonContent = JSON.stringify(listaVagas.sort(compare));
    fs.writeFile("./vagas.json", jsonContent, "utf-8", (err) => {
        if(err){
            return console.log(err)
        }

        console.log("Vagas buscadas com sucesso!");
    })
    
    res.send(listaVagas.sort(compare))
});

*/

app.listen(port, () => {
    console.log(`server online
    http://localhost:${port}`);
})