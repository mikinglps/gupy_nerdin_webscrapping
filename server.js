const express = require('express');
const puppeteer = require('puppeteer');
const fs = require("fs");

const app = express();
const port = 3000

app.get('/refresh', async (req, res) => {
    let c = 1;
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    await page.goto('https://www.nerdin.com.br/vagas');

    await page.waitForSelector("#divListaVagas")

    const links = await page.$$eval("#divListaVagas > .container > div:nth-of-type(1) > a", el => el.map(link => link.href));
    const listaVagas = [];
    for(const link of links){
        await page.goto(link)

        await page.waitForSelector(".container > #divListaVagas > div:nth-of-type(2)");

        const title = await page.$eval('#divListaVagas > div:nth-of-type(2) > h1 > a', el => el.innerText)
        const postVagas = await page.$eval('#divListaVagas > div:nth-of-type(2) > div > span > div > span', el => el.innerText)
        const dados = postVagas.split('\n', 4);
        const data = dados[1].split('-', 2)[0];
        const vagas = dados[1].split('-', 2)[1];
        const local = dados[2].split(':', 2)[1];
        const empresa = dados[3].split(':', 2)[1];
        const descricao = await page.$eval('#divListaVagas > div:nth-of-type(2) > div > span', el => el.innerText);
        const descricaoInicio = descricao.split('Descrição\n', 2)[1]
        const descricaoDados = descricaoInicio.split('A Empresa e Benefícios\n', 2)[0]
        const obj = {
        'titulo': title, 
        'postagem': data, 
        'numVagas': vagas, 
        'local': local, 
        'empresa': empresa, 
        'descricao': descricaoDados, 
        'link': link}
        listaVagas.push(obj)
    }

    const jsonContent = JSON.stringify(listaVagas);
    fs.writeFile("./nerdin.json", jsonContent, "utf-8", (err) => {
        if(err){
            return console.log(err)
        }

        console.log("Vagas buscadas com sucesso!");
    })

    res.send(listaVagas)
});



app.listen(port, () => {
    console.log(`server online
    http://localhost:${port}`);
})